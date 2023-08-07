// import Login from "./Login";
// import Register from "./Register";

import Card from "./components/Card";

function App() {
  return (
    <main className="App">
      {/* <Register /> */}
      {/* <Login/> */}
      <Card
        title="Card Title"
        imageUrl="https://metamy.com.tr/wp-content/uploads/2023/07/1.png"
        body=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, voluptas?"
      />
    </main>
  );
}

export default App;
