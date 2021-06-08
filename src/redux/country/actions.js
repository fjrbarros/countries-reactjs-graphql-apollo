export const types = {
    SET_DATA_COUNTRY: 'SET_DATA_COUNTRY',
    UPDATE_DATA_COUNTRY: 'UPDATE_DATA_COUNTRY'
};

export function setDataCountry() {
    return { type: types.SET_DATA_COUNTRY };
}

export function updateDataCountry() {
    return { type: types.UPDATE_DATA_COUNTRY };
}