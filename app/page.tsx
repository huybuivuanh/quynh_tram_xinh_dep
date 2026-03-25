import Image from "next/image";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";

export default function Home() {
  const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH && process.env.NEXT_PUBLIC_BASE_PATH !== ""
      ? process.env.NEXT_PUBLIC_BASE_PATH
      : "";

  return (
    <PageWrapper contentClassName="mx-auto max-w-lg">
      <div className="flex w-full flex-col items-center gap-6 sm:gap-8 md:gap-10">
        <h1 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
          QuynhTramXinhDep
        </h1>
        <p className="text-center text-lg font-bold text-red-500">
          Nhấn Vào Trái Tym Nhó 😙
        </p>
        <div className="relative mx-auto w-fit max-w-full">
          <Image
            src={`${basePath}/Envelope.png`}
            alt="Envelope"
            width={320}
            height={320}
            className="h-auto w-100 max-w-full sm:w-60 md:w-70 lg:w-80"
            sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
            priority
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <Link
              href="/questions"
              aria-label="Nhấn vào trái tim"
              className="pointer-events-auto h-16 w-16 rounded-full opacity-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 sm:h-20 sm:w-20"
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
