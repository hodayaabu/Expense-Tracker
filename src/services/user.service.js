import { storageService } from './async-storage.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const STORAGE_KEY_USER_DB = 'users'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
    getUsers,
    getById,
    update,
    getEmptyUser
}

window.userService = userService

function getUsers() {
    return storageService.query(STORAGE_KEY_USER_DB)
}

async function getById(userId) {
    const user = await storageService.get(STORAGE_KEY_USER_DB, userId)
    return user
}

async function update(userToUpdate) {
    const user = await getById(userToUpdate.id)

    const updatedUser = await storageService.put(STORAGE_KEY_USER_DB, { ...user, ...userToUpdate })
    if (getLoggedinUser().id === updatedUser.id) saveLocalUser(updatedUser)
    return updatedUser
}

async function login(userCred) {
    const users = await storageService.query(STORAGE_KEY_USER_DB)
    const user = users.find(user => user.username === userCred.username)
    if (user) {
        return saveLocalUser(user)
    } else {
        throw 'Invalid user name'
    }
}

async function signup(userCred) {

    const user = await storageService.post('users', userCred)
    return saveLocalUser(user)
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
}

function getEmptyUser() {
    return {
        username: '',
        email: '',
        password: '',
    }
}

function saveLocalUser(user) {
    user = { id: user._id, username: user.username, imgUrl: user.imgUrl, email: user.email }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}
