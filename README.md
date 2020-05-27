# Capture Pokémons

## Aplication
Ash is picking up Pokémon in a world that consists of an infinite two-dimensional grid of houses.
In each house there is exactly one pokémon.
Ash starts by picking up the Pokémon that is in the house where he starts. Then move to the house
immediately to the north, south, east or west of where you are and catch the pokémon that is there,
and so on. Attention: if he passes a house where he has already passed (and, therefore, where he has already
a pokémon), there is no pokémon for him to catch!
Check how many Pokémon does Ash pick up for a given sequence of moves!

## Technologies used

* Angular 8
* git
* Nodejs
* npm
* Bootstrap
* jquery

## System Requirements

| Technology | Site |
| ------ | ------ |
| Angular CLI v 8.x.x | [https://cli.angular.io] |
| Git | [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git] |
| Nodejs v 12.x.x | [https://nodejs.org/en/download/] |
|

---

## Folders organization

### Core

* constants: Responsible for maintaining the application's global constants. 
* services: Responsible for maintaining the application's global services. 

### Models

* Responsible for maintaining the application's global models.


### Modules

* Due to the use of the [Lazy Loading](https://angular.io/guide/lazy-loading-ngmodules) this application is subdivided into the following module:

    #### home

    * Contains the game

---

## Run the application

Clone the project located in the repository of [github](https://github.com/bobsk8/game-get-pokemons).

```sh
$ git clone https://github.com/bobsk8/game-get-pokemons
```

Enter the project folder with the command
```sh
$ cd game-get-pokemons
```

Install the front dependencies with the command
```sh
$ npm i
```

Run the application
```sh
$ ng serve
```

Open browsed on
```sh
http://localhost:4200/
```

For test you need to run
```sh
$ ng test
```
---