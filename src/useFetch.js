
import { useEffect, useState } from "react";


const useFetch = () => {

    let [products, setProducts] = useState([]);
    let [filteredProducts, setFilter] = useState([]);
    useEffect(()=>{
        // console.log("Website Rendered");
        let getProducts = async () => {
          let list = await fetch("https://kodegoreact.github.io/react-lessons-assets/products.json");
          let info = await list.json();
    
          setFilter(info);
          setProducts(info);
        }
        getProducts();
      }, []);
    
      let filterFunction = (category) => {
          // alert(category);
    
          if(category == "All"){
            setFilter(products);
          }else{
            let newProducts = products.filter((product) => product.classification === category);
            
            setFilter(newProducts);
          }
      }

      let AddProductFunction = (name, price, category, desc) => {

        let newItem = {
          "id": products.length + 1,
          "name": name,
          "price": price,
          "classification": category,
          "img": "https://kodegoreact.github.io/react-lessons-assets/imgs/bag1.png",
          "description": desc
      }

        setProducts(prevProduct => [...prevProduct, newItem]);
        alert("Item added");
      }
      

      return {products, filteredProducts, filterFunction, AddProductFunction}
      
}
 
export default useFetch;