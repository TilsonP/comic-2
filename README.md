# User manual

## Introduction

This application consumes the API of [xkcd](https://xkcd.com/json.html)
which has 2952 comics to be displayed.

This application reuses the design of the first version (first technical test),
but using the knowledge acquired during a year of work.

## Installation and use

run the following command to install the packages required to run this.

### `npm install`

Command to start the program or run from the package.json file:

### `npm run serve`

## Project functions

1. When you enter you can see the information and image of a random 
comic book from 2952 available to date (30/06/2024).

2. Rating system from 1 to 5 stars (The program does not have a database,
this data is stored in localStorage so that when viewing the same comic
the rating is maintained).

3. A search section in which if you enter a number between 1 and 2952
a number between 1 and 2952 will search for that comic.

4. Buttons to navigate between comics (previous, random, next)