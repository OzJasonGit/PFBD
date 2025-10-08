"use client";
import dynamic from 'next/dynamic';

const Signup = dynamic(
  () => import("@/components/Sign_Up/page"),
  { ssr: false }
);

export default function Dashboard() {
  return <Signup />;
}
