import React, { useState, useEffect } from 'react';
import './Pants.css';

function Pants() {

    const [pantsItem, setPantsItem] = useState([]);

    const [visibility, toggleVisibility] = useState(false);

    useEffect(() => {
      const json = localStorage.getItem("pantsItems");
      const savedItems = JSON.parse(json);
      if (savedItems) {
        setPantsItem(savedItems);
      }
    }, [setPantsItem]);

    useEffect(() => {
      const json =JSON.stringify(pantsItem);
      localStorage.setItem("pantsItems", json);
    }, [pantsItem]);

    const addPantsItem = (e) => {
      e.preventDefault();
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        text: e.target.pantsInput.value
      };
      setPantsItem([...pantsItem, newItem]);
      e.target.pantsInput.value = "";
    };

    const clearStorage = (e) => {
      setPantsItem([]);
      localStorage.setItem("pantsItems", "")
    };

      return (
        <div className="main">

          <div className="input">
            <h1>Daj do gatí ...</h1>
            <button onClick={toggleVisibility}>strašne moc chcem dať niečo do gati</button>
            <form onSubmit={addPantsItem}>
              <input  className={visibility ? "visible" : "invisible"}
                      placeholder="čo chceš dať do gatí?"
                      type="text"
                      name="pantsInput" />
            </form>
            </div>

            <div className="items">
              {pantsItem.length === 0 ? <p>tvoje gate zívajú prázdnotou 😔</p> : <p></p>}
            </div>

            {/* {pantsItem.filter(pantsItem[pantsItem.length - 1].text)} */}

            {pantsItem.map(pantsItem => <p>{pantsItem.text} máš v gaťoch! 👖</p>)}

            <button onClick={clearStorage}>clear</button>

        </div>
      )
}

export default Pants;
