import React, {Component} from 'react';
import axios from 'axios';
import '../Publicacion.css'
import Card from './Card';

class Publicacion extends Component{

    constructor(props){
        super(props);
        this.state = {
            // nombre: "",
            // apellido: "",
            // fotoPerfil: "",
            objetoRespuesta:null,
            // publicacion:[],
            // post: "",
            // date_post: "",
            // comment: "",
            // comment_user: "",
            // date_comment: ""
        }
    }

    componentDidMount(){
        const URL = `https://shrouded-spire-64837.herokuapp.com/api/v1/user/${this.props.match.params.uid}/`
        axios.get(URL)
            .then((result) => {
                //console.log({objetoRespuesta:result.data})
                this.setState({
                    objetoRespuesta:result.data
                })
            }).catch((err) => {
                alert('User not found')
            });
    }

    onInputChange = (e) => {
        const {id,value} = e.target
        this.setState({
            [id]:value
        })
    }

    render() {
        return (
            <div className="detailBox">
                <div className="commenterImage">
                                <img  />
                </div>
                <div className="titleBox">
                    <label> </label>
                </div>
                <div className="commentBox">
    
                    <p className="taskDescription"></p>
                </div>
                <div className="actionBox">
                    <ul className="commentList">
                        <li>
                            <div className="commenterImage">
                                <img src="http://placekitten.com/50/50" />
                            </div>
                            <div className="commentText">
                                <p className="">Hello this is a test comment.</p> 
                                <span className="date sub-text">on March 5th, 2014</span>
    
                            </div>
                        </li>
                    </ul>
                    <form class="form-inline" role="form">
                        <div class="form-group">
                            <input className="form-control" type="text" placeholder="Your comments" />

                        </div>
                        <div className="form-group">
                            <button className="btn btn-default">Add</button>
                        </div>
                    </form>
                </div>
            </div>
    
        )
    }

    
   

}


export default  Publicacion;