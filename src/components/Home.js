import React,{Component} from'react';
import Card from './Card';
import axios from 'axios';

class Home extends Component{

    constructor(props){
        super(props)
        this.state = {
          cards: [<Card />, <Card />, <Card />,<Card />, <Card />, <Card />],
          cardAuthor:[]
        }
      
      }
    renderCards(){
        return this.state.cards
    }

    componentDidMount(){
        axios.get('https://shrouded-spire-64837.herokuapp.com/api/v1/user/')

        .then ((result)=>{
            console.log(result.data)
            this.setState({
                cardAuthor:result.data
            })
        })
        .catch((err)=>{
            alert('Error')
        });
    }

    renderCards=()=>{
        return this.state.cardAuthor.length === 0
            ? <h1>Cargando...</h1>
            : this.state.cardAuthor
            .map(author => <Card id={author._id} nombre={author.nombre} 
            apellido={author.apellido} fotoPerfil={author.fotoPerfil}/>)
    }

    render(){
        return(
            <div className="Home row col 12">
                {this.renderCards()}
            </div>
        )
    }
}

export default Home 