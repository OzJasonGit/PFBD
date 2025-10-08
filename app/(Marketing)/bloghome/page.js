"use client";
import Bloghomemain from "../../../Modules/Bloghome/bloghomemain";
import { useBlogHomeStories } from "../../hooks/useStories";
import SkeletonLoader from "@/components/Loader/loader";

const Bloghome = () => {
  const { stories, isLoading, error } = useBlogHomeStories();

  if (error) {
    return <div className="p-8 text-center">Failed to load stories. Please try again.</div>;
  }

  if (isLoading || !stories) {
    return <SkeletonLoader />;
  }

  return <Bloghomemain stories={stories} />;
};

export default Bloghome;
