import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../Firebase/FirebaseConfig";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
import "./editmovie.css"; // Import your CSS file

// Components for Buttons and Cards
const Button = ({ children, variant = "default", ...props }) => {
  const baseStyles = "px-4 py-2 font-semibold text-white rounded";
  const variantStyles =
    variant === "default"
      ? "bg-red-500 hover:bg-red-600"  // Changed color to red for delete button
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

// Main Movie Component
export default function editmovie() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchMovies = async () => {
      try {
        console.log("Fetching movies...");
        const moviesRef = collection(db, "Movies");
        const querySnapshot = await getDocs(moviesRef);
        const moviesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (isMounted) {
          console.log("Fetched movies:", moviesData);
          setMovies(moviesData);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        toast.error("Error fetching movies.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchMovies();

    return () => {
      isMounted = false;
    };
  }, []);


  const handleDeleteMovie = async (id) => {
    try {
      const movieRef = doc(db, "Movies", id);
      await deleteDoc(movieRef);
      setMovies(movies.filter((movie) => movie.id !== id));
      toast.success("Movie deleted successfully.");
    } catch (error) {
      toast.error("Error deleting movie.");
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
            <Link to="/NewMovie" className="sidebar-link">Add Movie</Link>
          </nav>
          <nav>
            <Link to="/movies" className="sidebar-link">Movies</Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <h1 className="page-title">Movie Management</h1>
          <div className="card-container">
            <Card>
              <CardHeader>
                <CardTitle>Movies</CardTitle>
              </CardHeader>
              <CardContent>
                <table className="movie-table">
                  <thead>
                    <tr>
                      <th className="table-header">Movie Name</th>
                      <th className="table-header">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan={2} className="loading">Loading...</td>
                      </tr>
                    ) : movies.length === 0 ? (
                      <tr>
                        <td colSpan={2} className="loading">No movies found.</td>
                      </tr>
                    ) : (
                      movies.map((movie) => (
                        <tr key={movie.id}>
                          <td className="table-cell">{movie.name}</td>
                          <td className="table-cell">
                            <Button variant="default" onClick={() => handleDeleteMovie(movie.id)}>
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