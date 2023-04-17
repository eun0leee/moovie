const routes = {
  404: '/pages/404.html',
  '/': '/pages/search.html',
  '/movie': '/pages/movie.html',
};

const getRouteHtml = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const $contents = document.getElementById('contents');
  await fetch(route)
    .then((response) => {
      return response.text();
    })
    .then((text) => {
      $contents.innerHTML = text;
    });
};

const handleRoute = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, '', event.target.href);
  getRouteHtml();
};

window.onpopstate = () => {
  getRouteHtml();
};

getRouteHtml();

document.getElementById('search').addEventListener('click', handleRoute);
document.getElementById('movie').addEventListener('click', handleRoute);
