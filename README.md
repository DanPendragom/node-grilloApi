# Grillo Api

[![NPM Version][npm-image]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]

> The official Restful api of the React/React-Native front-end project.

The grillo api provides a modern and faster web services architecture.
This api is currently in development stage, the deadline of the beta version is expected to December/2019.

![](logo-github.png)

## Installation

##### Debian based Linux distributions:

```sh
yarn install
```

##### Windows:

To run this project on windows OS, run first:

```sh
yarn install
```

After, you must correct the system compatibility with:

```sh
npm install
```

Lastly, run the following command in the api root directory:

```sh
npm start
```
The server will run on the port ```3000```;

## Usage manual

The usage manual is intended to guide and inform the user as to the correct
application, operation and maintenance of the api.

- [Routes](https://github.com/messiasGeovani/grillo-api/blob/master/wiki/ROUTES.md)

## Development setup

The grillo uses [express js](https://github.com/expressjs/express/) framework, and the project contasin the following structure:

  ```
  config/
  models/
  routes/
  └── app.js
  ```
 Where:
 
 [```config```](https://github.com/messiasGeovani/grillo-api/tree/master/src/config) is the file that contais the file upload setup code, for this, we used the [```multer```](https://github.com/expressjs/multer) module.

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
