export interface PartidosCompetenciaInterface {
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
        "homeTeam": {
            "name": string
        },
        "awayTeam": {
            "name:": string
        }
    }>
}
