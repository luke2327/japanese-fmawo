import { BlogPost } from "@/interface/blog.interface";
import Image from "next/image";

type WorkListProps = {
  data: BlogPost[];
  onChangeSelectedPost: (postNo: number) => void;
};

export default function WorkList({
  data,
  onChangeSelectedPost,
}: WorkListProps) {
  return (
    <div className="grid grid-cols-12 gap-2">
      {data.map((post) => (
        <div
          key={post.postIndex}
          className="col-span-12 sm:col-span-6 dark:hover:bg-neutral-800 rounded-md cursor-pointer"
          onClick={() => post.postNo && onChangeSelectedPost(post.postNo)}>
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-3">
              <Image
                src={post.thumbnailUrl}
                width={200}
                height={200}
                alt="al"
                className="rounded-md aspect-square"
              />
            </div>
            <div className="col-span-9">
              <p>{post.titleJa}</p>
              <p className="text-neutral-400">
                {post.publishedAt.split(" ")[0]}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
