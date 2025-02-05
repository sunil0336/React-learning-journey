// npm install react-router-dom

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Components
const Home = () => (
  <div>
    <h2>Welcome to React Routing</h2>
    <p>This is a simple page to demonstrate React Routing concepts.</p>
  </div>
);

const RoutingPage = () => (
  <div>
    <h2>What is Routing in React?</h2>
    <p>
      Routing in React refers to the process of navigating between different pages or components without reloading the entire webpage. 
      Since React is a Single Page Application (SPA), it does not reload new HTML pages when switching routes. Instead, it dynamically updates the content based on the URL.
    </p>
    <h3>🔍 Key Components of React Router</h3>
    <ul>
      <li><strong>1️⃣ BrowserRouter (Router):</strong> The main component that enables routing in a React app. Wraps the entire application to provide routing functionality.</li>
      <li><strong>2️⃣ Routes:</strong> Groups multiple Route components. Ensures only one route is active at a time.</li>
      <li><strong>3️⃣ Route:</strong> Defines a specific path and the corresponding component to render.</li>
      <li><strong>4️⃣ Link & NavLink:</strong> Used for navigation instead of <code>&lt;a&gt;</code> tags (prevents full page reload). <code>NavLink</code> provides active styling for selected links.</li>
      <li><strong>5️⃣ useNavigate (Programmatic Navigation):</strong> Allows redirecting users within components using JavaScript.</li>
    </ul>
  </div>
);

const Xyz = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/routing">React Routing</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/routing" element={<RoutingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Xyz;

