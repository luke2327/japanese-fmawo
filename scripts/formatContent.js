import fs from "fs";

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
  const title = `A good workman is apt to make mistakes in his penmanship is a bad workman`;
  const titleFormat = title.split(" ").join("-");
  const filename = lastIndexNumber + "-" + titleFormat;
  const fullFilename = filename + ".mdx";
  let content = `
  # 일본 속담: "弘法にも筆の誤り"

  ## 히라가나
  こうぼうにもふでのあやまり
  
  ## 읽는 법
  코보우니모 후데노 아야마리
  
  ## 번역
  코보 다이시도 붓 실수를 한다
  
  ## 이야기 부분
  일본의 유명한 스님 코보 다이시는 서예에서도 명인으로 알려졌습니다. 어느 날, 그는 중요한 경전을 필사하던 중 실수를 했습니다. 이를 본 제자들은 놀랐지만, 코보 다이시는 웃으며 말했습니다. "모두가 실수를 할 수 있다. 나도 예외는 아니다." 이 일화는 '弘法にも筆の誤り'라는 속담으로 전해져 내려오고 있습니다.
  
  ## 해석
  이 속담은 '아무리 능숙한 사람이라도 실수를 할 수 있다'는 것을 의미합니다. 전문가라 할지라도 완벽할 수는 없음을 나타내는 표현입니다.
  
  ## 적용 예
  1. 직장: 능력 있는 직원이 간혹 실수를 하는 경우.
  2. 학교: 우수한 학생도 가끔 시험에서 실수할 때.
  3. 일상생활: 숙련된 요리사도 요리를 할 때 실수하는 순간.
  
  ## 사용 예문
  1. 弘法にも筆の誤りだ。
     코보 다이시도 붓 실수를 한다.
     
  2. 彼も弘法にも筆の誤りの瞬間がある。
     그에게도 코보 다이시도 붓 실수를 하는 순간이 있다.
  
  3. 完璧を求めすぎず、弘法にも筆の誤りを思い出して。
     완벽함을 지나치게 추구하지 말고, 코보 다이시도 붓 실수를 한다는 것을 기억해라.
  
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
