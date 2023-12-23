import KeywordSearch from "@/components/blog/keyword-search";
import ProverbPage from "@/components/blog/proverb";

export default function BlogPage({ params }) {
  if (params.slug === "sprite.svg") {
    return;
  }

  return (
    <div>
      <KeywordSearch />
      <ProverbPage keyword={params.slug} />
    </div>
  );
}
