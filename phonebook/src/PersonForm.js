export const PersonForm = ({newName, newNumber, handleSubmit, handleChange}) => {
    return(
        <form onSubmit={handleSubmit}>
        <h2>Add a new</h2>
        <div>
          name: <input type="text" name="name" onChange={handleChange} value={newName} />
        </div>
        <div>
          number: <input type="text" name="number" onChange={handleChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}