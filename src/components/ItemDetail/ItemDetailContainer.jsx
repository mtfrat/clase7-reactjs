import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"

const ItemDetailContainer = () => {

    const [items, setItems] = useState([])

    const getItem = async () =>{
        const getItemsJSON = await fetch('https://pokeapi.co/api/v2/pokemon')
        const itemsJSONParse = await getItemsJSON.json()
        setItems(itemsJSONParse.results)
    }

    useEffect(() =>{
        getItem()
        // Llamo a la promesa
        setTimeout(()=>{
            
        },2000)
    },[])

    return (
        <div>
            <div>
                <h1 className="mt-5">Item</h1>
                <div>
                    {items.length > 0 &&
                        <ItemDetail items = {items}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer