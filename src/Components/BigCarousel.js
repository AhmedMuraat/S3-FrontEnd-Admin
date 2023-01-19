import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const BigCarousel = ({ Contents }) => {

    return (
        <Carousel className='w-100 mt-3'>
            <Carousel.Item class>
                <img
                    className="d-block w-100"
                    style={{borderRadius: "50px"}}
                    src={"https://i.pinimg.com/originals/86/2d/17/862d17ac5a9f3330bfa43e16d9485d29.jpg"}
                />
                <Carousel.Caption>
                    <h3>Trending</h3>
                    <Button variant="primary" className='mt-2 mb-2'>More Info</Button>{''}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default BigCarousel;