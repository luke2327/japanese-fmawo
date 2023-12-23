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
  const title = `there is good fortune in leftovers`;
  const titleFormat = title.split(" ").join("-");
  const filename = lastIndexNumber + "-" + titleFormat;
  const fullFilename = filename + ".mdx";
  let content = `
  # 일본 속담: "残り物には福がある"

  ## 히라가나
  のこりものにはふくがある
  
  ## 읽는 법
  노코리모노니와 후쿠가 아루
  
  ## 번역
  남은 것에는 복이 있다
  
  ## 이야기 부분
  일본의 한 가정에서, 사람들이 남은 음식에서 예상치 못한 맛있는 요리를 만들었습니다. 이들은 남은 것에서 새로운 가치를 찾아냈습니다. 이 속담은 종종 간과되는 것들에서 가치를 발견할 수 있음을 나타냅니다.
  
  ## 해석
  이 속담은 종종 간과되는 것들에서 예상치 못한 가치나 좋은 기회를 발견할 수 있음을 나타냅니다. 남은 것이나 버려진 것에서 새로운 가능성을 찾는 것을 의미합니다.
  
  ## 적용 예
  1. 요리: 남은 재료로 새로운 요리를 만드는 경우.
  2. 비즈니스: 오래된 아이디어나 자원에서 새로운 기회를 찾는 것.
  3. 개인: 오래된 물건이나 관계에서 새로운 가치를 발견하는 것.
  
  ## 사용 예문
  1. 残り物には福があるというように、彼女は残った食材で素晴らしい料理を作った。
     남은 것에는 복이 있다는 것처럼, 그녀는 남은 식재료로 멋진 요리를 만들었다.
     
  2. その会社は残り物には福がある精神で、新しい事業を始めた。
     그 회사는 남은 것에는 복이 있다는 정신으로 새로운 사업을 시작했다.
  
  3. 古いものからも残り物には福があるを見つけることができる。
     오래된 것에서도 남은 것에는 복이 있다를 찾을 수 있다.  
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
