import { gql } from "@apollo/client";

const COUNTRIES = gql `
    {
        countries {
            name
            code
        }
    }
`;

export default COUNTRIES;