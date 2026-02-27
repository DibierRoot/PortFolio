import { motion } from "framer-motion";

const ProyectosyHabilidades = () => {

    return (
        <motion.div initial={{opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6}} viewport={{once: true}}>
            <div className="flex gap-56 pt-44 justify-center">
				<div className="relative flex flex-col gap-10 cursor-default">
					<h1 className="text-3xl transform duration-300 ease-in-out text-[#F2350C] underline underline-offset-8 decoration-4 font-bold flex justify-center items-center">Proyectos</h1>

					<div className="flex justify-center items-center">
						<section className="flex gap-20">
							<item>
								<img className="w-72 h-80" src="/PortadaOcoboShop.png" alt="" />
								<div className="text-center shadow-2xl p-5">
									<h2 className="font-bold text-lg">OcoboShop</h2>
									<p>Tienda online de Merch de Ocoboo</p>
								</div>
								<div className="flex flex-col gap-3">
									<p className="flex justify-center items-center pt-5">Elaborado con:</p>
									<div className="flex gap-8 justify-center">
										<img width="46" height="46" src="/ReactIcon.svg" alt="ReactIcon" />
										<img width="46" height="46" src="/PHPIcon.svg" alt="PHPIcon" />
										<img width="56" height="56" src="/MySQLIcon.svg" alt="MySQLIcon" />
									</div>
								</div>
							</item>
							<item>
								<img className="w-72 h-80" src="/PortadaPortFolio.png" alt="" />
								<div className="text-center shadow-2xl p-5">
									<h2 className="font-bold text-lg">PortFolio</h2>
									<p>PortFolio Personal</p>
								</div>
								<div className="flex flex-col gap-3">
									<p className="flex justify-center items-center pt-5">Elaborado con:</p>
									<div className="flex gap-8 justify-center">
										<img width="46" height="46" src="/AstroIcon.svg" alt="AstroIcon" />
										<img width="46" height="46" src="/ReactIcon.svg" alt="ReactIcon" />
									</div>
								</div>
							</item>
						</section>
					</div>
				</div>
				<div className="relative flex flex-col gap-10 cursor-default">
					<h1 className="text-3xl transform duration-300 ease-in-out text-[#F2350C] underline underline-offset-8 decoration-4 font-bold flex justify-center items-center">Habilidades</h1>
					<h2 className="font-semibold">Mis Conocimientos, Frameworks, Librerias, herramientas y tecnologías</h2>
						
					<div className="flex flex-col gap-5">
						<h1 className="text-2xl transform duration-300 ease-in-out text-[#F2350C] font-semibold flex justify-center items-center">Lenguajes</h1>

						<div className="flex gap-8 justify-center">
							<img width="46" height="46" src="/HTML5Icon.svg" alt="HTMLIcon" />
							<img width="46" height="46" src="/CSS3Icon.svg" alt="CSSIcon" />
							<img width="46" height="46" src="/JSIcon.svg" alt="JSIcon" />
						</div>
					</div>

					<div className="flex flex-col gap-5">
						<h1 className="text-2xl transform duration-300 ease-in-out text-[#F2350C] font-semibold flex justify-center items-center">Frameworks y Librerias</h1>

						<div className="flex gap-8 justify-center">
							<img width="46" height="46" src="/ReactIcon.svg" alt="ReactIcon" />
							<img width="46" height="46" src="/TailwindIcon.svg" alt="TailwindIcon" />
						</div>
					</div>

					<div className="flex flex-col gap-5">
						<h1 className="text-2xl transform duration-300 ease-in-out text-[#F2350C] font-semibold flex justify-center items-center">Herramientas y Tecnologías</h1>

						<div className="flex gap-8 justify-center">
							<img width="46" height="46" src="/GitIcon.svg" alt="GitIcon" />
							<img width="46" height="46" src="/GitHubIcon.svg" alt="GitHubIcon" />
							<img width="46" height="46" src="/ViteIcon.svg" alt="ViteIcon" />
							<img width="46" height="46" src="/NpmIcon.svg" alt="NpmIcon" />
						</div>
					</div>
				</div>
			</div>
        </motion.div>
    )
}

export default ProyectosyHabilidades;