import React, { useState,useEffect } from "react"


function WishList(props){

    const[data,setData] = useState([]);

    useEffect(() => {
        if(localStorage.getItem("wishList")) {
            let data = JSON.parse(localStorage.getItem("wishList"));
            console.log(`data =`, data);
            setData(data)
        }
    }, [])
    
    const del = (delKey) => {
        //e.preventDefault();
       console.log(`id =`, delKey);
       data.splice(delKey,1);
       localStorage.setItem("wishList", JSON.stringify(data));
       window.location.href = "/wishlist";
    }

    return(
        <div>
            <h6>
                {
                    data.map((item,key) =>{
                        return(
                           <div className="container" key={key}>
                               <div className="row">
                                   <div className="col-md-6 mt-2 mb-2">
                                       <div className="card">
                                           <div className="card-body">
                                               <h5>{item}</h5>
                                           </div>
                                           <div className="card-footer">
                                               <button className="btn btn-outline-dark float-end" onClick={() => del(key)}>Remove</button>
                                           </div>
                                       </div> 
                                   </div>
                               </div>
                           </div>
                        )
                    })
                }
            </h6>
        </div>
    )
}

export default WishList;