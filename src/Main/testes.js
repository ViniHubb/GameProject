const arrayTemp = [23.6, 37.9, 25.1, 19.0, 29.8]

function LowestTemperature(temperatures)
{
  var lowest = temperatures[0]
  temperatures.forEach(temperature => {
    if (temperature < lowest) {
      lowest = temperature
    }
  });

  return lowest
}

function HighestTemperature(temperatures)
{
  var highest = temperatures[0]
  temperatures.forEach(temperature => {
    if (temperature > highest) {
      highest = temperature
    }
  });

  return highest
}

function AverageTemperatures(temperatures)
{
  var avarage = 0
  temperatures.forEach(temperature => {
    avarage += temperature
  });
  
  avarage = (avarage/temperatures.length).toFixed(1)
  return avarage
}
console.log("===================================");
console.log(LowestTemperature(arrayTemp));
console.log(HighestTemperature(arrayTemp));
console.log(AverageTemperatures(arrayTemp));
console.log("===================================");

const arrayNotes = [73, 67, 38, 33]

function Rounding(notes)
{
  var checking = 0
  for (let i = 0; i < notes.length; i++) {
    if (notes[i] >= 38) {
      checking = notes[i]%5
      if (checking >= 3) {
        notes[i] = notes[i]+(5-checking)
      }
    }
  }

  return notes
}

console.log(Rounding(arrayNotes))

function Read()
{
  var valueOne = LerDoTeclado(2)
  var valueTwo = LerDoTeclado(10)
 
  while(valueOne > valueTwo)
  {
    console.log("O segundo valor deve ser maior que o primeiro");
    valueTwo = LerDoTeclado(X)
  }

  var sum = 0;
  for (let i = valueOne; i <= valueTwo; i++) {
    sum += i
  }
  
  return sum
}

console.log(Read())
console.log("===================================")

function LerDoTeclado(x){
  return x
}

function Reader()
{
  var list = []
  for (let i = 0; i < 50; i++) {
    list[i] = LerDoTeclado(X)
  }
  return list
}

function CheckAndWrite(list)
{
  var positions = []
  var size = 0

  for (let i = 0; i < list.length; i++) {
    size = 0
    positions[0] = i
    for (let j = 0; j < list.length; j++) {
      if(list[i] == list[j] & i != j) {
        size += 1
        positions[size] = j
      }
    }
    if (size > 0) {
      console.log("O numero " + list[i] + " repetiu " + (size+1) + " vezes nas posições: " + positions);
    }
  }
}

CheckAndWrite(Reader())