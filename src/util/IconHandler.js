import TvContext from "../context/TvContext";

export default function IconHandler() {
  const { Tv, Film } = useContext(TvContext);
  if (Tv.original_language || Film.original_language) {
    {
      original_language = `../assets/icons${original_language}`;
    }
  }
}
