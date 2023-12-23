const fs = require("fs");

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);

  return result.toISOString().split("T")[0];
}

(() => {
  const lastIndexFile = fs
    .readdirSync("./src/content")
    .map((x) => {
      return x;
    })
    .pop();
  const lastFile = fs.readFileSync(`./src/content/${lastIndexFile}`, {
    encoding: "utf-8",
  });

  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(lastFile);
  const frontMatterBlock = match ? match[1] : {};
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim()] = value;
  });

  const lastIndexNumber = `0${Number(lastIndexFile.split("-")[0]) + 1}`;
  const title = `even a horseman is dressed`;
  const titleFormat = title.split(" ").join("-");
  const filename = lastIndexNumber + "-" + titleFormat;
  const fullFilename = filename + ".mdx";
  let content = `
  # 일본 속담: "馬子にも衣装"

  ## 히라가나
  まごにもいしょう
  
  ## 읽는 법
  마고니모 이쇼우
  
  ## 번역
  마부도 옷을 입으면
  
  ## 이야기 부분
  일본의 한 마을에서, 평범한 마부가 우아한 옷을 입고 변신한 모습을 사람들이 놀라워했습니다. 이 변화는 올바른 복장이 누구든지 멋지게 보이게 할 수 있음을 상징합니다. 이 속담은 적절한 복장이 모든 사람을 아름답게 만들 수 있다는 것을 나타냅니다.
  
  ## 해석
  이 속담은 올바른 복장이 모든 사람을 아름답게 만들 수 있다는 것을 의미합니다. 즉, 겉모습의 변화가 사람을 다르게 보이게 할 수 있음을 상징합니다.
  
  ## 적용 예
  1. 패션: 적절한 복장으로 인상을 개선하는 상황.
  2. 일상생활: 평소와 다른 옷을 입어 변화를 주는 경우.
  3. 직장: 직업적인 복장이 전문성을 강조하는 상황.
  
  ## 사용 예문
  1. 馬子にも衣装で、彼は全く違う人のようだった。
     마부도 옷을 입으면, 그는 전혀 다른 사람 같았다.
     
  2. 馬子にも衣装、彼女のスタイルは驚くほど変わった。
     마부도 옷을 입으면, 그녀의 스타일은 놀랍게 변했다.
  
  3. ミーティングの日は馬子にも衣装を心がける。
     미팅 날에는 마부도 옷을 입는 것을 염두에 둔다.
  
  `;

  const [, titleJA] = content.match(/일본 속담: "(.+)"/);
  const [, titleKO] = content.match(/## 번역\n\s+(.+)/);
  const summary = capitalizeFirstLetter(title) + ".";
  const publishedAt = addDays(metadata.publishedAt, 1);

  const meta = `---
title: "${titleJA} (${titleKO})"
publishedAt: "${publishedAt}"
summary: "${summary}"
writer: "Maria"
category: "language"
thumbnailUrl: "/images/${filename}/picture.jpg"
thumbnailWidth: 48
thumbnailHeight: 48
thumbnailDesc: "${titleJA} (${titleKO}) | ${summary}"
noImage: "true"
---\n`;

  const image = `\n<Image
  alt={\`${titleJA} (${titleKO}) | ${summary}\`}
  src={\`/images/${filename}/picture.jpg\`}
  width={1680}
  height={184}
/>\n`;

  content = content
    .replace(/일본 속담: "(.+)"/, "$1#ja-proverb-title")
    .replace("## 이야기 부분", "## 이야기");

  const separate = content.match(/.*/g);
  const index = separate.findIndex((x) => x.trim().includes("## 사용 예문"));
  const separate2 = separate.slice(index, 99);
  const origin = separate.slice(0, index);
  const examples = ["## 사용 예문", ""];

  separate2.forEach((x, idx) => {
    if (
      x.trim().startsWith("1. ") ||
      x.trim().startsWith("2. ") ||
      x.trim().startsWith("3. ")
    ) {
      const korean =
        separate2[idx + 2].trim() === ""
          ? separate2[idx + 1].trim()
          : separate2[idx + 2].trim();
      examples.push(`${x}<br /> ${korean}`);
    }
  });

  const fileContent = meta + image + origin.join("\n") + examples.join("\n");

  try {
    fs.mkdirSync(`./public/images/${filename}`);
  } catch (e) {
    // pass
  }

  fs.writeFileSync(`./src/content/${fullFilename}`, fileContent, {
    encoding: "utf-8",
  });

  console.log("Be created!\n" + fullFilename);
})();
