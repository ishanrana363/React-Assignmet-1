import datas from "../data.json"
const Product = () => {
    return (
        <div>
            {
                datas.map((data,index)=>{
                    return(
                        <div key={index} className="card" >
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Product;