# Workaround for Next.js's case sensitive urls

Next.js's urls are case sensitive by default. Example:

/about -> returns about page

/ABout -> returns error 404 page not found

## Workaround
Every page that doesn't exist automatically redirects to a 404 page. You can modify this page by adding a new file in the ```app``` directory called ```not-found```.
This is a naming convension you need to follow. You can check whether the url is all lower case and if not you can redirect to a lower case version.

Look at ```fix.js``` file in this repository for an example.


## DISCLAIMER
This is NOT official and is just MY way to make it work. This may not be the most efficient way to solve the problem.