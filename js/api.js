export async function getMovies(title, page, year) {
  try {
    const res = await fetch(
      `https://omdbapi.com/?apikey=7035c60c&s=${title}&page=${page}&y=${year}`
    );
    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
