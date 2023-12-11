import AnimeCard from "./AnimeCard";

export function AnimeGrid({ data }: any) {
  return (
    <>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-16 w-full max-w-4xl xl:max-w-6xl">
        {data.data.map((anime: any) => (
          <AnimeCard
            id={anime.mal_id}
            key={anime.mal_id}
            image={anime.images.jpg.image_url}
            title={anime.title}
            genre={anime.genres[0].name}
          />
        ))}
      </section>
    </>
  );
}
