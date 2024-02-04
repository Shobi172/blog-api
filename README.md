<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>



# Blog API

This is a NestJS-based RESTful API for managing blog posts. It includes authentication via Google OAuth and CRUD operations for blog posts.

## API Endpoints

### Authentication

- **Google OAuth Login:**
  - Endpoint: `/auth/google`
  - Method: GET
  - Description: Initiates the Google OAuth login process.

- **Google OAuth Callback:**
  - Endpoint: `/auth/google/callback`
  - Method: GET
  - Description: Handles the Google OAuth callback and redirects to the login success page with a JWT token.

### Blog Posts

- **Get All Blogs:**
  - Endpoint: `/blogs`
  - Method: GET
  - Description: Retrieve a list of all blog posts.

- **Get Blog by ID:**
  - Endpoint: `/blogs/:id`
  - Method: GET
  - Description: Retrieve a specific blog post by its ID.

- **Create Blog Post:**
  - Endpoint: `/blogs`
  - Method: POST
  - Description: Create a new blog post.
  - Body: JSON object with blog post details.

- **Update Blog Post:**
  - Endpoint: `/blogs/:id`
  - Method: PUT
  - Description: Update an existing blog post by ID.
  - Body: JSON object with updated blog post details.

- **Delete Blog Post:**
  - Endpoint: `/blogs/:id`
  - Method: DELETE
  - Description: Delete a blog post by ID.

## Setup and Run with Docker

### Prerequisites

- Docker installed on your machine

### Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Shobi172/blog-api.git
   cd blog-api
   ```

2. **Create `.env` File:**
   Create a `.env` file in the root directory and add the required environment variables.

# MongoDB connection URI
DB_URI=mongodb://username:password@localhost:27017/your_database

# Google OAuth credentials
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# JWT secret for token generation
JWT_SECRET=your_jwt_secret


3. **Build Docker Image:**
   ```bash
   docker-compose build
   ```

4. **Run Docker Containers:**
   ```bash
   docker-compose up
   ```

5. **Access the API:**
   The API will be accessible at `http://localhost:3000`. The MongoDB instance will be available at `mongodb://localhost:27017`.

6. **Stopping Containers:**
   To stop the containers, use:
   ```bash
   docker-compose down
   ```
