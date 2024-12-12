import { useContext, useState } from "react";
import TvContext from "../context/TvContext";

export default function SearchBar() {
  const { setSearchFilmTv } = useContext(TvContext);
  const [formData, setFormData] = useState({ title: "" });
  const handleFormData = (e) =>
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));

  const handleOnclick = () => {
    setSearchFilmTv(formData.title);
    setFormData({ title: "" });
  };

  return (
    <>
      <pre>{JSON.stringify(formData)}</pre>
      <div>
        <input
          type="text"
          placeholder="Cerca un film o una serie tv"
          name="title"
          value={formData.title}
          onChange={handleFormData}
        />
        <button onClick={handleOnclick}>Cerca</button>
      </div>
    </>
  );
}
