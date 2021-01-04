export interface CompetenciasInterface {
    "count": number,
    "competitions": Array<
        {
            "id": string,
            "area": {
                "id": number,
                "name": string,
                "countryCode": string,
                "ensignUrl": string
            },
            "name": string,
            "code": string,
            "currentSeason": {
                "id": number,
                "starDate": string,
                "endDate": string,
                "currentMatchday": number,
                "winner": string
            },
            "lastUpdated": string
        }
    >
}
