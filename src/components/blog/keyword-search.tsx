"use client";

/**
 * 이 파일은 React와 TypeScript를 사용하여 키워드 검색 기능을 구현합니다.
 * 사용자가 입력한 키워드를 기반으로 검색을 수행하며, 검색 버튼을 클릭하거나 엔터 키를 누르면 검색이 실행됩니다.
 * 키워드가 없는 경우에는 모든 속담을 보여주는 페이지로 이동합니다.
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export default function KeywordSearch() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  function search() {
    if (keyword === "" || !keyword) {
      router.push(`/proverb`);

      return;
    }

    router.push(`/proverb/keyword/${keyword}`);
  }

  function handleOnKeyPress(e) {
    if (e.key === "Enter") {
      search();
    }
  }

  const onChange = useCallback((e) => {
    setKeyword(e.target.value);
  }, []);

  return (
    <div className="flex items-center mb-2 gap-2">
      <Input className="h-7" onChange={onChange} onKeyDown={handleOnKeyPress} />
      <Button className="h-7" onClick={search}>
        검색
      </Button>
    </div>
  );
}
