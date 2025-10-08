"use client";

import dynamic from 'next/dynamic';
import SkeletonLoader from "@/components/Loader/loader";

const Products = dynamic(
  () => import("@/Modules/Product_test/product_test"),
  { 
    loading: () => <SkeletonLoader />,
    ssr: false
  }
);

const ProductsPage = () => {
  return <Products />;
};

export default ProductsPage;
