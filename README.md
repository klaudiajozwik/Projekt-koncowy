# Getting Started with Create React App

# Project Title

A brief description of what this project does and who it's for
Application Documentation
The application is a React application that allows the user to search for books using their ISBN number and add them to a list. The user can also mark the books as read or delete them from the list.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Components
The application has two main components:

### BookInfo
The BookInfo component is responsible for rendering the form that allows the user to search for books using ISBN number and displaying the list of books. It also manages the state of the application, including the list of books and the validity of the ISBN number.

### BooksList
The BooksList component is responsible for rendering the list of books and handling the user's interaction with the list, such as marking the books as read or deleting them.

## Backend
The application uses Firebase as a backend to store the list of books. When the user adds a new book, the application sends a request to the Google Books API to fetch the book's details using the ISBN number. If the book is found, its details are added to the Firebase database.

When the BooksList component mounts, it fetches the list of books from Firebase and sets the state of the BookInfo component. When the user marks a book as read or deletes it from the list, the application updates the Firebase database and updates the state of the BookInfo component.