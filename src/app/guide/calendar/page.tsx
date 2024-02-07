import { JKCalendar } from "@/components/jk-calendar";

export const metadata = {
  title: "Calendar",
  description:
    "현재 일본에는 연간 16일간의 공공 휴일이 있습니다. 여행 일정을 고민할 때 이들 공휴일이 언제이며 어떤 일을 축하하는 날인지 알고 있으면 편리합니다. | 現在、日本には年間 16 日間の公共休日があります。 旅行日程を悩む時、これらの祝日がいつでどんなことを祝う日なのか知っていると便利です。 | Currently, there are 16 public holidays a year in Japan. When you're thinking about your itinerary, it's convenient to know when these holidays are and what you're celebrating.",
};

export default function Page() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
      {/* <JKCalendar /> */}
    </section>
  );
}
