"use client";
import dynamic from 'next/dynamic';

const Admin = dynamic(
  () => import("@/Modules/Admin/admin"),
  { ssr: false }
);

export default function Dashboard() {
  return <Admin />;
}
