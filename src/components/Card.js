import React,{Component} from'react'
import '../Card.css'
import {Link} from 'react-router-dom'


class Card extends Component{

    render(){
        return(
            <div className="card col-3 m-4">
                <img src={this.props.fotoPerfil} className="img-fluid img-resposive"  alt="..."/>
                    <div className="card-body" >
                        <p className="card-text"> {this.props._id} {this.props.nombre} {this.props.apellido}</p>
                            <Link to= {`./author/${this.props._id}`}>wall</Link>
                     </div>
                    
            </div>
            
        

        
        )
    }
}



export default  Card;
