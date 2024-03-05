"use client";

import { Button } from "@/components/ui/button";
import { getUUID } from "@/lib/utils";
import { DownloadIcon } from "lucide-react";

type Props = {
  url: string;
  className?: string;
};

export default function DownloadLink({ url, className }: Props) {
  async function download() {
    const res = await fetch(url);
    const blob = await res.blob();
    const downloadLink = window.URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = downloadLink;
    a.download = `${getUUID()}.png`;
    a.click();
  }
  return (
    <Button onClick={download} className={className}>
      ダウンロード
      <DownloadIcon strokeWidth={1.7} size={16} />
    </Button>
  );
}
