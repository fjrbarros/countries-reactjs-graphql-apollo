import { gql } from "@apollo/client";

export const COUNTRIES = gql`
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

export const COUNTRY_ID = gql`
    query GetCountry($id: String){
        Country(_id: $id) {
            _id
            name
            capital
            area
            population
            topLevelDomains {
                name
            }
            flag {
                svgFile
            }
        }
    }
`;