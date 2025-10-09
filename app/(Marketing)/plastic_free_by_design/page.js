"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const PFBDPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the homepage
    router.push("/");
  }, [router]);

  return null;
};

export default PFBDPage;
