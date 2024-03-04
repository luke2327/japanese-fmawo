"use client";

import WorkList from "@/app/admin/dashboard/list";
import Loading from "@/app/admin/loading";
import AdminPostEdition from "@/app/admin/work/proverb/edition";
import { getWorkInfo } from "@/app/db/blog-client";
import { BlogPost, WorkInfo } from "@/interface/blog.interface";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<BlogPost>();
  const [workInfo, setWorkInfo] = useState<WorkInfo>();

  const onChangeSelectedPost = (postNo: number) => {
    const post = workInfo?.workPosts.find((post) => post.postNo === postNo);
    setSelectedPost(post);
  };

  const onReleaseSelectedPost = () => {
    setSelectedPost(undefined);
  };

  useEffect(() => {
    getWorkInfo().then((data) => {
      setWorkInfo(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    console.log(selectedPost);
  }, [selectedPost]);

  return loading ? (
    <Loading />
  ) : (
    <div className="gap-4 flex flex-col w-screen tracking-widest">
      {workInfo && !selectedPost && (
        <div id="work-area">
          <p className="mb-2 text-xl border-b dark:border-neutral-400 text-neutral-400">
            未完了
          </p>
          <WorkList
            data={workInfo.workPosts.filter((post) => !post.check)}
            onChangeSelectedPost={onChangeSelectedPost}
          />
          <p className="mt-8 mb-2 text-xl border-b border-neutral-600 dark:border-neutral-200">
            完了
          </p>
          <WorkList
            data={workInfo.workPosts.filter((post) => post.check)}
            onChangeSelectedPost={onChangeSelectedPost}
          />
        </div>
      )}
      {workInfo && selectedPost && (
        <AdminPostEdition
          post={selectedPost}
          onReleaseSelectedPost={onReleaseSelectedPost}
        />
      )}
    </div>
  );
}
