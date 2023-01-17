import React from "react";
import '../styles/Profile.css'
import  miguel from '../images/miguePerfil.png'

function Profile(){
    
    return <div className="profile" id='profile'>
                <div className="photoContainer">
                    <img src={ miguel} alt="miguel" />
                </div>
                <section className="about">
                    <h2>Hola, me llamo <span style={{color: '#398B82'}}>Miguel</span> y ésta es mi <span style={{color:'#E78B0F'}}>web</span></h2>
                    <p>He creado este sitio web a modo de portfolio para  mostrar mis trabajos y brindar algo de información sobre mi.</p>
                    <p>Volcado hacia el Frontend pero con conocimientos en Backend. En busca de iniciar mi carrera profesional en el campo del desarrollo.</p>
                    <p>Me gusta pensar que saber buscar lo que no te deja avanzar es una herramienta muy poderosa tanto para el desarrollo como para la vida.</p>
                    <p>Te animo a contactarme, más abajo encontrarás cómo!</p>
                    <p>En mis ratos libres juego al fútbol, toco la guitarra y disfruto el tiempo con mis amigos y amigas.</p>
                       
                </section>
           </div>
}

export default Profile;