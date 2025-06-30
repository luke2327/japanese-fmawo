import AnimateWrapper from "@/components/blog/animate-wrapper";
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
      <AnimateWrapper>
        <h2 className="mt-10 scroll-m-20 pb-2 text-xl sm:text-3xl tracking-tight transition-colors first:mt-0">
          일본 방언
        </h2>
        <div className="leading-7 [&:not(:first-child)]:mt-2">
          <ul className={"pl-2"}>
            <li>
              <ul className={"pl-2"}>
                <li>
                  <span>일본전국</span>
                  <ul className="pl-2">
                    <li>
                      <Link
                        href={"/dialects/info/japanese-dialects"}
                        className=" text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors">
                        - 일본의 방언
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        href={"/dialects/public-holidays"}
                        className=" text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors">
                        - 공휴일
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        href={"/dialects/info/general/1"}
                        className=" text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors">
                        - 인생에 교훈이 되는 20가지 일본 속담 1
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/dialects/info/general/2"}
                        className=" text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors">
                        - 인생에 교훈이 되는 20가지 일본 속담 2
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/dialects/info/general/3"}
                        className=" text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors">
                        - 인생에 교훈이 되는 20가지 일본 속담 3
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/dialects/info/general/4"}
                        className=" text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors">
                        - 인생에 교훈이 되는 20가지 일본 속담 4
                      </Link>
                    </li>
                    {/* <li>
                    <Link
                      href={"/dialects/info/general/5"}
                      className=" text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors">
                      - 일본 편의점 이용시 알아두면 유용한 12가지 기본 표현과
                      각각의 대응법
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/dialects/info/general/6"}
                      className=" text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors">
                      - 간사이 지방에서는 {"'"}오오키니{"'"}? 일본 전국의 지역별
                      감사 인사 방법 51가지
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/dialects/info/general/6"}
                      className=" text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors">
                      - 발음 때문에 일본에서 잘 통하지 않는 단어 5선 {"<"}상편
                      {">"}
                    </Link>
                  </li> */}
                  </ul>
                </li>
                <li className="mt-4">
                  <span>간사이(関西)</span>
                  <ul className="ml-4">
                    <li>
                      <Link
                        href={"/dialects/info/kansai/1"}
                        className=" text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors">
                        - 간사이지역 방언
                      </Link>
                    </li>
                    <ul>
                      <span>오사카(大阪)</span>
                      <ul className="pl-2">
                        <li>
                          <Link
                            href={"/dialects/info/osaka/1"}
                            className=" text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors">
                            - 알아두면 좋은 오사카 사투리
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/dialects/info/osaka/2"}
                            className=" text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors">
                            - 같은 말이라도 오사카에서는 의미가 다른 표현
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/dialects/info/osaka/3"}
                            className=" text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors">
                            - 오사카 다운 표현
                          </Link>
                        </li>
                      </ul>
                    </ul>
                  </ul>
                </li>
                <li className="mt-4">
                  <span>홋카이도(北海道)</span>
                  <ul className="pl-2">
                    <li>
                      <Link
                        href={"/dialects/info/hokkaido/1"}
                        className=" text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors">
                        - 홋카이도지역 방언
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="mt-4">
                  <span>도호쿠(東北)</span>
                  <ul className="pl-2">
                    <li>
                      <Link
                        href={"/dialects/info/tohoku/1"}
                        className=" text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors">
                        - 도호쿠지역 방언
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="mt-4">
                  <span>간토(関東)</span>
                  <ul className="pl-2">
                    <li>
                      <Link
                        href={"/dialects/info/kanto/1"}
                        className=" text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors">
                        - 간토지역 방언
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="mt-4">
                  <span>주부(中部)</span>
                  <ul className="pl-2">
                    <li>
                      <Link
                        href={"/dialects/info/chubu/1"}
                        className=" text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors">
                        - 주부지역 방언
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="mt-4">
                  <span>주고쿠(中国)</span>
                  <ul className="pl-2">
                    <li>
                      <Link
                        href={"/dialects/info/chugoku/1"}
                        className=" text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors">
                        - 주고쿠지역 방언
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="mt-4">
                  <span>시고쿠(四国)</span>
                  <ul className="pl-2">
                    <li>
                      <Link
                        href={"/dialects/info/shikoku/1"}
                        className=" text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors">
                        - 시고쿠지역 방언
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="mt-4">
                  <span>규슈(九州)</span>
                  <ul className="pl-2">
                    <li>
                      <Link
                        href={"/dialects/info/kyushu/1"}
                        className=" text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors">
                        - 규슈지역 방언
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            {/* <li>
            <Link href="/dialects/calendar" hrefLang="ko">
              <span className="border-b pb-0.5">달력</span>
            </Link>
          </li> */}
          </ul>
        </div>
      </AnimateWrapper>
    </section>
  );
}
