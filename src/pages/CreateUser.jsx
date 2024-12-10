import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addUser } from "../redux/slices/user-slice";

const CreateUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    age: "",
    profession: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      user.first_name.trim() &&
      user.last_name.trim() &&
      user.age &&
      user.profession.trim() &&
      user.gender
    ) {
      dispatch(addUser(user));
      navigate("/users");
    } else {
      alert("Please fill all fields correctly");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg max-w-lg mx-auto mt-10"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Create New User</h2>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">First Name</label>
        <input
          type="text"
          name="first_name"
          placeholder="Enter first name"
          value={user.first_name}
          onChange={handleChange}
          className="w-full p-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Last Name</label>
        <input
          type="text"
          name="last_name"
          placeholder="Enter last name"
          value={user.last_name}
          onChange={handleChange}
          className="w-full p-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Age</label>
        <input
          type="number"
          name="age"
          placeholder="Enter age"
          value={user.age}
          onChange={handleChange}
          className="w-full p-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Profession</label>
        <input
          type="text"
          name="profession"
          placeholder="Enter profession"
          value={user.profession}
          onChange={handleChange}
          className="w-full p-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Gender</label>
        <select
          name="gender"
          value={user.gender}
          onChange={handleChange}
          className="w-full p-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-white text-indigo-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
      >
        Add User
      </button>
    </form>
  );
};

export default CreateUser;
