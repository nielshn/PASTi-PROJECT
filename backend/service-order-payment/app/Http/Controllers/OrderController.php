<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

// class OrderController extends Controller
// {
//     public function index(Request $request)
//     {
//         $userId = $request->input('user_id');
//         $orders = Order::query();
//         $orders->when($userId, function ($query) use ($userId) {
//             return $query->where('user_id', '=', $userId);
//         });

//         return response()->json([
//             'status' => 'success',
//             'data' => $orders->get()
//         ]);
//     }
//     public function create(Request $request)
//     {
//         $user = $request->input('user');
//         $course = $request->input('course');

//         $order = Order::create([
//             'user_id' => $user['id'],
//             'course_id' => $course['id'],
//         ]);

//         $transactionDetails = [
//             'order_id' => $order->id . '-' . Str::random(5),
//             'gross_amount' => $course['price'],
//         ];

//         $itemDetails = [
//             [
//                 'id' => $course['id'],
//                 'price' => $course['price'],
//                 'quantity' => 1,
//                 'name' => $course['name'],
//                 "brand" => 'BuildWithNiel',
//                 'category' => 'Online Course',
//             ]
//         ];

//         $customerDetails = [
//             'first_name' => $course['name'],
//             'email' => $user['email'],
//         ];
//         $midtransParams = [
//             'transaction_details' => $transactionDetails,
//             'item_details' => $itemDetails,
//             'customer_details' => $customerDetails
//         ];

//         $midtransSnapUrl = $this->getMidtransSnapUrl($midtransParams);

//         $order->snap_url = $midtransSnapUrl;

//         $order->metadata = [
//             'course_id' => $course['id'],
//             'course_price' => $course['price'],
//             'course_name' => $course['name'],
//             'course_thumbnail' => $course['thumbnail'],
//             'course_level' => $course['level'],
//         ];

//         $order->save();
//         return response()->json([
//             'status' => 'success',
//             'data' => $order
//         ]);
//     }

//     private function getMidtransSnapUrl($params)
//     {
//         \Midtrans\Config::$serverKey = env('MIDTRANS_SERVER_KEY');
//         \Midtrans\Config::$isProduction = (bool)env('MIDTRANS_PRODUCTION');
//         \Midtrans\Config::$is3ds = (bool)env('MIDTRANS_3DS');

//         $snapUrl = \Midtrans\Snap::createTransaction($params)->redirect_url;
//         return $snapUrl;
//     }
// }

class OrderController extends Controller
{
    public function index(Request $request)
    {
        $userId = $request->input('user_id');
        $orders = Order::query();
        $orders->when($userId, function ($query) use ($userId) {
            return $query->where('user_id', '=', $userId);
        });

        return response()->json([
            'status' => 'success',
            'data' => $orders->get()
        ]);
    }

    public function create(Request $request)
    {
        $user = $request->input('user');
        $course = $request->input('course');

        $order = $this->createOrder($user, $course);

        $midtransParams = $this->generateMidtransParams($order, $user, $course);

        $midtransSnapUrl = $this->getMidtransSnapUrl($midtransParams);

        $this->updateOrderWithSnapUrlAndMetadata($order, $midtransSnapUrl, $user, $course);

        return response()->json([
            'status' => 'success',
            'data' => $order
        ]);
    }

    private function createOrder($user, $course)
    {
        return Order::create([
            'user_id' => $user['id'],
            'course_id' => $course['id'],
        ]);
    }

    private function generateMidtransParams($order, $user, $course)
    {
        $transactionDetails = [
            'order_id' => $order->id . '-' . Str::random(5),
            'gross_amount' => $course['price'],
        ];

        $itemDetails = [
            [
                'id' => $course['id'],
                'price' => $course['price'],
                'quantity' => 1,
                'name' => $course['name'],
                "brand" => 'BuildWithNiel',
                'category' => 'Online Course',
            ]
        ];

        $customerDetails = [
            'first_name' => $user['name'],
            'email' => $user['email'],
        ];

        return [
            'transaction_details' => $transactionDetails,
            'item_details' => $itemDetails,
            'customer_details' => $customerDetails
        ];
    }

    private function getMidtransSnapUrl($params)
    {
        \Midtrans\Config::$serverKey = env('MIDTRANS_SERVER_KEY');
        \Midtrans\Config::$isProduction = (bool)env('MIDTRANS_PRODUCTION');
        \Midtrans\Config::$is3ds = (bool)env('MIDTRANS_3DS');

        return \Midtrans\Snap::createTransaction($params)->redirect_url;
    }

    private function updateOrderWithSnapUrlAndMetadata($order, $midtransSnapUrl, $user, $course)
    {
        $order->snap_url = $midtransSnapUrl;

        $order->metadata = [
            'course_id' => $course['id'],
            'course_price' => $course['price'],
            'course_name' => $course['name'],
            'course_thumbnail' => $course['thumbnail'],
            'course_level' => $course['level'],
            'user_name' => $user['name'],
        ];

        $order->save();
    }
}
