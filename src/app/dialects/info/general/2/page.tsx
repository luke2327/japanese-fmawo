import InformationBanner from "@/components/blog/information-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  publisher: "MW",
  creator: "MW",
  title: "MW | 인생에 교훈이 되는 20가지 일본 속담 2",
  description:
    "정어리 머리도 믿기 나름. 펜은 칼보다 강하다. 평생 한 번뿐인 만남. 말 귀에 염불...",
  openGraph: {
    title: "MW | 인생에 교훈이 되는 20가지 일본 속담 2",
    description:
      "펜은 칼보다 강하다. 로마로 가면 로마법을 따르라. 누구나 한 번쯤 들어보는 유명한 경구들이죠....",
    url: "https://fmawo.com/guide/info/general/2",
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
        alt={"인생에 교훈이 되는 20가지 일본 속담 2"}
      />
      {/* header */}
      <div className="relative z-10 bg-white dark:bg-[#111010]">
        <h1 className="text-xl sm:text-2xl">
          인생에 교훈이 되는 20가지 일본 속담 2
        </h1>
        <hr className="mt-2 mb-4"></hr>
        <p className="mb-4">
          속담에는 선조들의 지혜가 담겨 있어 사고방식을 전환하고 더 나은 삶을 살
          수 있도록 해줍니다. 속담은 그 나라의 문화를 반영하는 산물이기도 하죠.
          인생에 교훈이 될 일본 속담 20가지를 알아볼까요? 이번엔 그 두번째를
          소개드립니다!
        </p>
        <h2 className="text-xl">6. 평생 한 번뿐인 만남(一期一会)</h2>
        <hr className="mt-2 mb-4"></hr>
        <p className="mb-4">
          생에서 만남은 일시적이므로 모든 사람을 정중하게 대해 후회를 남기지
          말아야 한다는 의미입니다.
        </p>
        <h2 className="text-xl">
          7. 정어리 머리도 믿기 나름. (鰯の頭も信心から)
        </h2>
        <hr className="mt-2 mb-4"></hr>
        <p className="mb-4">
          에도 시대의 속담입니다. 당시에는 절분(입춘 전날로 음력으로는 봄의 첫
          날)에 정어리 머리를 집 현관에 걸어 악귀를 쫓아내는 풍습이 있었습니다.
          믿음은 신비한 것으로, 믿음이 있다면 무엇이든 가능하다는 의미입니다.
        </p>
        <h2 className="text-xl">8. 말 귀에 염불(馬の耳に念仏)</h2>
        <hr className="mt-2 mb-4"></hr>
        <p className="mb-4">
          추상적이거나 위대한 의미를 이해하지 못하거나 이해하려 하지 않는 이에게
          설명하는 것은 시간 낭비라는 의미입니다. 비슷한 일본 속담으로 {'"'}개
          귀에 경 읽기{'"'}나 {'"'}고양이에게 돈을 주는 격{'"'}, {'"'}돼지 목에
          진주 목걸이{'"'} 등이 있습니다.
        </p>
        <h2 className="text-xl">9. 새우로 도미 낚기(海老で鯛を釣る)</h2>
        <hr className="mt-2 mb-4"></hr>
        <p className="mb-4">
          도미는 고급 생선으로 축제나 기념일에 먹는 음식이고, 새우는 비교적 흔한
          해물입니다. 적은 돈이나 노력을 들여 큰 결과를 얻는 것을 의미합니다.
        </p>
        <h2 className="text-xl">10. 툇마루 밑의 장사(縁の下の力持ち)</h2>
        <hr className="mt-2 mb-4"></hr>
        <p className="mb-4">
          엔(縁)은 일본식 주택의 길고 가는 목조 현관으로, 위 사진의 오른쪽
          아래와 같은 모습입니다. 주택에서 눈에 띄는 요소가 아니죠. 다른 이를
          위해 열심히 일했지만 인정받지 못한, 일종의 이름없는 영웅으로 보상 없이
          헌신하는 사람을 말합니다.
        </p>
      </div>
    </div>
  );
}
