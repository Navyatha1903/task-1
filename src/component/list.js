import React,{useState,useEffect} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {addToWishList} from '../action/action'



function List(props){

    const wishHandler = (name) => {
        props.addToWishList(name);
    }
    
    return(
        <div>
            <h5>
                {
                    props.data.map((item,key) => {
                        const{country,name,web_pages} = item;
                        return(
                            <div className="col-md-12 mt-2 mb-2" key={key}>
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="text-secondary">{country}</h4>
                                </div>
                                <div className="card-body">
                                    <p>
                                       <strong>Name</strong>
                                       <p className="text-secondary float-end">{name}</p>
                                    </p>
                                    <p>
                                    <strong>web page</strong>
                                    <span>
                                        {
                                            web_pages.map((item,key) => {
                                                return  <a target={"_blank"}  key={key} className="btn btn-link float-end" href={`${item}`}>
                                                    {item}
                                                </a>
                                            })
                                        }
                                    </span>
                                 </p>
                                </div>
                               <div className="footer">
                                   <button onClick={()=> wishHandler(name,country) } className="btn btn-outline-dark float-end">Add to wishlist</button>
                               </div>
                            </div>
                        </div>
                        )
                    })
                } 
            </h5>
        </div>
    )
}


// carry the state from store
const mapStateToProps = (state) => {
    return {
        data: state
    }
}


// action const from dispatcher 
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addToWishList:addToWishList
    }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(List)