export default function MaxWidthContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-6xl border-x-zinc-500 min-h-screen mx-auto">
      {children}
    </div>
  );
}
