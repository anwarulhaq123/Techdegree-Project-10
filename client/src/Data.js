//File managing data
import config from "./config";

export default class Data {
  api(
    path,
    method = "GET",
    body = null,
    requiresAuth = false,
    credentials = null
  ) {
    const url = config.apiBaseUrl + path;

    const options = {
      method,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }

    if (requiresAuth) {
      const encodedCredentials = btoa(
        `${credentials.emailAddress}:${credentials.password}`
      );

      options.headers["Authorization"] = `Basic ${encodedCredentials}`;
    }

    return fetch(url, options);
  }

  // get User with emailAddress and Password from API
  async getUser(emailAddress, password) {
    const response = await this.api("/users", "GET", null, true, {
      emailAddress,
      password,
    });
    if (response.status === 200) {
      //if success
      return response.json().then((data) => data);
    } else if (response.status === 401) {
      // no sussess
      return null;
      // If Error
    } else {
      throw new Error();
    }
  }

  //Create or Post the new user
  async createUser(user) {
    const response = await this.api("/users", "POST", user); //Post new user to API
    if (response.status === 201) {
      //if success

      return [];
    } else if (response.status === 400) {
      //no success
      return response.json().then((data) => {
        return data.errors;
      });
      // If Error
    } else {
      throw new Error();
    }
  }

  //get all the courses
  async getCourses() {
    const response = await this.api("/courses", "GET");
    // If response id ok
    if (response.status === 200) {
      const courses = await response.json().then((data) => data);
      // If get all courses
      return courses;
    } else if (response.status === 400) {
      // If no success .. Errors
      return response.json().then((data) => {
        return data.errors;
      });
    } else {
      throw new Error();
    }
  }

  //post the new courses
  async createCourse(emailAddress, password, course) {
    const response = await this.api("/courses", "POST", course, true, {
      //post new course to API
      emailAddress,
      password,
    });
    if (response.status === 201) {
      //if success
      return [];
    } else if (response.status === 400) {
      return response.json().then((data) => {
        return data.errors;
      });
      // Error
    } else {
      throw new Error();
    }
  }
  // get a course by id
  async getCourseDetails(id) {
    const response = await this.api(`/courses/${id}`, "GET"); //get details of course from API using its ID
    if (response.status === 200) {
      const course = await response.json().then((data) => data);

      return course;
    } else if (response.status === 400) {
      return response.json().then((data) => {
        return data.errors;
      });
    } else {
      throw new Error();
    }
  }

  // Update a course by its id
  async updateCourse(id, course, emailAddress, password) {
    const response = await this.api(`/courses/${id}`, "PUT", course, true, {
      emailAddress,
      password,
    });
    // If response id ok
    if (response.status === 204) {
      return [];
    } else if (response.status === 400) {
      return response.json().then((data) => {
        return data.errors;
      });
    } else {
      throw new Error();
    }
  }
  // Delete a course by its id
  async deleteCourse(id, emailAddress, password) {
    const response = await this.api(`/courses/${id}`, "DELETE", null, true, {
      emailAddress,
      password,
    });
    // If response is ok
    if (response.status === 204) {
      return [];
    } else if (response.status === 403) {
      return response.json().then((data) => {
        return data.errors;
      });
      // Error
    } else {
      throw new Error();
    }
  }
}
