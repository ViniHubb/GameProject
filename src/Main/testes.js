let level = 2
let pontos = level*100
let round = 15
while(level < 5) {
  for (let i = 0; i < round && i < 7+4*level; i++) {
    pontos -= Math.round((i*i)/(3*level))
  }
  console.log("Pontos:",pontos)
  level++
  pontos = level*100
}