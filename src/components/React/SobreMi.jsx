const SobreMi = ({idioma}) => {
    return (
        <div>
			<h1 className="pt-10 pb-12 text-3xl transform duration-300 ease-in-out text-[#F2350C] underline underline-offset-8 decoration-4 font-bold flex justify-center items-center">Sobre Mi</h1>

			<div className="text-center p-5 shadow-2xl">
				<h2 className="mb-5 font-bold text-lg">{idioma == false ? "Soy Cristián" : "I'm Cristián"}</h2>
				<p>
					{idioma == false ? "Un amante a la programación, el rock, metal y por supuesto, el cafe. Desde muy joven me ha interesado todo lo que tiene que ver" : "A lover programming, rock, metal, and course, coffee. From a very young age, i've been interesed in everything related to"}
					<br /> 
					{idioma == false ? "con la tecnología hasta que descubri la programación y que puedo decir, me encanta." : "i was fascinated by technology until i discovered programming, and what can i say, i love it."}
					{idioma == false ? " Soy muy perseverante y cuando me propongo algo, hago lo posible para cumplir esa meta." : " I am very persistent and when i set my mind to something i do everything posible to achieve that goal."}
					<br />
					{idioma == false ? "A continuación veran todos los proyectos que humildemente he realizado hasta el momento. ¡Bienvenido!" : "Below you will see all the proyects i have humbly completed so far. Welcome!"}
				</p>
			</div>
		</div>
    )
}

export default SobreMi;