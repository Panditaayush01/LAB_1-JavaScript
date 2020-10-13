import React from 'react';
import { Container } from 'react-bootstrap';
import '../../styles.css';

const Greeting = ({ name }) => {

    return (
        <Container>
            <div>
                <h1>
                    Hey {name}, May you be successful in every point of your life. CHEERS!
                    </h1>
                <footer>
                    Made by Aayush
                    </footer>
            </div>
        </Container>
    );
};

export default Greeting;