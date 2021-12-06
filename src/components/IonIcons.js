export default function IonIcons({seletorCss,icone}){
    if(seletorCss)
        return(
            <div class={seletorCss}>
                {icone.map((tipo) =><ion-icon name ={tipo} ></ion-icon>)}
            </div>
        );
    else
        return(
            <div>
                {icone.map((tipo) =><ion-icon name ={tipo} ></ion-icon>)}
            </div>
        );
}