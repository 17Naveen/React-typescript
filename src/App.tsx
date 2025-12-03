import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [shoppingcart, setShoppingCart] = useState([
    { id: 1, productname: "usb", price: 400 },
    { id: 2, productname: "ucb", price: 500o },
  ]);

  const [idCount, setIdCount] = useState(2);

  const addcustomer = () => {
    const newCount = idCount + 1;
    setShoppingCart((prev) => [
      ...prev,

      { id: newCount, productname: "TV", price: 50000 },
    ]);

    setIdCount(newCount);
  };

  const deleteProduct = (id: number) => {
    setShoppingCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <ShoppingCart
        data={shoppingcart}
        addCustomer={addcustomer}
        deleteProduct={deleteProduct}
      />
    </>
  );
}

export default App;
