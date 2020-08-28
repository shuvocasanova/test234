import React from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar,  faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';
import './Enrolled.css'
const Enrolled = (props) => {
    const items = props.data;
    return (
        <div className="enrolled-container">
            <Container>
                {
                    items.map( course => 
                        <Row className="enrolled-items">
                            
                            <Col sm={9}>
                                <div>
                                <Image src={course.img}></Image>
                                <br/>
                                <b>{course.title}</b> <br/>
                                <FontAwesomeIcon icon={faStar} style={{color:'goldenrod'}} />
                                <FontAwesomeIcon icon={faStar} style={{color:'goldenrod'}}/>
                                <FontAwesomeIcon icon={faStar} style={{color:'goldenrod'}}/>
                                <FontAwesomeIcon icon={faStar} style={{color:'goldenrod'}}/>
                                <FontAwesomeIcon icon={faStarHalfAlt} style={{color:'goldenrod'}}/>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div>
                                    <h5>${course.price}</h5>
                                </div>
                            </Col>
                        </Row>
                    )
                }
                
            </Container>
        </div>
    );
};

export default Enrolled;