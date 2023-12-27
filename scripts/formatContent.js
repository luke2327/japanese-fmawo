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
  const title = `i am sorry to have opened the casket`;
  const titleFormat = title.split(" ").join("-");
  const filename = lastIndexNumber + "-" + titleFormat;
  const fullFilename = filename + ".mdx";
  let content = `
  # 일본 속담: "開けて悔しき玉手箱"

  ## 히라가나
  あけてくやしきたまてばこ
  
  ## 읽는 법
  아케테 쿠야시키 타마테바코
  
  ## 번역
  열어서 후회하는 보석 상자
  
  ## 이야기 부분
  일본의 한 마을에서, 사람들이 보석 상자를 열고 그 내용물에 놀라거나 실망하는 모습이 보였습니다. 이것은 되돌릴 수 없는 행동을 후회하는 것을 상징합니다. 이 속담은 되돌릴 수 없는 결정에 대한 후회를 나타냅니다.
  
  ## 해석
  이 속담은 한번 열어버린 상자는 다시 되돌릴 수 없다는 것을 의미합니다. 즉, 한번 결정한 일에 대해 후회해도 소용없다는 것을 상징합니다.
  
  ## 적용 예
  1. 개인적인 결정: 되돌릴 수 없는 결정을 내리고 후회하는 상황.
  2. 비즈니스: 한번 결정된 사업 계획에 대한 후회.
  3. 감정적 반응: 충동적인 행동 후의 후회와 교훈.
  
  ## 사용 예문
  1. 開けて悔しき玉手箱、彼女はその選択を後悔した。
     열어서 후회하는 보석 상자, 그녀는 그 선택을 후회했다.
     
  2. この決定は開けて悔しき玉手箱だった。
     이 결정은 열어서 후회하는 보석 상자였다.
  
  3. 彼は開けて悔しき玉手箱のように、行動を後悔している。
     그는 열어서 후회하는 보석 상자처럼, 행동을 후회하고 있다.
  
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
