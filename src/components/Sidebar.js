export default function Sidebar(){
    const sugestoes =[
        {perfil:'bad.vibes.memes'},
        {perfil:'chibirdart'},
        {perfil:'razoesparaacreditar', perfilNovo: true},
        {perfil:'adorable_animals'},
        {perfil:'smallcutecats'} 
        ];

    return (
        <div class="sidebar">      
          <Usuario usuario ='catanacomics' nomeUsuario='Catana' />
          
          <Sugestoes usuarios={sugestoes} />

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
    );
}

function Usuario({usuario, nomeUsuario}){
    return( 
    <div class="usuario">
        <img src={`assets/img/${usuario}.svg`} />
        <div class="texto">
        <strong>{usuario}</strong>
        {nomeUsuario}
        </div>
    </div>
    )
}
function Sugestoes({usuarios}){
    return( 
        <div class="sugestoes">
        <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>
        {usuarios.map(sugerido => <Sugestao perfil={sugerido.perfil} perfilNovo={sugerido.perfilNovo} />)}
        </div>
    )
} 
function Sugestao({perfil, perfilNovo}){
    return(
    <div class="sugestao">
        <div class="usuario">
        <img src={`assets/img/${perfil}.svg`} />
        <div class="texto">
            <div class="nome">{perfil}</div>
            {(perfilNovo) ? <div class="razao">Novo no Instagram</div> : <div class="razao">Segue você</div>}
        </div>
        </div>
        <div class="seguir">Seguir</div>
    </div>
    )
}