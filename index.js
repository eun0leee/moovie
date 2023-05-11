import search from '/src/pages/Search/index';
import detail from '/src/pages/Detail/index';

const router = async () => {
  // 라우터 배열
  const routes = [
    { path: '', view: search },
    {
      path: 'detail',
      view: async () => {
        await detail(location.pathname.split('/')[2]);
      },
    },
  ];

  // 라우터 매치
  const routerMatchs = routes.map((route) => {
    return {
      route,
      isMatch: location.pathname.split('/')[1] === route.path,
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

window.addEventListener('popstate', router);
