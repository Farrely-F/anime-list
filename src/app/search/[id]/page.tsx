import AnimeCard from "@/components/AnimeCard";
import { fetchAPI } from "@/lib/api";

export default async function Search({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = await fetchAPI(`/anime?q=${id}`);

  return (
    <main className="flex min-h-screen flex-col py-24 px-8 lg:p-24">
      <h1>Search Results:</h1>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-16 w-full max-w-4xl xl:max-w-6xl">
        {data.data.map((item: any) => (
          <AnimeCard
            key={item.mal_id}
            title={item.title}
            id={item.mal_id}
            genre={item.genres[0]?.name}
            image={item.images.jpg.image_url}
          />
        ))}
      </section>
    </main>
  );
}
