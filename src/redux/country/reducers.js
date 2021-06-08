import { types } from './actions';

function dataCountry(state = [], action) {
    switch (action.type) {
        case types.SET_DATA_COUNTRY:
            // return getDataUpdateLocalStorage(action.data)
            return action.data
        default:
            return state;
    }
}

export default dataCountry;


// function getDataUpdateLocalStorage(data) {
//     debugger
//     const keysLocalStorage = Object.keys(localStorage);

//     keysLocalStorage.map(itemStorage => {
//         const findItem = data.findIndex(item => parseInt(item._id, 10) === parseInt(itemStorage.split('-')[1], 10));

//         if (findItem !== -1) {
//             data[findItem].name = 'aaaaaaaaaaaaaaaa';
//         }
//     });

//     return data;
// }