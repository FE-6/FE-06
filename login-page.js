
let baseURL = 'https://6353739ca9f3f34c3752aeb7.mockapi.io/ayf/'

const emailElement = document.querySelector('#exampleInputEmail')
const passwordElement = document.querySelector('#exampleInputPassword')
const buttonLogin = document.getElementById('button')



let login = async (email, password) => {
    
    let response = await fetch(baseURL + 'login', {
        method: 'GET'
    })

    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }

    let data = await response.json()
    const user = await data.find(d => d.email === email)

    if(user){
        if (user.password === password) {
            localStorage.setItem("id", user.id)
            localStorage.setItem("full_name", user.full_name)
            // headerElement.innerHTML = "Login Success"

            window.location.href = "tambahberita.html"

        } else {
            headerElement.innerHTML = "Wrong Password"
        }
    } else {
        headerElement.innerHTML = "User Not Found"
    }

    buttonLogin.innerHTML = "Login"
    emailElement.value = ""
    passwordElement.value = ""
}

buttonLogin.addEventListener('click', (event) => {
    event.preventDefault()
    
    buttonLogin.innerHTML = `
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    `
    
    const email = emailElement.value
    const password = passwordElement.value

    login(email, password)
})