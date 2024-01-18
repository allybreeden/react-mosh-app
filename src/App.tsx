// list group
// import ListGroup from "./components/ListGroup";

import { useState } from "react";
import AlertWithDismiss from "./components/AlertWithDismiss";
import Button from "./components/Button";

//alert
// import Alert from "./components/Alert";

// const handleSelectItem = (item: string) => {
//   console.log(item);
// }

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  // list group
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <div>
      {alertVisible && (
        <AlertWithDismiss onClose={() => setAlertVisibility(false)}>
          You clicked the button!
        </AlertWithDismiss>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My button</Button>
    </div>

    //alert
    // <div>
    //   <Button onClick={ () => console.log("Clicked")}>My button</Button>
    // </div>

    //alert
    // <div>
    //   <Alert>
    //     Hello <span>World!</span>
    //   </Alert>
    // </div>

    // list group
    // <div>
    //   <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}></ListGroup>
    // </div>
  );
}

export default App;
