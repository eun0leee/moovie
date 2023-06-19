# 🔎 Vaniila JS로 영화검색 사이트 만들기 🔎

비동기와 SPA를 중점적으로하여 JavaScript를 공부하고자 프로젝트를 시작했습니다. OMDB API 라는 Open API를 활용하여 async/await으로 비동기처리하는 SPA 웹 영화검색사이트를 만들었습니다.

## 🔎 사이트

- [Demo Site](https://moovie-omdb.netlify.app/)

## 🔎 기술스택

<img alt="Html" src ="https://img.shields.io/badge/HTML-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/> 
<img alt="JavaScript" src ="https://img.shields.io/badge/JavaScript-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=white"/> <br/>
<img src="https://img.shields.io/badge/parcel-FF9A00?style=for-the-badge&logo=parcel&logoColor=white"> <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">  
<img src="https://img.shields.io/badge/babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white"> 
<img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">

## 🔎 화면구성

| 메인 검색 페이지(검색전)  |  메인 검색 페이지(검색후)   |
| :-------------------------------------------: | :------------: |
|  <img width="329" src="https://github.com/eun0leee/mjff-clone/assets/90189513/cb43a959-1ee4-4cc0-931b-f45ec7269e12"/> |  <img width="329" src="https://github.com/eun0leee/mjff-clone/assets/90189513/5a766bad-bdff-4ece-afc2-07f24456eed9"/>|  
| 상세페이지   |     |  
| <img width="329" src="https://github.com/eun0leee/mjff-clone/assets/90189513/5f7b778e-d337-415f-98da-620faf266729"/>   |   |


## 🔎 구현내용

### ⌨️ 영화 검색, 로딩 애니메이션, 무한스크롤
- 영화 제목으로 검색 가능하고 검색된 결과의 영화 목록을 볼 수 있습니다.
- 검색결과 보기 전까지 로딩 애니메이션이 동작합니다.
- 무한스크롤 기능을 사용하여 영화 검색결과를 추가적으로 볼 수 있습니다.
- 포스터가 없는 경우 대체이미지를 보여줍니다.

### ⌨️ 페이지 이동
- 검색결과에서 하나의 영화 포스터를 클릭하면, 영화 상세페이지로 이동합니다.
- 검색페이지와 상세페이지로 이동시, 서버로 데이터가 전송되지 않고 URL 만 바뀌면서 내용을 보여주는 SPA(Single Page Applicaiton)을 pushState와 popState를 이용해 PJAX방식으로 구현했습니다.
- 영화 상세페이지에서는 고화질의 포스터를 출력합니다.

### ⌨️ 추가 설명
- jQuery, React, Vue 등 JS 라이브러리와 프레임워크를 사용하지 않고, Vanilla JavaScript 로 만들었습니다.
- 스타일(CSS)은 SCSS 를 사용하였습니다.
- js 모듈화를 통해 가독성과 유지보수에 용이하도록 했습니다.
- API 비동기 처리는 async, await을 사용했습니다.

## 🔎 구현내용 상세, 해결한 것, 회고
- 자세한 내용은 블로그 포스팅에서 보실 수 있습니다.
  - [Vaniila JS로 영화검색 사이트 만들기(OMDB API를 활용한 SPA 웹사이트)](https://velog.io/@eun0leee/영화검색-사이트OMDB-API-를-활용한)
- 주요 구현 내용 포스팅
  - [[HTML] 대체 이미지](https://velog.io/@eun0leee/HTML-%EB%8C%80%EC%B2%B4-%EC%9D%B4%EB%AF%B8%EC%A7%80)
  - [[JS] type=module 과 defer](https://velog.io/@eun0leee/JS-typemodule-%EA%B3%BC-defer)
  - [[JS] Vanilla JS로 라이브러리없이 무한스크롤 구현하기](https://velog.io/@eun0leee/JS-Vanilla-JavaScript%EB%A1%9C-%EB%AC%B4%ED%95%9C%EC%8A%A4%ED%81%AC%EB%A1%A4-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)
  - [[JS] Vanilla JS로 SPA 라우터 구현](https://velog.io/@eun0leee/JS-Vanilla-Javascript%EB%A1%9C-SPA-%EB%A7%8C%EB%93%A4%EA%B8%B0)

## 🔎 디렉토리 구조
```
┣ 📦src
┃ ┣ 📂css
┃ ┃ ┃ ┣ 📜main.scss
┃ ┃ ┃ ┗ #️⃣reset-css.css
┃ ┣ 📂js
┃ ┃ ┃ ┣ 📜api.js
┃ ┃ ┃ ┗ 📜handlePushstate.js
┃ ┣ 📂pages
┃ ┃ ┣ 📂Detail
┃ ┃ ┃ ┣ 📜detailMarkup.js
┃ ┃ ┃ ┗ 📜index.js
┃ ┃ ┗ 📂Search
┃ ┃ ┃ ┗ 📜index.js
┃ ┃ ┃ ┣ 📜searchData.js
┃ ┃ ┃ ┣ 📜searchMarkup.js
┃ ┃ ┃ ┣ 📜searchResultsRender.js
┗ ┗ ┗ ┗ 📜searchYearOption.js
┣ 📦static
┃ ┣ 📂assets
┗ ┗ ⭐️favicon.ico
┣ 📜.postcssrc.js
┣ 📜index.html
┣ 📜index.js
┣ 📜package-lock.json
┣ 📜package.json
┗ 📜README.md
```
