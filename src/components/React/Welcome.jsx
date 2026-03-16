import { useState } from "react";
import Header from './Header';
import SobreMi from './SobreMi';
import ProyectosyHabilidades from './ProyectosyHabilidades';
import Contacto from './Contacto'

const Welcome = () => {

	const [idioma, setIdioma] = useState(false);

    const cambiarIdioma = () => {
        setIdioma(!idioma);
    }

	return (
		<div className="pb-20">

			<Header cambiarIdioma={cambiarIdioma} idioma={idioma}/>

			<main className="flex flex-col pt-16 mx-5 md:mx-10 xl:mx-20">

				<div className="cursor-default">
					
					<SobreMi idioma={idioma}/>
					
					<ProyectosyHabilidades idioma={idioma}/>

					<Contacto idioma={idioma}/>
					
				</div>
			</main>

			<footer className="flex text-xs md:text-base justify-center mt-28 text-gray-500 cursor-default">
				<p>{idioma == false ? "Derechos Reservados. Cristián Rincón" : "All Rights Reserved. Cristián Rincón"}</p>
			</footer>
		</div>
	)
}

export default Welcome