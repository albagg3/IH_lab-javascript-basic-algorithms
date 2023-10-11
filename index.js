// Iteration 1: Names and Input
const hacker1 = "Arturo"
console.log(`The driver's name is ${hacker1}`)
const hacker2 = "Artu"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length)
    console.log(`The driver has the longest name it has ${hacker1.length} characters`)
else if (hacker2.length > hacker1.length)
    console.log(`It seems that the navigator has the longest name it has ${hacker2.length} characters`)
else
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)

// Iteration 3: Loops

// 3.1
let capitalLetters = '';

for (let i = 0; i < hacker1.length; i++)
{
    if (i != hacker1.length -1 )
        capitalLetters += hacker1[i].toUpperCase() + " ";
    else
        capitalLetters += hacker1[i].toUpperCase();
}

console.log(capitalLetters);

// 3.2
let reversedName = "";

for (let index = 0; index < hacker1.length; index++) 
{
    reversedName += hacker1[hacker1.length - 1 - index]

}

console.log(reversedName);

// 3.3

if(hacker1.localeCompare(hacker2) === -1)
    console.log(`The driver's name go first`)
else if(hacker1.localeCompare(hacker2) === 1)
    console.log(`Yo, the navigator goes first, definitely`)
else
    console.log("What?! You both have the same name?")


