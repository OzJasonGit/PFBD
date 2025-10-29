"use client";

import dynamic from 'next/dynamic';
import { CartProvider } from "@/components/Context/CartContext";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/FooterWrapper";
import PFDBMenu from "@/components/Menu_PFBD/menu_PFBD";
import SkeletonLoader from "@/components/Loader/loader";
import { useTheme } from "@/components/Context/ThemeContext";

const CartModule = dynamic(
  () => import("@/Modules/Cart/Cart"),
  { 
    loading: () => <SkeletonLoader />,
    ssr: false
  }
);

const CartPage = () => {
  const { theme } = useTheme();
  
  return (
    <CartProvider>
      <>
        {/* <PFDBMenu className="fixed top-0 left-0 w-full z-[9999]" /> */}
        <Header className="fixed top-[60px] left-0 w-full z-[9998]" />
        
        {/* Cart starts after Menu + Header */}
        <div className={`pt-[75px] relative z-0 ${theme === 'light' ? 'bg-[#fafaf9]' : 'bg-[#151515]'}`}>
          <CartModule />
        </div>

        <Footer />
      </>
    </CartProvider>
  );
};

export default CartPage;
