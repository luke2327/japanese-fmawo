export default function InformationDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative z-10 bg-white dark:bg-[#111010] !bg-opacity-30 backdrop-blur-lg p-2">
      {children}
    </div>
  );
}
