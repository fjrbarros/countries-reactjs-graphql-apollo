import { types } from './actions';

function dataCountry(state = [], action) {
    switch (action.type) {
        case types.SET_DATA_COUNTRY:
            return action.data
        default:
            return state;
    }
}

export default dataCountry;