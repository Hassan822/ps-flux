import React from "react";
import { Link } from "react-router-dom";

function CoursesList(props) {
  return (
    <React.Fragment>
      <table className="table-striped table-bordered ">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {props.courses.map((course) => {
            return (
              <tr key={course.id}>
                <td>
                  <Link to={"course/" + course.slug}>{course.title}</Link>
                </td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default CoursesList;
