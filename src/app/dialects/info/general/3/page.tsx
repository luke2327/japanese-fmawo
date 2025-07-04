import InformationBanner from "@/components/blog/information-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  publisher: "MW",
  creator: "MW",
  title: "MW | 인생에 교훈이 되는 20가지 일본 속담 3",
  description:
    "악을 악으로 갚는다고 선이 되지 않는다. 펜은 칼보다 강하다. 로마로 가면 로마법을 따르라. 누구나 한 번쯤 들어보는 유명한 경구들이죠...",
  openGraph: {
    title: "MW | 인생에 교훈이 되는 20가지 일본 속담 3",
    description:
      "펜은 칼보다 강하다. 로마로 가면 로마법을 따르라. 누구나 한 번쯤 들어보는 유명한 경구들이죠....",
    url: "https://fmawo.com/guide/info/general/3",
    siteName: "MW",
    locale: "ko_KR",
    type: "website",
  },
};

export default function InfoOsaka() {
  return (
    <div>
      <InformationBanner
        src={"/images/information/information-2.jpg"}
        alt={"인생에 교훈이 되는 20가지 일본 속담 1"}
      />
      {/* header */}
      <div className="relative z-10 bg-white dark:bg-[#111010]">
        <h1 className="text-xl sm:text-2xl">
          인생에 교훈이 되는 20가지 일본 속담 3
        </h1>
        <hr className="mt-2 mb-4"></hr>
        <p className="mb-4">
          속담에는 선조들의 지혜가 담겨 있어 사고방식을 전환하고 더 나은 삶을 살
          수 있도록 해줍니다. 속담은 그 나라의 문화를 반영하는 산물이기도 하죠.
          인생에 교훈이 될 일본 속담 20가지를 알아볼까요? 이번엔 그 세 번째를
          소개드립니다!
        </p>
        <h2 className="text-xl">
          11. 오비로는 짧고 다스키로는 길다. (帯に短くたすきに長し)
        </h2>
        <hr className="mt-2 mb-4"></hr>
        <p className="mb-4">
          오비는 위 사진에서 보이듯 기모노 허리에 두르는 장식용 천입니다.
          다스키는 소매를 고정하는 데 쓰는 작은 끈으로 아래 사진과 같이
          사용합니다. 이렇게 옷을 고정하는 방법을 다스키가케(たすき掛け)라고
          하죠.
          <br />
          <br />
          어떤 상황에도 들어맞지 않는 물건을 가리킬 때 사용합니다.
        </p>
        <h2 className="text-xl">12. 한솥밥을 먹는다. (同じ釜の飯を食う).</h2>
        <hr className="mt-2 mb-4"></hr>
        <p className="mb-4">
          가마는 위 그림에서 보이는 무쇠솥으로 격식 있는 자리에 흔히
          사용되었습니다. 이 속담은 같은 식사를 해 공동체나 집단의 결속감을
          강화하는 의미이자, 한 집에서 함께 생활하는 사람들을 일컬을 때
          사용되기도 합니다.
        </p>
        <h2 className="text-xl">13. 강물에 떠내려가는 갓파(河童の川流れ)</h2>
        <hr className="mt-2 mb-4"></hr>
        <p className="mb-4">
          갓파는 일본의 설화 속 존재입니다. 맑은 강 속에 살아 헤엄을 잘 치고
          오이를 좋아한다고 하죠. 이 속담은 어떤 것의 달인이라도 실수할 때가
          있다는 뜻입니다. 유사한 속담으로 {'"'}원숭이도 나무에서 떨어질 때가
          있다
          {'"'}나{'"'}고보(유명한 고승)도 글자를 잘못 쓸 때가 있다{'"'} 등이
          있습니다.
        </p>
        <h2 className="text-xl">
          14. 기요미즈노부타이에서 뛰어내린다. (清水の舞台から飛び降りる)
        </h2>
        <hr className="mt-2 mb-4"></hr>
        <p className="mb-4">
          기요미즈노부타이는 위 사진에서 보이는 교토 기요미즈데라의 전망대를
          말합니다. 이곳에서 뛰어내려 상처를 입지 않으면 소원이 이루어지고
          떨어져서 죽는다 해도 성불할 수 있다는 설화가 있습니다. 주어진 상황에서
          최선의 결과를 끌어내기 위해 위험을 감수하는 행동을 의미합니다.
        </p>
        <h2 className="text-xl">
          15. 모르면 부처처럼 평화로울 수 있다. (知らぬが仏).
        </h2>
        <hr className="mt-2 mb-4"></hr>
        <p className="mb-4">
          이 속담은 진실을 모르면 마음에 거리낄 것이 없어 부처와 같은 평온한
          상태를 유지할 수 있다는 말입니다. 진실을 모르면 신경을 쓰지 않아도
          되고 오히려 더 행복하다는 뜻으로 {'"'}모르는 게 약{'"'}이라는 속담과
          비슷한 의미입니다.
        </p>
      </div>
    </div>
  );
}
