import InformationBanner from "@/components/blog/information-banner";
import InformationDescription from "@/components/blog/information-description";
import AnimateWrapper from "@/components/blog/animate-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  publisher: "MW",
  title: "MW | 홋카이도의 방언",
  description:
    "북해도 지방의 방언은 그 넓은 땅과 풍부한 자연 환경에서 태어난 독특한 매력을 지니고 있습니다.",
  openGraph: {
    title: "MW | 홋카이도의 방언",
    description:
      "북해도 지방의 방언은 그 넓은 땅과 풍부한 자연 환경에서 태어난 독특한 매력을 지니고 있습니다.",
    url: "https://fmawo.com/guide/info/hokkaido/1",
    siteName: "MW",
    locale: "ko_KR",
    type: "website",
  },
};

export default function InfoOsaka() {
  return (
    <div>
      <InformationBanner
        src={"/images/information/hokkaido/1.png"}
        alt={
          "북해도 지방의 방언은 그 넓은 땅과 풍부한 자연 환경에서 태어난 독특한 매력을 지니고 있습니다."
        }
      />
      {/* header */}
      <InformationDescription>
        <h1 className="text-3xl">홋카이도 방언소개 (北海道の方言の紹介)</h1>
        <hr className="mt-2 mb-4"></hr>
        <div>
          <div className="mb-4">
            <p>
              北海道地方の方言は、その広大な土地と豊かな自然環境から生まれた、独特の魅力を持っています。
            </p>
            <p>
              북해도 지방의 방언은 그 넓은 땅과 풍부한 자연 환경에서 태어난
              독특한 매력을 지니고 있습니다.
            </p>
          </div>
          <div className="mb-4">
            <p>
              北海道は日本の最北端に位置し、冬には厳しい寒さと壮大な雪景色が広がります。
            </p>
            <p>
              북해도는 일본의 최북단에 위치하며, 겨울이 되면 혹독한 추위와
              장대한 눈 풍경이 펼쳐집니다.
            </p>
          </div>
          <div className="mb-4">
            <p>
              この厳しい自然環境の中で育まれた北海道の人々は、温かく開放的な性格をしており、その特性が方言にも現れています。
            </p>
            <p>
              이러한 엄격한 자연 환경 속에서 자란 북해도 사람들은 따뜻하고
              개방적인 성격을 가지고 있으며, 그 특성이 방언에도 나타나 있습니다.
            </p>
          </div>
          <div className="mb-4">
            <p>北海道の方言には、直接的で率直な表現が多く見られます。</p>
            <p>북해도의 방언에는 직접적이고 솔직한 표현이 많이 보입니다.</p>
          </div>
          <div className="mb-4">
            <p>
              例えば、「なまら」は「とても」や「非常に」という意味で使われ、その強調の仕方には北海道ならではの豪快さが感じられます。
            </p>
            <p>
              예를 들어, {"'"}남라{"'"}는 {"'"}매우{"'"}나 {"'"}대단히{"'"}라는
              의미로 사용되며, 그 강조하는 방식에는 북해도 특유의 호방함이
              느껴집니다.
            </p>
          </div>
          <div className="mb-4">
            <p>
              また、冬の寒さを和らげるような温かみのある言葉遣いも特徴的です。
            </p>
            <p>또한, 겨울 추위를 완화시키는 듯한 따뜻한 말투도 특징적입니다.</p>
          </div>
          <div className="mb-4">
            <p>
              人々は互いに助け合い、厳しい自然環境を乗り越えてきた歴史が、言葉の中にも生きています。
            </p>
            <p>
              사람들은 서로를 돕고, 엄격한 자연 환경을 극복해 온 역사가 말속에도
              살아 있습니다.
            </p>
          </div>
          <div className="mb-4">
            <p>
              北海道では、広大な自然を背景にした生活が営まれており、それが方言にも反映されています。
            </p>
            <p>
              북해도에서는 넓은 자연을 배경으로 한 생활이 이루어지며, 그것이
              방언에도 반영되어 있습니다.
            </p>
          </div>
          <div className="mb-4">
            <p>
              例えば、農業や漁業の用語が日常会話に溶け込んでいることがあります。
            </p>
            <p>
              예를 들어, 농업이나 어업 용어가 일상 대화에 녹아든 것을 볼 수
              있습니다.
            </p>
          </div>
          <div className="mb-4">
            <p>
              これは、自然とともに生きる北海道の人々の生活が、言葉にも表れている証拠です。
            </p>
            <p>
              이것은 자연과 함께 살아가는 북해도 사람들의 생활이 말에도 나타나는
              증거입니다.
            </p>
          </div>
          <div className="mb-4">
            <p>
              北海道の方言は、その地域の文化や歴史、自然環境を映し出す鏡のような存在です。
            </p>
            <p>
              북해도의 방언은 그 지역의 문화나 역사, 자연 환경을 비추는 거울과
              같은 존재입니다.
            </p>
          </div>
          <div className="mb-4">
            <p>
              方言を通じて北海道の魅力を知ることは、まるでその豊かな自然や歴史を旅するかのような体験をもたらします。
            </p>
            <p>
              방언을 통해 북해도의 매력을 알아가는 것은 마치 그 풍부한 자연이나
              역사를 여행하는 것과 같은 경험을 제공합니다.
            </p>
          </div>
          <div className="mb-4">
            <p>
              北海道の方言には、この地を愛する人々の心が込められており、それを学ぶことで、北海道という土地が持つ深い魅力に触れることができるでしょう。
            </p>
            <p>
              북해도의 방언에는 이 땅을 사랑하는 사람들의 마음이 담겨 있으며,
              그것을 배우는 것으로 북해도라는 땅이 지닌 깊은 매력을 느낄 수 있을
              것입니다.
            </p>
          </div>
          <div className="mt-16">
            <p>あなたはどこの地域の方言に興味がありますか？</p>
            <p>당신은 어느 지역 사투리에 관심이 있습니까?</p>
          </div>
        </div>
      </InformationDescription>
    </div>
  );
}
