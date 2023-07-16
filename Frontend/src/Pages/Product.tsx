// import {useState} from "react"
import { useProductQuery } from "../store/ApiSlice";
import "./PageStyles/Product.css";
import { useParams } from "react-router-dom";

function Product() {
  let { id } = useParams();
  let value = id ? id.toString() : "";
  const { data, isLoading, isError, isSuccess } = useProductQuery(value);

  return (
    <>
      {isLoading && <div>...Loading🐶</div>}
      {isError && <div>Something Went Wrong🥺</div>}
      {isSuccess && (
        <div className="ProductPageContainer">
          <div className="ProductPageWrapper">
            <div className="FirstHalfProduct">
              <p className="ProductPageTitle">{data.title}</p>
              <p className="ProductDes">{data.description}</p>
              <section className="CardEntities 1">
                <div className="card">{data.price} $</div>
                <div className="card">{data.category}</div>
              </section>
              <section className="CardEntities 2">
                <div className="card">{data.rating.rate}⭐</div>
              </section>
            </div>
            <div className="SecondHalfProduct">
              <img src={data.image} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
