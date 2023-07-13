import { useProductsQuery } from "../store/ApiSlice";
import { v4 as uuidv4 } from "uuid";
import "./PageStyles/Home.css"

import ProductContainer from "../components/ProductContainer";
import { Product as apiData } from "../types";

function Home() {

  const { data, isLoading, isFetching, isError, isSuccess } =
    useProductsQuery("");

  return (
    <div>
      {isLoading && <h1>....Loading</h1>}
      {isError && <h1>....Something Went Wrong!!</h1>}
      {isSuccess && (
        <div className="ProductsContainer">
          {data.map((value: apiData) => {
            return (
              <ProductContainer key={uuidv4()} {...value}></ProductContainer>
            );
          })}
        </div>
      )}
    </div>
  )
}

export default Home