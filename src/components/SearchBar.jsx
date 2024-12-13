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

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setSearchFilmTv(formData.title);
    setFormData({ title: "" });
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form className="d-flex" onSubmit={handleOnSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Cerca un film o una serie tv"
                name="title"
                value={formData.title}
                onChange={handleFormData}
              />
              <button className="btn btn-success" type="submit">
                Cerca
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
