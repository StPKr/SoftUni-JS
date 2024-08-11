# Book-club Forum

## Table of Contents
- [Book-club Forum](#book-club-forum)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Project Architecture](#project-architecture)
    - [Component Overview](#component-overview)
    - [Routing and Guards](#routing-and-guards)
    - [Data Flow](#data-flow)
    - [Summary](#summary)
    - [Overview](#overview)
    - [Database Schema](#database-schema)
    - [API Endpoints](#api-endpoints)
  - [Installation and Setup](#installation-and-setup)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)

## Introduction
This is a single-page application (SPA) built using React.js that serves as an online book forum. The application allows users to browse various books, add new ones to the catalog and participate in ongoing discussions. 


## Features
- User authentication (Register, Login, Logout)
- Books browsing and search functionality
- Books adding/editing/deleting
- Comments adding

## Technologies Used
- **Frontend:** React.js, React Router,
- **Backend:** SoftUni practice server
- **Authentication:** SoftUni practice server
- **Styling:** CSS, 
- **Deployment:** GitHub

## Project Architecture

### Component Overview

**1. App Component (`App.js`)**

- **Purpose:** The main component that serves as the entry point of the application. It sets up the routing and includes common components like `Header` and `Footer`.
- **Key Features:**
  - **Routes:** Defines the routes for various pages (e.g., Home, About, BookDetails, etc.).
  - **Guards:** Uses `GuestGuard` and `UserGuard` components to protect certain routes based on user authentication.
  - **Context Provider:** Wraps the application in `AuthContextProvider` to manage authentication state.

**2. Context**

- **AuthContextProvider (`AuthContext.js`):** Provides authentication state and functions to manage user login, logout, and registration across the application.

**3. Pages and Components**

- **Header and Footer:** Common components that are displayed on every page.
- **Home (`Home.jsx`):** The landing page of the application.
- **About (`About.jsx`):** An informational page about the application.
- **BookOfTheWeek (`BookOfTheWeek.jsx`):** Displays the book of the week.
- **Catalog (`Catalog.jsx`):** Displays a list of books available in the catalog.
- **BookDetails (`BookDetails.jsx`):** Shows detailed information about a specific book.
- **TopFiveList (`TopFiveList.jsx`):** Lists the top five rated books.
- **Register and Login (`Register.jsx`, `Login.jsx`):** Handles user registration and login.
- **CreateBook (`CreateBook.jsx`):** Allows authenticated users to create a new book entry.
- **EditBook (`EditBook.jsx`):** Allows authenticated users to edit an existing book entry.
- **Logout (`Logout.jsx`):** Logs the user out of the application.
- **PastDiscussion (`PastDiscussion.jsx`):** Displays past discussions related to a book.
- **NotFound (`NotFound.jsx`):** A fallback page for non-existing routes.

### Routing and Guards

- **Routes:** Managed by React Router, allowing users to navigate between different pages of the application.
- **Guards:**
  - **GuestGuard:** Protects routes that should only be accessible to unauthenticated users (e.g., Register, Login).
  - **UserGuard:** Protects routes that should only be accessible to authenticated users (e.g., CreateBook, EditBook).

### Data Flow

- **Frontend:** 
  - **User Interaction:** Users interact with the UI, which triggers state updates and API calls.
  - **API Calls:** Components make API calls to the backend to fetch or update data (e.g., book details, user authentication).


  - **Data Management:** Handles API requests from the frontend, interacts with the database, and returns responses.
  - **Authentication:** Manages user sessions and authentication.

- **State Management:** 
  - **Context API:** The state is managed using React's Context API for simpler state needs.

### Summary

This architecture ensures a modular and scalable approach to building the application, with a clear separation of concerns between different components and contexts. By using React Router and Context API, the application provides a seamless user experience with efficient state management and routing.

### Overview
The project is divided into two main parts: the frontend and the backend. The frontend is a React.js application, while the backend is using the Softuni practice server. The frontend communicates with the backend through RESTful APIs.

### Database Schema
- **User:** { `username`, `email`, `password` }
- **Book:** { `title`, `author`, `genre`, `year`, `cover`, `ISBN`,`summary` }
- **Comment:** { `owner`, `bookId`, `text`, `createdOn` }

### API Endpoints
- `POST /users/register` - Registers a new user
- `POST /users/login` - Authenticates a user and returns a token
- `GET /users/logout` - Clears the authentication token
- `GET /data/books` - Retrieves a list of all books
- `POST /data/books` - Creates a new book
- `PUT /data/books` - Updates an existing book
- `DELETE /data/books` - Removes a book from the DB
- `GET /data/comments` - Retrieves a list of all comments
- `POST /data/comments` - Create a new comment

## Installation and Setup

### Prerequisites
- Node.js (version 18.16.0)
- npm
- Softuni practice server

### Installation

1. **Clone the repository:**
   - `git clone https://github.com/StPKr/SoftUni-JS/tree/main/JS/06.%20React%20JS/Project`

2. **Install dependencies for the frontend:**
   - `cd client`
   - `npm i`

3. **Run the backend server:**
   - `cd ../`
   - `cd server`
   - `node server.js`

4. **Run the client:**
   - Open a new terminal
   - `cd client`
   - `npm run dev`