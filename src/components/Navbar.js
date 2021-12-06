import IonIcons from "./IonIcons";

export default function Navbar(){
    return (
    <div class="navbar">
        <div class="container">
          <div class="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div class="separador"></div>
            <img src="assets/img/logo.png" />
          </div>
          <IonIcons seletorCss ="logo-mobile" icone ={['logo-instagram']} />      

          <div class="instagram-mobile">
            <img src="assets/img/logo.png" />
          </div>
  
          <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
          </div>
  
          <IonIcons seletorCss ="icones" icone ={['paper-plane-outline', 'compass-outline', 'heart-outline', 'person-outline']} />

          <IonIcons seletorCss ="icones-mobile" icone ={['paper-plane-outline']} />
        </div>
    </div>
    );
}