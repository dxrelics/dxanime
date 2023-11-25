"use client";

import { HandsPraying } from "@phosphor-icons/react";
import Link from "next/link";

const notFound = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <HandsPraying size={100} color="crimson" />
        <h3 className="text-color-accent text-6xl font-bold">
          PAGE NOT FOUND WKWK
        </h3>
        <Link
          href="/"
          className="text-color-primary hover:text-color-accent transition-all underline"
        >
          BACK HOME
        </Link>
      </div>
    </div>
  );
};

export default notFound;
