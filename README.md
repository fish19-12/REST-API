# Node.js REST API with Express & MongoDB

🎉 This is a simple REST API built with **Node.js**, **Express**, and **MongoDB**.
It supports **CRUD operations** on a `User` entity with fields: `name`, `email`, and `age`.

---

## Features

* Create, Read, Update, and Delete users (CRUD) 🧑‍💻
* Connected to **MongoDB** for persistent storage 🗄️
* Tested endpoints using **Postman** ✅
* Ready-to-use for your projects 🚀

---

## Tech Stack

* Node.js
* Express.js
* MongoDB / Mongoose
* Postman (for API testing)

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/fish19-12/REST-API.git
cd REST-API
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your MongoDB URI:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

4. Start the server:

```bash
npm start
```

Server will run on `http://localhost:5000` by default.

---

## API Endpoints

| Method | Endpoint   | Description             |
| ------ | ---------- | ----------------------- |
| POST   | /users     | Create a new user       |
| GET    | /users     | Get all users           |
| GET    | /users/:id | Get a single user by ID |
| PUT    | /users/:id | Update a user           |
| DELETE | /users/:id | Delete a user           |

---

## Testing

Use **Postman** or any API client to test the endpoints.

---

## License

This project is open-source and available under the MIT License.

---

💻 **GitHub:** [https://github.com/fish19-12/REST-API](https://github.com/fish19-12/REST-API)
