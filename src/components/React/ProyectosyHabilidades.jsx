import { motion } from "framer-motion";

const ProyectosyHabilidades = ({idioma}) => {

    return (
        <motion.div initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6}} viewport={{once: true}}>
            <div className="flex flex-col 2xl:flex-row gap-16 xl:gap-56 pt-5 2xl:pt-44 justify-center">
				<div className="relative flex flex-col gap-10 cursor-default">
					<h1 className="pt-16 pb-12 text-lg md:text-xl xl:text-2xl 2xl:text-3xl transform duration-300 ease-in-out text-[#F2350C] underline underline-offset-8 decoration-4 font-bold flex justify-center items-center">{idioma == false ? "Proyectos" : "Proyects"}</h1>

					<div className="flex justify-center items-center">
						<section className="flex flex-col xl:flex-row gap-20">
							<item>
								<img className="w-56 md:w-96 xl:w-80 h-56 md:h-96 xl:h-80" src="/PortadaOcoboShop.png" alt="" />
								<div className="text-center shadow-2xl p-5 w-56 md:w-96 xl:w-80">
									<h2 className="font-bold text-base md:text-lg">OcoboShop</h2>
									<p className="text-xs md:text-base">{idioma == false ? "Tienda online de Merch de Ocoboo" : "Ocobo merch online store"}</p>
									<a className="flex justify-center mt-3" href="https://github.com/DibierRoot/OcoboShop" target="_blank"><img width="35" height="35" src="/GitHubIcon.svg" alt="GitHubIcon" /></a>
								</div>
								<div className="flex flex-col gap-3">
									<p className="flex justify-center items-center pt-5">{idioma == false ? "Elaborado con:" : "Made with:"}</p>
									<div className="flex gap-8 justify-center">
										<img className="w-8 md:w-12 h-8 md:h-12" src="/ReactIcon.svg" alt="ReactIcon" />
										<img className="w-8 md:w-12 h-8 md:h-12" src="/PHPIcon.svg" alt="PHPIcon" />
										<img className="w-8 md:w-12 h-8 md:h-12" src="/MySQLIcon.svg" alt="MySQLIcon" />
									</div>
								</div>
							</item>
							<item>
								<img className="w-56 md:w-96 xl:w-80 h-56 md:h-96 xl:h-80" src="/PortadaPortFolio.png" alt="" />
								<div className="text-center shadow-2xl p-5 w-56 md:w-96 xl:w-80">
									<h2 className="font-bold text-lg">PortFolio</h2>
									<p className="text-xs md:text-base">{idioma == false ? "PortFolio Personal" : "Personal PortFolio"}</p>
									<a className="flex justify-center mt-3" href="https://github.com/DibierRoot/PortFolio" target="_blank"><img width="35" height="35" src="/GitHubIcon.svg" alt="GitHubIcon" /></a>
								</div>
								<div className="flex flex-col gap-3">
									<p className="flex justify-center items-center pt-5">{idioma == false ? "Elaborado con:" : "Made with:"}</p>
									<div className="flex gap-8 justify-center">
										<img className="w-8 md:w-12 h-8 md:h-12" src="/AstroIcon.svg" alt="AstroIcon" />
										<img className="w-8 md:w-12 h-8 md:h-12" src="/ReactIcon.svg" alt="ReactIcon" />
									</div>
								</div>
							</item>
						</section>
					</div>
				</div>
				<div className="relative flex flex-col gap-10 cursor-default">
					<h1 className="pt-16 xl:pb-12 text-lg md:text-xl xl:text-2xl 2xl:text-3xl transform duration-300 ease-in-out text-[#F2350C] underline underline-offset-8 decoration-4 font-bold flex justify-center items-center">{idioma == false ? "Habilidades" : "Skills"}</h1>
					<h2 className="text-center text-sm md:text-base font-semibold">{idioma == false ? "Mis Conocimientos, Frameworks, Librerias, herramientas y tecnologías" : "My knowledge, frameworks, libraries, tools and technologies"}</h2>
						
					<div className="flex flex-col gap-5">
						<h1 className="text-lg xl:text-xl 2xl:text-2xl transform duration-300 ease-in-out text-[#F2350C] font-semibold flex justify-center items-center">{idioma == false ? "Lenguajes" : "Languages"}</h1>

						<div className="flex gap-5 xl:gap-8 justify-center">
							<img className="w-8 md:w-12 h-8 md:h-12" src="/HTML5Icon.svg" alt="HTMLIcon" />
							<img className="w-8 md:w-12 h-8 md:h-12" src="/CSS3Icon.svg" alt="CSSIcon" />
							<img className="w-8 md:w-12 h-8 md:h-12" src="/JSIcon.svg" alt="JSIcon" />
						</div>
					</div>

					<div className="flex flex-col gap-5">
						<h1 className="text-lg xl:text-xl 2xl:text-2xl transform duration-300 ease-in-out text-[#F2350C] font-semibold flex justify-center items-center">{idioma == false ? "Frameworks y Librerias" : "Frameworks and Libraries"}</h1>

						<div className="flex gap-5 xl:gap-8 justify-center">
							<img className="w-8 md:w-12 h-8 md:h-12" src="/ReactIcon.svg" alt="ReactIcon" />
							<img className="w-8 md:w-12 h-8 md:h-12" src="/TailwindIcon.svg" alt="TailwindIcon" />
						</div>
					</div>

					<div className="flex flex-col gap-5">
						<h1 className="text-lg xl:text-xl 2xl:text-2xl transform duration-300 ease-in-out text-[#F2350C] font-semibold flex justify-center items-center">{idioma == false ? "Herramientas y Tecnologías" : "Tools and Technologies"}</h1>

						<div className="flex gap-5 xl:gap-8 justify-center">
							<img className="w-8 md:w-12 h-8 md:h-12" src="/GitIcon.svg" alt="GitIcon" />
							<img className="w-8 md:w-12 h-8 md:h-12" src="/GitHubIcon.svg" alt="GitHubIcon" />
							<img className="w-8 md:w-12 h-8 md:h-12" src="/ViteIcon.svg" alt="ViteIcon" />
							<img className="w-8 md:w-12 h-8 md:h-12" src="/NpmIcon.svg" alt="NpmIcon" />
						</div>
					</div>
				</div>
			</div>
        </motion.div>
    )
}

export default ProyectosyHabilidades;