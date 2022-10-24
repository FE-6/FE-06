const baseURL='https://6353739ca9f3f34c3752aeb7.mockapi.io/ayf/article'

let articleContainer = document.getElementById('articleContainer')

let getArticle = async () => {
    let response = await fetch(baseURL + '?sortBy=id&order=desc', {
        method: 'GET'
    })

    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }

    let articles = await response.json()

    articleContainer.innerHTML = ''

    articles.forEach(article => {

        let articleContent = article.content

        let articleContentShort = articleContent.substr(0, article.content.indexOf('.'))

        let articleElement = document.createElement('div')
        
        articleElement.className = 'm-2 card-group justify-content-center'

        articleElement.innerHTML = `
        <div class="m-2 card" style="width: 18rem; justify-content-center">
            <img src="${article.image}" class="card-img-top" style="width: 100%;" alt="">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">${articleContentShort}</p>
                    <a href="berita.html" class="btn btn-primary" onclick="localStorage.setItem('articleId', ${article.id})">Lihat Berita</a>
                </div>
        </div>
        `

        articleContainer.append(articleElement)
    });
}

getArticle();