// Import React
import React from "react";
//import preloader from '/src/utils/preloader';
// Import Spectacle Core tags

import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#333",
  tertiary: "#1690C3",
  quarternary: "#CECECE",
  orange: "#D66C24",
  green: "#5ABA65",
  pink: "#ED4271"
}, {
  primary: "Helvetica",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
        <img src={require('../assets/academy.jpg')} className="capa"/>

          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <a href = "http://jeknowledge.pt/academy/" target = "_blank"><img src={require('../assets/inscreveja.png')} className="inscreveja"/></a>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>JEKNOWLEDGE ACADEMY</Heading>
          <br/>
          <Text size={1} textColor="secondary" bold>É altura de adquirir experiências e fazer escolhas sobre as áreas de estudo a seguir.</Text>
          <Text size={1} textColor="secondary" >Albergando a jeKnowledge um enorme leque de cursos da FCTUC, surge a iniciativa de levar a ciência aos mais jovens, partilhando conhecimentos na área de engenharia de forma cativante e interativa.</Text>

        </Slide>
        <Slide>
            <Heading size={3} textColor="tertiary">Qual o propósito?</Heading>
            <br/><br/>
            <Text size={1} textColor="secondary" bold>Provar que a ciência não tem de ser aborrecida, dar oportunidade aos estudantes de dialogarem com a nossa equipa sobre a vida universitária, esclarecendo potências dúvidas relativamente a alguns dos cursos onde se reveem.</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <img src={require('../assets/atividades.jpg')} className="capa"/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">

	<Heading size={6} textColor="tertiary" bold>Respondemos a algumas perguntas por ti!</Heading>

	<BlockQuote>

		<Quote>

			<Cite textColor = "orange">Preciso de ter conhecimentos de programação ou robótica?</Cite>

			<Cite textColor = "primary">Não precisas de qualquer conhecimento de programação ou robótica, mas precisamos que tragas o teu computador.</Cite>

			<Cite textColor = "pink">As refeições?</Cite>

			<Cite textColor = "primary">As refeições durante o evento (almoço e coffee breaks durante o dia) vão ser asseguradas pela jeKnowledge e estão incluídas no custo de participação.</Cite>

			<Cite textColor = "green">Como participo?</Cite>

			<Cite textColor = "primary">As inscrições estão abertas até dia 22 de junho às 23h59. Para participares basta preencheres o formulário de inscrição.</Cite>


		</Quote>

		<br/>

	</BlockQuote>

</Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
        <img src={require('../assets/teresa.jpg')} className="capa"/>
          <BlockQuote>
            <Quote><Cite textColor = "primary">"O Academy foi uma experiência que me permitiu aprender mais sobre diversas tecnologias. Desde programar em CSS e HTML até fazer experiências com Arduinos, pude entrar em contacto com o mundo informático de forma bastante interactiva. Através do Academy pude também perceber que queria mesmo ingressar em Engenharia Informática no ano seguinte. Foi uma experiência gratificante que sem dúvida me ensinou algo mais."</Cite></Quote>
            <br/>
            <Heading size={6} textColor="tertiary" bold>Teresa Salazar</Heading>
            <p fit className="cenas">(Participante em 2015, aluna do 3º ano de Eng.ª Informática e ex-diretora do Dep. de Tech da jeKnowledge)</p>
          </BlockQuote>
        </Slide>
        <Slide transition={["zoom","fade"]} bgColor="tertiary" textColor="primary">
            <Heading size={2} textColor="primary" caps id="titulo">Contactos</Heading>
            <br/>
            <br/>
            <img src={require('../assets/Lopo.jpg')} className="profilepic" id="Lopo"/>
            <Text bold textColor="secondary">Catarina Lopo</Text>
            <p className="Descri" fit textColor="primary">Senior Innovation Consultant</p>
            <p className="Descri" fit textColor="primary">+351 962 895 542</p>
            <p className="Descri" fit textColor="primary">catarina.mendes@jeknowledge.com</p>

            <br/>
            <img src={require('../assets/Fanfa.jpg')} className="profilepic" id ="Fanfa"/>
            <Text bold textColor="secondary">Mílton Fanfa</Text>
            <p className="Descri" fit textColor="primary">Junior Innovation Consultant & Software Developer</p>
            <p className="Descri" fit textColor="primary">+351 960 180 566</p>
            <p className="Descri" fit textColor="primary">milton.fanfa@jeknowledge.com</p>
        </Slide>
        <Slide transition={["zoom","fade"]} bgColor="tertiary" textColor="primary">
            <Heading size={2} textColor="primary" caps id="titulo">Contactos</Heading>
            <br/>
            <br/>
            <img src={require('../assets/Fanta.jpg')} className="profilepic" id="Lopo"/>
            <Text bold textColor="secondary">Miguel Marques</Text>
            <p className="Descri" fit textColor="primary">Junior Innovation Consultant & Software Developer</p>
            <p className="Descri" fit textColor="primary">+351 962 855 161</p>
            <p className="Descri" fit textColor="primary">miguel.marques@jeknowledge.com</p>

            <br/>
            <img src={require('../assets/Sam.jpg')} className="profilepic" id ="Fanfa"/>
            <Text bold textColor="secondary">Samantha Marum</Text>
            <p className="Descri" fit textColor="primary">Junior Innovation Consultant</p>
            <p className="Descri" fit textColor="primary">+351 911 164 218</p>
            <p className="Descri" fit textColor="primary">samantha.marum@jeknowledge.com</p>
        </Slide>
        <Slide transition={["zoom","fade"]} bgColor="tertiary" textColor="primary">
        <img src={require('../assets/oi2copy.jpg')} id ="capa2"/>


           <Heading textColor="#68A" fit >Agora que já sabes o que é o jeKnowledge Academy,</Heading>

           <Heading textColor="#68A" fit >não percas mais tempo e inscreve-te <a href = "http://jeknowledge.pt/academy/" target = "_blank">aqui</a>!</Heading>

           <Heading textColor="#CDCDCD" fit size={2}>O preço de participação é de 35€ (sem kit de Arduino) ou de 55€ (com kit de Arduino).</Heading>
           <Heading textColor="#AAA" fit size={2}>(O kit inclui: Arduino Uno; Cabo de ligação A/B; Placa de ensaios (BreadBoard); Fios de ligação; Resistências; Fotoresitência; 3 Leds coloridos; Visor de 7 segmentos; Botão de pressão)</Heading>

           <br/><br/><br/><br/><br/><br/><br/><br/><br/>
           <Text textColor="#CDCDCD" fit>Estás à espera do quê? As inscrições são limitadas!</Text>

        </Slide>
      </Deck>

    );
  }
}
