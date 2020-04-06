import React from 'react';
import './listItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move'


export default function Listitem(props) {
    const items = props.items;
    const listItem = items.map(item =>{
        return(
        <div className="list" key={item.key}>
                <p>
                    <input type="text" 
                    value={item.text} 
                    id={item.key}
                    onChange = {
                        (e)=>{props.setUpdate(e.target.value, item.key)}
                    }
                    />
                
                <span>
                    <FontAwesomeIcon
                    className="falcons"
                    icon='trash'
                    onClick={ ()=> props.deleteItem(item.key) }
                    />
                </span>
                </p>
                
            </div>
        )
    })
  return (
       
    <div>
      <FlipMove duration={300} easing="ease-in-out">
            {listItem}
      </FlipMove>
      
    </div>
  );
}
