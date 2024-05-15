<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\PaymentLog;
use Illuminate\Http\Request;

class WebhookController extends Controller
{
    public function midtransHandler(Request $request)
    {
        $data = $request->all();

        if (!$this->isValidSignature($data)) {
            return $this->invalidSignatureResponse();
        }

        $order = $this->findOrder($data['order_id']);
        if (!$order) {
            return $this->orderNotFoundResponse();
        }

        if ($this->isOrderPaid($order)) {
            return $this->orderAlreadyPaidResponse();
        }

        $this->updateOrder($order, $data);
        $this->handleTransactionStatus($order, $data);

        return response()->json([
            'status' => 'success',
            'message' => 'Ok'
        ]);
    }

    protected function isValidSignature($data)
    {
        $signatureKey = $data['signature_key'];
        $orderId = $data['order_id'];
        $statusCode = $data['status_code'];
        $grossAmount = $data['gross_amount'];
        $serverKey = env('MIDTRANS_SERVER_KEY');

        $mySignatureKey = hash('sha512', $orderId . $statusCode . $grossAmount . $serverKey);

        return $signatureKey === $mySignatureKey;
    }

    protected function invalidSignatureResponse()
    {
        return response()->json([
            'status' => 'error',
            'message' => 'Invalid signature'
        ]);
    }

    protected function findOrder($orderId)
    {
        $realOrderId = explode('-', $orderId);
        return Order::find($realOrderId[0]);
    }

    protected function orderNotFoundResponse()
    {
        return response()->json([
            'status' => 'error',
            'message' => 'Order not found'
        ], 404);
    }

    protected function isOrderPaid($order)
    {
        return $order->status === 'success';
    }

    protected function orderAlreadyPaidResponse()
    {
        return response()->json([
            'status' => 'error',
            'message' => 'Order already paid'
        ], 405);
    }

    protected function updateOrder($order, $data)
    {
        $order->update([
            'status' => $data['transaction_status'],
            'payment_type' => $data['payment_type'],
            'fraud_status' => $data['fraud_status'],
        ]);

        $this->logPayment($data, $order->id);
    }

    protected function logPayment($data, $orderId)
    {
        $LogData = [
            'status' => $data['transaction_status'],
            'raw_response' => json_encode($data),
            'order_id' => $orderId,
            'payment_type' => $data['payment_type'],
        ];

        PaymentLog::create($LogData);
    }

    protected function handleTransactionStatus($order, $data)
    {
        $transactionStatus = $data['transaction_status'];
        $fraudStatus = $data['fraud_status'];

        if ($transactionStatus == 'capture') {
            if ($fraudStatus == 'accept') {
                $order->status  = 'success';
            }
        } else if ($transactionStatus == 'settlement') {
            $order->status  = 'success';
        } else if (
            $transactionStatus == 'cancel' ||
            $transactionStatus == 'deny' ||
            $transactionStatus == 'expire'
        ) {
            $order->status = 'failure';
        } else if ($transactionStatus == 'pending') {
            $order->status = 'pending';
        }

        $order->save();

        if ($order->status == 'success') {
            $this->createPremiumAccess($order->user_id, $order->course_id);
        }
    }

    protected function createPremiumAccess($userId, $courseId)
    {
        createPremiumAccess([
            'user_id' => $userId,
            'course_id' => $courseId,
        ]);
    }
}
