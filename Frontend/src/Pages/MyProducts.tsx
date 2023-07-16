import {
  useMyProductsQuery,
  useAddMyProductMutation,
  useUpdateMyProductMutation,
  useDeleteMyProductMutation,
} from "../store/MyProductsApiSlice";
import "./PageStyles/MyProducts.css";

function MyProducts() {
  const { data, isLoading, isSuccess } = useMyProductsQuery("");

  return (
    <div>
      {isLoading && <div>...Loading</div>}
      {isSuccess && (
        <div className="ContentWrapper">{JSON.stringify(data)}</div>
      )}
      <AddUpdateDelete></AddUpdateDelete>
    </div>
  );
}

export function AddUpdateDelete() {
  // const { refetch } = useMyProductsQuery("");

  const AddData = {
    id: 2022,
    title: "AddedData",
    image: "AddedData",
    description: "AddedData",
    category: "AddedData",
    price: 1000,
    rating: {
      rate: 1000,
      count: 1000,
    },
  };

  const UpdateData = {
    id: 2022,
    title: "UpdateData",
    image: "UpdatedData",
    description: "UpdatedData",
    category: "UpdatedData",
    price: 2002,
    rating: {
      rate: 2002,
      count: 2002,
    },
  };


  const [AddMyProduct] = useAddMyProductMutation(); //adding it here
  const [UpdateProduct] = useUpdateMyProductMutation();
  const [DeleteProduct] = useDeleteMyProductMutation();
  
  const handleAdd = async () => {
    await AddMyProduct(AddData);
    // refetch();
  };
  
  const handleUpdate = () => {
    UpdateProduct(UpdateData);
  };
  
  const handleDelete = (id:string) => {
    DeleteProduct(id);
  };
  return (
    <div>
      <button onClick={handleAdd}>Add Product</button>
      <button onClick={handleUpdate}>Update Product</button>
      <button onClick={()=>{handleDelete("2022")}}>Delete Product</button>
    </div>
  );
}



export default MyProducts;
