import KeywordSearch from "@/components/blog/keyword-search";
import ProverbPage from "@/components/blog/proverb";

export const metadata = {
  title: "Proverb",
  description:
    "재미있는 일본과 한국의 속담을 배워봅시다. | 面白い日本と韓国のことわざを学びましょう。 | Let's learn some interesting Japanese and Korean proverbs.",
};

export default function BlogPage() {
  return (
    <div>
      <KeywordSearch />
      <ProverbPage />
    </div>
  );
}
