"use client";

import { useParams } from "next/navigation";
import dynamic from 'next/dynamic';
import { useBlogPost } from "@/app/hooks/useBlog";
import PFDBMenu from "@/components/Menu_PFBD/menu_PFBD";
import Header from "@/components/Header/Header";
import Subfooter from "@/components/Subfooter2/subfooter2";
import Footer from "@/components/Footer/Footer";
import Sides from "@/components/Sides/sides";
import SkeletonLoader from "@/components/Loader/loader";

const Blog_page = dynamic(
  () => import("@/Modules/Blog_page/blog_page"),
  { 
    loading: () => <SkeletonLoader />,
    ssr: false
  }
);

const BlogPost = () => {
  const params = useParams();
  const slug = params?.slug;
  const { story, isLoading, error } = useBlogPost(slug);

  if (isLoading) return <SkeletonLoader />;
  if (error) return (
    <>
      <PFDBMenu />
      <Header />
      <div className="p-8 text-center text-red-500">Failed to load story. Please try again.</div>
      <Footer />
    </>
  );
  if (!story) return (
    <>
      <PFDBMenu />
      <Header />
      <div className="p-8 text-center">Story not found</div>
      <Footer />
    </>
  );

  return (
    <>
      <PFDBMenu />
      <Header />
      <Sides />
      <Blog_page story={story} />
      <Subfooter />
      <Footer />
    </>
  );
};

export default BlogPost;