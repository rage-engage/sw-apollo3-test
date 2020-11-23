import { gql, makeVar } from '@apollo/client';

export interface Person {
    name:       string;
    height:     string;
    mass:       string;
    hair_color: string;
    skin_color: string;
    eye_color:  string;
    birth_year: string;
    gender:     string;
    homeworld:  string;
    films:      string[];
    species:    any[];
    vehicles:   string[];
    starships:  string[];
    created:    string;
    edited:     string;
    url:        string;
};

export interface PeopleData {
    people: {
        results: [Person]
    }
};

export interface PersonData {
    person: Person;
}

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
                height
            }
        }
    }
`;


export const GET_PERSON = gql`
    query getPerson($id: Int!) {
        person(id: $id) @rest(type: "Person", path: "people/{args.id}/") {
            name
        }
    }
`;