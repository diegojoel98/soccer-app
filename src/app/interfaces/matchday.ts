export interface MatchdayInterface {
    "count": number,
    "filters": {
        "matchday": number
    },
    "matches": Array<{
        "utcDate": string,
        "matchday": number,
        "group": string,
        "score": {
            "fullTime": {
                "homeTeam": number,
                "awayTeam": number
            }
        },
        "homeTeam": {
            "name": string
        },
        "awayTeam": {
            "name": string
        },
    }>
}
