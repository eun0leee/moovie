import search from '/src/pages/Search/index';
import detail from '/src/pages/Detail/index';

search();

document.addEventListener('urlchange', async (e) => {
  let url = e.target.baseURI;
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
});
