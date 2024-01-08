import { AppProps } from 'next/app';
import { CartProvider } from '../cart/CartContext'; // adjust the import path as necessary

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider> {/* Wrap Component with CartProvider */}
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
