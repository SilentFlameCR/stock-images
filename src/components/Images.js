import React from 'react';
import Img from './Img';
import Noimg from './Noimg';

class Images extends React.Component {
    
    render(){
        let results = this.props.imgs;
        let imgs;
        
        if(results.length > 0) {
            imgs = results.map(
                img => <Img
                        url={img.urls.thumb}
                        user={img.user.links.html}
                        name={img.user.name}
                        link={img.links.html}
                        key={img.id}
                 
                        />
                
            );
        } else {
            imgs = <Noimg />
        }
            
        return(
            <div className="img-list" className="row all-imgs">
                {imgs}
                
            </div>
                
            
        );
    }
}

export default Images;