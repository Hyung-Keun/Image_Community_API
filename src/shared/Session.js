const setSession = (nickname, value) => {
    sessionStorage.setItem(nickname, value);
}

const getSession = (nickname) => {

    return sessionStorage.getItem(nickname);
}


const deleteSession = (nickname) => {
    console.log(deleteSession("TEST_ID"))
    return sessionStorage.removeItem(nickname);
}

const clearSession = () => {
    sessionStorage.clear()
}

export {setSession, getSession, deleteSession, clearSession}