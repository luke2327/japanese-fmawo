import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section className="font-raleway">
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Welcome to my Application
      </h1>
      <div className="prose-neutral dark:prose-invert flex items-start gap-2">
        <div id="profile">
          <Image
            src="/profile.svg"
            width={120}
            height={48}
            alt="profile image"
            className="rounded-[1rem] border border-neutral-100"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="dark:text-white text-lg">Luke2327</h4>
          <p className="text-neutral-400">
            Product-focused Fullstack Developer
          </p>
        </div>
      </div>
      <div id="description" className="mt-4">
        <h5 className="text-lg">About</h5>
        <p className="text-neutral-400">
          GM, Im Luke2327. I enjoy building dynamic, creative products from
          start to finish. Focused on developing intuitive experiences that
          constantly grow and improve based on user metrics. Always shipping.
        </p>
      </div>
      <div id="resume-link" className="mt-4">
        <h5 className="text-lg">Resume</h5>
        <Link href="https://resume.maplew.com/">
          <p className="text-neutral-400 transition-colors hover:text-neutral-200">
            https://resume.maplew.com
          </p>
        </Link>
      </div>
    </section>
  );
}
