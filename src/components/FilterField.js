import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setQueryActionCreator } from './../reducers/queryReducer'

const FilterField = ({ setQueryGlobally }) => {
    const [ query, setQuery ] = useState('')
    const style = {
        marginBottom: 10
    }

    const handleQueryChange = (e) => {
        setQuery(e.target.value)
        setQueryGlobally(e.target.value)
    }
    
    return(
        <div>
            Filter:
            <input 
                type='text' 
                name='filter' 
                value={query}
                style={style} 
                onChange={handleQueryChange}
            />
        </div>
    )

}

const mapDispatchToProps = {
    setQueryGlobally: setQueryActionCreator
}

export default connect(null, mapDispatchToProps)(FilterField)