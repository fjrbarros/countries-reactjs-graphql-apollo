import { createStore as create, combineReducers } from 'redux';
import dataCountry from './country/reducers';

function createStore() {
    const reducers = combineReducers({ dataCountry });

    return create(reducers);
}

const store = createStore();

export default store;