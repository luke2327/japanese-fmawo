"use client";

import WorkList from "@/app/admin/dashboard/list";
import Loading from "@/app/admin/loading";
import AdminPostEdition from "@/app/admin/work/proverb/edition";
import { getWorkInfo } from "@/app/db/blog-client";
import useUserInfo from "@/hooks/useUserInfo";
import { BlogPost } from "@/interface/blog.interface";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<BlogPost>();
  const { workInfo, setWorkInfo } = useUserInfo();

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

  return loading ? (
    <Loading />
  ) : (
    <div className="gap-4 flex flex-col w-screen tracking-widest">
      {workInfo && !selectedPost && (
        <motion.div
          id="work-area"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
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
            data={workInfo.workPosts.filter((post) => post.check).reverse()}
            onChangeSelectedPost={onChangeSelectedPost}
          />
        </motion.div>
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
