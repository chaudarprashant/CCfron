import { useState } from "react";
import axios from "axios";

const UserForm = () => {
  const [formData, setFormData] = useState({ username: "", email: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://cc-1-dkty.onrender.com/api/users", formData);
      alert("User saved!");
      setFormData({ username: "", email: "" });
    } catch (err) {
      alert("Error saving user.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        required
        className="border p-2 w-full"
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Submit
      </button>
    </form>
  );
};

export default UserForm;
