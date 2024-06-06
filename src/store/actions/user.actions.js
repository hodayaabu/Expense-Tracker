import { userService } from "../../services/user.service.js"

import { SET_USER, ADD_USER } from "../reducers/user.reducer.js"

import { store } from "../store.js"

export async function saveUser(user) {
    try {
        const type = ADD_USER;
        const savedUser = await userService.save(user);
        store.dispatch({ type, user: savedUser });
        return savedUser;
    } catch (err) {
        console.log("Had issues adding user", err);
        throw err;
    }
}

export async function login(credentials) {
    try {
        const user = await userService.login(credentials)
        store.dispatch({
            type: SET_USER,
            user
        })
        return user
    } catch (err) {
        console.log('Cannot login', err)
        throw err
    }
}

export async function signup(credentials) {
    try {
        const user = await userService.signup(credentials)
        store.dispatch({
            type: SET_USER,
            user
        })
        return user
    } catch (err) {
        console.log('Cannot signup', err)
        throw err
    }
}

export async function logout() {
    try {
        await userService.logout()
        store.dispatch({
            type: SET_USER,
            user: null
        })
    } catch (err) {
        console.log('Cannot logout', err)
        throw err
    }
}