import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation

// Dummy Button Component for the frontend
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

// Dummy Card components
const Card = ({ children }) => (
  <div className="bg-white shadow-md rounded-lg p-4">{children}</div>
);

const CardHeader = ({ children }) => <div className="mb-4">{children}</div>;

const CardTitle = ({ children }) => (
  <h2 className="text-xl font-bold">{children}</h2>
);

const CardContent = ({ children }) => <div>{children}</div>;

export default function Admin() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header 
      style={{ backgroundColor: '#2A6354' }}
      className="flex justify-between items-center h-16 text-white px-4 fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center gap-4">
          <NetworkIcon className="h-8 w-8" />
          <Link className="text-gray-300" to="/Admin">
            Admin
          </Link>
        </div>
        <div className="flex items-center gap-4">
          
          <Link className="hover:text-white" to="/ ">
            Logout
          </Link>
        </div>
      </header>

      {/* Sidebar and Main Content */}
      <div className="flex flex-1 overflow-hidden" style={{ paddingTop: '64px' }}> {/* Adjusted paddingTop to match header height */}
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-4 fixed h-full" style={{ top: '64px' }}> {/* Align sidebar with header */}
          <nav className="space-y-2">
            <div className="flex items-center gap-2">
              <VideoIcon className="h-6 w-6" />
              <Link className="hover:text-gray-300" to="/NewProduct">
                Movies
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <VideoIcon className="h-6 w-6" />
              <Link className="hover:text-gray-300" to="/Editmovie">
                Edit movies
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <UsersIcon className="h-6 w-6" />
              <Link className="hover:text-gray-300" to="/Users">
                Users
              </Link>
            </div>

          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 ml-64">
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Total Movies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl">1200</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Total Series</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl">500</div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-4">
            <img
              alt="Data Visualization"
              height="400"
              src="https://i.ibb.co/7Xhszjk/southboy.jpg"
              style={{ aspectRatio: "800/400", objectFit: "cover" }}
              width="800"
            />
          </div>
        </main>
      </div>
    </div>
  );
}


// Icons as React components
const BellIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

const NetworkIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="16" y="16" width="6" height="6" rx="1" />
    <rect x="2" y="16" width="6" height="6" rx="1" />
    <rect x="9" y="2" width="6" height="6" rx="1" />
    <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
    <path d="M12 12V8" />
  </svg>
);

const LayoutDashboardIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="7" height="9" x="3" y="3" rx="1" />
    <rect width="7" height="5" x="14" y="3" rx="1" />
    <rect width="7" height="9" x="14" y="12" rx="1" />
    <rect width="7" height="5" x="3" y="16" rx="1" />
  </svg>
);

// Additional Icons
const VideoIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect width="15" height="14" x="1" y="5" rx="2" ry="2" />
  </svg>
);

const StarIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const FileTypeIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const UsersIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const CheckIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const SettingsIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 1.65 0 0 0 9 3V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);
