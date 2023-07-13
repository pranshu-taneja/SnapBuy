import { useMyProductsQuery, useAddMyProductMutation, useUpdateMyProductMutation, useDeleteMyProductMutation } from "../store/MyProductsApiSlice";
import "./PageStyles/MyProducts.css";


function MyProducts() {

  const { data, isLoading, isSuccess } = useMyProductsQuery("");

  console.log(data);
  return (
    <div>
      {isLoading && <div>...Loading</div>}
      {isSuccess && (
        <div className="ContentWrapper">{JSON.stringify(data)}</div>
      )}
      <AddProduct></AddProduct>
      <UpdateMyProduct></UpdateMyProduct>
      <DeleteMyProduct id="10"></DeleteMyProduct>
    </div>
  );
}

export function AddProduct(){
    const TempData = {
        id: 19,
        title: "Value",
        image: "string",
        description: "string",
        category: "string",
        price: 18,
        rating: {
          rate: 19,
          count: 29,
        },
      };

    const [AddMyProduct] = useAddMyProductMutation();               //adding it here


      const handleClick = ()=>{
        AddMyProduct(TempData);
      }

    return(
        <button onClick={handleClick}>Add Product</button>
    )
}

export function UpdateMyProduct(){
    const TempData = {
        id: 10,
        title: "Value",
        image: "string",
        description: "string",
        category: "string",
        price: 99,
        rating: {
          rate: 99,
          count: 99,
        },
    }

    const [UpdateProduct] = useUpdateMyProductMutation();
    
    const handleClick = ()=>{
        UpdateProduct(TempData);
    }

    return (
        <div>
            <button onClick={handleClick}>Update Product</button>
        </div>
    )
}

export function DeleteMyProduct(prop:{id:string}){
    const [DeleteProduct] = useDeleteMyProductMutation();

    const handleClick = ()=>{
        DeleteProduct(prop.id);
    }

    return(
        <div>
            <button onClick={handleClick}>Delete Product</button>
        </div>
    )
}
export default MyProducts;
