import React from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../utils/config';

const Card = ({ product, handleAddToCart }) => {
    const titleStyle = {
        display: "block",
        textOverflow: "ellipsis",
        wordWrap: "break-word",
        overflow: "hidden",
        maxHeight: "2em",
        lineHeight: "1em"
    }
    const imgStyle = {
        height: 250,
        objectFit: "cover",
        objectPosition: "0px 0px"
    }
    return (
        <div className="col-md-3 col-sm-4 col-xs-12 mb-3">
            <div className="card">
                <img
                    src={`${API}/product/photo/${product._id}`}
                    alt={product.name}
                    style={imgStyle}
                    className="card-img-top"
                />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    ${product.price}
                    <p className="card-text">{product.quantity ? (<span>In Stock</span>) : (<span>Out of Stock</span>)}</p>
                    <Link to={`/product/${product._id}`}>
                        <button className="btn btn-outline-warning btn-sm">View Product</button>
                    </Link>
                    {product.quantity ? <>
                        &nbsp;<button className="btn btn-outline-primary btn-sm" onClick={handleAddToCart} >Add to Cart</button>
                    </> : ""}
                </div>
            </div>
        </div>
    )
}

export default Card;