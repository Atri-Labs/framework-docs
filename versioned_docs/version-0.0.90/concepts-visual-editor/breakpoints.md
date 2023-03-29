---
title: Breakpoints
description: Creating apps for different screen sizes
---
The `breakpoints` section at the center of the top menu enable us to observe how our app will look in different screen sizes. The four supported sizes are:

- Desktop (default)
- Tablet
- Mobile landscape
- Mobile portrait

Note: 

1. Flexboxes have an innate quality to change their items' width or height to best fill the available screen size, even when the size is unknown (thus the word "flex"). Since we use flex boxes as building blocks, our app is already responsive. 

2. However, there are cases when we want a materially different design in different screen size. The most common example is a navigation bar replaced by a hamburger menu in a mobile size screen. This can be done by going to `Mobile portrait` breakpoint and specifying the replacement. 

##### Add picture here

3. If a change is made in the `Tablet` breakpoint, it flows down to all the smaller breakpoints. However, the breakpoint larger than `Tablet` remains unchanged. 