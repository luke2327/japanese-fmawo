/**
 * 이 파일은 웹사이트의 Open Graph 이미지를 동적으로 생성하는 기능을 구현합니다.
 * Open Graph 이미지는 소셜 미디어 플랫폼에서 웹사이트를 공유할 때 표시되는 이미지입니다.
 * 이 파일에서는 게시물의 제목을 이미지에 포함시키고, 사용자 정의 폰트를 사용하여 제목을 렌더링합니다.
 *
 * `runtime` 상수는 이 함수가 실행되는 환경을 지정합니다.
 * `GET` 함수는 요청을 처리하고, Open Graph 이미지를 반환합니다.
 * `font` 상수는 사용자 정의 폰트를 로드합니다.
 * `ImageResponse` 객체는 Open Graph 이미지를 생성하고 반환합니다.
 */

import { config } from "@/lib/config";
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title");
  const font = fetch(
    new URL("../../../public/fonts/kaisei-tokumin-bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundImage: `url(${config.host}/og-bg.png)`,
        }}>
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: "flex",
            fontSize: 130,
            fontFamily: "Kaisei Tokumin",
            letterSpacing: "-0.05em",
            fontStyle: "normal",
            color: "white",
            lineHeight: "120px",
            whiteSpace: "pre-wrap",
          }}>
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "Kaisei Tokumin",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
