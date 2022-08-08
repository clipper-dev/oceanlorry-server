import {atom} from 'recoil'

//profile generic user data
const username = atom({
    key: 'username',
    default: 'The Elden Beast'
})
const email = atom({
    key: 'email',
    default: 'The Elden Beast'
})
//preferences
//if new user then show tutorial
const newUser = atom({
    key: 'newUser',
    default: true,
})
const darkMode = atom({
    key: 'darkMode',
    default: false,
})

export {username, email, newUser, darkMode}