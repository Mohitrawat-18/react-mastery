import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h1>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <Card
          title="React Course"
          description="Learn React from basics to advanced concepts."
          image="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg"
          price="499"
        />
        <Card
          title="Java Course"
          description="Learn Java from basics to Spring Boot."
          image="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"
          price="599"
        />
      </div>
    </>
  );
}

export default App;
