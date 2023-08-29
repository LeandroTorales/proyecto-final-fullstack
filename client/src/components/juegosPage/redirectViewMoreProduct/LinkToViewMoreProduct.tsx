import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

interface Props {
  idProduct: number;
  children: React.ReactNode;
}

const LinkToViewMoreProduct = ({ idProduct, children }: Props) => {
  return (
    <>
      <Link to={`/juegos/${idProduct}`} id="link">
        {children}
      </Link>
    </>
  );
};

export default LinkToViewMoreProduct;
