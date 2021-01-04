export interface CompeticionInterface {
    "id": number,
    "area": {
        "id": number,
        "name": string
    },
    "name": string,
    "emblemUrl": string,
    "currentSeason": {
        "id": number,
        "startDate": string,
        "endDate": string,
        "currentMatchday": number
    }
}
