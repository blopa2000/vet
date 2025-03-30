import React from "react";
import imagen from "../utils/images/especialistas 1.png"
import imagenSede from "../utils/images/Pet salud 1.png"

const testimonials = [
  { name: "Mario Torres", text: "Llevé a mi perrito Max a Pet Salud por una emergencia y la atención fue increíble. El equipo actuó con rapidez y profesionalismo, logrando estabilizarlo en minutos. ¡Estoy eternamente agradecido!", image: "/src/utils/images/profile.png" },
  { name: "Andrea Gomez", text: "Siempre llevo a mi perrita Luna a sus chequeos en Pet Salud y no podría estar más satisfecha. La atención es personalizada, el equipo es amable y realmente se preocupan por el bienestar de los animales. ¡Los recomiendo al 100%!", image: "/src/utils/images/profile.png" },
  { name: "Carlos Ramirez", text: "Mi gato Tomás necesitaba una cirugía y estaba muy nerviosa, pero los especialistas de Pet Salud me dieron tranquilidad desde el primer momento. Todo salió perfecto y hoy mi gatito está sano y feliz. ¡Gracias por el excelente servicio!", image: "/src/utils/images/profile.png"},
];

const services = [
  { title: "Consulta general", desc: "Ofrecemos atención veterinaria integral para garantizar la salud y bienestar de tu mascota. En nuestras consultas realizamos revisiones detalladas, detección temprana de enfermedades y planes de prevención personalizados." },
  { title: "Cirugías generales", desc: "Contamos con un equipo de especialistas altamente capacitados para llevar a cabo procedimientos quirúrgicos seguros y eficaces. Desde esterilizaciones hasta cirugías más complejas, brindamos el mejor cuidado antes, durante y después de la intervención" },
  { title: "Atención de Emergencias", desc: "Estamos preparados para atender cualquier urgencia veterinaria con rapidez y eficacia. Nuestro equipo está disponible para brindar asistencia inmediata y garantizar la mejor respuesta ante situaciones críticas" },
];

const Home = () => {
  return (
    <div>
      {/* Sesión banner */}
      <section className="bg-[#DF485D] text-white p-10 flex flex-col md:flex-row items-center gap-6 rounded-lg">
        <div className="w-full md:w-1/2">
            <iframe
            title="video"
            className="w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/umI5AtvCtm0?si=nmHXQRy4taOljwcs"
            ></iframe>
        </div>
        <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Cuidamos tus mascotas con amor y profesionalismo</h2>
            <p className="font-semibold text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className="bg-white text-red-500 px-4 py-2 rounded-md"> Conoce nuestros servicios </button>
        </div>
      </section>    
      
      {/* Sesión de nosotros */}
      <section className="p-10 flex flex-col justify-center md:flex-row items-center gap-6 rounded-lg">
        <img src={imagen} alt="Equipo veterinario" width="450px" height="900px"/>
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl text-[#DF485D] font-bold">Nosotros</h2>
          <p className="mt-4 text-[#4B4B4B] font-semibold">En Pet Salud, nos dedicamos con pasión al bienestar y la salud de las mascotas. Somos un equipo de especialistas comprometidos en brindar atención médica veterinaria de calidad, con un enfoque integral y humano.
            <br />
            <br />
          Nuestra misión es ofrecer un servicio de salud preventivo y curativo que garantice la tranquilidad de los dueños y el bienestar de sus mascotas. Para ello, contamos con tecnología de vanguardia, instalaciones modernas y un personal altamente capacitado que trabaja con amor y profesionalismo.
          <br />
          <br />
          En Pet Salud, creemos que cada mascota merece recibir el mejor cuidado, por eso nos esforzamos en proporcionar un ambiente cálido y seguro, donde se sientan protegidas y queridas. Nuestra visión es ser el referente en salud veterinaria, promoviendo una cultura de cuidado y prevención para una vida más saludable y feliz junto a nuestras mascotas.</p>
          <button className="mt-4 font-semibold text-[#DF485D] px-4 py-2 rounded-md border border-[#EBEBEB]"> Conoce más ➝</button>
        </div>
      </section>

      {/* Sesión de nuestros servicios */}
      <section className="p-10 text-[#4B4B4B] text-center">
        <h2 className="text-3xl font-bold">Nuestros servicios</h2>
        <div className="mt-6 grid grid-cols-3 gap-6">
          {services.map((service, index) => (
          <div key={index} className="p-5 border border-[#EBEBEB] rounded-lg shadow-lg">
            <h3 className="text-xl text-[#DF485D] font-bold ">{service.title}</h3>
            <p className="mt-2 font-semibold">{service.desc}</p>
          </div>
        ))}
      </div>
      </section>

      {/* Sesión de nuestra sede */}
      <section className="bg-[#DF485D] text-white p-10 flex flex-col justify-center md:flex-row items-center gap-6 rounded-lg" >
        <div className="w-1/2 p-5">
          <h2 className="text-4xl font-bold">Nuestra sede</h2>
          <p className="mt-4 font-semibold">Nuestra sede Pet Salud es un espacio diseñado especialmente para el bienestar de las mascotas y la tranquilidad de sus dueños. Contamos con modernas instalaciones equipadas con tecnología de punta para ofrecer atención veterinaria de alta calidad</p>
        </div>
        <img src={imagenSede} alt="Equipo veterinario" width="450px" height="900px"/>
      </section>

      {/* Sesión de testimonios */}
      <section className="p-10 text-[#4B4B4B] text-center">
        <h2 className="text-3xl font-bold">Testimonios</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-6">{testimonials.map((testi, index) => (
          <div key={index} className="p-5 border border-[#EBEBEB] rounded-lg w-80 shadow-lg flex flex-col items-center text-center">
            <img className="w-32 h-32 rounded-full object-cover" src={testi.image} alt={testi.name} />
            <p className="mt-4 font-semibold">{testi.text}</p>
            <h3 className="mt-4 font-bold text-[#DF485D]">{testi.name}</h3>
          </div>
        ))}
        </div>
      </section>
    </div>
  );
};
export default Home;