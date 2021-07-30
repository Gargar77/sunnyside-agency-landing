# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![desktop view](/screenshots/desktop.png)

### Links

- Live Site URL: [https://gargar77.github.io/sunnyside-agency-landing/]
## My Process
### Built with
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JS
### What I learned

This project was initially meant to reinforce my vanilla CSS and HTML skills. I learned new ways to make the website more responsive. for example, I was able to make image tags responisve using css:

```css 
#sugarcubes{
        content: url("images/mobile/image-gallery-sugar-cubes.jpg");
 }
```
However, this turned out to be detrimental, because this feature was not compatible in Firefox browsers. It would load the path properly, yet it would not display the image. One fix was to use the `::before` pseudo-element to insert an image. This solution did not work because it completely broke the layout that I had already set up by building the website using chrome development tools.

My final solution was to use the picture html tag:

```html
<picture>
  <source media="(min-width:900px)" srcset="images/desktop/image-gallery-cone.jpg">
  <img src="images/mobile/image-gallery-cone.jpg">
</picture>
```

This allowed the browser to switch between the images depending on the screen size, as wel as allowing cross-browser compatibility.

The best part of this project, was using the Figma design files. I was able to create an almost pixel perfect represantation of the figma design, while also learning who to navigate thorugh the Figma software.

### Continued development

I want to continue practicing on my speed of execution, I was a bit stumped on few flex box elements when it came to the way the are rendered.

## Author

- Website - [https://garybautista.me/]
- Frontend Mentor - [https://www.frontendmentor.io/profile/Gargar77](https://www.frontendmentor.io/profile/yourusername)
