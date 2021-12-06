import Stories from "./Stories"
import Posts from "./Posts"

export default function Esquerda(){
    return (
        <div class="esquerda">
            <Stories usuarios = {['9gag', 'meowed', 'barked', 'nathanwpylestrangeplanet', 'wawawicomics', 'respondeai', 'filomoderna', 'memeriagourmet']}/>
            <Posts />          
        </div>
    );
}