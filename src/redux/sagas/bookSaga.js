import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';



function* fetchBooks(action) {
    try {
        const serverResponse = yield axios.get('/api/addbooks');
        const action = {
            type: 'SET_BOOKS',
            payload: serverResponse.data
        };
        yield put(action); // triggers the reducer
    } catch (error) {
        console.log('Error in axios GET: ', error);
        alert('Something Went Wrong!');
    }
}

function* postBooks(action) {
    try {
        yield axios.post('/api/addbooks', action.payload);
        console.log('action.payload: ', action.payload);

        const nextAction = {
            type: 'FETCH_BOOKS'
        };
        yield put(nextAction);
    } catch (error) {
        console.log('Error in POST');
        alert('There is a problem in POST');
    }
}

function* deleteBooks(action) {
    try {
        yield axios.delete(`/api/addbooks/${action.payload}`);
        console.log('action.payload ', action.payload);

        const nextAction = {
            type: 'FETCH_BOOKS'
        };
        yield put(nextAction);
    } catch (error) {
        console.log('Error in DELETE: ', error);
        alert('Something went wrong')
    }
}

function* editBooks (action){
    try {
        yield axios.put(`api/addbooks/${action.payload.id}`);
        const nextAction = {
            type: 'FETCH_BOOKS'
        };
        yield put (nextAction);
    } catch (error) {
        console.log('Error in PUT: ', error);
        alert('Something Went Wrong');
    }
}

function* searchBooks (action){
    try {
        console.log('payload: ', action.payload.title);
        const searchTerm = (action.payload.title);
        
        const serverResponse = yield axios.get(`api/addbooks/search/${searchTerm}`);
        const action = {
            type: 'SET_BOOKS',
            payload: serverResponse
        };
        yield put(action);
    } catch (error) {
        console.log('Error in Search GET: ', error);
        alert(`There's a problem in GET for search`);
    }
}


function* bookSaga() {
    yield takeEvery('FETCH_BOOKS', fetchBooks);
    yield takeEvery('ADD_BOOKS', postBooks);
    yield takeEvery('DELETE_BOOKS', deleteBooks);
    yield takeEvery('EDIT_BOOKS', editBooks);
    yield takeEvery('SEARCH_BOOKS', searchBooks);
}

export default bookSaga;