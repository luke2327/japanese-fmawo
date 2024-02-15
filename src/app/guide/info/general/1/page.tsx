import InformationBanner from "@/components/blog/information-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  publisher: "MW",
  title: "MW | 인생에 교훈이 되는 20가지 일본 속담 1",
  description:
    "악을 악으로 갚는다고 선이 되지 않는다. 펜은 칼보다 강하다. 로마로 가면 로마법을 따르라. 누구나 한 번쯤 들어보는 유명한 경구들이죠...",
  openGraph: {
    title: "MW | 인생에 교훈이 되는 20가지 일본 속담 1",
    description:
      "펜은 칼보다 강하다. 로마로 가면 로마법을 따르라. 누구나 한 번쯤 들어보는 유명한 경구들이죠....",
    url: "https://fmawo.com/guide/info/general/1",
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
      <div></div>
      <h1 className="text-xl sm:text-2xl">
        인생에 교훈이 되는 20가지 일본 속담 1
      </h1>
      <hr className="mt-2 mb-4"></hr>
      <p className="mb-4">
        악을 악으로 갚는다고 선이 되지 않는다. 펜은 칼보다 강하다. 로마로 가면
        로마법을 따르라. 누구나 한 번쯤 들어보는 유명한 경구들이죠. 하지만 일본
        속담은 좀처럼 들어본 적이 없습니다. 그래서 이번에는 유명한 일본 속담
        20가지와 그 뜻을 소개하려 합니다!
      </p>
      <p className="mb-4">
        속담에는 선조들의 지혜가 담겨 있어 사고방식을 전환하고 더 나은 삶을 살
        수 있도록 해줍니다. 속담은 그 나라의 문화를 반영하는 산물이기도 하죠.
        인생에 교훈이 될 일본 속담 20가지를 알아볼까요? 번역문인 만큼 속담의
        맛이 덜 살아 있다는 점을 기억해주세요.
      </p>
      <h2 className="text-xl">
        1. 신부/며느리에게는 가을 가지를 먹이지 마라(秋茄子は嫁に食わすな)
      </h2>
      <hr className="mt-2 mb-4"></hr>
      <p className="mb-4">
        여러 가지로 해석될 수 있는 속담입니다. {'"'}요메{'"'}라는 단어는 신부로
        읽힐 수도, 며느리로 읽힐 수도 있기 때문이죠. 가을 가지는 맛이 좋기
        때문에 필연적인 고부갈등을 의미하는 속담으로도 쓰이고, 가지를 너무 많이
        먹으면 병이 날 수 있어 며느리(신부)가 먹지 않도록 해 보호하는 지혜로운
        시어머니라는 의미도 있습니다.
      </p>
      <h2 className="text-xl">
        2. 머리는 숨기고 엉덩이는 숨기지 않는다(頭隠して尻隠さず)
      </h2>
      <hr className="mt-2 mb-4"></hr>
      <p className="mb-4">
        모든 결점을 숨겼다고 생각하지만, 일부만 보이지 않을 뿐 다른 이들이 모두
        문제를 눈치 챘는데도 모든 것이 잘 되고 있는 양 행동하는 것을 의미합니다.
      </p>
      <h2 className="text-xl">3. 지나간 축제(後の祭り)</h2>
      <hr className="mt-2 mb-4"></hr>
      <p className="mb-4">
        직역하면 {'"'}너무 늦었다{'"'}는 의미로, 뒤늦게 무엇인가를 후회하는 것은
        시간 낭비라는 의미입니다. 마쓰리는 신도 신사나 불교 사찰에서 열리는
        축제로 즐거움과 관련되어 쓰입니다.
      </p>
      <h2 className="text-xl">4. 돌 위에서도 3년(石の上にも三年)</h2>
      <hr className="mt-2 mb-4"></hr>
      <p className="mb-4">
        돌 위에 3년이나 앉아 있으면 어떻게 될까요? 결국은 따뜻해지겠죠. 힘든
        시기를 지나는 것처럼 보여도 결국 다 괜찮아질 것이라는 의미입니다.
      </p>
      <h2 className="text-xl">
        5. 돌다리도 두드려 보고 건너라(石橋を叩いて渡る)
      </h2>
      <hr className="mt-2 mb-4"></hr>
      <p className="mb-4">
        아무리 튼튼한 돌 소재의 다리라도 구조가 약해지면서 무너질 수 있으니 언뜻
        보기에 안전해 보여도 항상 주의를 기울여야 한다는 의미입니다.
      </p>
    </div>
  );
}
