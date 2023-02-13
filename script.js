//const boton=document.querySelector('#boton');
const foto=document.querySelector('#foto');
const nombre=document.querySelector('#nombre');
const correo=document.querySelector('#correo');
const telefono=document.querySelector('#telefono');

    

const generarUsuario = async () => {
    
    const url ='https://randomuser.me/api/';
    const repuesta = await fetch (url);
    const {results} = await repuesta.json();
    const datos = results [0];

    foto.src=datos.picture.medium;
    nombre.textContent=datos.name.first+" "+datos.name.last
    correo.textContent=datos.email
    telefono.textContent=datos.phone
    }
//boton.addEventListener('click',generarUsuario);
document.addEventListener('DOMContentLoaded',generarUsuario);
jQuery('document').ready(function($){
    var menuBtn=$('.menu-icon'),
        menu=$('.navegacion ul');

    menuBtn.click(function(){
        if(menu.hasClass ('show'))
        {
            menu.removeClass('show');
        } else
            {
                menu.addClass('show');  
            }
       
    });
});
