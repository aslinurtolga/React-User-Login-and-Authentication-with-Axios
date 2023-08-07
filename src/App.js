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
          imageUrl="https://fpdl.in/uploads/20230807180909_[fpdl.in]_education-distance-learning-e-learning-online-learning-are-all-types-personal-development_27634-789_large.jpg"
          // body=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, voluptas?"
        />
        <Card
          title="Resources"
          imageUrl="https://fpdl.in/uploads/20230807180945_[fpdl.in]_global-networking-global-business-network-technology-element-this-image-are-furnished-by-nasa_123766-145_large.jpg"
          // body=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, voluptas?"
        />
        <Card
          title="Cheat Sheet"
          imageUrl="https://fpdl.in/uploads/20230807181516_[fpdl.in]_businessman-hand-using-laptop-computer-with-data-folder-file-icon-information-exchange-transfer-concept_50039-4914_large.jpg"
          // body=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, voluptas?"
        />
        <Card
          title="Question Bank"
          imageUrl="https://fpdl.in/uploads/20230807164105_[fpdl.in]_abstract-virtual-question-mark-illustration-stacks-coins-background-faq-search-concept-multiexposure_258654-9887_large.jpg"
          // body=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, voluptas?"
        />
      </div>
    </main>
  );
}

export default App;
