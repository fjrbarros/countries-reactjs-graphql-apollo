export function validateForm(values, errorFn) {
    let msg;

    if (values.hasOwnProperty('name')) {
        if ((msg = validaTextoSimples(values.name, 'Nome'))) {
            errorFn('name', msg)
        }
    }

    if (values.hasOwnProperty('capital')) {
        if ((msg = validaTextoSimples(values.capital, 'Capital'))) {
            errorFn('capital', msg)
        }
    }

    if (values.hasOwnProperty('area')) {
        if ((msg = validaTextoSimples(values.area, 'Area'))) {
            errorFn('area', msg)
        }
    }

    if (values.hasOwnProperty('population')) {
        if ((msg = validaTextoSimples(values.population, 'População'))) {
            errorFn('population', msg)
        }
    }

    if (values.hasOwnProperty('topLevelDomain')) {
        if ((msg = validaTextoSimples(values.topLevelDomain, 'Top-level domain'))) {
            errorFn('topLevelDomain', msg)
        }
    }
}

function validaTextoSimples(item, text) {
    if (!item.toString().trim()) {
        return `${text} é obrigatório!`;
    }

    return '';
}