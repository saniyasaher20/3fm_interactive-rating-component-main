# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

[Desktop](https://github.com/saniyasaher20/3fm_interactive-rating-component-main/blob/ff7073362d4790276d593cc0fed90869f72fa4e4/design/solution-screenshot-desktop.JPG)

[Mobile](https://github.com/saniyasaher20/3fm_interactive-rating-component-main/blob/ff7073362d4790276d593cc0fed90869f72fa4e4/design/solution-screenshot-mobile.JPG)

### Links

- [Solution](https://github.com/saniyasaher20/3fm_interactive-rating-component-main)
- [Live Site URL](https://saniyasaher20.github.io/3fm_interactive-rating-component-main)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Bootstrap
- SCSS
- ReactJS

### What I learned
1- Working in ReactJs. Link in given in 'Useful resources'

2- How to add SCSS in ReactJS. Link in given in 'Useful resources'
    ```html
    npm i sass
    then import the scss file in the required file
    import './main.scss'
    ```

3- How to remove focus from an element on double clicking
    ```css
    .btn{
      cursor: pointer;
      ...other propertires
    }

    .btn:focus, .btn:active{
      pointer-events: none;
    }```

4- How to deploy react to github pages
   ```terminal
   npm i gh-pages --save-dev
   ```

   ```Package.json
   {
  "homepage": "http://username.github.io/repository_name", //Add this line
  "name": "solution", // already present lines
  "version": "0.1.0", // already present lines
  }

  "scripts": {
    "start": "react-scripts start", // already present lines
    "predeploy": "npm run build", //Add this line
    "deploy": "gh-pages -d build", //Add this line
    "build": "react-scripts build", // already present lines
    "test": "react-scripts test", // already present lines
    "eject": "react-scripts eject" // already present lines
  },
   ```
### Continued development
The form should not submit without selecting rating. Also the button is focused after double clicking but it should be focused in single click and on second click the focus should be removed.

### Useful resources

- (https://youtu.be/JXr5QCEH8VE) - This helped me completng this challenge using ReactJS
- (https://stackoverflow.com/a/39528275) - This helped me learning how to remove focus from a button after second click.

## Author

- Linkedin - [Saniya Saher](https://www.linkedin.com/in/saniyasaher20/)
- Frontend Mentor - [@saniyasaher20](https://www.frontendmentor.io/profile/saniyasaher20)
- Twitter - [@saniyasaher20](https://twitter.com/saniyasaher20)