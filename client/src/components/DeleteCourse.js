import React, { Component } from "react";
// Class to delete the courses
export default class DeleteCourse extends Component {
  state = {
    course: {},
    title: "",
  };

  componentDidMount() {
    const { context } = this.props;
    const { id } = this.props.match.params;
    context.data
      // get the course detail by its id
      .getCourseDetails(id)
      .then((response) => {
        if (response) {
          this.setState({
            course: response.course,
            emailAddress: context.authenticatedUser.emailAddress,
            password: context.authenticatedUser.password,
          });
        } else {
          this.props.history.push("/notfound");
        }
      })
      .catch((err) => {
        console.log(err);
        this.props.history.push("/courses");
      });
  }

  render() {
    const { course } = this.state;
    // alert("Are you sure want to delete the course");
    return (
      <React.Fragment>
        <h1 className="delete">
          You are going to delete the course:{course.title}.
        </h1>
        <button className="button-final" onClick={() => this.delete()}>
          Delete Course{" "}
        </button>
      </React.Fragment>
    );
  }
  // Delet the course
  delete = () => {
    const { context } = this.props;
    const { course, emailAddress, password } = this.state;
    context.data
      .deleteCourse(course.id, emailAddress, password)
      .then((errors) => {
        if (errors.length) {
          console.log(errors);
        } else {
          console.log("Course deleted");
          this.props.history.push("/courses");
        }
      })
      //Errors
      .catch((err) => {
        console.log(err);
        this.props.history.push("/courses");
      });
  };
}
