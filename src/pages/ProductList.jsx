import React from 'react'
import Product from '../components/Product';
import Title from "../components/Title";
import styled from "styled-components";
import { useGlobalContext } from "../context/product_context";

const ProductList = () => {
  const { products } = useGlobalContext();

  return (
    <>
      <ProductWrapper className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            {
              products.map((product) => {
                return <Product key={product.id} product={product}/>
              })
            }
          </div>
        </div>
      </ProductWrapper>
    </>
  )
}

const ProductWrapper = styled.section``;

export default ProductList
