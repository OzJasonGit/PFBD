"use client";

import Newsletter_Main from "../../../Modules/Newsletter/newsletter";
import { useStories } from "../../hooks/useStories";
import SkeletonLoader from "@/components/Loader/loader";

const Newsletter = () => {
  const { data, firstStory, isLoading, error } = useStories();

  if (error) {
    return <div className="p-8 text-center">Failed to load stories. Please try again.</div>;
  }

  if (isLoading || !data || !firstStory) {
    return <SkeletonLoader />;
  }

  return <Newsletter_Main stories={data} firstStory={firstStory} />;
};

export default Newsletter;