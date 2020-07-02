![GitHub language count](https://img.shields.io/github/languages/count/SergiioF/file_cloud_backend)
![GitHub top language](https://img.shields.io/github/languages/top/SergiioF/file_cloud_backend)
![Scrutinizer code quality](https://img.shields.io/scrutinizer/quality/g/SergiioF/file_cloud_backend)
![GitHub repo size](https://img.shields.io/github/repo-size/SergiioF/file_cloud_backend)
![GitHub issues](https://img.shields.io/github/issues/SergiioF/file_cloud_backend)



<h1 align="center">
    <img alt="File Cloud" src="https://res.cloudinary.com/infoinfomas/image/upload/v1592172890/backup-file_jrfyqc.png" />
    <br>
</h1>


<h4 align="center">
  Simple Cloud Storage app with Node js, Sequelize, Postgres and JWT.
</h4>


# FILE CLOUD

Simple Cloud Storage app created with Node js, Sequelize, Postgres and JWT. Inspired by the Rocketseat tutorial onmistack week.


## Table of Contents
<!--ts-->
  * [Technologies](#technologies)
  * [Prerequisites](#prerequisites)
  * [How To Use](#how-to-use)
      * [Create the database](#create-the-database)
      * [Migrationss](#Migrations)
      * [Run the server](#run-the-server)
   * [Contributing](#contributing)
   * [License](#license)
<!--te-->

## Technologies

-  [NodeJS](https://nodejs.org/es/)
-  [Sequelize](https://sequelize.org/)
-  [Postgres](https://www.postgresql.org/)
-  [JWT](https://jwt.io/)
-  [SendGrid](https://sendgrid.com/)
-  [React JS](https://es.reactjs.org/)


### Prerequisites

To clone and run this application, you'll need Git, Node.js, Yarn and Postgres installed on your computer. 

Optional: To view the data in the database you can use Postbird.


### How To Use

  1 - Clone this repo: 

    $ git clone https://github.com/SergiioF/file_cloud_backend.git

  2 - Then, go to the project folder and install the dependencies with the command:

    $ yarn # or npm install

  3 - Change the credentials in /src/config/database.js.

### Create the database

Run:

    $ yarn sequelize db:create # or npm sequelize db:create
   
    This command will automatically create the database.

### Migrations

Run:

    $ yarn sequelize db:migrate # or npm sequelize db:migrate
  
    This command will automatically run the migrations for the creation of tables in the database.

### Run the server

  $ yarn dev # or npm run dev

    The server is now on port 3333.


## Contributing

- Fork this repository;
- Create a branch with your feature: `git checkout -b my-feature`;
- Commit your changes: `git commit -m 'feat: My new feature' ';
- Push to your branch: `git push origin my-feature`.


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


Made with ♥ by Sergio Florentin