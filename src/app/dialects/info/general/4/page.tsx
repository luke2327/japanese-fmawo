import InformationBanner from "@/components/blog/information-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  publisher: "MW",
  creator: "MW",
  title: "MW | 인생에 교훈이 되는 20가지 일본 속담 4",
  description:
    "세 사람이 모이면 지혜를 이룬다. 서면 작약, 앉으면 모란, 걷는 모습은 백합. 달과 자라. 누구나 한 번쯤 들어보는 유명한 경구들이죠...",
  openGraph: {
    title: "MW | 인생에 교훈이 되는 20가지 일본 속담 4",
    description:
      "세 사람이 모이면 지혜를 이룬다. 서면 작약, 앉으면 모란, 걷는 모습은 백합. 달과 자라. 누구나 한 번쯤 들어보는 유명한 경구들이죠....",
    url: "https://fmawo.com/guide/info/general/4",
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
          인생에 교훈이 되는 20가지 일본 속담 4
        </h1>
        <hr className="mt-2 mb-4"></hr>
        <p className="mb-4">
          속담에는 선조들의 지혜가 담겨 있어 사고방식을 전환하고 더 나은 삶을 살
          수 있도록 해줍니다. 속담은 그 나라의 문화를 반영하는 산물이기도 하죠.
          인생에 교훈이 될 일본 속담 20가지를 알아볼까요? 이번엔 그 네 번째를
          소개드립니다!
        </p>
        <h2 className="text-xl">
          16. 세 사람이 모이면 지혜를 이룬다. (三人寄れば文殊の知恵)
        </h2>
        <hr className="mt-2 mb-4"></hr>
        <p className="mb-4">
          이 속담은 똑똑하지 않은 사람이라도 혼자가 아니라 여럿이 모이면 더 나은
          생각을 해 낼 수 있다는 의미로, {"'"}백지장도 맞들면 낫다{"'"}와
          유사합니다.
        </p>
        <h2 className="text-xl">
          17. 서면 작약, 앉으면 모란, 걷는 모습은 백합.
          (立てば芍薬座れば牡丹歩く姿は百合の花)
        </h2>
        <hr className="mt-2 mb-4"></hr>
        <p className="mb-4">
          여성을 꽃에 빗대어 이상적인 외모와 행동거지를 표현한 속담입니다.
          작약과 모란은 같은 작약과에 속하지만 살짝 다릅니다. 위 사진이
          모란입니다. 아래 사진이 작약의 모습입니다.
        </p>
        <h2 className="text-xl">18. 달과 자라(月と鼈)</h2>
        <hr className="mt-2 mb-4"></hr>
        <p className="mb-4">
          달은 둥글고 자라도 둥근 모양입니다. 둘 다 둥글지만 그 가치는 너무나
          다르죠. 달은 아름다움의 상징이라면 자라는 흙 속에서 살기 때문입니다.
          따라서 이 속담은 비교할 수 없을 정도로 다른 대상에 대한 비유입니다.
        </p>
        <h2 className="text-xl">
          19. 손톱 때를 달여 마신다. (爪の垢を煎じて飲む)
        </h2>
        <hr className="mt-2 mb-4"></hr>
        <p className="mb-4">
          위대한 사람을 닮기 위해서라면 그 사람의 손톱 밑의 때라도 마실 정도로
          노력하는 것을 의미합니다. 센지루(煎じる)는 약재 등을 달이는 행동을
          의미하는 일본어입니다. 위대한 사람은 손톱 밑이 더럽더라도 훌륭하다는
          의미이기도 합니다.
        </p>
        <h2 className="text-xl">
          20. 잡히지도 않은 너구리 가죽값 계산(捕らぬ狸の皮算用)
        </h2>
        <hr className="mt-2 mb-4"></hr>
        <p className="mb-4">
          이 속담은 {'"'}김칫국부터 마신다{'"'}와 유사한 속담으로, 확실하지 않은
          일에 대해 미리 계산하거나 예상한다는 의미입니다. {'"'}가와잔요{'"'}
          라고 줄여 말하는 경우가 많습니다.
        </p>
      </div>
    </div>
  );
}
