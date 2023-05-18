import search from '/src/pages/Search/index';
import detail from '/src/pages/Detail/index';

search();

const render = async () => {
  let url = window.location.href;
  let path = new URL(url).pathname;
  const searchParams = new URL(url).searchParams;
  const queryString = searchParams.get('id');

  switch (path) {
    case '/':
      search();
      break;
    case '/detail/':
      await detail(queryString);
      break;
    default:
  }
};

document.addEventListener('urlchange', () => {
  render();
});

window.addEventListener('popstate', () => {
  render();
});
