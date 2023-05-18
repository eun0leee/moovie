# 🎞️영화 검색 사이트🎞️
* OMDb API를 활용한 영화 검색 사이트로 영화 제목으로 영화 목록 결과를 볼 수 있습니다.

## 👉 Stack

<img alt="Html" src ="https://img.shields.io/badge/HTML-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/> <img alt="CSS3" src ="https://img.shields.io/badge/CSS3-FF9933.svg?&style=for-the-badge&logo=CSS3&logoColor=white"/> <img alt="JavaScript" src ="https://img.shields.io/badge/JavaScript-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"> <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"> <img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">


## 👉 설명
- jQuery, React, Vue 등 JS 라이브러리와 프레임워크를 사용하지 않고, Vanilla JavaScript 로 만들었습니다.
- 스타일(CSS)은 SCSS 를 사용하였습니다.
- 영화 제목으로 검색 가능하고 검색된 결과의 영화 목록을 볼 수 있습니다.
- 검색결과 보기 전까지 로딩 애니메이션이 동작합니다.
- 무한스크롤 기능을 사용하여 영화 검색결과를 추가적으로 볼 수 있습니다.
- 포스터가 없는 경우 대체이미지를 보여줍니다.
- 검색결과에서 하나의 영화 포스터를 클릭하면, 영화 상세페이지로 이동합니다.
- 검색페이지와 상세페이지로 이동시, 서버로 데이터가 전송되지 않고 URL 만 바뀌면서 내용을 보여주는 SPA(Single Page Applicaiton)을 pushState와 popState를 이용해 PJAX방식으로 구현했습니다.
- 영화 상세페이지에서는 고화질의 포스터를 출력합니다.
- js 모듈화를 통해 가독성과 유지보수에 용이하도록 했습니다.
- API 비동기 처리는 async, await을 사용했습니다.
