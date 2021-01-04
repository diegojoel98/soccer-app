export interface EquiposInterface {
    "count": number,
    "competition": {
        "id": number,
        "area": {
            "name": string
        },
        "name": string
    },
    "teams": Array<{
        "id": number,
        "area": {
            "name": string
        },
        "name": string,
        "shortName": string,
        "tla": string,
        "crestUrl": string,
        "address": string,
        "website": string,
        "founded": string,
        "clubColors": string,
        "venue": string
    }>
}
