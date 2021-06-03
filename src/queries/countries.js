import { gql } from "@apollo/client";

const COUNTRIES = gql `
    {
        Country {
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