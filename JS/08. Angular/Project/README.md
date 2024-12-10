# Magic Bazaar

## Table of Contents
- [Magic Bazaar](#magic-bazaar)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Project Architecture](#project-architecture)
    - [Component Overview](#component-overview)
    - [Routing and Guards](#routing-and-guards)
    - [Data Flow](#data-flow)
    - [Summary](#summary)
    - [Database Schema](#database-schema)
    - [API Endpoints](#api-endpoints)
  - [Installation and Setup](#installation-and-setup)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)

## Introduction
This is a single-page application (SPA) built using Angular CLI version 18.2.11 that serves as an online shop. The application allows users to browse various offers, add new ones to the catalog and participate in ongoing discussions under each listing. 


## Features
- User authentication (Register, Login, Logout)
- Products browsing and search functionality
- Products adding/editing/deleting
- Comments adding

## Technologies Used
- **Frontend:** Angular CLI
- **Language** TS, JS
- **Backend:** SoftUni practice server
- **Authentication:** SoftUni practice server
- **Styling:** CSS, 
- **Deployment:** GitHub

## Project Architecture

### Component Overview

**1. App Component (`app.component.ts`)**

- **Purpose:** Serves as the entry point of the application.

**2. Core Components**

- **Home (`home.component.ts`):** The landing page of the application. Displays an overview of the application and latest products.
- **Catalog (`catalog.component.ts`):** Lists all available products, with filtering and search functionality.
- **Product Details (`product-details.component.ts`):** Displays detailed information about a specific product, including user comments.
- **Create Product (`create.component.ts`):** Allows logged-in users to create new products.
- **Shared Components:** Reusable components.

**3. Guards**

- **GuestGuard (`guest.guard.ts`):** Restricts logged-in users from accessing public pages like login or register.
- **AuthGuard (`auth.guard.ts`):** Ensures only authenticated users can access private pages like creating or editing products.

**4. Shared Utilities**

- **Directives:** Custom Angular directives to enhance UI functionality (e.g., validators).
- **Pipes:** Angular pipes for data formatting (e.g., date pipe, text-trimmer pipe).
- **Services:** Centralized services for API communication and shared logic.

---

### Routing and Guards

- **Routing:** Managed using Angular Router. Defines navigation paths for both public and private sections of the application.
- **Guards:**
  - **GuestGuard:** Redirects authenticated users away from public pages (e.g., Login, Register).
  - **AuthGuard:** Protects private routes like Product Creation and Editing, ensuring only logged-in users can access them.
  - Guards are implemented at the route level and integrated seamlessly into the Angular routing module.

---

### Data Flow

- **Frontend:** 
  - **User Interaction:** Triggers actions such as form submissions, button clicks, or navigation.
  - **API Calls:** Services handle API interactions for CRUD operations (e.g., creating products, fetching details).
  - **State Updates:** Observables and RxJS operators manage asynchronous data and update the view reactively.
  - **Error Handling:** Built-in interceptors manage API errors gracefully, displaying user-friendly messages.

- **Backend Communication:**
  - RESTful API endpoints handle data persistence and user authentication.
  - Data is fetched or modified through HTTP calls using Angular's HttpClient.

- **Data Binding:**
  - **Two-Way Binding:** Synchronizes form inputs with component state.
  - **Event Binding:** Captures user interactions and triggers relevant actions.
  - **Property Binding:** Dynamically updates UI based on the state.

---

### Summary

The architecture leverages Angular's modularity to build a scalable and maintainable SPA. Core features like routing, guards, observables, and services ensure a seamless user experience. The application is divided into clear layers:
- **Components** for user interaction.
- **Services** for logic and API communication.
- **Guards and Interceptors** for security and error handling.
This approach ensures a robust and efficient application that fulfills all project requirements.


This architecture ensures a modular and scalable approach to building the application, with a clear separation of concerns between different components and contexts. By using React Router and Context API, the application provides a seamless user experience with efficient state management and routing.

### Database Schema
- **User:** { `username`, `email`, `password`, `tel` }
- **Product:** { `name`, `description`, `price`, `seller`, `tel`, `image` }
- **Comment:** { `author`, `productId`, `text`, `createdOn` }

### API Endpoints
- `POST /users/register` - Registers a new user
- `POST /users/login` - Authenticates a user and returns an authentication token
- `GET /users/logout` - Clears the authentication token
- `GET /data/products` - Retrieves a list of all products
- `POST /data/products` - Creates a new product
- `PUT /data/products` - Updates an existing product
- `DELETE /data/products` - Removes a product from the DB
- `GET /data/comments` - Retrieves a list of all comments
- `POST /data/comments` - Create a new comment

## Installation and Setup

### Prerequisites
- Node.js (version 18.16.0)
- npm
- Softuni practice server

### Installation

1. **Clone the repository:**
   - `git clone https://github.com/StPKr/SoftUni-JS/tree/main/JS/08.%20Angular/Project`

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
   - `ng serve`