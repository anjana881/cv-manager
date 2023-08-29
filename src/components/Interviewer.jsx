import React from "react";
const interviewerData = [
  {
    Id: 1,
    Name: "Joshoea ",
    Email: "josh@gmail.com",
  },
  {
    Id: 2,
    Name: "David",
    Email: "david@gmail.com",
  },
  {
    Id: 3,
    Name: "Arun",
    Email: "arun@gmail.com",
  },
  {
    Id: 4,
    Name: "Alisha",
    Email: "alisha@gmail.com",
  },
  {
    Id: 5,
    Name: "Alina",
    Email: "alina@gmail.com",
  },
];
const Interviewer = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="p-4">ID</th>
            <th className="p-4 ">Name</th>

            <th className="p-4">Email</th>
          </tr>
        </thead>
        <tbody>
          {interviewerData?.map((user, index) => (
            <tr key={index}>
              <td className="p-3"> {user?.Id}</td>
              <td className="p-3"> {user?.Name}</td>

              <td className="p-3"> {user?.Email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export { interviewerData };
export default Interviewer;
