const planets = ["mercury", "venus", "Earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")
const planetsArray = ["mercury","venus","earth","mars","jupiter","saturn","neptune","uranus","pluto too!"]
const planetUL = document.createElement("ul")
planetsArray.forEach((planet) => {
    const planetItem = document.createElement("li")
    planetItem.innerHTML = planet
    planetUL.appendChild(planetItem)
})
planetEl.appendChild(planetUL)

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const capitalizedPlanets = planets.map( (planet) => {
    return planet.charAt(0).toUpperCase() + planet.slice(1)  
})
console.log(capitalizedPlanets)

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
const includesE = planets.filter(planet => {
    const includesEbool = planet.toLowerCase().includes("e")
    console.log(includesEbool)
    return includesEbool
})
console.log(includesE)



// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const concatSentence = words.reduce( (wholeSentence, currentVal) => {
    return `${wholeSentence} ${currentVal}`
})
console.log(concatSentence)