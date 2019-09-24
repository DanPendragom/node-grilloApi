#Usage Manual: ## Routes guide

below contains all http routes and their features

#### User routes:

| Method | Uri                       | Functionality                                         | Content-Type                                |
|--------|---------------------------|-------------------------------------------------------|---------------------------------------------|
| POST   | /cadastro                 | used to create a new user collection in the database. | json                                        |
| POST   | /usuario/imagens/:user_id | add and update a profile picture to an existing user.            | image/jpeg,  image/pjpeg, image/png, image/gif |
| GET    | /usuarios                 | get all registered users.                             | json                                        |
| GET    | /usuario/:id              | get a single user data through id passed by url.      | json                                        |
| GET    | /usuario/imagem/perfil/:id       | get profile image of a user.                          | file/image                                  |
| GET    | /usuario/imagem/banner/:id       | get profile banner of a user.                          | file/image                                  |
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

#### Vacancy routes:

| Method | Uri                | Functionality                      | Content-Type                                   |
|--------|--------------------|------------------------------------|------------------------------------------------|
| POST   | /vaga            | create a new vacancy data.           | json                                           |
| POST   | /vaga/imagem/:id | upload and update a vacancy image.   | image/jpeg, image/pjpeg, image/png,  image/gif |
| GET    | /vagas           | get all vacancies on database.        | json                                           |
| GET    | /vaga/:id        | get a single vacancy data.           | json                                           |
| GET    | /vaga/imagem/:id | get the vacancy image.               | file/image                                     |
| PUT    | /vaga/:id        | update an vacancy data.              | json                                           |
| DELETE | /vaga/:id        | delete a vacancy data from database. | json                                           |

#### Musicians routes:

| Method | Uri                | Functionality                      | Content-Type                                   |
|--------|--------------------|------------------------------------|------------------------------------------------|
| POST   | /musico            | create a new musician data.           | json                                           |
| GET    | /musicos           | get all musicians on database.        | json                                           |
| GET    | /musico/:id        | get a single musician data.           | json                                           |
| GET    | /musico/imagem/perfil/:id        | get a single musician profile image.           | json                                           |
| GET    | /musico/imagem/banner/:id        | get a single musician profile image.           | json                                           |
| PUT    | /musico/:id        | update an musician data.              | json                                           |
| DELETE | /vaga/:id        | delete a vacancy data from database. | json                                           |
