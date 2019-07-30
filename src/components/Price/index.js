import React, { Component } from 'react';
class Price extends Component {
    render() {
        return(
            <div className="card mb-4 shadow-sm">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Enterprise</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">$29
                        <small className="text-muted">/ mo</small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>30 users included</li>
                        <li>15 GB of storage</li>
                        <li>Phone and email support</li>
                        <li>Help center access</li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-primary">Contact us</button>
                </div>
            </div>
        );
    }
}
export default Price;