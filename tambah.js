const baseURL = 'https://6353739ca9f3f34c3752aeb7.mockapi.io/ayf/article'


const imgbbKey = 'c8e166e96143c923de73ab3fc70484fc'
const userId = localStorage.getItem('id')

const titleElement = document.querySelector('#title')
const contentElement = document.querySelector('#content')
const imageElement = document.querySelector('#image')
const adddButtonElement = document.getElementById('add-button')

let now = new Date().toISOString()
let formData = new FormData()

let postDataNews = async () => {
    formData.append("key", imgbbKey)
    formData.append("image", imageElement.files[0])

    let responseImgbb = await fetch("https://api.imgbb.com/1/upload", {
        method: 'POST',
        body: formData
    })

    let imgbb = await responseImgbb.json()

    const imageValue = imgbb['data'].display_url

    await fetch(baseURL + 'article', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: titleElement.value,
            name: nameElement.value,
            content: contentElement.value,
            image: imageValue,
            createdAt: now,
            userId: userId,
        })
    })

    window.location.href = 'dashboard.html'
}

adddButtonElement.addEventListener('click', (event) => {
    event.preventDefault()

    adddButtonElement.innerHTML = `
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    `

    postDataNews()
})
