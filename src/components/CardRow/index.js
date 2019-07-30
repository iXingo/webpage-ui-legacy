import React, { Component } from 'react';
import CardInfo from '../CardInfo';

class CardRow extends Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                     <CardInfo></CardInfo>
                     <CardInfo></CardInfo>
                     <CardInfo></CardInfo>
                </div>
            </div>
        );
    }
}

export default CardRow;