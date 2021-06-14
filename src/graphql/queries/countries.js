import { gql } from "@apollo/client";

export const COUNTRIES = gql`
    query GetCountries($filter: String){
        countries: Country(filter: { OR: [{ name_contains: $filter }, { alpha3Code_contains: $filter }] }) {
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