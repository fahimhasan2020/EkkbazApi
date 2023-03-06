
![Logo](https://ekkbaz.com/assets/images/ekkbaz_full_logo.png)


# EkkBaz Api

This Api has been developed for Ekkbaz interview purpose. It does not have any professional purpose usage. It uses mongodb compass for database connection and nodejs(express) for backend.




## Run Locally

Clone the project

```bash
  git clone https://github.com/fahimhasan2020/EkkbazApi.git
```

Go to the project directory

```bash
  cd EkkbazApi
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn start
```


## Postman testing manual

Open the file named PostmanApi and import the EkkBazApi.postman_collection.json into postman app.



## API Reference

#### User registration

```http
  POST /users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name`    | `string` | **Required**.               |
| `email`    | `string` | **Required**.               |
| `password`    | `string` | **Required**.               |

#### User login

```http
  POST /users/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`    | `string` | **Required**.               |
| `password`    | `string` | **Required**.               |

#### Verify jwt token

```http
  POST /users/verify
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `token`    | `string` | **Required**.                    |


## Authors

- [@fahimhasan](https://www.github.com/fahimhasan2020)

