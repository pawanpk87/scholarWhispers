"use client";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 w-4/6 m-auto pt-4">
      <Header />
      <div>Feed</div>
    </div>
  );
}
