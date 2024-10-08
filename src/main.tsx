import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import CartContextProvider from './context/CartContextProvider.tsx';
import AuthContextProvider from './context/AuthContextProvider.tsx';

createRoot(document.getElementById('root')!).render(
    <AuthContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </AuthContextProvider>
);