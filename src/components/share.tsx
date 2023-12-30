"use client";

import React from "react";
import { LucideCheck, LucideShare2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { config } from "@/lib/config";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function Share() {
  const pathname = usePathname();
  const handleShare = () => {
    navigator.clipboard.writeText(config.host + pathname);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <LucideShare2
          onClick={handleShare}
          className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-100 transition-colors"
          strokeWidth={2}
          width={16}
          height={16}
        />
      </PopoverTrigger>
      <PopoverContent className="w-auto font-raleway text-[12px] py-0.5">
        <p className="dark:text-neutral-100 text-neutral-600 flex items-center gap-1">
          <LucideCheck
            name="share-button"
            type="button"
            strokeWidth={1}
            width={16}
            height={16}
          />
          コピーしました
        </p>
      </PopoverContent>
    </Popover>
  );
}

export default Share;
