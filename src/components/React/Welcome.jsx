import astroLogo from '/src/assets/astro.svg';
import background from '/src/assets/background.svg';
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

			<Header client:visible cambiarIdioma={cambiarIdioma} idioma={idioma}/>

			<main className="flex flex-col gap-32 pt-16 mx-5 2xl:mx-20">

				<div className="cursor-default">
					
					<SobreMi client:visible cambiarIdioma={cambiarIdioma} idioma={idioma}/>
					
					<ProyectosyHabilidades client:visible cambiarIdioma={cambiarIdioma} idioma={idioma}/>

					<Contacto client:visible cambiarIdioma={cambiarIdioma} idioma={idioma}/>
					
				</div>
			</main>

			<footer className="flex justify-center mt-28 text-gray-500 cursor-default">
				<p>{idioma == false ? "Derechos Reservados. Cristián Rincón" : "All Rights Reserved. Cristián Rincón"}</p>
			</footer>
		</div>
	)
}

export default Welcome