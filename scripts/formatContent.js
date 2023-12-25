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
  const title = `a pail-house is profitable in the wind blows`;
  const titleFormat = title.split(" ").join("-");
  const filename = lastIndexNumber + "-" + titleFormat;
  const fullFilename = filename + ".mdx";
  let content = `
  # 일본 속담: "風が吹けば桶屋が儲かる"

  ## 히라가나
  かぜがふけばおけやがもうかる
  
  ## 읽는 법
  카제가 후케바 오케야가 모우카루
  
  ## 번역
  바람이 불면 통나무 장수가 돈을 번다
  
  ## 이야기 부분
  일본의 한 마을에서, 강한 바람이 불어서 사람들이 통나무를 더 사게 되었습니다. 이것은 예상치 못한 상황에서 간접적인 이익을 얻는 것을 상징합니다. 이 속담은 관련 없는 사건에서 예상치 못한 이익을 얻는 것을 나타냅니다.
  
  ## 해석
  이 속담은 한 사건이 다른 사람에게 예상치 못한 이익을 가져다 줄 수 있다는 것을 의미합니다. 즉, 간접적인 방법으로 이득을 얻는 것을 상징합니다.
  
  ## 적용 예
  1. 비즈니스: 한 사건이 다른 사업에 영향을 주어 이익을 가져다주는 경우.
  2. 일상생활: 예상치 못한 상황에서 간접적인 이익을 얻는 경우.
  3. 사회적 상황: 한 사건이 다른 분야에 긍정적인 영향을 미치는 경우.
  
  ## 사용 예문
  1. 風が吹けば桶屋が儲かるように、彼のビジネスは予期せぬ好機に恵まれた。
     바람이 불면 통나무 장수가 돈을 벌듯이, 그의 비즈니스는 예기치 않은 좋은 기회에 복을 받았다.
     
  2. この事故は風が吹けば桶屋が儲かる状況を作った。
     이 사고는 바람이 불면 통나무 장수가 돈을 버는 상황을 만들었다.
  
  3. その政策の変更は風が吹けば桶屋が儲かる効果をもたらした。
     그 정책의 변경은 바람이 불면 통나무 장수가 돈을 버는 효과를 가져왔다.
  
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
