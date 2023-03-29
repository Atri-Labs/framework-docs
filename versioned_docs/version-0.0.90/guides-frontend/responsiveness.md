## How to make your portfolio responsive?

Evaluate each section at different breakpoints. If necessary, consider making one of the following changes in order:

1. Check if you need to display a particular component in smaller screen sizes. For example, images are sometimes removed in mobile view.
   a. This can be achieved by setting `display` to `none`.

2. If you wish to retain components, you can consider displaying them one below the other instead of displaying them side-by-side.
   a. This can be achieved by applying `flex wrap`.
   b. Usually, `flex-wrap` is set to `wrap`. Determine if you need `wrap` or `wrap-reverse`.