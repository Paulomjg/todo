import { useState } from "react"

const TodoForms = ({addTodo}) => {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value || !category) return;
        addTodo(value,category)
        setValue("");
        setCategory('');

    };

    return (
      <div className='Todo-form'>
          <h2>New task</h2>
          <form onSubmit={handleSubmit}>
              <input 
              type="text"
              value={value}
              placeholder='Type a title' 
              onChange={(e) => setValue(e.target.value)} 
              />
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="">Select a category</option>
                  <option value="Trabalho">Work</option>
                  <option value="Pessoal">Personal</option>
                  <option value="Estudos">Studies</option>
              </select>
              <button type='submit'>Create task</button>
          </form>
      </div>
    )
}

export default TodoForms