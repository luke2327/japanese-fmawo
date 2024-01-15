import Link from "next/link";

export const metadata = {
  title: "Guide",
  description:
    "일본의 관한 정보를 MW 에서 한번에 찾아보세요. | 日本の情報をMWで一度に探してみてください。 | Find information about Japan in MW at once.",
};

export default function Page() {
  return (
    <section id="guide-page" className="max-w-xl w-full mx-auto font-skybori">
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl tracking-tight transition-colors first:mt-0">
        일람
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        <ul className="list-decimal">
          <li>
            <Link href="/guide/public-holidays" hrefLang="ko">
              <span className="border-b pb-0.5">공휴일</span>
            </Link>
          </li>
          <li>
            <Link href="/guide/calendar" hrefLang="ko">
              <span className="border-b pb-0.5">달력</span>
            </Link>
          </li>
        </ul>
      </p>
    </section>
  );
}
