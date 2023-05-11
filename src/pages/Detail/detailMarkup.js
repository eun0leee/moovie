export const detailMarkup = ({
  detailPoster,
  detailTitle,
  detailYear,
  detailGenre,
  detailRuntime,
  detailPlot,
  detailRatingsImdb,
  detailRatingsRotten,
  detailRatingsMetacritic,
  detailDirector,
  detailActors,
}) => {
  return `
        <div class="detailContent-container">
          ${
            detailPoster !== 'N/A'
              ? `<img class="detailPoster" src=${detailPoster.replace(
                  'SX300',
                  'SX450'
                )} alt="${detailTitle} poster"/>`
              : ''
          }
          <div class="detailContent-desc" >
            <h3 class="detailTitle">${detailTitle}</h3>
            <ul class="detailInfo">
              ${detailYear ? `<li class="detailYear">${detailYear}</li>` : ''}
              ${
                detailGenre !== 'N/A'
                  ? `<li class="detailGenre">${detailGenre}</li>`
                  : ''
              }
              ${
                detailRuntime !== 'N/A'
                  ? `<li class="detailRuntime">${detailRuntime}</li>`
                  : ''
              }
            </ul>
            <p class="detailPlot">${
              detailPlot !== 'N/A...' ? detailPlot : 'There is no story.'
            }</p>
            ${
              !detailRatingsImdb &&
              !detailRatingsRotten &&
              !detailRatingsMetacritic
                ? ''
                : `
                <div class="group-ratings">
                  <h4>Ratings</h4>
                  <ul>
                    ${
                      detailRatingsImdb
                        ? `<li class="detailRatingsImdb">
                        <img src="https://images.squarespace-cdn.com/content/v1/57c984f1cd0f68cf4beeb2cf/1472911999963-KH5AM2AU675ZGJUJEGQV/imdb+logo.png" alt="imdb logo"/>
                        ${detailRatingsImdb}
                      </li>`
                        : ''
                    }
                    ${
                      detailRatingsRotten
                        ? `<li class="detailRatingsRotten">
                        <img src="https://www.boxofficepro.com/wp-content/uploads/2019/08/Rotten.png" alt="Rotten Tomatoes logo"/>
                        ${detailRatingsRotten}
                      </li>`
                        : ''
                    }
                    ${
                      detailRatingsMetacritic
                        ? `<li class="detailRatingsMetacritic">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Metacritic_logo_original.svg/1200px-Metacritic_logo_original.svg.png" alt="Metacritic logo"/>
                        ${detailRatingsMetacritic}
                      </li>`
                        : ''
                    }
                  </ul>
                </div>`
            }
            
            ${
              detailDirector !== 'N/A'
                ? `
                <div>
                  <h4>Director</h4>
                  <p class="detailDirector">${detailDirector}</p>
                </div>`
                : ''
            }
            
            ${
              detailActors !== 'N/A'
                ? `
                <div>
                  <h4>Actors</h4>
                  <p class="detailActors">${detailActors}</p>
                </div>`
                : ''
            }
            
          </div>
        </div>
      `;
};
