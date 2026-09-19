import Hello from "./hello";

function App() {
  const username = "Mohit";

  return (
    // fragments
    <>
      <Hello />
      <h2>Fun with React {username}</h2>
      <p>React series</p>
    </>
  );
}

export default App;
