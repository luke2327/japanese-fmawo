import InformationBanner from "@/components/blog/information-banner";
import InformationDescription from "@/components/blog/information-description";
import { Metadata } from "next";

export const metadata: Metadata = {
  publisher: "MW",
  title: "MW | 알아두면 좋은 오사카 사투리",
  description:
    "부산에 부산 사투리가 있듯이 오사카에는 오사카 사투리(관서 사투리)가있습니다. 당연히 어감이나 억양도 표준어와 크게 다릅니다. 물론, 표준일본어도 통하지만요...",
  openGraph: {
    title: "MW | 알아두면 좋은 오사카 사투리",
    description:
      "부산에 부산 사투리가 있듯이 오사카에는 오사카 사투리(관서 사투리)가있습니다...",
    url: "https://fmawo.com/guide/info/japanese-dialects/1",
    siteName: "MW",
    locale: "ko_KR",
    type: "website",
  },
};

export default function InfoOsaka() {
  return (
    <div>
      <InformationBanner
        src={"/images/information/japanese-dialects/1.png"}
        alt={
          "부산에 부산 사투리가 있듯이 오사카에는 오사카 사투리(관서 사투리)가있습니다..."
        }
      />
      {/* header */}
      <InformationDescription>
        <h1 className="text-3xl">일본의 방언 (日本の方言)</h1>
        <hr className="mt-2 mb-4"></hr>
        <div className="mb-4">
          <p>日本列島は南北に長く、各地で異なる気候に恵まれています。</p>
          <p>
            일본 열도는 남북으로 길게 뻗어 있으며, 각 지역에서 다양한 기후를
            누리고 있습니다.
          </p>
        </div>
        <div className="mb-4">
          <p>この多様な自然環境が、地域ごとに異なる方言を育んできました。</p>
          <p>이러한 다양한 자연 환경이 지역별로 다른 방언을 길러 왔습니다.</p>
        </div>
        <div className="mb-4">
          <p>
            例えば、北は厳しい冬に耐える東北地方の方言には、温かみと強さが感じられます。
          </p>
          <p>
            예를 들어, 북부는 혹독한 겨울을 견디는 도호쿠 지방의 방언에는
            따뜻함과 강함이 느껴집니다.
          </p>
        </div>
        <div className="mb-4">
          <p>
            一方、南国の沖縄方言は、その温暖な気候と島国特有の文化が織りなす、柔らかくリズミカルな響きを持っています。
          </p>
          <p>
            반면, 남국의 오키나와 방언은 그 온화한 기후와 섬나라 특유의 문화가
            엮어내는 부드럽고 리드미컬한 울림을 가지고 있습니다.
          </p>
        </div>
        <div className="mb-4">
          <p>
            このような方言には、その地域の人々の生活様式や価値観、さらには心の豊かさが反映されていると言えるでしょう。
          </p>
          <p>
            이러한 방언에는 그 지역 사람들의 생활 양식이나 가치관, 더 나아가
            마음의 풍요로움이 반영되어 있다고 할 수 있습니다.
          </p>
        </div>
        <div className="mb-4">
          <p>
            方言を通じて、日本各地の文化や歴史を知ることは、非常に魅力的な旅になります。
          </p>
          <p>
            방언을 통해 일본 각지의 문화나 역사를 알아가는 것은 매우 매력적인
            여행이 됩니다.
          </p>
        </div>
        <div className="mb-4">
          <p>
            例えば、関西地方のユーモアあふれる方言は、その地域の人々の社交性や親しみやすさを象徴しています。
          </p>
          <p>
            예를 들어, 관서 지방의 유머가 넘치는 방언은 그 지역 사람들의
            사교성이나 친근함을 상징합니다.
          </p>
        </div>
        <div className="mb-4">
          <p>
            また、京都の上品で落ち着いた言葉遣いは、古都の歴史と伝統を感じさせます。
          </p>
          <p>
            또한, 교토의 우아하고 차분한 말씨는 고도의 역사와 전통을 느끼게
            합니다.
          </p>
        </div>
        <div className="mb-4">
          <p>方言を学ぶことは、単に言葉を覚えること以上の意味を持ちます。</p>
          <p>
            방언을 배우는 것은 단순히 말을 외우는 것 이상의 의미를 가집니다.
          </p>
        </div>
        <div className="mb-4">
          <p>
            それは、その地域の文化や人々の心に触れ、理解を深めることにつながります。
          </p>
          <p>
            그것은 그 지역의 문화나 사람들의 마음을 만지고 이해를 깊게 하는 것에
            연결됩니다.
          </p>
        </div>
        <div className="mb-4">
          <p>
            日本の方言を学ぶ旅は、日本の多様性と豊かな文化を体験する旅でもあります。
          </p>
          <p>
            일본의 방언을 배우는 여행은 일본의 다양성과 풍부한 문화를 체험하는
            여행이기도 합니다.
          </p>
        </div>
        <div className="mb-4">
          <p>それでは、この魅力的な世界に足を踏み入れてみましょう。</p>
          <p>그럼, 이 매력적인 세계로 발을 들여놓아 보시죠.</p>
        </div>
        <div className="mt-16">
          <p>あなたはどこの地域の方言に興味がありますか？</p>
          <p>당신은 어느 지역 사투리에 관심이 있습니까?</p>
        </div>
      </InformationDescription>
    </div>
  );
}
