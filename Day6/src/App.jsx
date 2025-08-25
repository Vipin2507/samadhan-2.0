// src/App.jsx
// This is the main component where we will use our ProfileCard.

// 1. Import the ProfileCard component
import ProfileCard from './ProfileCard';
import './App.css'; // You can keep the default styling for now

function App() {
  return (
    <div className="App">
      <h1>Meet Our Team: Syntax Solvers</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {/* 2. Use the component and pass props */}
        <ProfileCard
          name="Vipin Tomar"
          role="Team Lead / Backend Dev"
          team="Syntax Solvers"
        />
        <ProfileCard
          name="Jayesh Thakur"
          role="Full Stack Enthusiast"
          team="Syntax Solvers"
        />
        <ProfileCard
          name="Ambar Gupta"
          role="Frontend & Design"
          team="Syntax Solvers"
        />
      </div>
    </div>
  );
}

export default App;
