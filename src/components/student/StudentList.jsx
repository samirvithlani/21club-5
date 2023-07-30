import React from "react";

export const StudentList = (props) => {
  console.log("student list...", props);
  return (
    <div>
      StudentList
      <div>
        <button
          className="bt btn-info"
          onClick={() => {
            props.test(12);
          }}
        >
          Test
        </button>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          
            <tbody>
              {
                // props.studentlist && props.studentlist.lenght>0 &&
                props.studentlist?.map((stu) => {
                  return (
                    <tr>
                      <td>{stu.id}</td>
                      <td>{stu.name}</td>
                      <td>{stu.age}</td>
                      <td>
                        <button
                          onClick={() => {
                            props.delete(stu.id);
                          }}
                          className="btn btn-danger"
                        >
                          DLEETE
                        </button>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
        </table>
      </div>
    </div>
  );
};
