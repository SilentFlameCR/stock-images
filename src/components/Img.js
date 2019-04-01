import React from 'react';

class Img extends React.Component {
    
    render(){
        
      return(
          
        <div className="col-12 col-sm-6 col-md-4 img-column text-center">
            <a href={this.props.link}>
                <img src={this.props.url} className="one-img img-fluid center-block" alt="Unsplash Image here" />
            </a>
            <p>
                
                Photo by: <a href={this.props.user}>{this.props.name}</a>
            </p>
            <p>
                <a href={this.props.link}> See on Unsplash</a>
            </p>
	    </div>
      );
    }
}

export default Img;