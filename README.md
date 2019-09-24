# Grillo Api

[![NPM Version][npm-image]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]

> The official Restful api of the React/React-Native front-end project.

The grillo api provides a modern and faster web services architecture.
This api is currently in development stage, the deadline of the beta version is expected to December/2019.

![](logo-github.png)

## Installation

Debian based Linux distributions:

```sh
yarn install
```

Windows:

```sh
npm install
```

After, run the following command in the api root directory:

```sh
npm start
```
The server will run on the port ```3000```;

## Usage manual

The grillo api use http protocol to work with uri routing, however you need to know how are the routes.
below contains all access routes and their operation:

#### User routes:

| Method | Uri                       | Functionality                                         | Content-Type                                |
|--------|---------------------------|-------------------------------------------------------|---------------------------------------------|
| POST   | /cadastro                 | used to create a new user collection in the database. | json                                        |
| POST   | /usuario/imagens/:user_id | add and update a profile picture to an existing user.            | image/jpeg,  image/pjpeg, image/png, image/gif |
| GET    | /usuarios                 | get all registered users.                             | json                                        |
| GET    | /usuario/:id              | get a single user data through id passed by url.      | json                                        |
| GET    | /usuario/imagem/:id       | get profile image of a user.                          | file/image                                  |
| PUT    | /usuario/:id              | update a user data.                                   | json                                        |
| DELETE | /usuario/:id              | delete an user data from database.                         | json                                        |

#### Post routes:

| Method | Uri                   | Functionality                                      | Content-Type                                |
|--------|-----------------------|----------------------------------------------------|---------------------------------------------|
| POST   | /postagem             | used to add a new post collection in the database. | json                                        |
| POST   | /postagem/imagens/:id | upload a picture to an existing post.              | image/jpeg  image/pjpeg image/png image/gif |
| GET    | /postagens            | get all posts.                                     | json                                        |
| GET    | /postagem/:id         | get a single post data through id passed by url.   | json                                        |
| GET    | /postagem/imagem/:id  | get the image of a post.                           | file/image                                  |
| PUT    | /postagem/:id         | update a post data.                                | json                                        |
| DELETE | /post/:id             | delete an post from database.                      | json                                        |

#### Event routes:

| Method | Uri                | Functionality                      | Content-Type                                   |
|--------|--------------------|------------------------------------|------------------------------------------------|
| POST   | /evento            | create a new event data.           | json                                           |
| POST   | /evento/imagem/:id | upload and update a event image.   | image/jpeg, image/pjpeg, image/png,  image/gif |
| GET    | /eventos           | get all events on database.        | json                                           |
| GET    | /evento/:id        | get a single event data.           | json                                           |
| GET    | /evento/imagem/:id | get the event image.               | file/image                                     |
| PUT    | /evento/:id        | update an event data.              | json                                           |
| DELETE | /evento/:id        | delete a event data from database. | json                                           |

## Development setup

To run this project in the development mode, you will use nodemon dev tool, located in the "dev" package.json script setup:

```sh
npm run dev
```

## Database config

To use the official grillo database, contact the [Auxiware](https://github.com/Auxiware) team. However, you can add your personal database, for this just modify mongoose connection parameters located in [```app.js```](https://github.com/messiasGeovani/grillo-api/blob/master/src/app.js) file.

## Meta

Linkedin Profile – [Messias Geovani](https://www.linkedin.com/in/messias-geovani-00125416a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGnSoFwiETD%2BtGrv4dF9mSw%3D%3D) / email – messias.geovani.lima@gmail.com

Distributed under the [```Auxiware```](https://github.com/Auxiware) open source license. See ``LICENSE`` for more information.

[https://github.com/messiasGeovani](https://github.com/messiasGeovani)

## Contributing

1. Fork it (<https://github.com/messiasGeovani/grillo-api/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
