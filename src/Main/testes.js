let i = 0
let pontos = 0

for(i=1; i<100; i+=3){
  pontos = (8*i-65)/27
  console.log(i,":",pontos);
  if(pontos%3 == 0){
    console.log("\n->",pontos/3, "\n");
  }
}