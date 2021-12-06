import IonIcons from './IonIcons'

const posts = [ { 
    perfil: 'meowed',
    conteudo:'gato-telefone',
    fundo:{primeiroPerfil:'respondeai', qtdCurtidas:'101.523'}
  },
  { 
    user: 'barked', 
    conteudo:'dog',
    fundo:{primeiroPerfil:'adorable_animals', qtdCurtidas:'99.159'}}
]

export default function Posts(){
    return (
        <div class="posts">
          {posts.map(publicação => <Post post = {publicação}/>)}
        </div>
      );  
}

function Post({post}){
    return(
        <div class="post">
        <Topo usuario = {post.perfil}/>
        <Conteudo conteudo = {post.conteudo} />
        <Fundo primeiro={post.fundo.primeiroPerfil} qtd = {post.fundo.qtdCurtidas}/>
        </div>
    )
}


function Topo({usuario}){
    return (
      <div class="topo">
        <div class="usuario">
          <img src={`assets/img/${usuario}.svg`} />
          {usuario}
        </div>
        <IonIcons seletorCss='acoes' icone={['ellipsis-horizontal']} />        
      </div>
    )
}


function Conteudo({conteudo}){
    return (
        <div class="conteudo">
            <img src={`assets/img/${conteudo}.svg`} />
        </div>
    )
}

function Fundo({primeiro,qtd}){
    return (
        <div class="fundo">
        <Acoes />
        <Curtidas perfil={primeiro} curtidas={qtd} />
        </div>
    )
}

function Acoes(){
    return(
      <div class="acoes">
        <IonIcons icone= {['heart-outline', 'chatbubble-outline', 'paper-plane-outline']} />
        <IonIcons icone= {['bookmark-outline']} />
      </div>
    )
}


function Curtidas({perfil,curtidas}){
    return(
    <div class="curtidas">
        <img src={`assets/img/${perfil}.svg`} />
        <div class="texto">
        Curtido por <strong>{perfil}</strong> e <strong>outras {curtidas} pessoas</strong>
        </div>
    </div>
    )
}