import {  Button, Card } from "react-bootstrap";
import { useState } from "react";
const AddProduct = ({AddProductFunction}) => {
    let [prodName, setName] = useState();
    let [prodPrice, setPrice] = useState();
    let [prodClass, setClass] = useState('bag');
    let [prodDesc, setDesc] = useState();

    let submitData = (e) => {
        e.preventDefault();
        AddProductFunction(prodName, prodPrice, prodClass, prodDesc);
    }
    return ( 
        <>
        <div className="bg-dark py-5">
            <div className="container">
                <Card>
                    <Card.Body>
                        <Card.Title>Add Product</Card.Title>
                        <form onSubmit={submitData}>
                            <label htmlFor="">Name:</label>
                            <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} required/>
                            <br></br>
                            <label htmlFor="">Price:</label>
                            <input type="number" className="form-control"  onChange={(e) => setPrice(e.target.value)} required />
                            <br></br>
                            <label htmlFor="">Classification:</label>
                            <select name="" className="form-control"  onChange={(e) => setClass(e.target.value)} required>
                                <option value="bag">Bags</option>
                                <option value="wallet">Wallet</option>
                                <option value="shoes">Shoes</option>
                            </select>
                            {/* <br></br> */}
                            {/* <input type="file" name="" id="prodImage" className="form-control" /> */}
                            <br></br>
                            <label htmlFor="">Description:</label>
                            <textarea name=""  className="form-control"  onChange={(e) => setDesc(e.target.value)} required></textarea>

                            <br></br>
                            <input type="submit" value="Add Product" className="btn btn-warning" />
                        </form>
                        {/* {prodName}
                        <br />
                        {prodPrice}
                        <br />
                        {prodClass}
                        <br />
                        {prodDesc} */}
                    </Card.Body>
                </Card>
            </div>
        </div>
        
            
        </>
     );
}
 
export default AddProduct;