import InformationBanner from "@/components/blog/information-banner";
import InformationDescription from "@/components/blog/information-description";
import { Metadata } from "next";

export const metadata: Metadata = {
  publisher: "MW",
  title: "MW | 같은 말이라도 오사카에서는 의미가 다른 표현",
  description:
    "일본에서는 일반적으로 ‘아호(바보)’가 ‘바카(바보)’보다 강한 느낌. 단지오사카를 중심으로 한 간사이 지방에서는 반대로, ‘바카’가 ‘아호’보다강한 느낌입니다...",
  openGraph: {
    title: "MW | 같은 말이라도 오사카에서는 의미가 다른 표현",
    description:
      "일본에서는 일반적으로 ‘아호(바보)’가 ‘바카(바보)’보다 강한 느낌. 단지오사카를 중심으로 한 간사이 지방에서는 반대로...",
    url: "https://fmawo.com/guide/info/osaka/2",
    siteName: "MW",
    locale: "ko_KR",
    type: "website",
  },
};

export default function InfoOsaka() {
  return (
    <div>
      <InformationBanner
        src={"/images/information/osaka/2.png"}
        alt={
          "부산에 부산 사투리가 있듯이 오사카에는 오사카 사투리(관서 사투리)가있습니다..."
        }
      />
      {/* header */}
      <InformationDescription>
        <h1 className="text-3xl">
          같은 말이라도 오사카에서는 의미가 다른 표현
        </h1>
        <hr className="mt-2 mb-4"></hr>
        <div className="mb-4">
          <p className="font-bold">- 아호 / あほ</p>
          <p>
            일본에서는 일반적으로 ‘아호(바보)’가 ‘바카(바보)’보다 강한 느낌.
            단지 오사카를 중심으로 한 간사이 지방에서는 반대로, ‘바카’가
            ‘아호’보다 강한 느낌입니다. 오사카 사람은 흔히 아호 아호라고
            합니다만, 실제로는 한국의 멍청이와 같은 가벼운 표현이에요. 반대로
            오사카 사람에게 ‘바카(바보)’라고 하면, 꽤 심한 말이 됩니다. 또
            오사카 이외의 타 지역 사람들이 ‘아호’라는 말을 들으면 상처받는
            경우도 있습니다.
          </p>
          <p className="font-bold pt-4">- 에라이 / えらい</p>
          <p>
            오사카에서 에라이(대단하다)는 피곤하다라는 의미가 됩니다. 자신의
            상태를 말할 때 ‘에라이와(피곤하다)’라고들 합니다. 표준어의
            에라이(훌륭하다)도 그대로 사용하는 등, ‘에라이’에는 여러가지 의미가
            있습니다. 참고로 교토에서는 에라이(대단하다)가 ‘매우’라는 의미로
            사용되고 있습니다.
          </p>
          <p className="font-bold pt-4">- 지분 / 自分</p>
          <p>
            표준어로도 물론 지분(자기 자신)은 지분. 하지만 오사카에서는 상대를
            지칭하며 ‘지분’이라고 하면 ‘당신’ ‘너’의 의미가 됩니다. 윗사람이
            아랫사람에게 잘 사용하는 이미지가 있습니다.
          </p>
          <p className="font-bold pt-4">- 나오스 / なおす</p>
          <p>
            표준어로는 수리, 고치다의 의미. 오사카에서는 원래 있던 자리로
            되돌리다는 의미가 있습니다. ‘나오시 토이네’는 ‘넣어 놔’라는 뜻.
          </p>
        </div>
        <h2 className="text-xl">같은 것이라도 표현이 다르다.</h2>
        <hr className="mt-2 mb-4"></hr>
        <div>
          <p className="font-bold">- 마쿠도 (マクド)</p>
          <p>
            오사카에서는 맥도날드를 줄여서 ‘마쿠도’라고 합니다. 도쿄 등 다른
            지역에서는 ‘막쿠’. 오사카 사람들은 ‘도’라는 발음을 좋아합니다.
          </p>
          <p className="font-bold pt-4">- 간토다키 (関東煮)</p>
          <p>
            표준어로는 오뎅. 오사카에서는 어묵을 간토다키라고 부릅니다. 이른바
            도쿄가 있는 관동지방의 음식이라는 것. 대만에서도 어묵을 한자로
            ‘関東煮’라고 표현하는 경우가 있습니다.
          </p>
          <p className="font-bold pt-4">- 메바치코 (めばちこ)</p>
          <p>
            다래끼는 표준어로는 {"'"}모노모라이{"'"}. 하지만 오사카에서
            ‘모노모라이’라고 말해도 통하지 않을지도... 교토에서는
            ‘메이보（めいぼ）’라고 하며 표현이 조금 다릅니다.
          </p>
          <p className="font-bold pt-4">- 팟치 (ぱっち)</p>
          <p>
            표준어로는 {"'"}모모히키’. 남성이 팬티 위에 입는 속옷을 뜻합니다.
            이것도 한국말 ‘바지’와 비슷하죠.
          </p>
          <p className="font-bold pt-4">- 히치 （ひち）</p>
          <p>
            숫자 7. 표준어 발음은 ‘시치’. 오사카에서는 1,2,3…이라고 소리를 내어
            말할 때 멜로디 같은 억양이 있습니다.
          </p>
          <p className="font-bold pt-4">- 아테（あて）</p>
          <p>
            안주. 표준어로는 {"'"}오츠마미{"'"} .
          </p>
        </div>
      </InformationDescription>
    </div>
  );
}
