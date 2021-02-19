import React, { useState, useEffect } from 'react';
import './Pants.css';

function Pants() {

    const [pantsItem, setPantsItem] = useState(
      window.localStorage.getItem('pantsItem') || ''
    )

    React.useEffect(() => {
      window.localStorage.setItem('pantsItem', pantsItem)
    })

    const handleChange = (event) => setPantsItem(event.target.value)
      return (
        <div className="text-white text-3xl font-sans grid grid-rows-2">

          <div className="text-center p-3 content-center text-4xl">
            <form>
              <label className="mr-2">daj</label>
              <input className= "placeholder-gray-500 text-black rounded-full text-center p-1" placeholder="✍🏻" type="text" onChange={handleChange} id="pantsInput" />
              <label className="ml-2"> do gatí</label>
            </form>
            </div>

            <div className="text-center mt-5">
              {pantsItem ? <p> 👖 {pantsItem} máš v gaťoch 👖 </p> : <p className="text-gray-300">zatiaľ máš gate prázdne 😔</p>}
            </div>

        </div>
      )
}

export default Pants;
