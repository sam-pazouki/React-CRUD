![Screenshot 2024-06-30 233004](https://github.com/sam-pazouki/React-CRUD/assets/68926038/2b960ba3-893b-458b-bcd8-52347920cf3f)

- Book Management App
A CRUD (Create, Read, Update, Delete) application for managing books, built with React, Redux, and TypeScript.

- Table of Contents
Overview
Features
Installation
Usage
Folder Structure
Technologies Used
Testing
Future Improvements
Contributing
- Overview
This project is a web application that allows users to perform CRUD operations on a list of books. It utilizes React for the frontend view layer, Redux for state management, and TypeScript for type safety. The application interacts with a mock API server using json-server for simulating backend operations.

- Features
View a list of books with pagination.
Add a new book.
Edit an existing book.
Delete a book.
Optimistic UI updates for a seamless user experience.
Error handling and feedback for API operations.
Responsive design for various screen sizes.
Demo
(Include a link to a live demo or screenshots/gifs showcasing the application)

Installation
To run this project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/book-management-app.git
Navigate into the project directory:

bash
Copy code
cd book-management-app
Install dependencies:

bash
Copy code
npm install
Usage
Start the mock API server:

bash
Copy code
npm run server
Start the React application:

bash
Copy code
npm start
Open your browser and visit http://localhost:3000 to view the application.

- Folder Structure
graphql
Copy code
src/
├── components/         # Reusable UI components
│   ├── BookForm.tsx    # Form for adding/editing books
│   ├── BookList.tsx    # Component for displaying list of books
├── pages/              # Components representing different pages
│   ├── AddBookPage.tsx # Page for adding a new book
│   ├── EditBookPage.tsx# Page for editing an existing book
│   ├── HomePage.tsx    # Home page displaying list of books
├── redux/              # Redux setup
│   ├── slices/         # Redux slices (reducers, actions)
│   │   ├── bookSlice.ts# Slice for books state management
│   │   ├── bookSlice.selectors.ts # Selectors for accessing state
│   ├── hooks.ts        # Custom Redux hooks
│   ├── store.ts        # Redux store configuration
├── routes/             # Application routing
│   ├── public.routes.tsx # Public routes configuration
├── styles.css          # Global styles
├── types/              # TypeScript type definitions
│   ├── book.ts         # Interfaces for Book and related types
├── tests/              # Unit tests
│   ├── BookForm.test.tsx   # Test for BookForm component
│   ├── BookList.test.tsx   # Test for BookList component
│   ├── bookSlice.test.ts   # Test for Redux slice
│   ├── HomePage.test.ts    # Test for HomePage component
├── main.tsx            # Entry point of the application
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── README.md           # Project README file
├── vite.config.ts      # Vite configuration
├── db.json             # Mock data for json-server

- Technologies Used
React - Frontend library for building user interfaces.
Redux - State management library for managing application state.
TypeScript - Superset of JavaScript that adds static types.
json-server - Mock API server for simulating backend operations.
React Router - Declarative routing for React applications.
Testing Library - Testing utilities for React applications.
CSS Modules - Scoped CSS styling.
axios - Promise-based HTTP client for the browser and Node.js.

- Testing
Unit tests are located in the tests/ directory.

Tests use Jest and Testing Library for React.

Run tests with the command:

bash
Copy code
npm test









