"use client";

import slugify from "slugify";
import { Movie } from "@/lib/data-types";
import { Button } from "@/components/ui/button";

// export async function generateStaticParams() {
//   const res = await fetch("https://seleksi-sea-2023.vercel.app/api/movies");
//   const movies = await res.json();

//   return movies.map((movie: Movie) => ({
//     slug: slugify(movie.title),
//   }));
// }

async function getMovieDetail(slug: string): Promise<Movie> {
  const res = await fetch("https://seleksi-sea-2023.vercel.app/api/movies");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const movies = await res.json();

  const movie = movies.find(
    (item: Movie) => slugify(item.title.replace(":", "")) === slug
  );

  return movie;
}

const MovieDetail = async ({ params }: { params: { slug: string } }) => {
  const movie = await getMovieDetail(params.slug);

  return (
    <section className="h-screen max-h-[720px]">
      <div className="container">{movie.title}</div>
      <div className="container">{movie.poster_url}</div>
      <Button onClick={() => console.log(bg)}>bg</Button>
    </section>
  );
};

export default MovieDetail;
