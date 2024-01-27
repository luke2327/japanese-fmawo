export const metadata = {
  title: "Privacy policy",
  description: "Privacy policy",
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-xl flex flex-col justify-center mx-auto font-raleway">
      {children}
    </section>
  );
}
