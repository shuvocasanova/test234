import React from 'react';
import './Product.css';
import {Row, Col, Image, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar,  faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const courseInfo = props.product;
    return (
        <div className="items">
            <div>
                <Image src={courseInfo.img}></Image>
            </div>        
            <div>
                <h5 style={{fontWeight: 'bolder'}} >{courseInfo.title}</h5>
                
                <FontAwesomeIcon icon={faStar} style={{color:'goldenrod'}} />
                <FontAwesomeIcon icon={faStar} style={{color:'goldenrod'}}/>
                <FontAwesomeIcon icon={faStar} style={{color:'goldenrod'}}/>
                <FontAwesomeIcon icon={faStar} style={{color:'goldenrod'}}/>
                <FontAwesomeIcon icon={faStarHalfAlt} style={{color:'goldenrod'}}/>
                <br></br> 
                <b>By : {courseInfo.institute}</b>
                <br></br>                                        
                <b>Duration: {courseInfo.duration}</b>
                <br></br>
                <br/>
                <h5>Price: ${courseInfo.price}</h5>                                        
                <Button variant="success" onClick={() => props.handleAddCourse(props.product)} > Enroll Now </Button>
            </div>
        </div>
    );
};

export default Product;