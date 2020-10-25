import { gql, makeVar } from '@apollo/client';

export interface Person {
    name: string
};

export interface PeopleData {
    people: {
        results: [Person]
    }
};

export const personTypePolicy = {
    fields: {
        name: {
            read(name:string) {
                if (name.includes("Vader")) {
                    console.log("Found Vader", name);
                }
                return name;
            }
        }
    }
}

export const GET_PEOPLE = gql`
    query allPeople {
        people @rest(type: "PeoplePayload", path: "people/") {
            results @type(name: "Person") {
                name
            }
        }
    }
`;