import renderSearch from '/js/renderSearch';
import renderDetail from '/js/renderDetail';

const router = async () => {
  // 라우터 배열
  const routes = [
    { path: '/', view: renderSearch },
    { path: '/detail', view: renderDetail },
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
  match.route.view();
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

navigateTo(location.href);
