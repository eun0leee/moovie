# 🔎 Vaniila JS로 영화검색 사이트 만들기 🔎

JavaScript의 비동기와 SPA에 대해 공부하고자, OMDB API 라는 Open API를 활용하여 async/await으로 비동기처리하는 SPA 웹 영화검색사이트를 만들었습니다.

## 🔎 사이트

- [Demo Site](https://moovie-omdb.netlify.app/)

## 🔎 기술스택

<img alt="Html" src ="https://img.shields.io/badge/HTML-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/> <img alt="CSS3" src ="https://img.shields.io/badge/CSS3-FF9933.svg?&style=for-the-badge&logo=CSS3&logoColor=white"/> <img alt="JavaScript" src ="https://img.shields.io/badge/JavaScript-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/parcel-FF9A00?style=for-the-badge&logo=parcel&logoColor=white"> <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">  <img src="https://img.shields.io/badge/babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white"> <img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">

## 🔎 화면구성

| 메인 검색 페이지(검색전)  |  메인 검색 페이지(검색후)   |
| :-------------------------------------------: | :------------: |
|  <img width="329" src="https://github.com/eun0leee/mjff-clone/assets/90189513/cb43a959-1ee4-4cc0-931b-f45ec7269e12"/> |  <img width="329" src="https://github.com/eun0leee/mjff-clone/assets/90189513/5a766bad-bdff-4ece-afc2-07f24456eed9"/>|  
| 상세페이지   |     |  
| <img width="329" src="https://github.com/eun0leee/mjff-clone/assets/90189513/5f7b778e-d337-415f-98da-620faf266729"/>   |   |


## 🔎 구현내용

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

## 🔎 해결한 것
![](https://velog.velcdn.com/images/eun0leee/post/9ddaf2ed-e8c4-4b32-a032-0dab381202c1/image.gif)![](https://velog.velcdn.com/images/eun0leee/post/5bb50397-72c0-44e9-8524-b859c3d62da1/image.png)
- 프로그램 목록의 이미지 hover시, transition 효과 자연스럽지 못한 문제가 있었습니다.

![](https://velog.velcdn.com/images/eun0leee/post/d8e53350-50b8-477a-9be0-283551655751/image.gif)![](https://velog.velcdn.com/images/eun0leee/post/70054e83-cd21-4563-a107-d4456513063c/image.png)
- transition을 hover 에 작성하면, hover 될 때만 트랜지션이 적용된다는 것을 알게 됐습니다. mousedown 시의 상태변화에 대해서는 트랜지션이 동작하지 않는 것입니다. 따라서 img에 써줘서, img의 상태가 변화할 때에 대한 트랜지션이 동작하도록 변경하였습니다.

## 🔎 회고
* 프로젝트 첫 진행시에 작업한 것을 부트캠프 organazation에 pull quest 했고, 멘토님 및 다른 수강생분들의 코드리뷰를 받을 수 있었습니다. 코드리뷰와 다른 수강생분들의 작업물들을 보며, CSS 작업시 변수를 활용하거나 `calc()`를 사용했던 점, git commit 메시지를 잘 작성한 점, 가독성 좋은 코드를 작성한 점, 반응형 페이지를 제작한 점, 등대보고서 뷰어를 활용할 수 있다는 점에 대해 알게됐습니다. 첫 진행시에는 몰랐던 부분이기에 후에 리팩토링을 하면서 시도해보며 아쉬운 부분을 채우는 좋은 경험이었습니다.
* 리팩토링의 장점에 대해 알게 됐습니다. 복습도 되고 예전에 내가 쓴 코드를 보며 부족했던 것을 깨닫는 것 자체에서 성장했음을 느낄 수 있었습니다.
* 프로젝트가 진행되는 기간도 중요하지만, 앞 뒤로 프로젝트를 잘 시작하고 잘 마무리하는 것 또한 프로젝트의 중요한 일부라는 것을 깨달았습니다. 
