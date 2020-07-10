# Techdegree-Project-10
React full Stack 

To complete this full stack application i have used the following 

Create my React project

i have used the the create-react-app tool to set up and create your React project in a folder named client.
To do this, run the command npx create-react-app client from the root of your repo.


Set up my REST API


 I add  a folder named api to the root of  repo.
Copy the REST API Express application from my unit 9 project into the api folder.

Add CORS support to My REST API


While developing the React application, i was be using the create-react-app development server, which will host my application (by default) at http://localhost:3000/. my REST API, will be hosted separately from my React application at http://localhost:5000/. While both the React and REST API applications will be using the same hostname, localhost, their port numbers differ, so the browser will treat them as separate origins or domains.


Build The app components

i have build the following app componenets


Courses.js
CourseDetail.js
DeleteCourse.js
UpdateCourse.js
UserSignIn.js
UserSignOut.js
UserSignUp.js
Header.js
Form.js
Error.js
NotFound.js

Routs Setup

/ - Courses
/courses/create - CreateCourse

/courses/:id/update - UpdateCourse

/courses/:id - CourseDetail

/signin - UserSignIn

/signup - UserSignUp

/signout - UserSignOut

