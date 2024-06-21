import Generator from "@/components/generator";
import s1 from "@/assets/ccfb858a-4d80-4521-b158-ec8c0ce708d6.png";
import s2 from "@/assets/generated-image (2).png";
import s3 from "@/assets/generated-image (3).png";
import s4 from "@/assets/generated-image (4).png";
// import s5 from "@/assets/generated-image (5).png";
// import s6 from "@/assets/generated-image (6).png";
// import s7 from "@/assets/generated-image (7).png";
// import s8 from "@/assets/generated-image (8).png";
import s9 from "@/assets/generated-image (9).png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pb-4 relative overflow-x-hidden">
      <Image
        src={s1}
        alt="image"
        placeholder="blur"
        width={220}
        className="absolute bottom-12 size-32 lg:size-52 -right-3 block z-50 rounded-full rotate-3 lg:top-12 lg:right-16 transition-all hover:rotate-0"
      />
      <Image
        src={s2}
        alt="image"
        placeholder="blur"
        width={100}
        className="absolute hidden lg:block z-50 rounded-full -rotate-12 top-10 left-12 transition-all hover:rotate-0"
      />
      <Image
        src={s4}
        alt="image"
        placeholder="blur"
        width={120}
        className="absolute z-50 rounded-full -rotate-12 left-0 select-none size-20 lg:size-40 lg:bottom-12 lg:left-16 transition-all hover:rotate-0"
      />
      <Image
        src={s3}
        alt="image"
        placeholder="blur"
        width={150}
        className="absolute hidden lg:block -translate-x-12 z-50 rounded-full -rotate-6 bottom-4 left-1/2 transition-all hover:rotate-0"
      />

      <Image
        src={s9}
        alt="image"
        placeholder="blur"
        width={180}
        className="absolute hidden lg:block -translate-x-12 z-50 rounded-full -rotate-6 bottom-32 right-10 transition-all hover:rotate-0"
      />
      <Generator />
      <div className="absolute w-64 h-52 top-5 left-3 rounded-full bg-violet-800/30 blur-3xl -z-10" />
      <div className="absolute w-64 h-52 bottom-24 left-40 rounded-full bg-amber-500/30 blur-3xl -z-10" />
      <div className="absolute w-64 h-52 rounded-full top-0 -right-10 bg-red-500/30 blur-3xl -z-10" />
      <div className="absolute w-64 h-52 rounded-full md:bottom-40 right-40 bg-yellow-500/30 blur-3xl -z-10" />

      <footer className="py-2 px-3 md:absolute bottom-4 right-4 hover:px-4 rounded-md hover:scale-105 transition-all hover:-rotate-1 border shadow shadow-yellow-600">
        Created by{" "}
        <a
          href="https://bento.me/anish7"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Anish
        </a>
        ⚡
      </footer>
    </main>
  );
}
