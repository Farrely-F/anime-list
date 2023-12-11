export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <h1 className="font-bold text-2xl">AnimeLists Project Web</h1>

      <p>API from Jikan V4</p>
      <p>https://api.jikan.moe/v4/</p>

      <p>UI Built with NEXT UI and TailwindCSS</p>

      <p>Developed by Farr-F</p>
      <a
        className="px-4 py-2 bg-slate-900 rounded-xl text-white"
        href="https://github.com/Farrely-F"
        target="__blank"
      >
        Github
      </a>
    </main>
  );
}
