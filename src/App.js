import React, { Component } from 'react';
import widthOpen from './hocs/withOpen';
import Brand from './Brand';
import Ad from './Ad';
import AppData from './App.json';
import styled from 'styled-components';
const BrandWithOpen = widthOpen(Brand);
const AdWithOpen = widthOpen(Ad);

const Block = styled.div`
    display: flex;
`;

class App extends Component {
    render() {
        return (
            <Block>
                <BrandWithOpen data={AppData.brand}/>
                <AdWithOpen data={AppData.ad}/>
            </Block>
        );
    }
}

export default App;