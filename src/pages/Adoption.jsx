import React from 'react'
import { ListaMascota } from './ListaMascota'

export const Adoption = () => {
  return (
    <>
    
    <body>

    <br/>

<h2 className='parrafo-1'>¿Por qué adoptar en vez de comprar?</h2>

 <p className='parrafo-3'>
 Porque adoptando estás salvando la vida de un animal rescatado. Cada perro adoptado deja su lugar para que ingrese 
 otro y pueda ser recuperado en el refugio. 
 Adoptar es un acto de amor y de responsabilidad, por eso es necesario estar completamente seguros de que estamos 
 capacitados y listos para tener un perro. Un animal de compañía dependerá toda su vida de nosotros. Recordá que un 
 perro puede vivir entre 15 y 20 años y estás asumiendo un compromiso serio por todo ese tiempo
 </p>

 <br/>

 <h2 className='parrafo-1'>Consideraciones a tener en cuenta antes de tomar la decisión de adoptar.</h2>

 <p className='parrafo-3'>
 Integrar un perro a la familia sólo porque los niños piden un cachorrito para jugar es un gran error. Los animales 
 no son un juguete. ¿Qué pasará cuando tus hijos crezcan, o cuando se aburran de él? ¿Quién lo bañará? ¿Quién lo sacará
 a pasear? El perro es parte de la familia y todos tienen que estar de acuerdo con la adopción.
 </p>

 <p className='parrafo-3'>
 Espacio y lugar donde vivirá: no todos los perros necesitan un parque para correr, pero sí espacio para moverse cómodamente 
 por la casa y un lugar diferenciado para dormir y descansar.
 Si hay espacios al aire libre deben estar cercados para evitar que el animal pueda escaparse. Si vivís en departamento 
 deberás considerar el tamaño del animal a la hora de elegirlo, y sobre todo su nivel de actividad. La falta de grandes 
 ambientes puede compensarse con ejercicio diario para que el animal desgaste energía. Corroborá que en tu edificio esté
 permitido tener animales de compañía.
 Si eligís un cachorro, averiguá antes qué tamaño tendrá cuando crezca
 </p>

<p class="parrafo-3">
Tiempo y dedicación: es necesario que tengas tiempo para compartir con ellos. Los perros necesitan interactuar con sus 
dueños, no pueden ser ignorados sólo porque estés ocupado o cansado. Pensá antes de adoptar si tendrás momentos de juego 
con tu perro, si pasarás tiempo a su lado y si saldrás a caminar con él (incluso en días de lluvia o frío), aún cuando 
vuelvas cansado del trabajo; él te estará esperando ansioso y querrá salir después de estar varias horas solo.
</p>

<p className='parrafo-3'>
Mantenimiento y gastos: los perros tienen un calendario de vacunación anual que cumplir, más pipetas y desparasitasiones periódicas.
También necesitan un alimento de buena calidad, para preservar su salud, pelaje y dentadura. Y hay que considerar que la atención 
veterinaria tiene un costo elevado.
</p>


<p className='parrafo-3'>
Hábitos de vida: evaluá si tendrás paciencia con el animal, si soportarás los pelos en las alfombras, los hoyos en el jardín 
y algún mueble o prenda rota por el perro.
Si hay niños pequeños o personas muy mayores no es conveniente incorporar un perro de gran porte y muy enérgico, ya que podría
tirarlos accidentalmente jugando. Si estás muchas horas fuera tendrás que buscar un perro tranquilo acostumbrado a quedarse 
solo. 
Si no estás seguro si es preferible un cachorro o un adulto tené en cuenta que un cachorro requiere bastante dedicación para 
educarlo: deberá aprender dónde hacer sus necesidades y cuáles son las cosas que no debe morder y romper. Adoptar un perro 
adulto es una ventaja ya que la mayoría vivió antes en un hogar.
También tené en cuenta si viajás por trabajo o vacaciones, qué posibilidades tendrás de llevarlo con vos o si alguien podrá 
cuidarlo en tu ausencia.
</p>


<p className='parrafo-3'>
Quizás te parezcan demasiadas preguntas para hacerse, pero muchos animales en los refugios están allí porque sus dueños no 
pensaron realmente cuánto tiempo y dinero llevaba cuidar de ellos. 
Un perro te dará amor incondicional, compañía y mejorará tu vida.
</p>


<h2 className='parrafo-1'>Para adoptar un en el Refugio</h2>

<p className='parrafo-3'>
Las adopciones se tratan solamente con el adoptante final, no mediante terceros. 
Es requisito excluyente ser mayor de 21 años.
No damos en adopción cachorritos de menos de 5 meses cuando hay niños menores a 6 años en la casa.
</p>


<p className='parrafo-3'>
-Al solicitar la adopción de un camperito como primer paso enviamos un cuestionario de pre-adopción para ser completado por el interesado.
-Luego hacemos una visita al domicilio para conocer a la familia y constatar las condiciones en que vivirá nuestro camperito. 
-En caso de aprobar la adopción, solicitamos los datos del adoptante (nombre, DNI, domicilio y teléfono),  de su veterinario de confianza (nombre, dirección y tel) y por último, el teléfono (de línea-fijo) y dirección de 4 familiares. 
-El adoptante deberá encargar la chapita identificatoria para el animal incluyendo nuestro teléfono. Una vez que la chapita está lista coordinamos el traslado del adoptado a su hogar, donde se firma el Contrato de Adopción.
-Todos nuestros adoptados son llevados a domicilio; sin embargo, se puede venir al refugio a conocerlos previamente.
-Nuestros perros son entregados en adopción vacunados, desparasitados y castrados. En caso de ser un cachorrito, se entrega con compromiso de castración cuando tenga la edad suficiente.
-Somos padrinos de nuestros perros de por vida, esto es que podrás contar con nosotros cuando lo necesites, por lo cual tambien los visitamos en su hogar para ver cómo están. Estas visitas de seguimiento son realizadas por personal del refugio El Campito.
</p>


     
     <section className='mascotas_section'>
         <br/>
         <h1 className='mascotas_title'>Mascotas en Adopción</h1>
          <div className='mascotas_container'>
            <ListaMascota />
           </div> 
       </section> 

     

 </body> 
     
    </>
  )
}