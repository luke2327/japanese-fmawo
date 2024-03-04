import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const recommendList = [
  {
    region: "chubu",
    index: 1,
    title: "주부지방 방언",
  },
  {
    region: "chugoku",
    index: 1,
    title: "주고쿠지방 방언",
  },
  {
    region: "hokkaido",
    index: 1,
    title: "홋카이도지방 방언",
  },
  {
    region: "kansai",
    index: 1,
    title: "간사이지방 방언",
  },
  {
    region: "kanto",
    index: 1,
    title: "간토지방 방언",
  },
  {
    region: "osaka",
    index: 1,
    title: "오사카 방언 1",
  },
  {
    region: "osaka",
    index: 2,
    title: "오사카 방언 2",
  },
  {
    region: "osaka",
    index: 3,
    title: "오사카 방언 3",
  },
  {
    region: "kyushu",
    index: 1,
    title: "규슈 방언",
  },
  {
    region: "shikoku",
    index: 1,
    title: "시고쿠지방 방언",
  },
  {
    region: "tohoku",
    index: 1,
    title: "도호쿠지방 방언",
  },
];

export default function InformationRecommend() {
  const randomList = [
    ...new Set(
      Array.from({ length: recommendList.length }, () =>
        Math.floor(Math.random() * recommendList.length)
      )
    ),
  ];

  return (
    <div className="max-w-xl overflow-x-scroll flex gap-2 mt-4">
      {randomList.map((recommend, index) => (
        <div
          key={index}
          className={clsx(
            "border dark:border-neutral-600 rounded-sm min-w-[120px] sm:min-w-[140px]",
            "hover:bg-[#000] dark:hover:bg-[#fff] hover:bg-opacity-5 dark:hover:bg-opacity-10 transition-all"
          )}>
          <Link
            href={`/dialects/info/${recommendList[recommend].region}/${recommendList[recommend].index}`}>
            <Image
              src={`/images/information/${recommendList[recommend].region}/${recommendList[recommend].index}.png`}
              alt={recommendList[recommend].title}
              width={200}
              height={200}
              className="rounded-t-sm"
            />
            <div className="p-2">
              <h2 className="text-sm">{recommendList[recommend].title}</h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
