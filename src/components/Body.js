import { Container, Button, Card } from "react-bootstrap";
import ShopItems from "./ShopItems";
// import SampleClassComponent from "./SampleClassComponent";
// import SampleFunctionalComponent from "./SampleFunctionalComponent";

const Body = ({addItems, products, filterFunction, addProduct}) => {

    let sampleFunction = (a) =>{
        alert("This is a sample function" + a);
    }

   
    
    return ( 
        <>
            <div className="bg-dark text-light py-5">
                <Container>
                    <div className="d-flex justify-content-between w-100">
                        <h1>Products</h1>
                        <div>
                            <Button variant="warning" className="me-2" onClick={() => filterFunction('All')}>All</Button>
                            <Button variant="warning" className="me-2" onClick={() => filterFunction('wallet')}>Wallet</Button>
                            <Button variant="warning" className="me-2" onClick={() => filterFunction('bag')}>Bags</Button>
                            <Button variant="warning" className="me-2" onClick={() => filterFunction('shoes')}>Shoes</Button>
                        </div>
                    </div>
                    <div>
                        
                        <div className="row g-5">
                            
                            <ShopItems products={products} addItems={addItems} addProduct={addProduct}></ShopItems>
                            
                        </div>

                            



                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                    

                </Container>
            </div>
        </>
     );
}
 
export default Body;