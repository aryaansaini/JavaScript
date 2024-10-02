const marrval_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marrval_heros.push(dc_heros)
// console.log(marrval_heros[3][1]);


// const allHeros  = marrval_heros.concat(dc_heros)
// console.log(marrval_heros);




const all_new_heros  = [...marrval_heros, ...dc_heros]
console.log(all_new_heros);

const anothr_array  = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array  = anothr_array.flat(Infinity)

console.log(anothr_array);
console.log(real_another_array);


console.log(Array.isArray("Aryan"))
console.log(Array.from("Aryan"));


console.log(Array.from({name: "Aryan"})); //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));



