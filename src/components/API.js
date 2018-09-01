import React, { Component } from 'react';
import User from './user';

export default class API extends Component {
constructor(props){
    super(props);
    this.state = {usuarios: []}
}
    componentDidMount(){
        const url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
        .then((respuesta) => respuesta.json())
        .then(json => this.setState({ usuarios: json}));
        //Promise
        //Es una peticion asincronica porque no sabemos cuanto va a tardar
        
    }

    render () {
        const { usuarios } = this.state;
        console.log(usuarios);
		return (
			<div className='us'>
				<h3>Nombres:</h3>
                {usuarios.map((us, key) => <p key={key}>{us.username}</p>)}
                <h3>Usuario/email</h3>
                {usuarios.map((usuario) => <User name={usuario.name} email={usuario.email}/>)}
			</div>
		);
	}
}

