import { geist } from "@/fonts";

const H1 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <h1 className={`${geist.className} ${className}`}>{children}</h1>;
};

export { H1 };
