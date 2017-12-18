import React from 'react'

const Forma = (props) => {
    return <form onSubmit={props.onSubmit}>
            {props.reiksme}
            <input type="text" value={props.reiksme} onChange={props.onReiksmeChange}/>
            <input type="submit"/>
           </form>;
  }

export default Forma
