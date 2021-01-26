export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({
                type: 'LOGIN_SUCCESS',
            })
        }).catch((err) => {
            dispatch({
                type: 'LOGIN_ERROR',
                err
            })
        })
    }
}

export const signUp = (creds) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const firebase = getFirebase();

        firebase.auth().createUserWithEmailAndPassword(
            creds.email,
            creds.password
        ).then((response) => {
            return firestore.collection('users').doc(response.user.uid).set({
                firstName: creds.firstName,
                lastName: creds.lastName,
                initails: `${creds.firstName[0]}${creds.lastName[0]}`,
            })
        }).then(() => {
            dispatch({
                type: 'SIGNUP_SUCCESS',
            })
        }).catch((err) => {
            dispatch({
                type: 'SIGNUP_ERROR',
                err
            })
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({
                type: 'SIGNOUT_SUCCESS'
            })
        })
    }
}