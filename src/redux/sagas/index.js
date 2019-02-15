import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios'


function* bookSaga(){
  yield takeEvery('FETCH_BOOKS', fetchBooks);
  yield takeEvery('ADD_BOOKS', postBooks);
}

function* fetchBooks(action){
  try {
    const serverResponse = yield axios.get('/api/addbooks');
    const action = {type: 'SET_BOOKS', payload: serverResponse.data};
    yield put(action); // triggers the reducer
    } catch(error){
      console.log('Error in axios GET: ', error);
      alert('Something Went Wrong!');
    }
}

function* postBooks(action){
  try{
    yield axios.post('/api/addbooks', action.payload);
    console.log('action.payload: ', action.payload);
    
    const nextAction = {type: 'FETCH_BOOKS'};
    yield put(nextAction);
  } catch (error) {
    console.log('Error in POST');
    alert('There is a problem in POST');
  }
}

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    bookSaga(),
  ]);
}
