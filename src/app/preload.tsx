"use client";

/**
 * 이 파일은 웹사이트의 리소스를 사전에 로드하는 기능을 구현합니다.
 * 이를 통해 사용자가 페이지를 처음 방문할 때 필요한 리소스를 미리 로드하여 페이지 로딩 시간을 줄일 수 있습니다.
 * 현재는 'sprite.svg'라는 이미지 파일을 사전에 로드하도록 설정되어 있습니다.
 *
 * `PreloadResources` 함수는 사전에 로드할 리소스를 정의하고, null을 반환하여 화면에 아무 것도 표시되지 않게 합니다.
 */

import ReactDOM from "react-dom";

export function PreloadResources() {
  ReactDOM.preload("sprite.svg", { as: "image" });
  return null;
}
