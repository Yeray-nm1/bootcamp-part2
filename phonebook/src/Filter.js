export const Filter = ({newQuery, handleChange}) => {

    return(
        <div>
            <label>filter shown with</label>
            <input type="text" name="query" onChange={handleChange} value={newQuery} />
        </div>   
    )
}