import "./style.css";
import pawnImage from "../assets/icons/chess-solder.svg"
import blackPawn from "../assets/icons/chess-pawn-black.svg"
import blackRook from "../assets/icons/chess-rook-black.svg"
import whiteRook from "../assets/icons/chess-rook-white.svg"
import blackKnight from "../assets/icons/chess-knight-black.svg"
import whiteKnight from "../assets/icons/chess-knight-white.svg"
import whiteBishop from "../assets/icons/chess-whitebishop.svg"
import blackBishop from "../assets/icons/chess-blackbishop.svg"
import whiteQueen from "../assets/icons/chess-whitequeen.svg"
import blackQueen from "../assets/icons/chess-blackqueen.svg"
import blackKing from "../assets/icons/chess-blackking.svg"
import whiteKing from "../assets/icons/chess-whiteking.svg"





const chessState = [
    [
        {
            currentPiece: whiteRook
        },
        {
            currentPiece: whiteKnight
        },
        {
            currentPiece: whiteBishop
        },
        {
            currentPiece: whiteKing
        },
        {
            currentPiece: whiteQueen
        },
        {
            currentPiece: whiteBishop
        },
        {
            currentPiece: whiteKnight
        },
        {
            currentPiece: whiteRook
        },
    ],
    [
        ...[...Array(8)].map(()=>{
            return{
                currentPiece: pawnImage
            }
        })
    ],
    ...[...Array(4)].map(()=>{
        return[...Array(8)].map(()=>{
            return{
                currentPiece: null
            }
        })
    }
    ),
    [
        ...[...Array(8)].map(()=>{
            return{
                currentPiece: blackPawn
            }
        })
    ],
    [
        {
            currentPiece: blackRook
        },
        {
            currentPiece: blackKnight
        },
        {
            currentPiece: blackBishop
        },
        {
            currentPiece: blackKing
        },
        {
            currentPiece: blackQueen
        },
        {
            currentPiece: blackBishop
        },
        {
            currentPiece: blackKnight
        },
        {
            currentPiece: blackRook
        },
    ],
    
]

const Grid = () => {
    return (
        <div className="grid-container">

        {chessState.map((currentColoumn,i)=>currentColoumn.map(({currentPiece},j)=>{
            return(
                <div style=
                {
                    {
                        backgroundColor: (i+j) %2? "#954707" : "#e6ccab"
                    }
                }>
                    {
                        currentPiece && 
                        <img src={currentPiece} className="chess_piece"/>

                    }
                </div>
            )
        }))}




            {/* {[...Array(64)].map((_val,i)=>
            {
                let indexArray = [i % 8, Math.floor(i / 8)];
                return(
                    <div style=
                    {
                        {
                        backgroundColor: (indexArray[1] + indexArray[0])  % 2 ? "#954707" : "#e6ccab" ,
                        color: (indexArray[1] + indexArray[0])  % 2 ? "#ddd" : "#444",
                        
                    }
                    }>
            
                        {indexArray[1] === 1 && <img className="chess_piece" src={pawnImage} alt="" />}
                        {indexArray[1] === 6 && <img className="chess_piece" src={blackPawn} alt="" />}
                        {indexArray[1] === 7 && (indexArray[0]===0 || indexArray[0]===7) && <img className="chess_piece" src={blackRook} alt="" /> }
                        {indexArray[1] === 0 && (indexArray[0]===0 || indexArray[0]===7) && <img className="chess_piece" src={whiteRook} alt="" /> }
                        {indexArray[1] === 7 && (indexArray[0]===1 || indexArray[0]===6) && <img className="chess_piece" src={blackKnight} alt="" />}
                        {indexArray[1] === 0 && (indexArray[0]===1 || indexArray[0]===6) && <img className="chess_piece" src={whiteKnight} alt="" /> }
                        {indexArray[1] === 0 && (indexArray[0]===2 || indexArray[0]===5) && <img className="chess_piece" src={whiteBishop} alt="" /> }
                        {indexArray[1] === 7 && (indexArray[0]===2 || indexArray[0]===5) && <img className="chess_piece" src={blackBishop} alt="" />}
                        {indexArray[1] === 0 && indexArray[0]===4  && <img className="chess_piece" src={whiteQueen} alt="" /> }
                        {indexArray[1] === 7 && indexArray[0]===4 && <img className="chess_piece" src={blackQueen} alt="" /> }
                        {indexArray[1] === 7 && indexArray[0]===3 && <img className="chess_piece" src={blackKing} alt="" /> }
                        {indexArray[1] === 0 && indexArray[0]===3  && <img className="chess_piece" src={whiteKing} alt="" /> }
                        

                    </div>
                )
            }
            )} */}


        </div>
    )
}

export default Grid
