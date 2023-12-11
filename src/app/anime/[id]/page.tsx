import { fetchAPI } from "@/lib/api";
import Image from "next/image";

export default async function Anime({ params }: { params: { id: string } }) {
  const { id } = params;
  const {
    data: {
      title,
      synopsis,
      images,
      status,
      episodes,
      duration,
      rating,
      trailer,
    },
  } = await fetchAPI(`/anime/${id}`);

  //   console.log(data);

  return (
    <main className="min-h-screen flex flex-col">
      <div
        style={{ backgroundImage: `url(${trailer.images.large_image_url})` }}
        className="w-full h-[400px] bg-no-repeat bg-center bg-cover faded"
      />
      <div className="px-8 lg:px-28 -mt-72 relative">
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <Image
            src={images.jpg.image_url}
            alt={title}
            width={240}
            height={240}
            className="rounded-lg"
          />
          <div className="lg:self-end flex flex-col gap-1 mt-8 lg:mt-0">
            <h1 className="text-5xl font-bold">{title}</h1>
            <span className="bg-slate-700 text-white px-4 py-1 rounded-xl font-bold text-xs max-w-fit">
              {episodes} Episodes
            </span>
            <p>{status}</p>
            <p>{duration}</p>
            <p>{rating}</p>
          </div>
        </div>
        <div className="pb-16 flex flex-col gap-16">
          <p>{synopsis}</p>
          {trailer && (
            <iframe
              className="rounded-lg"
              src={trailer?.embed_url}
              height={"480"}
              width={"100%"}
            ></iframe>
          )}
        </div>
      </div>
    </main>
  );
}
