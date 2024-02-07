import Link from "next/link";

export const metadata = {
  title: "Guide",
  description:
    "일본의 관한 정보를 MW 에서 한번에 찾아보세요. | 日本の情報をMWで一度に探してみてください。 | Find information about Japan in MW at once.",
};

export default function Page() {
  return (
    <section
      id="guide-page"
      className="max-w-xl w-full mx-auto font-skybori transition-colors">
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-xl sm:text-3xl tracking-tight transition-colors first:mt-0">
        일람
      </h2>
      <div className="leading-7 [&:not(:first-child)]:mt-2">
        <ul className={"pl-2"}>
          <li>
            <span>정보</span>
            <ul className={"pl-2"}>
              <li>
                <span>일본전국</span>
                <ul className="pl-2">
                  <li>
                    <Link
                      href={"/guide/public-holidays"}
                      className=" border-b text-neutral-400 hover:text-neutral-800 transition-colors">
                      - 공휴일
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/guide/info/general/1"}
                      className=" border-b text-neutral-400 hover:text-neutral-800 transition-colors">
                      - 인생에 교훈이 되는 20가지 일본 속담 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/guide/info/general/2"}
                      className=" border-b text-neutral-400 hover:text-neutral-800 transition-colors">
                      - 인생에 교훈이 되는 20가지 일본 속담 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/guide/info/general/3"}
                      className=" border-b text-neutral-400 hover:text-neutral-800 transition-colors">
                      - 인생에 교훈이 되는 20가지 일본 속담 3
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/guide/info/general/4"}
                      className=" border-b text-neutral-400 hover:text-neutral-800 transition-colors">
                      - 인생에 교훈이 되는 20가지 일본 속담 4
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/guide/info/general/5"}
                      className=" border-b text-neutral-400 hover:text-neutral-800 transition-colors">
                      - 일본 편의점 이용시 알아두면 유용한 12가지 기본 표현과
                      각각의 대응법
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/guide/info/general/6"}
                      className=" border-b text-neutral-400 hover:text-neutral-800 transition-colors">
                      - 간사이 지방에서는 {"'"}오오키니{"'"}? 일본 전국의 지역별
                      감사 인사 방법 51가지
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/guide/info/general/6"}
                      className=" border-b text-neutral-400 hover:text-neutral-800 transition-colors">
                      - 발음 때문에 일본에서 잘 통하지 않는 단어 5선 {"<"}상편
                      {">"}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <span>오사카</span>
                <ul className="pl-2">
                  <li>
                    <Link
                      href={"/guide/info/osaka/1"}
                      className=" border-b text-neutral-400 hover:text-neutral-800 transition-colors">
                      - 알아두면 좋은 오사카 사투리
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/guide/info/osaka/2"}
                      className=" border-b text-neutral-400 hover:text-neutral-800 transition-colors">
                      - 같은 말이라도 오사카에서는 의미가 다른 표현
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/guide/info/osaka/3"}
                      className=" border-b text-neutral-400 hover:text-neutral-800 transition-colors">
                      - 오사카 다운 표현
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          {/* <li>
            <Link href="/guide/calendar" hrefLang="ko">
              <span className="border-b pb-0.5">달력</span>
            </Link>
          </li> */}
        </ul>
      </div>
    </section>
  );
}
