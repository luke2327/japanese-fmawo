import { config } from "src/lib/config";

export default async function Page() {
  const res = await fetch(config.apiHost + "/global-dict/category-list", {
    cache: "no-store",
  });
  const data = (await res.json()) as {
    result: Record<
      string,
      {
        category_no: number;
        category1: string;
        category2: string;
        category3: string;
      }[]
    >;
  };

  console.log(111, data);

  return (
    <div className="grid grid-cols-4">
      {Object.entries(data.result).map(([categoryTitle, val], idx) => (
        <div key={idx}>
          <p className="font-bold">{categoryTitle}</p>
          <div>
            {val.map((item) => (
              <p key={item.category_no}>{item.category3}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
