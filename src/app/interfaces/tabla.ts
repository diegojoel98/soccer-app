export interface TablaInterface {
    "competition": {
        "name": string
    },
    "standings": Array<{
        "table": Array<{
            "position": number,
            "team": {
                "name": string,
                "crestUrl": string
            },
            "playedGames": number,
            "form": string,
            "won": number,
            "draw": number,
            "lost": number,
            "points": number,
            "goalsFor": number,
            "goalsAgainst": number,
            "goalDifference": number
        }>
    }>
}
