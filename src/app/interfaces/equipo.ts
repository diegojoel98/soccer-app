export interface EquipoInterface {
    "id": number,
    "area": {
        "name": string
    }
    "activeCompetitions": Array<{
        "id": number,
        "area": {
            "name": string
        }
        "name": string
    }>,
    "name": string,
    "shortName": string,
    "tla": string,
    "crestUrl": string,
    "address": string,
    "phone": string,
    "website": string,
    "email": string,
    "founded": number,
    "clubColors": string,
    "venue": string,
    "squad": Array<{
        "id": number,
        "name": string,
        "position": string,
        "dateOfBirth": string,
        "countryOfBirth": string,
        "nationality": string,
        "role": string
    }>,
    "lastUpdated": string
}
