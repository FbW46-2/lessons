# The Tutorial Changelog

This changelog is ordered in reverse chronological order, meaning that the last changes made will always be on top of the file, so that readers will not have to scroll all the way down with each change.

## Stage 1: Mock database and controllers
In this branch we have set up our initial structure for our API

    - We created two simple routes GET and POST for our records data
    - We set up `lowdb` in order to store our data in a file
    - We then updated our routes in order to use `lowdb`
    - We created controllers for our routes in a different directory

## Stage 0: Boilerplate

This branch contains a boilerplate for almost every express server you are going to create.  
This boilerplate consists of:

- Files create by [`npx express-generator`](https://expressjs.com/en/starter/generator.html), using the `--no-view` and `--git` flags, slightly modified and modernised.

### Changes made to `express-generator` files:

- `routes/index.js` and `routes/users.js` have been updated to use `const`
- `app.js` was also updated to use `const`. In addition, comments were added to seperate the file to smaller more easily readable chunks.
