// import Login from "./Login";
// import Register from "./Register";

import Card from "./components/Card";

function App() {
  return (
    <main className="App">
      {/* <Register /> */}
      {/* <Login/> */}
      <div className="card-row">
        <Card
          title="Courses"
          imageUrl="https://img.icons8.com/?size=512&id=Hvn8YMeqLM0U&format=png"
          // body=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, voluptas?"
        />
        <Card
          title="Resources"
          imageUrl="https://img.icons8.com/?size=512&id=QAZ1r1PFVZoh&format=png"
          // body=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, voluptas?"
        />
        <Card
          title="Cheat Sheet"
          imageUrl="https://img.icons8.com/?size=512&id=czjrXqcNXo9C&format=png"
          // body=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, voluptas?"
        />
        <Card
          title="Question Bank"
          imageUrl="https://img.icons8.com/?size=512&id=1YKSEjIedMKa&format=png"
          // body=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, voluptas?"
        />
      </div>
    </main>
  );
}

export default App;
