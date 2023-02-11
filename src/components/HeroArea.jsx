import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const HeroArea = () => {
    return (
        <Container style={{ height: 'calc(100vh - 56px)', display: 'flex', alignItems: 'center' }}>
            <Row>
                <Col sm={12} lg={5}>
                    <h1>We Make Car Repair Hassle Free</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rem dicta aliquid optio error totam molestiae quod, delectus eum omnis laudantium recusandae in pariatur rerum illo obcaecati molestias quis architecto!</p>
                    <button className='btn btn-primary rounded-pill'>Get Started</button>
                </Col>
                <Col sm={12} lg={7}>
                    <img className='img-fluid' src="https://raw.githubusercontent.com/SohelIslamImran/gerez/main/src/images/banner-img.png" alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default HeroArea;