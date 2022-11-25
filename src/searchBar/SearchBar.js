
import React, { useState } from "react"
import './SearchBar.css'

const SearchBar = (props) => {




    const onChange = (event) => {

        props.setSearchValue(event.target.value)
    }
    const clearAll = () => {
        props.setSearchValue(props.searchValue)
    }

    const isTyping = props.searchValue.length > 2


    // const filterByProduct = products.filter((product) => {
    //     return product.includes(value)
    //  })


    // methods of arrays in JS
    // in java ,c = while, for 
    // in JS = map, forEach
    /**
     * const products = [1,2,3,4]
     * procucts.map( (21) => { return 1 + 1 } )
     */

    console.log([1, 2, 3].map((item) => { return item - 1 }))

    return (
        <div>
            <input type="text" value={props.searchValue} onChange={onChange} />
            {isTyping && <button onClick={clearAll}>search</button>
            }

            <p id="top">{props.searchValue}</p>



        </div>
    )
}
export default SearchBar

