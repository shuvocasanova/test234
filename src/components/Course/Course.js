import React, { useState } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import course from '../../fakeData/course';
import './Course.css';
import Cart from '../Cart/Cart.js';
import Product from '../Product/Product';

const Course = () => {
    const data =  course;
    const [courses, setCourses] = useState(data);
    const [cart, setCart] = useState([]);

    const handleAddCourse = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
    }
    

    return (
        <div>
            <Container>
                <Row>
                    <Col md={8}>
                        <div className="course-container">                      
                            {
                                courses.map(courseInfo => <Product product = {courseInfo}
                                                                    handleAddCourse = {handleAddCourse}>
                                                                    </Product> )
                            }
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="cart-container" >
                            <Cart data={cart}></Cart>
                        </div>
                    </Col>
                    
                    
                </Row>                
                                                     
                
            </Container>
        </div>
    );
};                    

export default Course;