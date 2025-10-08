"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the main landing page
    router.push("/plastic_free_by_design");
  }, [router]);

  return null;
};

export default Home;
