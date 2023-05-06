import ListGroup from "./componenets/ListGroup";

function App() {
  let items = ["New York", "San Fransico", "Tokoyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}
export default App;
