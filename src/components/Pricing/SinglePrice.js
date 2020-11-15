import React from 'react';
import { Link } from 'react-router-dom';

const SinglePrice = ({ pricelist }) => {
    const { title, price, features } = pricelist
     const styles={
         backgroundColor:'black',
     }
    return (
        <div className="col-md-4 p-1">
            <div style={styles} className="singlePrice py-4">
                <p className="text-warning mb-0"><small>Billed Monthly</small></p>
                <h4 className="text-light">{title}</h4>
                <h1 className="text-warning font-weight-bold">${price}</h1>
                {
                    features.map(f=><p className="text-light mb-2"><small>{f}</small></p>)
                }
                <Link to="/Membership"><button type="button" class="btn bg-warning btn-lg font-weight-bold px-4 mt-4" >PARCHASE</button></Link>
            </div>
        </div>
    );
};

export default SinglePrice;