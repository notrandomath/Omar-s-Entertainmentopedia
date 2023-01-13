import "./searchResults.scss"

export default function SearchResults({listOfAnime, setListOfAnime}) {
    return (
        <div className="searchResults">
            <div className="anime">
            {listOfAnime.map((value, key) => {
                return <div className="animeEntry">
                    <a href={value.link}>
                        <div className="left">
                            <h3>{value.title}</h3>
                            rating: {value.rating}/10
                        </div>
                        <div className="right">
                            <img src={value.img} alt=""/>
                        </div>
                    </a>
                </div>;
            })}
            </div>
        </div>
    )
}