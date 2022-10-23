const baseURL='https://6353739ca9f3f34c3752aeb7.mockapi.io/ayf/'

let articleElement = document.getElementById('articleContainer')

const articleId = localStorage.getItem('articleId')

let getUser = async (userId) => {
    let response = await fetch(baseURL + 'user/' + userId, {
        method: 'GET'
    })

    let user = await response.json()

    return user.full_name
}

let getArticle = async () => {
    let response = await fetch(baseURL + 'article/' + articleId, {
        method: 'GET'
    })

    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }

    let article = await response.json()
    
    let userName = await getUser(article.userId)
    let createdAt = new Date(article.createdAt)

    articleElement.innerHTML = `
    <divclass="berita-body container mx-5 mt-4">
        <h1 class="berita-judul col-sm-9 p-3">${article.title}</h1>
        <h6 class="berita-nama col-sm-9 p-3">${userName}</h6>
        <p>${createdAt.toDateString()}</p>
        <img src="${article.image}" alt="">
        <p class="berita-isi col-sm-9 p-3" style="text-align: justify;" >${article.content}</p>
    </div>
    `
}

getArticle()