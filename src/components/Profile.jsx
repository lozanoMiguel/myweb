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
                    <p>Soy un desarrollador junior que está buscando su primer oportunidad laboral en el campo de la informática.</p>
                    <p>Si bien me inclino por el desarrollo frontend, el backend me genera mucho interés. Soy de pensar que el conocimiento 
                       sobre algún lenguaje es igual de equiparable a saber identificar que es lo que no te deja avanzar en la elaboracion
                       de un proyecto. 
                    </p>
                    <p>En mis ratos libres juego al fútbol, toco la guitarra y disfruto el tiempo con mis amigos y amigas.</p>
                       
                </section>
           </div>
}

export default Profile;