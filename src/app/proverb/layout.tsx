export const metadata = {
  title: "Proverb",
  description:
    "재미있는 일본과 한국의 속담을 배워봅시다. | 面白い日本と韓国のことわざを学びましょう。 | Let's learn some interesting Japanese and Korean proverbs.",
};

export default function ProverbLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-xl w-full flex flex-col justify-center mx-auto">
      {children}
    </section>
  );
}
