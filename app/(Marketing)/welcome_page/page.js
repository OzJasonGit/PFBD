"use client";

import Welcome_Page_Main from "../../../Modules/Welcome_Page/welcome_page";
import { useStories } from "../../hooks/useStories";
import SkeletonLoader from "@/components/Loader/loader";

const Welcome_Page = () => {
  const { data, firstStory, isLoading, error } = useStories();

  if (error) {
    return <div className="p-8 text-center">Failed to load stories. Please try again.</div>;
  }

  if (isLoading || !data || !firstStory) {
    return <SkeletonLoader />;
  }

  return <Welcome_Page_Main stories={data} firstStory={firstStory} />;
};

export default Welcome_Page;