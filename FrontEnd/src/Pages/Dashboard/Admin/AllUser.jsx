import React, { useEffect, useState } from 'react';
import useAxiosSecuire from '../../../Hooks/AxiosSecuire';

function AllUser() {
  const [users, setUsers] = useState([]); // <-- এখানে [] ব্যবহার করো
  const axiosSecuire = useAxiosSecuire();

  useEffect(() => {
    axiosSecuire.get('/users')
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => console.error(err));
  }, [axiosSecuire]);

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllUser;
