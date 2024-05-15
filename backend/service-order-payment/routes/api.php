<?php

use App\Http\Controllers\OrderController;
use App\Http\Controllers\WebhookController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('orders', [OrderController::class, 'create']);
Route::get('orders', [OrderController::class, 'index']);

Route::post('webhook', [WebhookController::class, 'midtransHandler']);
