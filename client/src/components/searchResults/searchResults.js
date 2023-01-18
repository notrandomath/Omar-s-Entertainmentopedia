import "./searchResults.scss";
import { useNavigate } from "react-router-dom";

export default function SearchResults({ listOfAnime, toAdd }) {
  const navigate = useNavigate();

  return (
    <div className="searchResults">
      <div className="anime">
        {listOfAnime.map((value, key) => {
          return (
            <div className="animeEntry">
              <button
                onClick={
                  toAdd
                    ? () => {
                        navigate("/add-extended", {
                          state: { malEntry: value },
                        });
                      }
                    : () => {window.location.href = value.link;}
                }
              >
                <div className="left">
                  <h3>{value.title}</h3>
                  rating: {value.rating}/10
                </div>
                <div className="right">
                  <img src={value.img} alt="" />
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
