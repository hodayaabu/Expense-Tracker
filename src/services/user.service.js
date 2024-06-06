import Axios from 'axios'

var axios = Axios.create({
    withCredentials: true,
})

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

const BASE_URL =
    window.process.env.NODE_ENV === 'production'
        ? '/api/'
        : '//localhost:3030/api/'

const BASE_AUTH_URL = BASE_URL + 'auth/'

export const userService = {
    login,
    signup,
    logout,
    getEmptyUser,
    getLoggedinUser,
}


async function login(credentials) {
    const { data: user } = await axios.post(BASE_AUTH_URL + 'login', credentials)
    if (user) {
        return saveLocalUser(user)
    }
    return null
}

async function signup(credentials) {
    const { data: user } = await axios.post(BASE_AUTH_URL + 'signup', credentials)
    return saveLocalUser(user)
}

async function logout() {
    await axios.post(BASE_AUTH_URL + 'logout')
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
}

function saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}


function getEmptyUser() {
    return {
        username: '',
        email: '',
        password: '',
        imgUrl: ''
    }
}

