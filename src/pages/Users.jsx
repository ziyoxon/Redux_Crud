import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser } from "../redux/slices/user-slice";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Users = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (userId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      dispatch(deleteUser(userId));
    }
  };

  

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
        User Information
      </h2>

      {users.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500 mb-10">User Empty.</p>
          <a
            href="/create-user"
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
          >
            Add New User
          </a>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow rounded-lg">
            <thead className="bg-blue-100 border-b">
              <tr>
                <th className="px-4 py-2 text-left text-gray-600">#</th>
                <th className="px-4 py-2 text-left text-gray-600">
                  First Name
                </th>
                <th className="px-4 py-2 text-left text-gray-600">Last Name</th>
                <th className="px-4 py-2 text-left text-gray-600">Age</th>
                <th className="px-4 py-2 text-left text-gray-600">Gender</th>
                <th className="px-4 py-2 text-left text-gray-600">
                  Profession
                </th>
                <th className="px-4 py-2 text-center text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-2 text-gray-700">{index + 1}</td>
                  <td className="px-4 py-2 text-gray-700">{user.first_name}</td>
                  <td className="px-4 py-2 text-gray-700">{user.last_name}</td>
                  <td className="px-4 py-2 text-gray-700">{user.age}</td>
                  <td className="px-4 py-2 text-gray-700">{user.gender}</td>
                  <td className="px-4 py-2 text-gray-700">{user.profession}</td>
                  <td className="px-4 py-2 text-center">
                    <Link
                      to={`/edit/${user.id}`}
                      className="text-blue-500 hover:text-blue-700 mx-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-red-500 hover:text-red-700 mx-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Users;
