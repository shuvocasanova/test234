import React from 'react';
import Enrolled from '../Enrolled-Students/Enrolled';
import './Cart.css';
import {Button} from 'react-bootstrap';
const Cart = (props) => {
    const data = props.data;
    const total = data.reduce((accumulate, courses) => accumulate + courses.price, 0);
    const totalPrice = Number(total).toFixed(2);

    const check = () => {
        alert("Check added courses...\n Total courses : "+data.length+" \n Total Price : " + totalPrice);
        window.location.reload();
    }

    return (
        <div className="cart">
            {/* summary view */}
            <div className="cart-top">
                <h4>Course Summary</h4>
                <span>Enrolled courses : {data.length}</span>
                <h5>Total Price: ${totalPrice}</h5>
                <Button variant="outline-info" onClick={check}>Review Course</Button>
            </div>
            {/* enrolled item list short view */}
            <div className="cart-list">
                <Enrolled data={data}> </Enrolled>
            </div>
            
        </div>
    );
};

export default Cart;