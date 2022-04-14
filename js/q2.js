/* Midterm
   Question 2 JavaScript code

   Question 2 – Array of Objects

See the sample code with comments.  Complete requirements in the code.

Objective:

Given an array of movie objects.

Task:  Assign ratings to each movie, create a summarized array, and output the results to the console.
*/


//Given the following Array with movie objects

const movieList = [

    {
  
        title: "The Batman",
  
        ratings: []
  
    },
  
    {
  
        title: "Everything Everywhere All at Once",
  
        ratings: []
  
    },
  
    {
  
        title: "Sing 2",
  
        ratings: []
  
    },
  
    {
  
        title: "Jujutsu Kaisen 0",
  
        ratings: []
  
    },
  
    {
  
        title: "Uncharted",
  
        ratings: []
  
    },

    {
  
        title: "Spider-Man: No Way Home",
  
        ratings: []
  
    },
  
  ];

//PART I - Populate Array
 
 //Write code to populate the movie's ratings.
 
 //Requirements:
 
 //  Movies must take at least 1 review
 
 //  Movies may take 5 reviews
 
 //  
 
 //Task
 
 //For each movie, generate a random number between 1 and 10 (number of reviews given)
 
 //  For each movie, assign a random rating between 1 and 5
 
 //
 
 //Example:
 
 //  Assume The Batman has 5 ratings.  The result for The Batman may look as follows:
 
 //   {
 
 //     title: "The Batman",
 
 //     ratings: [2, 5, 3, 4, 5]
 
 //   },
 
  
 
 // Hint:
 
 //  Loop through the movieList Array
 
 //    For each movie object, generate a random number between 1 to 10 (number of reviews)
 
 //    Iterate through the number of reviews, adding a value to the ratings array between 1 and 5.

 
 // << YOUR CODE HERE >>

 movieList.forEach(movie => {
    const numReviews = Math.trunc(Math.random() * 9) + 1;
    for (let i = 0; i < numReviews; i++) {
        const revRating = Math.trunc(Math.random() * 5) + 1;
        movie.ratings.push(revRating);
    }
 })

//You could use the following to test the updated employee list:
 
//  console.log(movieList);

 //PART II - Summary Data
 
 //Create an array of objects, each object containing the following:
 
 // title
 
 // ratings
 
 // numberOfReviews
 
 // avgRating
 
 // maxRating


 //Requirements
 
 //  You must use Array Operations (map, reduce, filter) / Functional Programming Techniques
 
 //  DO NOT write a traditional loop



 //Sample object for "The Batman"
 
 // This is just an example, your values will vary depending on number of reviews and review ratings
 
 //  As above, Assume The Batman has 5 reviews
 
 //   {
 
 //     title: "The Batman",
 
 //     ratings: [2, 5, 3, 4, 5],
 
 //     numberOfReviews: 5,
 
 //     avgRating: 3.8,
 
 //     maxRating: 5
 
 //   },



  // Hint:  Create a new array with the summary data

  // << YOUR CODE HERE >>

  const summaryArray = movieList.map(movie => {
    return {
        title: movie.title,
        ratings: movie.ratings,
        numberOfReviews: movie.ratings.length,
        avgRating: movie.ratings.reduce((sum, ratings) => sum + ratings, 0) / movie.ratings.length,
        maxRating: movie.ratings.reduce((max, ratings) => max > ratings ? max : ratings, 1)
    }
})

 console.log(summaryArray);

  //----------------------------------------------------------------//

  //You could test your results by displaying your array to the console (as you did in Part I)

  //PART III - Create a Filtered Array

  //Using the summary array created in Part II, create a new filtered array with movies that have average ratings greater than a 3.75
 
  // << YOUR CODE HERE >>



  //----------------------------------------------------------------//
 
 //PART IV - Output the results
 
 // Output the summarized data to the console.  You must use the following format:
 
 // Title: The Batman
 
 // Ratings: 2,5,3,4,5
 
 // Number of reviews: 5
 
 // Average rating: 3.8
 
 // Max rating: 5
 
  
 
 // Hint: Loop through the array created in Part II
 
 //       This is NOT a single console.log(yourArrayName): note the format.


 // << YOUR CODE HERE >>

 summaryArray.forEach(movie => {
    console.log(`Title: ${movie.title}`)
    console.log(`Ratings: ${movie.ratings}`)
    console.log(`Number of reviews: ${movie.numberOfReviews}`)
    console.log(`Average rating: ${movie.avgRating}`)
    console.log(`Max rating: ${movie.maxRating}`)
})

//PART V - Display the Filtered Array 

// Output the filtered summary array using console.log()

// << YOUR CODE HERE >>


