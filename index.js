let heroName = "the fool"
let heroVictories = 140
let heroDefeats = 23
let elo = defineElo(heroVictories, heroDefeats)
let level = defineLevel(heroVictories, heroDefeats)
console.log(`O Herói ${heroName} está no elo ${elo} está no nível ${level}`)

function defineElo(heroVictories, heroDefeats)
{
    total = defineLevel(heroVictories, heroDefeats)
    let elo;
    if (10 > total)
    {
        elo = "ferro"
    } else if (11 <= total && total <= 20) 
    {
        elo = "bronze"    
    } else if (21 <= total && total <= 50) 
    {
        elo = "prata"
    } else if (51 <= total && total <= 80) 
    {
        elo = "ouro"
    } else if (81 <= total && total <= 90)
    {
        elo = "diamante"
    } else if (91 <= total && total <= 100)
    {
        elo = "lendário"
    } else if (101 <= total)
    {
        elo = "imortal"
    }
    return elo

}

function defineLevel(heroVictories, heroDefeats) 
{
    let level = heroVictories - heroDefeats
    if (level < 0)
    {
        level = 0
    }
    return level
}