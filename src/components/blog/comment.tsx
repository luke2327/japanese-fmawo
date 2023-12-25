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
