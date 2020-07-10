//import React
import React, { Component } from "react";
//import React Router elements
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//import CSS
import "./App.css";

//import components
import Courses from "./components/Courses";
import CreateCourse from "./components/CreateCourse";
import CourseDetail from "./components/CourseDetail";
import UserSignIn from "./components/UserSignIn";
import UserSignUp from "./components/UserSignUp";
import UserSignOut from "./components/UserSignOut";
import UpdateCourse from "./components/UpdateCourse";
import DeleteCourse from "./components/DeleteCourse";
import Header from "./components/Header";

//import error related components
import Error from "./components/Error";
import NotFound from "./components/NotFound";

// Context get the date witout props
import withContext from "./Context";
// Private Route for update and delete courses
import PrivateRoute from "./PrivateRoute";

//Variables with Context
const CoursesWithContext = withContext(Courses);
const CourseDetailWithContext = withContext(CourseDetail);
const CreateCourseWithContext = withContext(CreateCourse);
const UpdateCourseWithContext = withContext(UpdateCourse);
const DeleteCourseWithContext = withContext(DeleteCourse);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignOutWithContext = withContext(UserSignOut);
const HeaderWithContext = withContext(Header);

class App extends Component {
  render() {
    return (
      <Router>
        <div id="root">
          <div>
            <HeaderWithContext />
            <hr />
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/courses" />} />
              <Route exact path="/courses" component={CoursesWithContext} />
              <PrivateRoute
                path="/courses/create"
                component={CreateCourseWithContext}
              />
              <Route
                exact
                path="/courses/:id"
                component={CourseDetailWithContext}
              />
              <PrivateRoute
                exact
                path="/courses/:id/update"
                component={UpdateCourseWithContext}
              />
              <PrivateRoute
                path="/courses/delete/:id"
                component={DeleteCourseWithContext}
              />
              <Route path="/signin" component={UserSignInWithContext} />
              <Route path="/signup" component={UserSignUpWithContext} />
              <Route path="/signout" component={UserSignOutWithContext} />
              <Route path="/error" component={Error} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
