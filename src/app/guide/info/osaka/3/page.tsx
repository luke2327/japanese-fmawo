import { Metadata } from "next";

export const metadata: Metadata = {
  publisher: "MW",
  title: "MW | 오사카 다운 표현",
  description:
    "‘모오카리맛가’에 대한 답변으로는 ‘보치보치댄나’로 정해져있습니다...",
  openGraph: {
    title: "MW | 오사카 다운 표현",
    description:
      "‘모오카리맛가’에 대한 답변으로는 ‘보치보치댄나’로 정해져있습니다...",
    url: "https://fmawo.com/guide/info/osaka/3",
    siteName: "MW",
    locale: "ko_KR",
    type: "website",
  },
};

export default function InfoOsaka() {
  return (
    <div>
      {/* header */}
      <div></div>
      <h1 className="text-3xl">오사카 다운 표현</h1>
      <hr className="mt-2 mb-4"></hr>
      <div className="font-bold">
        <p>‘모오카리맛가(벌이는 어때요?)’</p>
        <p>‘보치보치댄나(그럭저럭요)’</p>
      </div>
      <p className="mb-4">
        굉장히 오사카 다운 인사말입니다. 특히 장사하는 사람들 사이에서 사용되고
        있습니다. 이 ‘모오카리맛가’에 대한 답변으로는 ‘보치보치댄나’로 정해져
        있습니다. ‘보치보치’는 인사말 외에도, 대략적인 상태를 표현할 때도 자주
        사용합니다.
      </p>
      <h2 className="text-xl">에필로그</h2>
      <hr className="mt-2 mb-4"></hr>
      <p>
        어떠셨나요? 예부터 상인의 도읍이기도 하며, 코미디가 번성한 오사카. 그런
        오사카에서는 커뮤니케이션이 발달하여 다양한 종류의 말이 있습니다. 여느
        일본어와도 다른 오사카 말의 세계. 언어의 문화가 풍부한 오사카 사투리를
        꼭 한번 접해보시기 바랍니다.
      </p>
    </div>
  );
}
