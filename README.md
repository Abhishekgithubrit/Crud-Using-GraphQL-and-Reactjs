CRUD Operation Project using React.js and GraphQL
This project demonstrates a simple CRUD (Create, Read, Update, Delete) operation using React.js for the front-end and GraphQL for the back-end. The project consists of a GraphQL server with schema and resolver setup, and a React application to interact with the server.

Project Structure
graphQL_server/graph: Contains the GraphQL server code.
myapp: Contains the React.js application.

Setup Instructions
Prerequisites
Node.js installed on your machine

Step 1 : For Run the Project

. cd graphQL_Server
. cd graph
. node server.js
when graph_QL Server started at port "Server running at http://localhost:4000"

Step 2: Open a new terminal (Without intrupting graphQL server terminal)
. cd myapp
. npm start


Features
Create: Add new items to the database.
Read: View all items from the database.
Update: Modify existing items.
Delete: Remove items from the database.

Technologies Used
React.js: For building the user interface.
GraphQL: For querying and mutating data.
Apollo Client: For connecting React application with GraphQL server.

How to Use
Ensure the GraphQL server is running on http://localhost:4000.
Start the React application by running npm start in the myapp directory.
Open http://localhost:3000 in your browser to interact with the application.
Feel free to explore the code and customize it to fit your needs. Contributions and feedback are welcome!
