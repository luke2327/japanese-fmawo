import Image from "next/image";

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        별난 한일커플 変わってる日韓カップル ｡·͜·｡
      </h1>
      <div className="prose prose-neutral dark:prose-invert flex items-center gap-2">
        <div id="profile">
          <Image
            src="/profile.jpeg"
            width={120}
            height={48}
            alt="profile image"
            className="rounded-[1rem]"
          />
        </div>
        <div>
          <span className="dark:text-white">
            흔하지만 흔하지 않은 별난 <b>한일커플</b> 입니다.
          </span>
          <br />
          IT개발자와 IT대학에 다니고있는 간사이 지역 여자친구와의 별난 일상을
          적는 블로그 입니다.
        </div>
      </div>
    </section>
  );
}
