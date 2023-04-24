import search from './js/search.js';
import movie from './js/movie.js';

const router = async () => {
  // 라우터 배열
  const routes = [
    { path: '/', view: search },
    { path: '/movie', view: movie },
  ];

  // 라우터 매치
  const routerMatchs = routes.map((route) => {
    return {
      route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = routerMatchs.find((routerMatch) => routerMatch.isMatch);

  if (!match) {
    match = { route: routes[0], isMatch: true };
  }

  // 매치된 내용 출력
  const view = new match.route.view();
  document.querySelector('#contents').innerHTML = await view.getHtml();
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

navigateTo(location.href);
