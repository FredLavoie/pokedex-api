## Pokedex API

This is a sample NodeJS API project built using NestJS, Prisma and GraphQL.

### Setup instructions

Follow the steps outlined below to get this API up and running on your local machine.

#### [1] Initial setup

- clone the repo and `cd` into the project directory
- run `yarn install` to install the dependencies

#### [2] Database setup

- rename the file `example.env` to `.env` and fill in the user, password, and database_name fields (removing the square brackets)
- in a separate terminal window, run `docker-compose up` which will create the image if you don't have it locally already, and will start the postgres database container. This will show the logs from the database because it's currently attached. If you want to run it in detached mode instead, run `docker-compose up -d`
- in a separate terminal window, run `docker ps` to ensure that your database container is running

#### [3] Seeding the database

- rename the file `example.data.js` to `data.js`
- navigate to [this url](https://github.com/fanzeyi/pokemon.json/blob/master/pokedex.json), and copy all the objects into the array in the `data.js` file
- run `npx prisma init` which will create the table(s) in the database based on the models in the `prisma/schema.prisma` file
- run `npx prisma seed` which will take the data from `data.js` and insert them into your postgres database

#### [4] Starting the API server

- run `yarn start` to startup the API server
- in a browser window, go to `localhost:3000/api/pokemon/` to see the first 50 pokemon
- navigate to `localhost:3000/api/pokemon?page=2` (or any page number) to see additional pokemon
- navigate to `localhost:3000/api/pokemon/25` (or any number you like) so see the details for a specific pokemon
