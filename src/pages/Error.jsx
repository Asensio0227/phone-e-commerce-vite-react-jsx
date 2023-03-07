import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper>
      <div className="page-100">
    <article className="container page">
      <div className="error row">
        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
          <h1 className="display-3">404</h1>
          <h3>page not found</h3>
          <p className="text-danger">the request url was not found </p>
          <Link to='/'>back home</Link>
        </div>
      </div>
        </article>
        </div>
      </Wrapper>
  )
}

const Wrapper = styled.section`
.page-100 {
  min-height: calc(100vh-10rem);
  padding: 5rem 0;
}
.page {
  min-height: calc(100vh - (20vh + 10rem))
}
.error {
  text-align: center;
  text-transform: uppercase;
  margin: 2rem 0;
}
a {
  border-bottom: 4px solid #28cab3;
  color: hsl(184,100%,19%);
  padding: .375rem .75rem;
  cursor:pointer;
  display: inline-block;
  transition: all .3s linear;
  :hover{
    background:hsl(183,80%,25%);
    color: #fff;
    border: none;
    border-radius: .5rem;
  } 
}
`

export default Error
