import React from 'react';

class Navigate extends React.Component {
    
    state = {
        
    }
    
    render() {
        return(
            <div className="row navigate-btns">
                <div className="col-12 col-md-offset-4 col-md-2">
                    <button onClick={this.props.prevPage}>Prev Page</button>
                </div>
                    
                <div className="col-12 col-md-2">
                    <button onClick={this.props.nextPage}>Next Page</button>
                </div>
                
            </div>
        );
    }
}

export default Navigate;