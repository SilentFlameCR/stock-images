import React from 'react';

class Form extends React.Component{
    
    state = {
        
    
    }
    
    
    
    render(){
        return(
            <form id="form1" className="form-inline justify-content-center" onSubmit={this.props.onSubmit}>
                        
                <div className="row">
                        
                    <div className="col-12 col-md-offset-1 col-md-6">
                    <input className="number" type="text" name="search" id="search" placeholder=""></input>
                    </div>
                    <div className="col-12 col-md-5">
                    <button className="number-button">Search images</button>
                   </div>
                   
                </div>
            </form>
        );
    }
}
            
export default Form;