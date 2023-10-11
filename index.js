// // Iteration 1: Names and Input
// const hacker1 = "Arturo"
// console.log(`The driver's name is ${hacker1}`)
// const hacker2 = "Artu"
// console.log(`The navigator's name is ${hacker2}`)

// // Iteration 2: Conditionals
// if (hacker1.length > hacker2.length)
//     console.log(`The driver has the longest name it has ${hacker1.length} characters`)
// else if (hacker2.length > hacker1.length)
//     console.log(`It seems that the navigator has the longest name it has ${hacker2.length} characters`)
// else
//     console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)

// // Iteration 3: Loops

// // 3.1
// let capitalLetters = '';

// for (let i = 0; i < hacker1.length; i++)
// {
//     if (i != hacker1.length -1 )
//         capitalLetters += hacker1[i].toUpperCase() + " ";
//     else
//         capitalLetters += hacker1[i].toUpperCase();
// }

// console.log(capitalLetters);

// // 3.2
// let reversedName = "";

// for (let index = 0; index < hacker1.length; index++) 
// {
//     reversedName += hacker1[hacker1.length - 1 - index]

// }

// console.log(reversedName);

// // 3.3

// if(hacker1.localeCompare(hacker2) === -1)
//     console.log(`The driver's name go first`)
// else if(hacker1.localeCompare(hacker2) === 1)
//     console.log(`Yo, the navigator goes first, definitely`)
// else
//     console.log("What?! You both have the same name?")

// Bonus 1

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae purus in turpis hendrerit eleifend. Sed varius nulla tellus, vel viverra dui aliquet sed. Maecenas aliquam, nisl sit amet condimentum rutrum, diam leo sodales justo, id vestibulum mi ipsum sed eros. Nullam vitae urna sed eros tincidunt pharetra. Morbi aliquam erat semper rutrum interdum. Suspendisse potenti. Curabitur id urna consequat, tempus elit nec, ullamcorper orci. Nulla lobortis sagittis nulla vel finibus. Duis vitae dignissim orci.Vestibulum at felis et arcu auctor vulputate et in lorem. Fusce ultrices magna non lacus sodales sodales. Fusce magna mauris, hendrerit a facilisis feugiat, aliquam ut justo. Donec augue urna, ornare sed arcu in, facilisis tincidunt tellus. Vestibulum vel velit a arcu pretium euismod eu vitae urna. Maecenas mattis suscipit lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec commodo metus sit amet felis egestas aliquam. Praesent sed facilisis urna. Ut porta finibus risus. Nam fringilla ullamcorper lacus, ut lacinia tortor commodo in.Nullam lacinia eleifend feugiat. Phasellus ut efficitur neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id tristique dui. Nam commodo gravida placerat. Duis a hendrerit odio. Nullam ut nisl libero. Curabitur mattis erat vitae tincidunt blandit. Vestibulum viverra auctor posuere. Curabitur lacinia euismod nisl, et porttitor dolor ornare in. Nulla ac metus pulvinar, ornare nisi id, vehicula elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis magna risus. Cras dui enim, placerat vel nunc maximus, laoreet auctor ligula. Quisque et auctor tortor, ut dignissim urna. Donec molestie ex vel ipsum faucibus, in pulvinar lacus ultricies."
// const longText = " hola et hola    et adios ";

let words = [];
words = longText.trim(' ').split(' ');

for(let j = 0; j < words.length; j++)
{
    if(words[j] === '')
    {
        words.splice(j,1);
        j--;
    }
}
console.log(words)
console.log(words.length)
let etCounter = 0;
for(let i = 0; i < words.length ; i++)
{
    if(words[i] === 'et')
        etCounter++;
}   
console.log("etCounter " + etCounter);


// Bonus 2

const phraseToCheck = "Hello"
let lowercasephrase = phraseToCheck.toLowerCase()

let arrayWords = lowercasephrase.split(' ');
console.log(arrayWords)
let arrWordsReversed = arrayWords.reverse();
console.log(arrWordsReversed)
let wordsTogether = arrayWords.join('')
let wordsTogetherReversed = arrWordsReversed.join('');


if(wordsTogether === wordsTogetherReversed)
    console.log("It's a palindrome");
else
    console.log("It's not a palindrome");

