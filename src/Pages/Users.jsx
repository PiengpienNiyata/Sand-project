import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../Firebase/FirebaseConfig";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
import "./users.css"; // Import your CSS file

// Components for Buttons and Cards
const Button = ({ children, variant = "default", ...props }) => {
  const baseStyles = "px-4 py-2 font-semibold text-white rounded";
  const variantStyles =
    variant === "default"
      ? "bg-blue-500 hover:bg-blue-600"
      : "bg-gray-500 hover:bg-gray-600";

  return (
    <button className={`${baseStyles} ${variantStyles}`} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children }) => (
  <div className="card">{children}</div>
);

const CardHeader = ({ children }) => <div className="card-header">{children}</div>;

const CardTitle = ({ children }) => (
  <h2 className="card-title">{children}</h2>
);

const CardContent = ({ children }) => <div className="card-content">{children}</div>;

// Main Admin Component
export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        console.log("Fetching users..."); // Debugging statement
        const usersRef = collection(db, "Users");
        const querySnapshot = await getDocs(usersRef);
        const usersData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Fetched users:", usersData); // Debugging statement
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error); // Debugging statement
        toast.error("Error fetching users.");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleDeleteUser = async (uid) => {
    try {
      const userRef = doc(db, "Users", uid);
      await deleteDoc(userRef);
      setUsers(users.filter((user) => user.id !== uid));
      toast.success("User deleted successfully.");
    } catch (error) {
      toast.error("Error deleting user.");
    }
  };

  return (
    <div className="page-container">
      <Toaster />
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <Link to="/Admin" className="header-link">Admin</Link>
        </div>
        <div className="header-right">
          <Link to="/" className="header-link">Logout</Link>
        </div>
      </header>

      {/* Sidebar and Main Content */}
      <div className="content-wrapper">
        {/* Sidebar */}
        <aside className="sidebar">
        <nav>
            <Link to="/NewProduct" className="sidebar-link">Movie</Link>
          </nav>
          <nav>
            <Link to="/users" className="sidebar-link">Users</Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <h1 className="page-title">User Management</h1>
          <div className="card-container">
            <Card>
              <CardHeader>
                <CardTitle>Users</CardTitle>
              </CardHeader>
              <CardContent>
                <table className="user-table">
                  <thead>
                    <tr>
                      <th className="table-header">UID</th>
                      <th className="table-header">Email</th>
                      <th className="table-header">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan={3} className="loading">Loading...</td>
                      </tr>
                    ) : users.length === 0 ? (
                      <tr>
                        <td colSpan={3} className="loading">No users found.</td>
                      </tr>
                    ) : (
                      users.map((user) => (
                        <tr key={user.id}>
                          <td className="table-cell">{user.id}</td>
                          <td className="table-cell">{user.email}</td>
                          <td className="table-cell">
                            <Button variant="default" onClick={() => handleDeleteUser(user.id)}>
                              Delete
                            </Button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
