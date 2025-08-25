// src/App.jsx
import ProfileCard from './ProfileCard'; // Assuming this is from Day 6
import Counter from './components/Counter'; // Import Counter
import LivePreview from './components/LivePreview'; // Import LivePreview
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Day 6 Task: Profile Cards</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <ProfileCard name="Vipin Tomar" role="Team Lead" team="Syntax Solvers" />
        <ProfileCard name="Jayesh Thakur" role="Full Stack" team="Syntax Solvers" />
        <ProfileCard name="Ambar Gupta" role="Frontend" team="Syntax Solvers" />
      </div>

      <hr style={{ margin: '40px 0' }} />

      <h1>Day 7 Task: State Management</h1>
      <Counter />
      <LivePreview />
    </div>
  );
}

export default App;
