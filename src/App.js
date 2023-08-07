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
          title="Card Title"
          imageUrl="./images/içerik.png"
          body=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, voluptas?"
        />
        <Card
          title="Card Title"
          imageUrl="./images/içerik.png"
          body=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, voluptas?"
        />
        <Card
          title="Card Title"
          imageUrl="./images/içerik.png"
          body=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, voluptas?"
        />
        <Card
          title="Card Title"
          imageUrl="./images/içerik.png"
          body=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, voluptas?"
        />
      </div>
    </main>
  );
}

export default App;
