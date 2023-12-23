"use client";

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
