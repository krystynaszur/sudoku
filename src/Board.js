import React from 'react';
import Tile from './Tile';
import App from './App';
import './Board.css';


class Board extends React.Component {
    render() {
      
        const mapOfBoardData = this.props.boardData.split("").map(createTile);
        console.log (mapOfBoardData);

        function createTile(i) {
            if (i == ".") {
                i = ""
            }
    
          function handleChange(event) {
                console.log(event.target.value);
            }
            return <Tile value={i} onChange={handleChange} />
        }

        return (
            <div className="Board"> {mapOfBoardData}
            </div>
        );
    }
}
/*function createTile(i) {
    if (i == ".") {
        i = ""
    }
    function handleChange(event) {
        console.log(event.target.value)
    }
    return <Tile key={i} value={i} onChange={handleChange} />
}
*/
    /*
    const Board = props => 
    
    <div className="Board"> {props.boardData.split("").map(createTile)}
    
    </div>*/


    export default Board;