import React from 'react';
import './Tile.css';

const Tile = props => <input className={props.initialTile} type="number" name="name" value={props.value} onChange={props.onChange}/>
 

export default Tile;
