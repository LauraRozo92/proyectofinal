import React, {Component} from 'react'
import axios from 'axios'
import '../RegisterUser.css'

class RegisterUser extends Component{

    constructor(props){
        super(props);

        this.state={
            nombre:"",
            apellido:"",
            email:"",
            gender:"F",
            birthdate:"",
            fotoPerfil:""
        }
    }


    onInputChange=(e)=>{
        console.log(e.target.id)
        const {id,value}=e.target
        console.log('evento onInputChange')
        this.setState({
            [id]:value
        })
    }

    onBtnSubmit=(e)=>{
        e.preventDefault()
        console.log('SUBMIIIIT')
        const URL='https://shrouded-spire-64837.herokuapp.com/api/v1/create/user/'
        axios.post(URL,this.state)
        .then((result) => {
            alert(`Usuario Guardado con el id: ${result.data._id}`)
            this.props.history.push('/')
        }).catch((err) => {
            alert(err)
        });
    }



    render(){
        return(
            <div className="RegisterUser col">
                <form className="col-2" onSubmit={this.onBtnSubmit}>
                    <label>Nombre: </label>
                    <input type="text" id="nombre"
                        onChange={this.onInputChange}
                        value={this.state.nombre}
                    />
                
        
                    <label>Apellido: </label>
                    <input type="text" id="apellido"
                        onChange={this.onInputChange}
                        value={this.state.apellido}
                    />
            
                    <label>Email: </label>
                    <input type="text" id="email"
                        onChange={this.onInputChange}
                        value={this.state.email}
                    />
        

                    <label>Genero: </label>
                    <select className="form.control" id="gender" onChange={this.onInputChange}
                        value={this.state.gender}
                    >

                        <option>F</option>
                        <option>M</option>
                    </select>

                    <label>Fecha de nacimiento: </label>
                    <input size="8" type="text" class="form-control" id="birthdate"
                        onChange={this.onInputChange}
                        value={this.state.birthdate}
                    />

                    <label>Foto Perfil: </label>
                    <input type="text" id="fotoPerfil"
                        onChange={this.onInputChange}
                        value={this.state.fotoPerfil}
                    />

                <button type="submit" className ='btn btn-success mt-4'>Guardar</button>

                </form>
            </div>
        )
    }


}

export default RegisterUser
