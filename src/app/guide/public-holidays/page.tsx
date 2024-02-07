export const metadata = {
  title: "Holidays",
  description:
    "현재 일본에는 연간 16일간의 공공 휴일이 있습니다. 여행 일정을 고민할 때 이들 공휴일이 언제이며 어떤 일을 축하하는 날인지 알고 있으면 편리합니다. | 現在、日本には年間 16 日間の公共休日があります。 旅行日程を悩む時、これらの祝日がいつでどんなことを祝う日なのか知っていると便利です。 | Currently, there are 16 public holidays a year in Japan. When you're thinking about your itinerary, it's convenient to know when these holidays are and what you're celebrating.",
};

export default function Page() {
  return (
    <section>
      <div id="guide-page" className="max-w-xl w-full mx-auto font-skybori">
        <h1 className="text-xl mb-4 md:text-2xl">일본의 공휴일</h1>
        <h2 className="text-lg">특징</h2>
        <hr className="my-1" />
        <p className="mb-4">
          일본에서 제정하는 공휴일은 총 16일로, 음력 형태의 공휴일이 없고 모두
          양력으로만 쉬며, 일요일과 겹칠 경우 다음날에 쉴 수 있는
          대체공휴일제도를 시행하고 있다.
        </p>
        <p>
          그리고 법정공휴일은 아니지만 일본은 대략 12월28일부터 1월3일까지
          대부분의 회사가 휴일이다.(직종에 따라 12월 24일 크리스마스 이브 3시에
          퇴근해서 1월5일까지 더 길게 쉬는 곳들도 꽤 된다.)
        </p>
      </div>
    </section>
  );
}
