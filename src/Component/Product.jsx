import datas from "../data.json";
import "../css/style.css"
const Product = () => {
    return (
        <div className="product" >
            {
                datas.map((data,index)=>{
                    return(
                        <div key={index} className="card-details" >
                            <img src={data.image} alt="" />
                            <h3 className="cardTilte" >
                                {data.title}
                            </h3>
                            <p className="productPrice" >
                                Price : $ {
                                    data.price
                                }
                            </p>
                            <p className="productRating" >
                                Rating : {
                                    data.rating.rate
                                }/5
                            </p>
                            <p className="productDescription" >
                                Description:{
                                    data.description
                                }
                            </p>
                            <button className="productButton" >
                                Add to cart
                            </button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Product;