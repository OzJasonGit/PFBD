"use client";

import dynamic from 'next/dynamic';
import SkeletonLoader from "@/components/Loader/loader";

const PFBD = dynamic(
  () => import("@/Modules/Plastic_Free_By_Design/plastic_freee_by_design"),
  { 
    loading: () => <SkeletonLoader />,
    ssr: false
  }
);

const PFBDPage = () => {
  return <PFBD />;
};

export default PFBDPage;
