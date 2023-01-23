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
                    <p>He creado este sitio web a modo de portafolio para mostrar mis trabajos y brindar algo de información acerca de mí.</p>
                    <p>De joven siempre sentí curiosidad por la informática, me generaba admiración la gente que resolvía problemas con su ordenador e
                       incluso hacían modificaciones del mismo. Así que en el año 2015 decidí estudiar TSP (Técnico superior en programación)
                       en la UTN (Universidad tecnológica nacional). </p>
                    <p>Me gusta el desarrollo front-end, mis proyectos lo reflejan. No obstante tengo experencia trabajando en back-end.</p>
                    <p>En mis ratos libres, me gusta hacer deporte, tocar la guitarra y compartir tiempo con amigos y amigas.</p>
                    <p>Te animo a contactarme! más abajo encontrarás cómo.</p>
                </section>
           </div>
}

export default Profile;