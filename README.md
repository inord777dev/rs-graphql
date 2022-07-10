# rs-graphql
RS GraphQL API server

This application cantains GraphQL API server for Musicify App. 

You can find repository with microservices [here](https://github.com/rolling-scopes-school/node-graphql-service)

## Installation
1. Clone/download repo
2. `npm install`

## Usage
**Development**

`npm run dev`

* App served @ `http://localhost:4000` with nodemon

**Production**

`npm run start`

* App served @ `http://localhost:4000` without nodemon

---

## Mongo

The application is using MongoDB as a database. Feel free to choose any solution for it, however it's highle recommended to use Docker and the official image for it.

[Docker MongoDB](https://hub.docker.com/_/mongo)


## Self cross-check

To make cross-check easier and save you time, I performed [self cross-check](https://github.com/inord777dev/rs-graphql/pull/1)

## Settings

.env file contains app settings. Each entity must set port and path.

```
PORT=4000
MICROSERVISE_URL=http://localhost
MICROSERVISE_TRACKS_PORT=3006
MICROSERVISE_TRACKS_PATH=/v1/tracks
MICROSERVISE_USERS_PORT=3004
MICROSERVISE_USERS_PATH=/v1/users
MICROSERVISE_GENRES_PORT=3001
MICROSERVISE_GENRES_PATH=/v1/genres
MICROSERVISE_ARTISTS_PORT=3002
MICROSERVISE_ARTISTS_PATH=/v1/artists
MICROSERVISE_BANDS_PORT=3003
MICROSERVISE_BANDS_PATH=/v1/bands
MICROSERVISE_ALBUMS_PORT=3005
MICROSERVISE_ALBUMS_PATH=/v1/albums
MICROSERVISE_FAVORITE_PORT=3007
MICROSERVISE_FAVORITE_PATH=/v1/favourites
```


Good luck!