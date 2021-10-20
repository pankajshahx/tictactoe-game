import logo from './logo.svg';
import React from 'react';

import {useState ,useEffect} from 'react';
import './App.css';

import Square from './Component/Square';

function App() {

  const [board,setBoard] = useState(["","","","","","","","",""]);
  const [player,setPlayer] = useState("O");
  const [result,setResult] = useState({winner:"none",state:"none"});



  useEffect(() =>{
    checkWinner();
    checkIfTie();
    if(player=="X"){
      setPlayer("O")
    }else{
      setPlayer("X");
    }
  },[board])

  useEffect(() =>{
    if(result.state != "none"){
      alert(`Game finished : winner is ${result.winner}`);
      restartGame();
    }
  },[result])

  const choseSquare = (square) => {
      setBoard(board.map((val,idx) => {
          if(idx == square && val==""){
            return player;
          }

          return val;
      }));
      

  };
  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    lines.forEach((line) => {
      const firstPlayer = board[line[0]];
      if(firstPlayer=="") return;
      
      let win = true;
      line.forEach((idx) => {
        
        if(board[idx] != firstPlayer){
          win = false;
        }
      });
      if(win){
        setResult({winner:player,state:"won"})
      }
    });
  };


  const checkIfTie = () =>{

    if(result.winner!="none") return;
    let filled = true;
    board.forEach((square)=>{
      if(square==""){
        filled = false;
      }
    });

    if(filled ){
        setResult({winner:"No One",state:"Tie"});
    }
  };

  const restartGame = () => {
    setBoard(["","","","","","","","",""]);
    setPlayer("O");
  };



  return (
    <div className="App">
      
      <div className="board">
        <div className="rows">
          <Square 
            val = {board[0]}
            choseSquare = {()=>{ {choseSquare(0);} }}
          />
          <Square 
            val = {board[1]}
            choseSquare = {()=>{ {choseSquare(1);} }}
          />
          <Square 
            val = {board[2]}
            choseSquare = {()=>{ {choseSquare(2);} }}
          />
        </div>
        <div className="rows">
        <Square 
            val = {board[3]}
            choseSquare = {()=>{ {choseSquare(3);} }}
          />
          <Square 
            val = {board[4]}
            choseSquare = {()=>{ {choseSquare(4);} }}
          />
          <Square 
            val = {board[5]}
            choseSquare = {()=>{ {choseSquare(5);} }}
          />
        </div>
        <div className="rows">
        <Square 
            val = {board[6]}
            choseSquare = {()=>{ {choseSquare(6);} }}
          />
          <Square 
            val = {board[7]}
            choseSquare = {()=>{ {choseSquare(7);} }}
          />
          <Square 
            val = {board[8]}
            choseSquare = {()=>{ {choseSquare(8);} }}
          />
        </div>
      </div>
      
    </div>
  );
}

export default App;

