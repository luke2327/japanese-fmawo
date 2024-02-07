import { cx } from "class-variance-authority";

export default function InfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      id="info-page"
      className={cx("max-w-xl w-full mx-auto font-skybori tracking-wider")}>
      {children}
    </section>
  );
}
