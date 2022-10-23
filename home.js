const baseURL='https://6353739ca9f3f34c3752aeb7.mockapi.io/home/'
//home?sortBy=author&order=asc articles?sortBy=author&order=asc
let articleContent=document.getElementById('articles-container')

let getArticle = async () => {
    let response = await fetch(baseURL + 'article?sortBy=id&order=desc', {
        method: 'GET'
    })

    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }

    let articles = await response.json()

    articlesContainer.innerHTML= ''

    articles.forEach(article => {

        let articleContent = article.content

        let articleContentShort = articleContent.substr(0, articleContent.indexOf('.'))

        let articleElement = document.createElement('div')
        
        articleElement.className = 'm-5 card m-5 card-group card-img-top'

        articleElement.innerHTML = `
        <div class="card">
        <img src="${gmbr.jpeg}" class="card-img-top">
        </div>
        <div class="card-body">
            <h5 class="card-title">${article.title}</h5>
            <p class="card-text">${articleContentShort}</p>
            <a  href="detail-page.html" onclick="localStorage.setItem('articleId', ${article.id})">Detail</a>
            </div>
        `

        articlesContainer.append(articleElement)
    });
}

getArticle()