import React from "react";

import List from "./components/List/List";
import InputForm from "./components/Input/Input";

const wishes = [{ wish: "Nvidia 3090" }];

function App() {
  const [wishList, setwishList] = React.useState(wishes);

  return (
    <div className="container">
      <h1>App</h1>
      <div className="cards-container">
        <List wishList={wishList} setwishList={setwishList} />
      </div>
      <InputForm
        className="InputForm"
        wishList={wishList}
        setwishList={setwishList}
      />
    </div>
  );
}

export default App;
