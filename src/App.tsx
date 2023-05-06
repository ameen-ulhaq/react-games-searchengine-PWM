import { useState } from "react";
import Alert from "./componenets/Alert";
import Button from "./componenets/Button";
import ListGroup from "./componenets/ListGroup";

function App() {
  let items = ["New York", "San Fransico", "Tokoyo", "London", "Paris"];

  const [alertvisible, setalertvisiblility] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      {alertvisible && (
        <Alert onClose={() => setalertvisiblility(false)}>Hello World</Alert>
      )}

      <Button onClick={() => setalertvisiblility(true)}>My Btn</Button>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}
export default App;
