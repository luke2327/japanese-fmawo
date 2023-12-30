"use client";

/**
 * 이 파일은 React와 TypeScript를 사용하여 웹사이트의 공유 기능을 구현합니다.
 * 사용자가 공유 버튼을 클릭하면 현재 페이지의 URL이 클립보드에 복사됩니다.
 *
 * `Share` 함수는 공유 버튼과 복사 완료 메시지를 렌더링합니다.
 * `handleShare` 함수는 클릭 이벤트가 발생하면 현재 페이지의 URL을 클립보드에 복사하는 작업을 수행합니다.
 */

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
