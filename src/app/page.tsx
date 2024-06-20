import Generator from "@/components/generator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pb-4">
      <Generator />
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
