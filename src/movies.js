// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {
let newArray = moviesArray.map(movie => movie.director)
return newArray
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
if (moviesArray.length === 0){
  return 0
}

 else { let findDirector = moviesArray.map(value => value.director.includes('Steven Spielberg') + value.genre.includes('Drama'))
  console.log(findDirector)
let result = findDirector.filter(value => value === 2)
result = result.reduce((accumulator, currentValue)=> accumulator + currentValue)/2
return result}
}




// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

 let  result = moviesArray.map(value => value.score)
  console.log(result)
    let final = result.reduce((accumulator, currentValue) => accumulator + currentValue, 0)/result.length
    return Math.round(final * 100)/100
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let drama = moviesArray.map(value => value.score)
 let result = drama.reduce((accumulator, currentValue)=> accumulator + currentValue,0)/drama.length

 return Math.round(result * 100)/100
 }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let result = moviesArray.sort((a, b)=> a.year - b.year)
  let resultCopy = []
for (let i = 0; i<result.length; i++){
  resultCopy[i] = result[i]
}
 return resultCopy
 }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let result = [];
  result = moviesArray.sort((a, b)=> a.title - b.title)
 result = result.slice(0, 20)
return result.map(value => value.title)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
