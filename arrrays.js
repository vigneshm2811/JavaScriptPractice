// let heros = ["Aquaman","Black Adam","Flash","Bat Man"];
// heros.push("Super Man")
// heros.pop();
// heros.unshift("Super Man")
// console.log("Un Shift ",heros)
// heros.shift()
// console.log("shift",heros)
// console.log("Lenght",heros.length)


// console.log("join",heros.join("❤ "))


// const array1 = ["Cecilie", "Lone"];
// const array2 = ["Emil", "Tobias", "Linus"];
// const array3 = ["Robin", "Morgan"];

// const myChildren = array1.concat(array2, array3); 


let newarr= [20,56,99,94,90]
newarr.forEach((i)=>{
  
  return i*2
})

for(let item in newarr){
    console.log(`For in ${item}`)
}

for(let item of newarr){
    console.log(`For of ${item}`)
}

let newObject = {name:'vicky',
age:22, 
place:"Ambur",
fav:"BGMI",
clan:"DTG"
}



for(let obj in newObject){
    console.log(`For of ${obj}`)
}


console.log(`---------Maping of arrays-------------`)

let mArr= [46,67,5,88,3,99]
let maparr = mArr.map((a)=>{
    return a*3;
})
console.log(maparr)

console.log(`---------filter of arrays-------------`)
console.log(`Actual Array ${mArr}`)

let filterArr = mArr.filter((a)=>{
    return a>30;
})
console.log(`After Filter method ${filterArr}`)

console.log(`---------filter of arrays-------------`)
console.time("time taken")
console.log(`Actual Array ${mArr}`)
let findArr = mArr.find((a)=>{
    return a<30;
})
console.timeEnd("time taken")
console.log(`After Find method ${findArr}`)







