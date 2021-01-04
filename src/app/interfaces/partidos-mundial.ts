export interface PartidosMundialInterface {
    "count": number,
    "competition": {
        "code": string
    },
    "matches": Array<{
        "id": number,
        "season": {
            "currentMatchday": number
        },
        "utcDate": string,
        "matchday": number,
        "stage": string,
        "group": string,
        "score": {
            "duration": string,
            "fullTime": {
                "homeTeam": number,
                "awayTeam": number
            },
            "extraTime": {
                "homeTeam": number,
                "awayTeam": number
            },
            "penalties": {
                "homeTeam": number,
                "awayTeam": number
            }
        },
        "homeTeam": {
            "name": string
        },
        "awayTeam": {
            "name:": string
        }
    }>
}
