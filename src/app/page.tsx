import AnimeCard from "@/components/AnimeCard";
import { AnimeGrid } from "@/components/AnimeGrid";
import { fetchAPI } from "@/lib/api";
import { getRandomSlice } from "@/lib/shuffle";

export default async function Home() {
  const data = await fetchAPI(`/top/anime?limit=9`);
  const data2 = await fetchAPI(
    `/top/anime?page=${Math.floor(Math.random() * 10) + 1}`
  );

  const recomendation = getRandomSlice(data2?.data, 9);

  return (
    <main className="flex min-h-screen flex-col p-8 lg:p-24">
      <h1 className="text-xl font-bold my-16">Trending Right Now:</h1>
      <AnimeGrid data={data} />
      <h1 className="text-xl font-bold my-16">Recomendation:</h1>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-16 w-full max-w-4xl xl:max-w-6xl">
        {recomendation &&
          recomendation.map((item: any) => (
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
