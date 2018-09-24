import React from 'react';
import Tile from './Tile';
import App from './App';
import './Board.css';

class Board extends React.Component {
    constructor(props) {
        super(props);

        //  this.handleChange = this.handleChange.bind(this);
    }

    handleChange(index, event) {
        console.log(event.target.value);
        console.log(this);
        console.log(index);
        this.props.enterValue(index, event.target.value)
    }

    createTile(value, index) {
        if (value == ".") {
            value = ""
        }
        console.log(this.props.initialboardData[index]);
        
        if (value == this.props.initialboardData[index]) {
            console.log(this.props.initialboardData[index]);
            console.log(value);
            return <Tile initialTile="initialTile" value={value} key={index}  />
        }
        else {
            return <Tile initialTile="noInitialTile" value={value} key={index} onChange={this.handleChange.bind(this, index)} />
        }
    }
    render() {
        const mapOfBoardData = this.props.boardData.split("").map((item, index) => this.createTile(item, index));

        return (
            <div className="Board"> {mapOfBoardData}
            </div>
        );
    }
}
/*                                    
    render() {
      
        const mapOfBoardData = this.props.boardData.split("").map(createTile);
        console.log (mapOfBoardData);
        console.log (this.props.boardData);
        function createTile(value, index) {
            if (value == ".") {
                value = ""
            }
const data = this.props.boardData;
console.log(data);
        function handleChange(event) {
           //var self=this.bind(this);
                console.log(event.target.value);
              console.log(index);
             // console.log(this.data.bind(this));
            }
            return <Tile value={value} key={index} onChange={handleChange} />
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