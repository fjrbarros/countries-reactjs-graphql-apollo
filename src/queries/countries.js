import { gql } from "@apollo/client";

const COUNTRIES = gql `
    {
        countries {
            name
            code
            capital
        }
    }
`;

export default COUNTRIES;