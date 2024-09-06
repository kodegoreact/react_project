import {  Button, Card } from "react-bootstrap";
const ShopItems = ({products, addItems, addProduct}) => {
    return ( 
        <>
        {products.map((product)=>(
            <>
                <div className="col-md-4">
                    <Card>
                        <Card.Img variant="top" src={product.img}/>
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                {product.price}
                                <br></br>
                                {product.category}
                            </Card.Text>
                            <Button variant="warning" onClick={() => addItems({name: product.name, price: product.price, image: product.img, category: product.category})}>Add to Cart</Button>
                            <Button variant="outline-warning ms-2" >More Information</Button>
                        </Card.Body>
                    </Card>
                </div>
            </>
        ))}
            {/* <div className="col-md-4">
                <Card>
                    <Card.Img variant="top" src={image}/>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {price}
                            <br></br>
                            {category}
                        </Card.Text>
                        <Button variant="warning">Add to Cart</Button>
                        <Button variant="outline-warning ms-2">More Information</Button>
                    </Card.Body>
                </Card>
            </div> */}
        </>
     );
}
 
export default ShopItems;