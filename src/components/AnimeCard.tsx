import Image from "next/image";
import Link from "next/link";

export default function AnimeCard({ title, image, genre, id }: Props) {
  return (
    <>
      <Link
        href={`/anime/${id}`}
        className="group relative overflow-hidden rounded-lg shadow transition hover:shadow-lg max-w-xs h-[420px] w-full"
      >
        <Image
          alt="Office"
          src={image}
          className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
          width={800}
          height={400}
        />

        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 w-full h-full flex items-end">
          <div className="p-4 sm:p-6">
            <span className="inline-block bg-gray-800 px-3 py-1 text-white text-sm font-medium rounded-full mb-2">
              {genre}
            </span>

            <h3 className="text-lg text-white h-[80px]">{title}</h3>
          </div>
        </div>
      </Link>
    </>
  );
}

type Props = {
  id: number;
  title: string;
  image: string;
  genre: string;
};
