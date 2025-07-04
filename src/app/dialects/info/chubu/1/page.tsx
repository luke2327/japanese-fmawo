import InformationBanner from "@/components/blog/information-banner";
import InformationDescription from "@/components/blog/information-description";
import { Metadata } from "next";

export const metadata: Metadata = {
  publisher: "MW",
  title: "MW | 주부지역의 방언",
  description:
    "주부 지방이라고 하면, 일본의 중앙부에 위치한 지역으로, 니가타현, 도야마현, 이시카와현, 후쿠이현, 야마나시현, 나가노현, 기후현, 시즈오카현, 아이치현의 9개의 도현으로 이루어져 있습니다.",
  openGraph: {
    title: "MW | 주부지역의 방언",
    description:
      "주부 지방이라고 하면, 일본의 중앙부에 위치한 지역으로, 니가타현, 도야마현, 이시카와현, 후쿠이현, 야마나시현, 나가노현, 기후현, 시즈오카현, 아이치현의 9개의 도현으로 이루어져 있습니다.",
    url: "https://fmawo.com/guide/info/chubu/1",
    siteName: "MW",
    locale: "ko_KR",
    type: "website",
  },
};

export default function InfoOsaka() {
  return (
    <div>
      <InformationBanner
        src={"/images/information/chubu/1.png"}
        alt={
          "주부 지방이라고 하면, 일본의 중앙부에 위치한 지역으로, 니가타현, 도야마현, 이시카와현, 후쿠이현, 야마나시현, 나가노현, 기후현, 시즈오카현, 아이치현의 9개의 도현으로 이루어져 있습니다."
        }
      />
      {/* header */}
      <InformationDescription>
        <h1 className="text-3xl">
          중부 지방의 방언소개 (中部地方の方言の紹介)
        </h1>
        <hr className="mt-2 mb-4"></hr>
        <div>
          <div className="mb-4">
            <p>
              中部地方といえば、日本の中央部に位置する地域で、新潟県、富山県、石川県、福井県、山梨県、長野県、岐阜県、静岡県、愛知県の９つの都県からなります。
            </p>
            <p>
              중부 지방이라고 하면, 일본의 중앙부에 위치한 지역으로, 니가타현,
              도야마현, 이시카와현, 후쿠이현, 야마나시현, 나가노현, 기후현,
              시즈오카현, 아이치현의 9개의 도현으로 이루어져 있습니다.
            </p>
          </div>
          <div className="mb-4">
            <p>
              この地域では、東海方言と北陸方言という２つの大きな方言グループに分けられる方言が話されています。
            </p>
            <p>
              이 지역에서는, 동해 방언과 호쿠리쿠 방언이라는 두 개의 큰 방언
              그룹으로 나뉘는 방언이 말해지고 있습니다.
            </p>
          </div>
          <div className="mb-4">
            <p>
              東海方言は、岐阜県、静岡県、愛知県で話される方言で、文法的には「〜やねん」や「〜やで」などの終助詞を使うことが特徴です。
            </p>
            <p>
              동해 방언은, 기후현, 시즈오카현, 아이치현에서 말해지는 방언으로,
              문법적으로는 {"'"}〜야넨{"'"}이나 {"'"}〜야데{"'"} 등의 종결어미를
              사용하는 것이 특징입니다.
            </p>
          </div>
          <div className="mb-4">
            <p>例えば、「そうやねん」は「そうだよ」という意味です。</p>
            <p>
              예를 들면, {"'"}소우야넨{"'"}은 {"'"}그래요{"'"}라는 뜻입니다.
            </p>
          </div>
          <div className="mb-4">
            <p>また、音韻的には、母音の短縮や弱化が起こります。</p>
            <p>또한, 음운적으로는, 모음의 단축이나 약화가 일어납니다.</p>
          </div>
          <div className="mb-4">
            <p>例えば、「すごい」は「すげえ」や「すげ」になります。</p>
            <p>
              예를 들면, {"'"}스고이{"'"}는 {"'"}스게에{"'"}나 {"'"}스게{"'"}로
              변합니다.
            </p>
          </div>
          <div className="mb-4">
            <p>
              北陸方言は、新潟県、富山県、石川県、福井県で話される方言で、文法的には「〜べ」や「〜だべ」などの終助詞を使うことが特徴です。
            </p>
            <p>
              호쿠리쿠 방언은, 니가타현, 도야마현, 이시카와현, 후쿠이현에서
              말해지는 방언으로, 문법적으로는 {"'"}〜베{"'"}나 {"'"}〜다베{"'"}{" "}
              등의 종결어미를 사용하는 것이 특징입니다.
            </p>
          </div>
          <div className="mb-4">
            <p>例えば、「そうだべ」は「そうだよ」という意味です。</p>
            <p>
              예를 들면, {"'"}소우다베{"'"}는 {"'"}그래요{"'"}라는 뜻입니다.
            </p>
          </div>
          <div className="mb-4">
            <p>
              また、音韻的には、母音の長さやアクセントの高低が重要な役割を果たします。
            </p>
            <p>
              또한, 음운적으로는, 모음의 길이나 악센트의 높낮이가 중요한 역할을
              합니다.
            </p>
          </div>
          <div className="mb-4">
            <p>
              例えば、「かったり」は「勝った」という意味ですが、「かったりー」は「疲れた」という意味になります。
            </p>
            <p>
              예를 들면, {"'"}카타리{"'"}는 {"'"}이겼다{"'"}라는 뜻입니다만,{" "}
              {"'"}카타리ー{"'"}는{"'"}피곤하다{"'"}라는 뜻이 됩니다.
            </p>
          </div>
          <div className="mb-4">
            <p>中部地方の方言は、地域によっても細かく違いがあります。</p>
            <p>중부 지방의 방언은, 지역에 따라서도 세세하게 다릅니다.</p>
          </div>
          <div className="mb-4">
            <p>
              例えば、山梨県の方言は、関東地方との交流の影響で、他の中部地方の方言とは異なる特徴を持っています。
            </p>
            <p>
              예를 들면, 야마나시현의 방언은, 중부 지방과의 교류의 영향으로,
              다른 중부 지방의 방언과는 다른 특징을 가지고 있습니다.
            </p>
          </div>
          <div className="mb-4">
            <p>
              山梨県の方言は、文法的には「〜べ」や「〜ずら」などの終助詞を併用することが特徴です。
            </p>
            <p>
              야마나시현의 방언은, 문법적으로는 {"'"}〜베{"'"}나 {"'"}〜즈라
              {"'"} 등의 종결어미를 병용하는 것이 특징입니다.
            </p>
          </div>
          <div className="mb-4">
            <p>
              音韻的には、母音の縮小や鼻音化のほかに、子音の濁音化や促音化などが起こります。
            </p>
            <p>
              음운적으로는, 모음의 축소나 코음화 외에도, 자음의 덧소리화나
              재치음화 등이 일어납니다.
            </p>
          </div>
          <div className="mb-4">
            <p>
              例えば、「ぶしかる」は「座る」という意味ですが、「ぶしゃる」は「ぶつかる」という意味になります。
            </p>
            <p>
              예를 들면, {"'"}부시카루{"'"}는 {"'"}앉다{"'"}라는 뜻입니다만,{" "}
              {"'"}부샤루{"'"}는{"'"}부딪치다{"'"}라는 뜻이 됩니다.
            </p>
          </div>
          <div className="mb-4">
            <p>
              また、長野県の方言は、東西に分断された地形の影響で、東信越方言と西信越方言という２つの異なる方言が存在します。
            </p>
            <p>
              또한 나가노현의 방언은 동서로 분단된 지형의 영향으로 동신에츠
              방언과 서신에츠 방언이라는 두 가지 다른 방언이 존재합니다.
            </p>
          </div>
          <div className="mb-4">
            <p>
              東信越方言は、文法的には「〜だべ」や「〜だよ」などの終助詞を使うことが特徴です。
            </p>
            <p>
              동신에쓰 방언은 문법적으로는 {"'"}~다베{"'"}나 {"'"}~야{"'"}와
              같은 종조사를 사용하는 것이 특징입니다.
            </p>
          </div>
          <div className="mb-4">
            <p>音韻的には、母音の短縮や弱化が起こります。</p>
            <p>음운적으로는 모음의 단축이나 약화가 일어납니다.</p>
          </div>
          <div className="mb-4">
            <p>例えば、「すごい」は「すげえ」や「すげ」になります。</p>
            <p>
              예를 들면 {"'"}대단하다{"'"}는 {"'"}대단하다{"'"}나 {"'"}대단하다
              {"'"}가 됩니다.
            </p>
          </div>
          <div className="mb-4">
            <p>
              西信越方言は、文法的には「〜や」や「〜やで」などの終助詞を使うことが特徴です。
            </p>
            <p>
              서신에츠 방언은 문법적으로는 {"'"}~야{"'"}나 {"'"}~야로{"'"} 등의
              종조사를 사용하는 것이 특징입니다.
            </p>
          </div>
          <div className="mb-4">
            <p>音韻的には、母音の縮小や鼻音化などが起こります。</p>
            <p>음운적으로는 모음의 축소나 비음화 등이 일어납니다.</p>
          </div>
          <div className="mb-4">
            <p>
              例えば、「のっこのっこ」は「暖かい」という意味ですが、「のっこ」は「乗っこ」という意味になります。
            </p>
            <p>
              예를 들어, {"'"}노코의 코{"'"}는 {"'"}따뜻하다{"'"}라는 뜻이지만,{" "}
              {"'"}노코{"'"}는{"'"}타기{"'"}라는 뜻이 됩니다.
            </p>
          </div>
          <div className="mb-4">
            <p>
              中部地方の方言は、日本の中でも多様性に富んだ方言であり、地理的な条件や歴史的な背景によって形成された独自の言語文化を持っています。
            </p>
            <p>
              중부지방의 방언은 일본 내에서도 다양성이 풍부한 방언이며, 지리적인
              조건이나 역사적인 배경에 의해 형성된 독자적인 언어문화를 가지고
              있습니다.
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
