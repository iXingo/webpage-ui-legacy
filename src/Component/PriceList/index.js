import React, { Component } from 'react';
import Post from '../Post';
import Price from '../Price';

class PriceList extends Component {
    render() {
        return(
            <div className="container">
                <div className="card-deck mb-3 text-center">
                    <Price></Price>
                    <Price></Price>
                    <Price></Price>
                </div>
            </div>
        );
    }
}

export default PriceList;
