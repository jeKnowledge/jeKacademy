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
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit  lineHeight={1} textColor="secondary" fit bold>
            jeKnowledge Academy
          </Heading>
          <Text margin="17px 0 0" textColor="tertiary" size={2} fit>
            De 29 de junho a 1 de julho
          </Text>
          <Text margin="70px 0 0" textColor="tertiary" size={3} fit thin>
            A levar a engenharia aos mais novos!
          </Text>
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
          <Heading size={3} textColor="secondary" caps>Atividades</Heading>
          <br/>
          <List>
            <ListItem>WorkShop Arduino</ListItem>
            <ListItem>WorkShop CSS e HTML</ListItem>
            <ListItem>WorkShop Python</ListItem>
            <ListItem>Talk sessions
                <List>
                <ListItem bold>> WhiteSmith</ListItem>
                <ListItem bold>> RedLight</ListItem>
                <ListItem bold>> jeKnowledge</ListItem>
            </List>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote><Cite textColor = "primary">"O Academy foi uma experiência que me permitiu aprender mais sobre diversas tecnologias. Desde programar em CSS e HTML até fazer experiências com Arduinos, pude entrar em contacto com o mundo informático de forma bastante interactiva. Através do Academy pude também perceber que queria mesmo ingressar em Engenharia Informática no ano seguinte. Foi uma experiência gratificante que sem dúvida me ensinou algo mais."</Cite></Quote>
            <br/>
            <Heading size={6} textColor="tertiary" bold>Teresa Salazar</Heading>
            <Text size={1} textColor="tertiary" fit thin>(Participante em 2015, aluna do 3º ano de Eng.ª Informática e ex-diretora do Dep. de Tech da jeKnowledge)</Text>
          </BlockQuote>
        </Slide>
        <Slide transition={["zoom","fade"]} bgColor="tertiary" textColor="primary">
            <Heading size={2} textColor="primary" caps id="titulo">Contactos</Heading>
            <br/>
            <br/>
            <img src={require('../assets/Lopo.jpg')} className="profilepic" id="Lopo"/>
            <Text bold textColor="secondary">Catarina Lopo</Text>
            <p className="Descri" fit textColor="primary">Junior Innovation Consultant</p>
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
           <Heading size={2} textColor="secondary" caps><a href = "http://jeknowledge.pt/academy/" target = "_blank">INSCREVE-TE!</a></Heading>
           <br/><br/><br/><br/><br/><br/>
           <Text size={1} textColor="secondary" fit>(Clica onde diz 'INSCREVE-TE!' para te inscreveres)</Text>
        </Slide>
      </Deck>
    );
  }
}
