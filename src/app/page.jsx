import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "../libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let rekomen = await getNestedAnimeResponse("recommendations/anime", "entry");
  rekomen = reproduce(rekomen, 4);

  return (
    <>
      {/* ANIME TERFAMOUS */}

      <section>
        <Header title="MOST WATCHED" linkTitle="See All" linkHref="/populer" />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="RECOMMENDATION" linkHref="/populer" />
        <AnimeList api={rekomen} />
      </section>
    </>
  );
};

export default Page;
