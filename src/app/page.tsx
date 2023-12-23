import Image from "next/image";

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter flex gap-2 items-center flex-wrap">
        <span className="font-skybori">별난 한일커플</span>
        <span className="font-azuki">変わってる日韓カップル ｡·͜·｡</span>
      </h1>
      <div className="prose-neutral dark:prose-invert flex-col xs:flex-row flex items-start gap-2">
        <div id="profile">
          <Image
            src="/profile.jpeg"
            width={80}
            height={48}
            alt="profile image"
            className="rounded-[1rem] min-w-[80px] min-h-[80px] border border-neutral-600"
          />
        </div>
        <div className="font-skybori flex flex-col gap-2 mt-2 xs:mt-0">
          <span className="dark:text-white">
            흔하지만 흔하지 않은 별난 <b>한일커플</b> 입니다.
          </span>
          <span className="dark:text-neutral-400 text-neutral-500">
            IT개발자와 IT대학에 다니고있는 간사이 지역 여자친구와의 별난 일상을
            적는 블로그 입니다.
          </span>
        </div>
      </div>
    </section>
  );
}
