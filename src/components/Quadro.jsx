
import Quadrado from "./Quadrado";
function Quadro({xNext, quadrados, onPlay}){

    function handleClick(i){
        if(quadrados[i] || calculador(quadrados)){
            return;
        }
       const nextQuadrdos = quadrados.slice();
       if(xNext){
        nextQuadrdos[i] = 'X';
       }else if(xNext){
        nextQuadrdos[!i] = "Deu velha";
       }
       else{
        nextQuadrdos[i] = 'O';
       }
       /*setQuadrados(nextQuadrdos);
       setXNext(!xNext);*/
       onPlay(nextQuadrdos);
     }
    function calculador(quadrados){
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for(let i = 0; i< lines.length; i++){
            const [z, x, y] = lines[i];
            if(quadrados[z] && quadrados[z] === quadrados[x] && quadrados[z] === quadrados[y]){
                return quadrados[z];
            }
        }
        return null;
     }
     const vencedor = calculador(quadrados);
     const loser = !quadrados;
     let status;
     if(vencedor ){
        status = "Vencedor: " + vencedor;
     }else if(loser){
        status = "Deu velha";
     }
     else{
        status = "Próximo player: " + (xNext ? 'X' : 'O')
     }
    return(
        <div className='cont'>
            <h1>Jogo da Velha</h1>
            <h2 className="status">{status}</h2>
            <div className="row">
                <Quadrado value={quadrados[0]} onSquareClick={() => handleClick(0)} />
                <Quadrado value={quadrados[1]} onSquareClick={() => handleClick(1)} />
                <Quadrado value={quadrados[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="row">
                <Quadrado value={quadrados[3]} onSquareClick={() => handleClick(3)} />
                <Quadrado value={quadrados[4]} onSquareClick={() => handleClick(4)} />
                <Quadrado value={quadrados[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="row">
                <Quadrado value={quadrados[6]} onSquareClick={() => handleClick(6)} />
                <Quadrado value={quadrados[7]} onSquareClick={() => handleClick(7)} />
                <Quadrado value={quadrados[8]} onSquareClick={() => handleClick(8)} />
            </div>    
        </div>
    );
}
export default Quadro;