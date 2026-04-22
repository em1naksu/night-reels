import { useEffect, useMemo, useState } from "react";

const API_KEY = "bae76178ae9eab993611cc382e657d2f";

export default function CineVault() {
  const films = useMemo(
    () => [
      { title: "The Godfather", type: "series" },
      { title: "Scarface", type: "single" },
      { title: "The Shawshank Redemption", type: "single" },
      { title: "The Matrix", type: "series" },
      { title: "The Prestige", type: "single" },
      { title: "Fight Club", type: "single" },
      { title: "Avatar", type: "series" },
      { title: "The Green Mile", type: "single" },
      { title: "Léon: The Professional", type: "single" },
      { title: "Interstellar", type: "single" },
      { title: "Goodfellas", type: "single" },
      { title: "The Hangover", type: "series" },
      { title: "The Town", type: "single" },
      { title: "The A-Team", type: "single" },
      { title: "Limitless", type: "single" },
      { title: "The Dark Knight", type: "series" },
      { title: "Bad Neighbors", type: "series" },
      { title: "Hansel & Gretel: Witch Hunters", type: "single" },
      { title: "Rocky", type: "series" },
      { title: "Grown Ups", type: "series" },
      { title: "Click", type: "single" },
      { title: "Bruce Almighty", type: "single" },
      { title: "Pixels", type: "single" },
      { title: "The Longest Yard", type: "single" },
      { title: "Hustle", type: "single" },
      { title: "Twilight", type: "series" },
      { title: "The Lord of the Rings", type: "series" },
      { title: "Forrest Gump", type: "single" },
      { title: "Saving Private Ryan", type: "single" },
      { title: "The Terminator", type: "series" },
      { title: "Gladiator", type: "single" },
      { title: "The Departed", type: "single" },
      { title: "Back to the Future", type: "series" },
      { title: "Indiana Jones and the Raiders of the Lost Ark", type: "series" },
      { title: "WALL-E", type: "single" },
      { title: "Shrek", type: "series" },
      { title: "Finding Nemo", type: "single" },
      { title: "3 Idiots", type: "single" },
      { title: "Braveheart", type: "single" },
      { title: "Toy Story", type: "series" },
      { title: "Fast & Furious 6", type: "series" },
      { title: "John Carter", type: "single" },
      { title: "Zombieland", type: "series" },
      { title: "Baywatch", type: "single" },
      { title: "The World's End", type: "single" },
      { title: "Shaun of the Dead", type: "single" },
      { title: "Tag", type: "single" },
      { title: "Me Before You", type: "single" },
      { title: "Hancock", type: "single" },
      { title: "Tropic Thunder", type: "single" },
      { title: "Night at the Museum", type: "series" },
      { title: "Catch Me If You Can", type: "single" },
      { title: "Brothers", displayTitle: "Kardeşler", searchTitle: "Brothers 2009", media: "movie", type: "single" },
      { title: "American Sniper", type: "single" },
      { title: "Taken", type: "series" },
      { title: "Ted", type: "series" },
      { title: "Men in Black", type: "series" },
      { title: "The Meg", type: "series" },
      { title: "The Mechanic", type: "single" },
      { title: "The Expendables", type: "series" },
      { title: "The Pacifier", type: "single" },
      { title: "The Last Witch Hunter", type: "single" },
      { title: "The Mummy", type: "series" },
      { title: "21 Jump Street", type: "series" },
      { title: "Megamind", type: "single" },
      { title: "Ice Age", type: "series" },
      { title: "How to Train Your Dragon", type: "series" },
      { title: "The 40-Year-Old Virgin", type: "single" },
      { title: "The Invention of Lying", type: "single" },
      { title: "Chicken Run", type: "series" },
      { title: "Ratatouille", type: "single" },
      { title: "The Lost City", type: "single" },
      { title: "The Mountain", type: "series" },
      { title: "Jupiter Ascending", type: "single" },
      { title: "G.I. Joe: The Rise of Cobra", type: "series" },
      { title: "Kingsman: The Secret Service", type: "series" },
      { title: "Van Helsing", type: "single" },
      { title: "Now You See Me", type: "series" },
      { title: "6 Underground", type: "single" },
      { title: "Warm Bodies", type: "single" },
      { title: "Deadpool", type: "series" },
      { title: "Big Hero 6", type: "single" },
      { title: "The Proposal", type: "single" },
      { title: "Red Notice", type: "single" },
      { title: "R.I.P.D.", type: "single" },
      { title: "Prince of Persia: The Sands of Time", type: "single" },
      { title: "Everest", type: "single" },
      { title: "Mad Max: Fury Road", type: "series" },
      { title: "Bronson", type: "single" },
      { title: "The Devil Wears Prada", type: "single" },
      { title: "Punch-Drunk Love", type: "single" },
      { title: "Get Smart", type: "single" },
      { title: "Bride Wars", type: "single" },
      { title: "Güneşi Gördüm", type: "single" },
      { title: "Madagascar", type: "series" },
      { title: "About Dry Grasses", type: "single" },
      { title: "Hükümet Kadın", type: "single" },
      { title: "Bir Baba Hindu", type: "single" },
      { title: "A.R.O.G", type: "single" },
      { title: "G.O.R.A.", type: "single" },
      { title: "Arif V 216", type: "single" },
      { title: "Uncharted", type: "single" },
      { title: "Pirates of the Caribbean: The Curse of the Black Pearl", type: "series" },
      { title: "The Lost City of Z", type: "single" },
      { title: "Dolittle", type: "single" },
      { title: "I Am Legend", type: "single" },
      { title: "Rush Hour", type: "series" },
      { title: "The Pursuit of Happyness", type: "single" },
      { title: "Pulp Fiction", type: "single" },
      { title: "I, Robot", type: "single" },
      { title: "The Bad Guys", displayTitle: "Kötü Adamlar", searchTitle: "The Bad Guys", media: "movie", type: "single" },
      { title: "Ali", type: "single" },
      { title: "This Means War", type: "single" },
      { title: "Wonder Woman", type: "series" },
      { title: "Jumanji", type: "series" },
      { title: "Hep Yek", type: "series" },
      { title: "Çakallarla Dans", type: "series" },
      { title: "Maskeli Beşler", displayTitle: "Maskeli Beşler", searchTitle: "Maskeli Beşler", media: "movie", type: "series" },
      { title: "The Martian", type: "single" },
      { title: "War of the Worlds", type: "single" },
      { title: "Paul", type: "single" },
      { title: "Kaybedenler Kulübü", type: "single" },
      { title: "Aykut Enişte", type: "series" },
      { title: "Ölümlü Dünya", type: "single" },
      { title: "Celal ile Ceren", type: "single" },
      { title: "The Pianist", type: "single" },
      { title: "The Last Castle", type: "single" },
      { title: "Se7en", type: "single" },
      { title: "Marry Me", type: "single" },
      { title: "Valentine's Day", type: "single" },
      { title: "Dumb and Dumber", type: "single" },
      { title: "Divergent", type: "series" },
      { title: "The Intern", type: "single" },
      { title: "Odd Thomas", type: "single" },
      { title: "Oblivion", type: "single" },
      { title: "Ride Along", type: "single" },
      { title: "Vikings", displayTitle: "Vikingler", searchTitle: "Vikings", media: "tv", type: "series" },
      { title: "Money Heist", displayTitle: "La Casa de Papel", searchTitle: "Money Heist", media: "tv", type: "series" },
      { title: "Peaky Blinders", displayTitle: "Peaky Blinders", searchTitle: "Peaky Blinders", media: "tv", type: "series" },
      { title: "Yellowstone", displayTitle: "Yellowstone", searchTitle: "Yellowstone", media: "tv", type: "series" },
      { title: "Homeland", displayTitle: "Homeland", searchTitle: "Homeland", media: "tv", type: "series" },
      { title: "Outlander", displayTitle: "Outlander", searchTitle: "Outlander", media: "tv", type: "series" },
      { title: "Better Call Saul", displayTitle: "Better Call Saul", searchTitle: "Better Call Saul", media: "tv", type: "series" },
      { title: "Rick and Morty", displayTitle: "Rick and Morty", searchTitle: "Rick and Morty", media: "tv", type: "series" },
      { title: "Outer Banks", displayTitle: "Outer Banks", searchTitle: "Outer Banks", media: "tv", type: "series" },
      { title: "Stranger Things", displayTitle: "Stranger Things", searchTitle: "Stranger Things", media: "tv", type: "series" },
      { title: "Narcos", displayTitle: "Narcos", searchTitle: "Narcos", media: "tv", type: "series" },
      { title: "Riverdale", displayTitle: "Riverdale", searchTitle: "Riverdale", media: "tv", type: "series" },
      { title: "Emily in Paris", displayTitle: "Emily in Paris", searchTitle: "Emily in Paris", media: "tv", type: "series" },
      { title: "Locke & Key", displayTitle: "Locke & Key", searchTitle: "Locke & Key", media: "tv", type: "series" },
      { title: "The Umbrella Academy", displayTitle: "The Umbrella Academy", searchTitle: "The Umbrella Academy", media: "tv", type: "series" },
      { title: "How to Sell Drugs Online (Fast)", displayTitle: "How to Sell Drugs Online (Fast)", searchTitle: "How to Sell Drugs Online (Fast)", media: "tv", type: "series" },
      { title: "Elite", displayTitle: "Elite", searchTitle: "Elite", media: "tv", type: "series" },
      { title: "Into the Night", displayTitle: "Into the Night", searchTitle: "Into the Night", media: "tv", type: "series" },
      { title: "Yakamoz S-245", displayTitle: "Yakamoz S-245", searchTitle: "Yakamoz S-245", media: "tv", type: "series" },
      { title: "Berlin", displayTitle: "Berlin", searchTitle: "Berlin", media: "tv", type: "series" },
      { title: "The Abandons", displayTitle: "The Abandons", searchTitle: "The Abandons", media: "tv", type: "series" },
      { title: "Lost", displayTitle: "Lost", searchTitle: "Lost", media: "tv", type: "series" },
      { title: "The Walking Dead", displayTitle: "The Walking Dead", searchTitle: "The Walking Dead", media: "tv", type: "series" },
      { title: "Safe", displayTitle: "Burada Olan Burada Kalır", searchTitle: "Safe", media: "tv", type: "series" },
      { title: "The Perfect Find", displayTitle: "Aşk Mektupları", searchTitle: "The Perfect Find", media: "movie", type: "single" },
      { title: "Aşk Sarhoşu", displayTitle: "Aşk Sarhoşu", searchTitle: "Sarhoş Gönüller", media: "movie", type: "single" },
      { title: "American Psycho", displayTitle: "Amerikan Sapığı", searchTitle: "American Psycho", media: "movie", type: "single" },
      { title: "The Adam Project", displayTitle: "The Adam Project", searchTitle: "The Adam Project", media: "movie", type: "single" },
      { title: "Aquaman", displayTitle: "Aquaman", searchTitle: "Aquaman", media: "movie", type: "single" },
      { title: "Angels & Demons", displayTitle: "Melekler ve Şeytanlar", searchTitle: "Angels & Demons", media: "movie", type: "single" },
      { title: "Heaven Is for Real", displayTitle: "Cennet Gibi", searchTitle: "Heaven Is for Real", media: "movie", type: "single" },
      { title: "Damsel", displayTitle: "Damsel", searchTitle: "Damsel", media: "movie", type: "single" },
      { title: "Army of Thieves", displayTitle: "Hırsızlar Ordusu", searchTitle: "Army of Thieves", media: "movie", type: "single" },
      { title: "Extraction", displayTitle: "Extraction", searchTitle: "Extraction", media: "movie", type: "series" },
      { title: "Society of the Snow", displayTitle: "Kar Kardeşliği", searchTitle: "Society of the Snow", media: "movie", type: "single" },
      { title: "Chernobyl", displayTitle: "Çernobil", searchTitle: "Chernobyl", media: "tv", type: "series" },
      { title: "Night Teeth", displayTitle: "Gecenin Dişleri", searchTitle: "Night Teeth", media: "movie", type: "single" },
      { title: "The Old Guard", displayTitle: "The Old Guard", searchTitle: "The Old Guard", media: "movie", type: "single" },
      { title: "Senior Year", displayTitle: "Liseye Dönüş", searchTitle: "Senior Year", media: "movie", type: "single" },
      { title: "Sandy Wexler", displayTitle: "Sandy Wexler", searchTitle: "Sandy Wexler", media: "movie", type: "single" },
      { title: "The Boys", displayTitle: "The Boys", searchTitle: "The Boys", media: "tv", type: "series" },
      { title: "Eternity", displayTitle: "Eternity", searchTitle: "Eternity", media: "movie", type: "single" },
    ],
    []
  );

  const [posterMap, setPosterMap] = useState({});
  const [detailMap, setDetailMap] = useState({});
  const [providerMap, setProviderMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedFilm, setSelectedFilm] = useState(null);

  const palette = [
    ["from-rose-900", "to-orange-700"],
    ["from-cyan-950", "to-blue-700"],
    ["from-zinc-900", "to-red-800"],
    ["from-emerald-950", "to-lime-700"],
    ["from-violet-950", "to-fuchsia-700"],
    ["from-slate-900", "to-indigo-700"],
    ["from-amber-950", "to-yellow-700"],
    ["from-teal-950", "to-sky-700"],
  ];

  const getPalette = (title) => {
    const sum = [...title].reduce((a, c) => a + c.charCodeAt(0), 0);
    return palette[sum % palette.length];
  };

  useEffect(() => {
    let cancelled = false;

    async function loadPosters() {
      try {
        const confRes = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`);
        const conf = await confRes.json();
        const base = conf?.images?.secure_base_url || "https://image.tmdb.org/t/p/";
        const size = "w500";

        const uniq = (arr) => [...new Set(arr.filter(Boolean))].slice(0, 6);

        async function getFullData(kind, id, fallbackOverview) {
          let overviewTr = fallbackOverview || "Açıklama bulunamadı.";
          let overviewEn = fallbackOverview || "Overview not available.";
          let trailer = null;
          let year = "-";
          let rating = "-";
          let cast = [];
          let writers = [];
          let producers = [];
          let providers = [];

          try {
            const trRes = await fetch(
              `https://api.themoviedb.org/3/${kind}/${id}?api_key=${API_KEY}&language=tr-TR&append_to_response=credits,videos`
            );
            const trData = await trRes.json();

            if (trData?.overview) overviewTr = trData.overview;
            year = (trData?.release_date || trData?.first_air_date || "-").slice(0, 4) || "-";
            rating = typeof trData?.vote_average === "number" ? trData.vote_average.toFixed(1) : "-";
            cast = uniq(trData?.credits?.cast?.map((p) => p.name));

            if (kind === "movie") {
              writers = uniq(
                trData?.credits?.crew
                  ?.filter((p) => ["Writer", "Screenplay", "Story", "Novel"].includes(p.job))
                  .map((p) => p.name)
              );
              producers = uniq(
                trData?.credits?.crew
                  ?.filter((p) => ["Producer", "Executive Producer"].includes(p.job))
                  .map((p) => p.name)
              );
            } else {
              writers = uniq([
                ...(trData?.created_by?.map((p) => p.name) || []),
                ...(trData?.credits?.crew
                  ?.filter((p) => ["Writer", "Screenplay"].includes(p.job))
                  .map((p) => p.name) || []),
              ]);
              producers = uniq([
                ...(trData?.production_companies?.map((p) => p.name) || []),
                ...(trData?.credits?.crew
                  ?.filter((p) => ["Executive Producer", "Producer"].includes(p.job))
                  .map((p) => p.name) || []),
              ]);
            }
          } catch {}

          try {
            const enRes = await fetch(
              `https://api.themoviedb.org/3/${kind}/${id}?api_key=${API_KEY}&language=en-US`
            );
            const enData = await enRes.json();
            if (enData?.overview) overviewEn = enData.overview;
          } catch {}

          try {
            const videoRes = await fetch(
              `https://api.themoviedb.org/3/${kind}/${id}/videos?api_key=${API_KEY}&language=en-US`
            );
            const videoData = await videoRes.json();
            const trailerItem =
              videoData?.results?.find((v) => v.site === "YouTube" && v.type === "Trailer" && v.official) ||
              videoData?.results?.find((v) => v.site === "YouTube" && v.type === "Trailer") ||
              videoData?.results?.find((v) => v.site === "YouTube");

            if (trailerItem?.key) {
              trailer = `https://www.youtube.com/watch?v=${trailerItem.key}`;
            }
          } catch {}

          try {
            const providerRes = await fetch(
              `https://api.themoviedb.org/3/${kind}/${id}/watch/providers?api_key=${API_KEY}`
            );
            const providerData = await providerRes.json();
            const tr = providerData?.results?.TR;
            providers = [
              ...(tr?.flatrate || []),
              ...(tr?.rent || []),
              ...(tr?.buy || []),
            ]
              .map((p) => p.provider_name)
              .filter(Boolean)
              .filter((v, i, arr) => arr.indexOf(v) === i)
              .slice(0, 8);
          } catch {}

          return {
            overviewTr,
            overviewEn,
            trailer,
            year,
            rating,
            cast,
            writers,
            producers,
            providers,
          };
        }

        const entries = await Promise.all(
          films.map(async (film) => {
            try {
              const query = encodeURIComponent(film.searchTitle || film.title);
              const preferredMedia = film.media;

              if (preferredMedia === "tv") {
                const tvRes = await fetch(
                  `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${query}&language=tr-TR`
                );
                const tvData = await tvRes.json();
                const tvFirst = tvData?.results?.[0];
                if (tvFirst?.poster_path) {
                  const full = await getFullData("tv", tvFirst.id, tvFirst.overview);
                  return [film.title, { poster: `${base}${size}${tvFirst.poster_path}`, ...full }];
                }
              }

              const movieRes = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=tr-TR`
              );
              const movieData = await movieRes.json();
              const movieFirst = movieData?.results?.[0];
              if (movieFirst?.poster_path) {
                const full = await getFullData("movie", movieFirst.id, movieFirst.overview);
                return [film.title, { poster: `${base}${size}${movieFirst.poster_path}`, ...full }];
              }

              const tvRes = await fetch(
                `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${query}&language=tr-TR`
              );
              const tvData = await tvRes.json();
              const tvFirst = tvData?.results?.[0];
              if (tvFirst?.poster_path) {
                const full = await getFullData("tv", tvFirst.id, tvFirst.overview);
                return [film.title, { poster: `${base}${size}${tvFirst.poster_path}`, ...full }];
              }

              return [film.title, { poster: null, overviewTr: "Açıklama bulunamadı.", overviewEn: "Overview not available.", trailer: null, year: "-", rating: "-", cast: [], writers: [], producers: [], providers: [] }];
            } catch {
              return [film.title, { poster: null, overviewTr: "Açıklama bulunamadı.", overviewEn: "Overview not available.", trailer: null, year: "-", rating: "-", cast: [], writers: [], producers: [], providers: [] }];
            }
          })
        );

        if (!cancelled) {
          const mapped = Object.fromEntries(entries);
          setPosterMap(Object.fromEntries(Object.entries(mapped).map(([k, v]) => [k, v?.poster || null])));
          setDetailMap(mapped);
          setProviderMap(Object.fromEntries(Object.entries(mapped).map(([k, v]) => [k, v?.providers || []])));
          setLoading(false);
        }
      } catch {
        if (!cancelled) setLoading(false);
      }
    }

    loadPosters();
    return () => {
      cancelled = true;
    };
  }, [films]);

  const selectedDetails = selectedFilm ? detailMap[selectedFilm.title] : null;

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(244,63,94,0.18),transparent_30%),radial-gradient(circle_at_right,rgba(59,130,246,0.14),transparent_26%),linear-gradient(to_bottom,#0a0a0a,#09090b)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:42px_42px] opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-[0.22em] text-white/75 uppercase backdrop-blur">
            Küratör seçkisi
          </div>

          <div className="mt-6 grid gap-10 md:grid-cols-[1.1fr_.9fr] md:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">Night Reels</h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/68 md:text-lg">
                Sinematik bir vitrin. Gerçek posterlerle çalışan, karanlık ve çekici bir seçki ekranı.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {films.slice(0, 6).map((film, i) => {
                const [from, to] = getPalette(film.title + i);
                return (
                  <div
                    key={film.title}
                    className={`aspect-[2/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${from} ${to} shadow-2xl shadow-black/30`}
                  >
                    {posterMap[film.title] ? (
                      <img src={posterMap[film.title]} alt={film.displayTitle || film.title} className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center p-4 text-center text-sm text-white/70">
                        {loading ? "Yükleniyor..." : film.displayTitle || film.title}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-12">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">Seçkideki yapımlar</h2>
            <p className="mt-2 text-sm text-white/55">Kartlara tıklayarak detayları görebilirsin.</p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            {films.length} yapım hazırlandı
          </div>
        </div>

        <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {films.map((film, index) => (
            <article
              key={`${film.displayTitle || film.title}-${index}`}
              onClick={() => setSelectedFilm(film)}
              className="group relative aspect-[2/3] cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/40"
            >
              {posterMap[film.title] ? (
                <img
                  src={posterMap[film.title]}
                  alt={film.displayTitle || film.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 p-4 text-center text-sm text-white/35">
                  {loading ? "Poster yükleniyor..." : film.displayTitle || film.title}
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/18 to-transparent" />

              <div className="relative flex h-full flex-col justify-between p-4 md:p-5">
                <div className="flex items-start justify-between gap-2">
                  <span className="rounded-full border border-white/15 bg-black/35 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm">
                    {film.type === "series" ? "Seri" : "Film"}
                  </span>
                  <span className="text-right text-[11px] font-medium text-white/55">Night Reels</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-semibold leading-5 text-white/95 drop-shadow md:text-base md:leading-6">
                    {film.displayTitle || film.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </section>

        {selectedFilm && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
            onClick={() => setSelectedFilm(null)}
          >
            <div
              className="relative z-10 grid max-h-[90vh] w-full max-w-6xl gap-4 overflow-auto rounded-3xl border border-white/10 bg-neutral-950 p-4 shadow-2xl shadow-black/50 sm:gap-6 sm:p-5 md:grid-cols-[300px_1fr] md:p-6 lg:grid-cols-[320px_1fr]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
                {posterMap[selectedFilm.title] ? (
                  <img
                    src={posterMap[selectedFilm.title]}
                    alt={selectedFilm.displayTitle || selectedFilm.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex aspect-[2/3] items-center justify-center p-4 text-center text-sm text-white/40">
                    Poster bulunamadı
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-5">
                <div>
                  <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/55">
                    {selectedFilm.type === "series" ? "Dizi / Seri" : "Film"}
                  </div>
                  <h3 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-3xl">
                    {selectedFilm.displayTitle || selectedFilm.title}
                  </h3>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                      <div className="text-[11px] uppercase tracking-[0.22em] text-white/45">TMDB Puanı</div>
                      <div className="mt-2 text-xl font-bold text-white">{selectedDetails?.rating || "-"}</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                      <div className="text-[11px] uppercase tracking-[0.22em] text-white/45">Yıl</div>
                      <div className="mt-2 text-xl font-bold text-white">{selectedDetails?.year || "-"}</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:col-span-2">
                      <div className="text-[11px] uppercase tracking-[0.22em] text-white/45">Oyuncular</div>
                      <div className="mt-2 text-sm leading-6 text-white/85">{selectedDetails?.cast?.join(", ") || "Bilgi yok"}</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:col-span-2">
                      <div className="text-[11px] uppercase tracking-[0.22em] text-white/45">Yazar / Yaratıcı</div>
                      <div className="mt-2 text-sm leading-6 text-white/85">{selectedDetails?.writers?.join(", ") || "Bilgi yok"}</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:col-span-2">
                      <div className="text-[11px] uppercase tracking-[0.22em] text-white/45">Yapımcı / Şirket</div>
                      <div className="mt-2 text-sm leading-6 text-white/85">{selectedDetails?.producers?.join(", ") || "Bilgi yok"}</div>
                    </div>
                  </div>

                  <div className="mt-5 space-y-4">
                    <div>
                      <div className="mb-2 text-[11px] uppercase tracking-[0.22em] text-white/45">Platformlar</div>
                      {providerMap[selectedFilm.title]?.length ? (
                        <div className="flex flex-wrap gap-2">
                          {providerMap[selectedFilm.title].map((provider) => (
                            <span
                              key={provider}
                              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/82"
                            >
                              {provider}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <div className="text-sm text-white/45">Türkiye için platform bilgisi bulunamadı.</div>
                      )}
                    </div>
                    <p className="text-sm leading-7 text-white/78 md:text-base">
                      {selectedDetails?.overviewTr || "Açıklama bulunamadı."}
                    </p>
                    <p className="text-xs leading-6 text-white/45 md:text-sm">
                      {selectedDetails?.overviewEn || "Overview not available."}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={() => setSelectedFilm(null)}
                    className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/[0.08]"
                  >
                    Kapat
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xs leading-6 text-white/45">
          This product uses the TMDB API but is not endorsed or certified by TMDB.
        </div>
      </main>
    </div>
  );
}
