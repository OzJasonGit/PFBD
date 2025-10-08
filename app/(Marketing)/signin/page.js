"use client";
import dynamic from 'next/dynamic';

const SignIn = dynamic(
  () => import("@/components/Sign_In/page"),
  { ssr: false }
);

export default function Dashboard() {
  return <SignIn />;
}
