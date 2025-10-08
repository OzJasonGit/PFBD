// app/(Marketing)/layout.js
"use client";

import { CartProvider } from '../../components/Context/CartContext';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Toaster } from 'sonner';
import { SWRConfig } from 'swr';

export default function MarketingLayout({ children }) {
  return (
    <PayPalScriptProvider options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '', currency: 'USD' }}>
      <CartProvider>
        <SWRConfig 
          value={{
            refreshInterval: 0,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
            dedupingInterval: 60000,
            shouldRetryOnError: false,
          }}
        >
          <Toaster richColors position="top-right" />
          {children}
        </SWRConfig>
      </CartProvider>
    </PayPalScriptProvider>
  );
}



