import {AUTH_URL} from "../../constants/Database";

export const SIGNUP = 'SIGNUP'

export const signup = (email: string, password: string) => {
    return async dispatch => {
        try{
            const response = await fetch(AUTH_URL, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken:true
                })
            })
            const data = await response.json()
            dispatch({
                type: SIGNUP,
                token: data.idToken,
                userId: data.localId
            })
        }catch (e) {
            console.log({e})
        }
    }
}
