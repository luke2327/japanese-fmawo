import Link from "next/link";
import React from "react";

const ContentsPage: React.FC = () => {
  return (
    <div>
      <h1>Contents</h1>
      <li>
        <Link href="/contents/calendar/ko">2024</Link>
      </li>
    </div>
  );
};

export default ContentsPage;
