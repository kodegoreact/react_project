import {  Button, Card } from "react-bootstrap";
const Cart = ({cart}) => {
    return ( 
        <>
            {cart.map((item)=>(
                <>
                <Card className="m-3">
                    <Card.Body>
                        <div className="row">
                            <div className="col-md-4">
                                <img src={item.image} className="w-100" />

                            </div>
                            <div className="col-md-8">
                                <h4>
                                    {item.name}
                                </h4>
                                <h5>
                                    {item.price}
                                </h5>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque fugit labore voluptatum, similique facilis laudantium. Laboriosam nisi, nobis minus repudiandae suscipit culpa architecto cum modi? Voluptatum voluptatem placeat laborum voluptatibus.
                                </p>
                                <Button variant="danger">
                                    Remove
                                </Button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                </>
            ))}


            
            {/* <Card className="m-3">
                <Card.Body>
                    <div className="row">
                        <div className="col-md-4">
                            <img src="./imgs/bag1.png" className="w-100" />
                        </div>
                        <div className="col-md-8">
                            <h4>
                                Bag1
                            </h4>
                            <h5>
                                300
                            </h5>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque fugit labore voluptatum, similique facilis laudantium. Laboriosam nisi, nobis minus repudiandae suscipit culpa architecto cum modi? Voluptatum voluptatem placeat laborum voluptatibus.
                            </p>
                            <Button variant="danger">
                                Remove
                            </Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <Card className="m-3">
                <Card.Body>
                    <div className="row">
                        <div className="col-md-4">
                            <img src="./imgs/bag1.png" className="w-100" />
                        </div>
                        <div className="col-md-8">
                            <h4>
                                Bag1
                            </h4>
                            <h5>
                                300
                            </h5>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque fugit labore voluptatum, similique facilis laudantium. Laboriosam nisi, nobis minus repudiandae suscipit culpa architecto cum modi? Voluptatum voluptatem placeat laborum voluptatibus.
                            </p>
                            <Button variant="danger">
                                Remove
                            </Button>
                        </div>
                    </div>
                </Card.Body>
            </Card> */}
            
        </>
     );
}
 
export default Cart;