import { gql } from "@apollo/client";

const COUNTRIES = gql `
    query GetCountries($filter: _CountryFilter){
        Country(filter: $filter) {
            _id
            name
            capital
            flag {
                svgFile
            }
        }
    }
`;

export default COUNTRIES;