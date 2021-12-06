import IonIcons from "./IonIcons";

export default function Stories({usuarios}){
    return (
        <div class="stories">
            {usuarios.map(story => <Story usuario = {story} />)}
            <IonIcons seletorCss="setinha" icone ={["chevron-forward-circle"]} />            
        </div>
    );
}

function Story({usuario}){
    return (
    <div class="story">
        <div class="imagem">
            <img src={`assets/img/${usuario}.svg`} />
        </div>
        <div class="usuario">
            {usuario}
        </div>
    </div>
    );
}