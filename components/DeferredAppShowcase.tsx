"use client";

import dynamic from "next/dynamic";

const AppShowcase = dynamic(() => import("./AppShowcase"), {
  ssr: false,
  loading: () => <div className="min-h-[700px]" aria-hidden="true" />,
});

export default function DeferredAppShowcase() {
  return <AppShowcase />;
}
