# GifTastic Assignment
JavaScript Homework #6

## Overview
Use the GIPHY API to make a dynamic web page that populates with gifs of your choice. To finish this task, you must call the GIPHY API and use JavaScript and jQuery to change the HTML of your site.

## Requirements

### Due
Sunday, January 12, 2020

### Minimum Requirements
Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.

### Submit Your Work on [BootCampSpot](https://www.bootcampspot-v2.com/)
Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!

### Add the Project To Your Portfolio
After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

## Project Instructions

### Before You Begin

1. **Hit the GIPHY API**.
   * Fool around with the GIPHY API. [Giphy API](https://developers.giphy.com/docs/).
   * Be sure to read about these GIPHY parameters (hint, hint):
     * `q`
     * `limit`
     * `rating`
   * Like many APIs, GIPHY requires developers to use a key to access their API data. To use the GIPHY API, you'll need a GIPHY account (don't worry, it's free!) and then obtain an API Key by [creating an app](https://developers.giphy.com/dashboard/?create=true).
   * Make sure you switch the protocol in the query URL from **`http to https`**, or the app may not work properly when deployed to Github Pages.

2. **[Watch the demo video](https://youtu.be/BqreERTLjgQ)**

   * You should have a high-level understanding of how this assignment works before attempting to code it.

3. Before you can make any part of your site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`.
   * We chose animals for our theme, but you can make a list to your own liking.

4. Your app should take the topics in this array and create buttons in your HTML.
   * Try using a loop that appends a button for each string in the array.

5. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

6. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

7. Under every gif, display its rating (PG, G, so on).
   * This data is provided by the GIPHY API.
   * Only once you get images displaying with button presses should you move on to the next step.

8. Add a form to your page that takes a value from a user input box and adds it to your `topics` array. Then make a function call that takes each topic in the array and remakes the buttons on the page.

9. Deploy your assignment to Github Pages.

10. **Rejoice**! You just made something really cool.

## Completed Assignment

### Student
Pam Kelly at [esq.kelly@gmail.com](mailto:esq.kelly@gmail.com)

Full-Stack Coding Bootcamp through UCB Extension

### Completed Assignment URLs
#### Github repository
[Github Link](https://plkgit.github.io/giphy/) at https://plkgit.github.io/giphy/.
#### Deployed Game
[GifTastic](https://github.com/PLKGIT/giphy) deployed at https://github.com/PLKGIT/giphy.
#### Portfolio.html in Bootstrap Portfolio demonstrating a link to the game
[Bootstrap Porfolio with Link to Game](https://plkgit.github.io/Bootstrap-Portfolio/portfolio.html) at 
https://plkgit.github.io/Bootstrap-Portfolio/portfolio.html


Copyright &copy; 2020 Pamela L. Kelly