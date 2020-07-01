import styled from 'styled-components';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Titillium Web:300,400,700', 'sans-serif']
    }
})

const CoinContainer = styled.div`
display: flex;
align-items:center;
margin: 10px;
background-color: HoneyDew;
`;

const CoinData = styled.div`
font: Arial, sans-serif;
margin-right: 30px;
columns: auto 12em;
`;

export {
    CoinContainer,
    CoinData
} 