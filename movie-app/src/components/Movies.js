const Movies = ({ movies, imgPath, getClassByRate }) => {
    return (
        <main id="main">
            {
                movies.map(item => {
                    const {id, poster_path, title, vote_average, overview} = item;
                    return (
                        <div className="movie" key={id}>
                            <img src={imgPath + poster_path} alt={title} />
                            <div className="movie-info">
                                <h3>{title}</h3>
                                <span className={getClassByRate(vote_average)}>{vote_average}</span>
                            </div>
                            <div className="overview">
                                <h3>Overview</h3>
                                {overview}
                            </div>
                        </div>
                    )
                })
            }
        </main>
    )
}

export default Movies;