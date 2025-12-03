import { ListGroupItem } from "react-bootstrap";

import ListGroup from 'react-bootstrap/ListGroup';

interface CustomerDetails {
id: number;        
productname: string;
price: number;
}

interface Props {
data: CustomerDetails[];
addCustomer: () => void;
deleteProduct: (id: number) => void;
}

const ShoppingCart = ({ data, addCustomer, deleteProduct }: Props) => {

let total = 0;
for (let i = 0; i < data.length; i++) {
    total += data[i].price;
}



return (
    <>
        <h3>Total: {total}</h3>
        <button onClick={addCustomer}>ADD</button>
        <ListGroup>

            {data.map((d) => (

                <ListGroupItem key={d.id}>

                    {d.productname} - ${d.price}{" "}

                    <button onClick={() => deleteProduct(d.id)}>DELETE</button>

                </ListGroupItem>

            ))}

        </ListGroup>

    </>

);

};

export default ShoppingCart;