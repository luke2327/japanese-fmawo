"use client";

import { increment } from "@/app/db/blog-client";
import { BlogPost } from "@/interface/blog.interface";
import { useEffect, useState } from "react";

type IProps = {
  postNo: BlogPost["postNo"];
};

export function Views({ postNo }: IProps) {
  const [views, setViews] = useState<number>(0);
  useEffect(() => {
    increment(postNo).then((re) => {
      setViews(re.views);
    });
  }, [postNo]);

  return (
    <p className="text-neutral-600 dark:text-neutral-400">
      {`${views?.toLocaleString() || 0} views`}
    </p>
  );
}
