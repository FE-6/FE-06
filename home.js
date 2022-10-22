const API_KEY='f25bcc9af2de4b2d8c1733c730470b64';
const HEADLINES_NEWS= 'https://newsapi.org/v2/top-headlines?country=id&apiKey=f25bcc9af2de4b2d8c1733c730470b64';
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=id&category=technology&pageSize=8&apiKey=f25bcc9af2de4b2d8c1733c730470b6";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f25bcc9af2de4b2d8c1733c730470b64";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

// const main = document.getElementById('main');
// const form = document.getElementById('form');
// const search = document.getElementById('search');

// getNews(HEADLINES_NEWS);

// function getNews(url) {
//     fetch(url).then(res => res.json()).then(data => {
//       console.log(data.results);
//       showNews(data.results);
//     })
// }

// function showNews(data) {
//   main.innerHTML = '';

//   data.forEach(news => {
//      const {title, urlToImage, description} = news;
//      const newsEl = document.createElement('div');
//      newsEl.classList.add('news');
//      newsEl.innerHTML = `
//           <img src="${urlToImage}" alt="${title}">

//           <div class="card-body">
//               <h5>${title}</h5>
//               <p class="${description}"></span>
//           </div>
//    `

//  main.appendChild(newsEl);
//  })
// }

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const searchTerm = search.value;

//   if(searchTerm) {
//     getNews(SEARCH_NEWS+'&query='+searchTerm)
//   }else{
//     getMovies(HEADLINES_NEWS);
//   }

// })