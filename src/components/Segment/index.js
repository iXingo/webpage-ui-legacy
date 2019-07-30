import React, { Component } from 'react';

class Segment extends Component {
    render() {
        return(
            <div>
                <hr />
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-md-8">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti
                                beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>
                        </div>
                        <div className="col-md-4">
                            <a className="btn btn-lg btn-secondary btn-block" href="#">Call to Action</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Segment;