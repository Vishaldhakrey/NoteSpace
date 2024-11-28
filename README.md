# NoteSpace - Your Personal Note-Taking App

Welcome to **NoteSpace**, a powerful and user-friendly note-taking application built with the **MERN stack** (MongoDB, Express, React, Node). With NoteSpace, you can easily create, manage, and organize your notes all in one place, with a sleek and modern design.

## 🚀 Features

- **Create Notes**: Add new notes with a title and content.
- **Update Notes**: Edit your existing notes easily.
- **Delete Notes**: Remove notes that are no longer needed.
- **Pin Notes**: Keep your important notes at the top.
- **Dark Mode**: Toggle between light and dark themes to suit your preferences.
- **User Authentication**: Secure login and registration using JWT.

## 🛠️ Technologies Used

- **Frontend**: React.js, CSS, Material-UI
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **State Management**: React Hooks
- 
## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [npm](https://www.npmjs.com/get-npm) (Node Package Manager)
- [MongoDB](https://www.mongodb.com/) (either locally or use MongoDB Atlas for a cloud database)

## Setup Instructions

### Clone the Repository

First, clone the repository to your local machine:

git clone https://github.com/Vishaldhakrey/NoteSpace
cd NoteSpace

1. **Dependencies Installation**: 
    - `npm install` in both the frontend and backend directories installs all the necessary libraries from `package.json`.

2. **Environment Configuration**: 
    - `.env` files are used to store sensitive data like MongoDB URIs and JWT secrets.
    - Make sure to replace `<Your MongoDB URI>`, `<Your Secret Key>`, and `<Your Cookie Name>` with actual values.

3. **Starting the Application**:
    - Backend: Run `npm run dev` to start the backend server.
    - Frontend: Run `npm start` to start the React development server.

This should help you set up and run your MERN application successfully.
