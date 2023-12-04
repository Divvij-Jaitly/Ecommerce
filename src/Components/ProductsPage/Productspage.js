import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";

const Productspage = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products?skip=0&limit=150").then((response) => {
      setproducts(response.data['products'])
      console.log(response.data)
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    })
}, [])

console.log(products)

  return (

    <div>  
       <div className='main-div'>
       <div className='flex-body' style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px'}}>
        {/* {Array.isArray(products) &&
    products
      .filter((product) => typeof product === 'object' && product !== null)
      . */}
        {products &&
          products?.map(index => (
         
            <Card style={{ width: "18rem" }} key={index.id}>
              <Card.Img variant="top" src={index.thumbnail} />
              <Card.Body>
                <Card.Title>{index.title}</Card.Title>
                <Card.Text>{index.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{index.price}</ListGroup.Item>
                <ListGroup.Item>{index.discountPercentage}</ListGroup.Item>
              </ListGroup>
              {/* <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body> */}
            </Card>
          ))}
      </div>
      </div>
    </div>
  );
};

export default Productspage;
