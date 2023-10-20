import { useState } from "react";
import Quadro from "./Quadro";
export default function Game(){
    const [xNext, setXNext] = useState(true);
    const [historia, setHistoria] = useState([Array(9).fill(null)]);
    const current = historia[historia.length - 1];
    const [currentMove, setCurrentMove] = useState(0);
    //const currentQuadrados = historia[currentMove];
    
    function handlePlay(nextQuadrdos){
        const nextHistory = [...historia.slice(0, currentMove + 1), nextQuadrdos];
        setHistoria(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setXNext(!xNext);
    }
    function pular(nextMove){
        currentMove(nextMove);
        setXNext(nextMove % 2 === 0);
        setCurrentMove(nextMove);
    }
    const moves = historia.map((quadrados, move) => {
        let descricao;
        if(descricao > 0){
            descricao = 'Vá se mover #' + move;
        }else{
            descricao = 'Hora de jogar!';
        }
        return(
            <li key={move}>
                <button onClick={() => pular(move)}>{descricao}</button>
            </li>
        );
    })
    return(
        <div className="jogo"> 
            <div className="jodo-velha">
                <Quadro xNext={xNext} quadrados={current} onPlay={handlePlay} />
            </div>
            <div className="jogo-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );
}