import { Box, Typography } from '@mui/material'
import { Quote } from './Quote'

export function Testimonial() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.8em',
        width: '55%',
        textAlign: 'center',
      }}
    >
      <Quote width={40} height={40} />
      <Typography
        sx={{
          fontSize: '15px',
          fontWeight: 600,
          marginTop: '2%',
          fontFamily: 'Raleway, sans-serif',
        }}
      >
        Destinations that exceeded expectations
      </Typography>
      <Typography
        sx={{
          fontSize: '15px',
          lineHeight: '1.875em',
          opacity: '0.8',
          color: 'rgb(0, 0, 0, 1)',
          fontWeight: 0,
          letterSpacing: 'normal',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.6em',
          fontFamily: 'Raleway, sans-serif',
        }}
      >
        <span>
          "Florencia es como caminar a través de un museo al aire libre. Ver la
          Catedral de Santa María del Fiore y las obras de arte en la Galería
          Uffizi fue una experiencia que nunca olvidaré. Me encantó perderme en
          sus calles antiguas y descubrir pequeños cafés escondidos. La comida
          toscana es deliciosa; probé una pasta fresca que simplemente no puedo
          dejar de recordar."
        </span>
        <span>
          "Mi viaje a Buenos Aires fue una auténtica maravilla. La ciudad tiene
          una energía contagiosa y un carácter único. Me encantó pasear por San
          Telmo y ver los artistas callejeros, además de disfrutar de un buen
          asado. No te puedes perder un show de tango en vivo; es una
          experiencia que te llena el alma."
        </span>
        <span>
          "Barcelona fue una experiencia maravillosa. Me encantaron las vistas
          desde el Parque Güell y la majestuosidad de la Sagrada Familia.
          Disfruté mucho explorando el Barrio Gótico y paseando por las Ramblas.
          Las tapas y el ambiente en la playa también fueron lo mejor. Sin
          embargo, me habría gustado tener más tiempo para visitar el Museo
          Picasso y hacer una excursión a Montjuïc. ¡Definitivamente tengo que
          regresar para explorar esos lugares que me perdí!"
        </span>
        <span>
          "Londres es una ciudad que tiene algo para todos. Me sorprendió la
          mezcla de lo moderno y lo histórico, desde el bullicio de Covent
          Garden hasta la tranquilidad de los parques reales. Los museos son de
          primera clase, y cada barrio tiene su propia personalidad. ¡No hay
          mejor manera de terminar el día que en un pub tradicional con una
          pinta de cerveza y una conversación animada!"
        </span>
        <span>
          "Brujas es como un sueño hecho realidad. Los canales y las casas
          medievales parecen sacadas de un cuento de hadas. Hice un paseo en
          bote por los canales y fue absolutamente mágico. También me perdí en
          sus encantadoras callejuelas, y cada esquina parecía más pintoresca
          que la anterior. ¡Definitivamente un lugar para añadir a tu lista de
          deseos!"
        </span>

        <Typography
          sx={{
            marginTop: '2em',
            marginBottom: '2em',
            fontFamily: 'Didot eText W01 Italic',
            fontSize: '17px',
            opacity: '0.9',
          }}
        >
          ¡Gracias!
        </Typography>
      </Typography>

      <Quote width={40} height={40} />
      <Typography
        sx={{
          fontSize: '15px',
          fontWeight: 600,
          marginTop: '2%',
          fontFamily: 'Raleway, sans-serif',
        }}
      >
        A totally personalized service
      </Typography>
      <Typography
        sx={{
          fontSize: '15px',
          lineHeight: '1.875em',
          opacity: '0.8',
          color: 'rgb(0, 0, 0, 1)',
          fontWeight: 0,
          letterSpacing: 'normal',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.6em',
          fontFamily: 'Raleway, sans-serif',
        }}
      >
        <span>
          “Queremos dar un enorme agradecimiento a Trip Finder por hacer que
          nuestra experiencia en Barcelona fuera tan memorable. Desde explorar
          las maravillas de Gaudí hasta disfrutar de las vibrantes Ramblas y las
          playas soleadas, cada detalle fue cuidadosamente planeado. Nos
          sentimos bien cuidados y bienvenidos en cada paso del camino.”
        </span>
        <span>
          "¡Gracias, Trip Finder, por hacer que nuestra visita a Brujas fuera
          mágica! Los paseos en bote por los encantadores canales y las
          recomendaciones para los cafés medievales hicieron que cada día fuera
          un cuento de hadas. La atención a los detalles y la organización
          impecable hicieron que nuestra estadía fuera simplemente perfecta."
        </span>
        <span>
          "Queremos expresar nuestra gratitud a Trip Finder por la fantástica
          organización de nuestro viaje a Buenos Aires. Desde disfrutar de los
          asados en los mejores restaurantes hasta asistir a emocionantes shows
          de tango, cada experiencia fue bien coordinada y perfectamente
          adaptada a nuestros intereses. Nos sentimos como locales en una ciudad
          vibrante y apasionante."
        </span>
        <span>
          "Nuestra aventura en Florencia superó todas nuestras expectativas, y
          todo gracias a Trip Finder. La planificación detallada nos permitió
          explorar la rica historia y la impresionante arquitectura renacentista
          con total comodidad. La comida toscana fue un verdadero deleite, y
          cada momento en esta hermosa ciudad fue cuidadosamente organizado."
        </span>
        <span>
          "Un agradecimiento especial a Trip Finder por hacer que nuestra visita
          a Londres fuera increíblemente fluida y enriquecedora. Desde los
          fascinantes museos hasta los tranquilos parques y la vibrante vida
          urbana, cada día estuvo lleno de sorpresas. La manera en que se
          gestionaron los detalles del viaje hizo que todo fuera mucho más fácil
          y agradable."
        </span>

        <Typography
          sx={{
            marginTop: '2em',
            marginBottom: '2em',
            fontFamily: 'Didot eText W01 Italic',
            fontSize: '17px',
            opacity: '0.9',
          }}
        >
          ¡Gracias por el cariño!
        </Typography>
      </Typography>
    </Box>
  )
}
