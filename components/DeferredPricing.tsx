"use client";

import dynamic from "next/dynamic";

const Pricing = dynamic(() => import("./Pricing"), {
  ssr: false,
  loading: () => <div className="min-h-[900px]" aria-hidden="true" />,
});

export default function DeferredPricing() {
  return <Pricing />;
}
