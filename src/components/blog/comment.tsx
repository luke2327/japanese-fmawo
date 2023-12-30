/**
 * 이 파일은 React와 TypeScript를 사용하여 댓글 작성 기능을 구현합니다.
 * 사용자가 댓글을 입력할 수 있는 텍스트 영역과 댓글을 게시할 수 있는 버튼을 포함합니다.
 */

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function Comment() {
  return (
    <div className="mt-12 flex flex-col gap-2 font-skybori">
      <label>댓글</label>
      <div className="grid w-full gap-2">
        <Textarea className="w-full h-[80px]"></Textarea>
        <Button>작성</Button>
      </div>
    </div>
  );
}
