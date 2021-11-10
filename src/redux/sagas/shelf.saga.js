import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchShelf() {
    try{
        const response = yield axios.get('/api/shelf');
        yield put({type: 'SET_SHELF', payload: response.data});
    } catch (err) {
        console.log('Error on fetchShelf: ', err);
        yield put({type: 'FETCH_ERROR'})
    }
}

function* addItem(action) {
    try{
        const {history} = action.payload
        yield axios.post('/api/shelf', action.payload.newItem)
        yield put({type: 'FETCH_SHELF'})
        history.push('/shelf')
    } catch (err) {
        console.log('Error on addItem: ', err);
        yield put({type: 'ADD_ERROR'})
    }
}

function* deleteItem(action) {
    try{ 
        yield axios.delete(`/api/shelf/${action.payload}`);
        yield put({type: 'FETCH_SHELF'})
    } catch (err) {
        console.log('Error on delete: ', err);
        yield put({type: 'DELETE_ERROR'})
    }
}

function* shelfSaga () {
    yield takeLatest('FETCH_SHELF', fetchShelf);
    yield takeLatest('ADD_ITEM', addItem);
    yield takeLatest('DELETE_ITEM', deleteItem)
}

export default shelfSaga;