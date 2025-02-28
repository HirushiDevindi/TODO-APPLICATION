# Welcome to Todo Application

## 1. Clone the repository
- git clone https://github.com/your-username/your-repo.git
- cd your-repo

## 2. Start all services
docker-compose up --build

## 3. Access applications
- Frontend: http://localhost (via web browser)
- Backend API: http://localhost:8080 (via postman or curl)
- MySQL: localhost:3307 (user: your_username, password: your_password) - You can use database management tools like MySQL Workbench to connect to the database

## Environment Setting
- create a .env file and copy the content from .env.example
- Replace the username and password accordingly


## Frontend Environment Variables

To run the frontend application, you need to create a `.env` file in the `frontend` directory with the following content:

```properties
REACT_APP_API_URL=http://todo-backend:8080/api
