import { gql, makeVar } from '@apollo/client';

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

export const PEOPLE_QUERY = gql`
    query allPeople {
    people @rest(type: "PeoplePayload", path: "people/") {
        results @type(name: "Person") {
        name
        }
    }
}`;