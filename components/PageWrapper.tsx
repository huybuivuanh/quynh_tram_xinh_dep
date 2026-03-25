import type { ReactNode } from "react";

type PageWrapperProps = {
  children: ReactNode;
  contentClassName?: string;
};

export default function PageWrapper({
  children,
  contentClassName = "",
}: PageWrapperProps) {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-4 py-10 sm:px-6 sm:py-14 md:px-8 md:py-16">
      <div className={`w-full ${contentClassName}`.trim()}>{children}</div>
    </main>
  );
}
