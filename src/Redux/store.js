import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { useSelector } from 'react-redux';
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { isLoaded, getFirebase } from 'react-redux-firebase';
import fbConfig from '../config/fbConfig';
import firebase from '../config/fbConfig';

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(fbConfig),
    ) 
);

const config = {
    userProfile: 'users', //where profiles are stored in the database
    useFirestoreForProfile: true,
}

export const rrfProps = {
    firebase,
    config,
    dispatch: store.dispatch,
    createFirestoreInstance,
    presence: 'presence', // where list of online users are stored in datbase
    sessions: 'sessions,'
};

export const AuthIsLoaded = ({ children }) => {
    const auth = useSelector(state => state.firebase.auth)
    if(!isLoaded(auth)) return <div className='container center white-text'>Loading screen...</div>;
    return children;
}
