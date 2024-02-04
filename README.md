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
