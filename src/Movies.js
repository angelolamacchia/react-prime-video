import React from 'react';

const Movies = ({ movies, linkImg, posterNotFound }) => {
  console.log(movies);
  return (
    <>
      {movies && movies.length > 0 ? (
        movies.map((el) => {
          //console.log(el);
          //if (movies) {console.log(movies.length);}
          const consoleLog = ()=> {
            if(el.overview) {
              alert(el.overview);
            }
          }

          return (
            <div key={el.id} className="col-6 col-md-4 col-lg-3">
              <div className="card my_card">
                <h3 className="card_title">{el.original_title}</h3>
                {/* <div>{el.overview}</div> */}
                {el.poster_path ? (
                  <img src={linkImg + el.poster_path} alt="#" />
                ) : (
                  <img src={posterNotFound} />
                )}
                {el.overview ? <button onClick={consoleLog}>Trama</button> : null}
              </div>
            </div>
          );
        })
      ) : movies == undefined ? (
        <div className="no_films"></div>
      ) : (
        <div className="no_search"><img src="img/404-pagina-non-trovata.jpeg" alt="no_search" /></div>
      )}
    </>
  );
};

export default Movies;
