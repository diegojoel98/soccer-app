export interface GoleadoresInterface {
    "count": number,
    "competition": {
        "code": string
    },
    "scorers": Array<{
        "player": {
            "id": number,
            "name": string,
            "dateOfBirth": string,
            "nationality": string,
            "position": string
        },
        "team": {
            "id": number,
            "name": string
        },
        "numberOfGoals": number
    }>
}
