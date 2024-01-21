let n1 = Number(prompt("Digite a primeira nota: "))
let n2 = Number(prompt("Digite a segunda nota: "))
let n3 = Number(prompt("Digite a terceira nota: "))
let p1 = Number(prompt("Digite o valor do primeiro peso"))
let p2 = Number(prompt("Digite o valor do segundo peso"))
let p3 = Number(prompt("Digite o valor do terceiro peso"))

console.log("Essas são as notas digitadas: " + n1 + "," + n2 + "," + n3)
console.log("Esses são os pesos digitados: " + p1 + "," + p2 + "," + p3)

let media = (n1 * p1 + n2 * p2 + n3 * p3) / (p1 + p2 + p3)

console.log("A média ponderada é: " + media)