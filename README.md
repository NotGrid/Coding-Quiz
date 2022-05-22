# Coding Quiz

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

This challenge is to build a timed coding quiz that utilizes HTML, CSS, and Javascript. At the end of the quiz, a highscore will track the users score in the localStorage until cleared.

### User Story
```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```
### Acceptance Criteria
```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```
### Screenshot
## This is the start page of the quiz that gives the option to start the quiz or look at the highscores
![Screenshot 2022-05-21 212829](https://user-images.githubusercontent.com/102490542/169678680-f0a8e54a-d8bd-4e0d-ab57-afe768e17b48.png)
## Multiple choice questions will be displayed. Every wrong answer removes 10 seconds from the timer.
![Screenshot 2022-05-21 212851](https://user-images.githubusercontent.com/102490542/169678683-2c97c528-fe50-48a5-9c82-b02e761a282e.png)
## The final score will be shown and logged into the localStorage
![Screenshot 2022-05-21 212932](https://user-images.githubusercontent.com/102490542/169678686-b9c4f044-c3d0-49d5-bdc0-ba99be499b47.png)


### Links

- Github URL: https://github.com/NotGrid/Coding-Quiz
- Github Deployed Page: https://notgrid.github.io/Coding-Quiz/

## My process

I started with the HTML and CSS formating to put my ideas on the screen. Next I added JavaScript functions to generate the questions and answers. At the end, I polished the code and added the timer penalty.

### Built with

- Semantic HTML5 markup
- CSS
- JavaScript

### What I learned
# Here is where I added the timer penalty which I was origionally nervous about since it was my first time implementing something like this. It turned out to be much easier than I thought and was successful the first attempt.
```
} else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex) {
        timeLeft = timeLeft - penalty;
        alert("Incorrect")
        currentQuestionIndex++;
        generateQuizQuestion();
```
### Continued development

I will continue to branch my knowledge of JavaScript functions. Spelling errors were the main issue in this project and I have made myself well aware of how important it can effect your code.

### Useful resources

- [SitePoint](https://www.sitepoint.com/simple-javascript-quiz/) - This helped me to start the challenge as well as walk me through most of the formating.

## Author

- Github - [NotGrid](https://github.com/NotGrid)
- LinkedIn - [Andrew White](https://www.linkedin.com/in/andrew-white-053803235/)
