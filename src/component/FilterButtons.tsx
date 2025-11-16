import {useContext} from 'react'
import {FilterContext} from '../context/FilterContext'

function FilterButton() {
    const context = useContext(FilterContext)

    // if FilterContext does not exit, do not return anything
    if (!context) return null

    // get value={filter, setFilter} from  <FilterContext.Provider value={{filter, setFilter}}>
    // const filter = context.filter
    // const setFilter = context.setFilter
    // filter=('all' | 'active'| 'completed')
    const {filter, setFilter} = context

    return (
        <div>
            <button
                onClick={()=> setFilter('all')}
                style={{
                    backgroundColor: filter === 'all' ? '#E0DECA' : 'white',
                     color: filter === 'all' ? "black" : "gray"              
                     }}
            >All
            </button>

            <button
                onClick={()=> setFilter('active')}
                style={{
                    backgroundColor: filter === 'active' ? '#E0DECA' : 'white',
                     color: filter === 'active' ? "black" : "gray"              
                     }}
            >Active
            </button>

            <button
                onClick={()=> setFilter('completed')}
                style={{
                    backgroundColor: filter === 'completed' ? '#E0DECA' : 'white',
                     color: filter === 'completed' ? "black" : "gray"              
                     }}
            >Completed
            </button>
        </div>
    ) 
}

export default FilterButton