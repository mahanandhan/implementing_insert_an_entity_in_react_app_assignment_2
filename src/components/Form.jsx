import React from 'react'
import './Form.css'
import { useNavigate } from 'react-router-dom'
const Form = () => {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/');
    }

  return (
    <div>
      <form>
        <input type="text" name='title' placeholder='Enter movie title'/>
        <input type="text" name='director' placeholder='Enter movie director'/>
        <select name="genre" id="">
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
        </select>
        <input type="text" name='releaseYear' placeholder='Enter release year' />
        <textarea name="synopsis" id="" cols="30" rows="10" placeholder='Enter movie synopsis'></textarea>
        <input type="file" name='poster' />
        <button type="submit">Submit</button>
        <button onClick={handleSubmit}>Cancel</button>
      </form>
    </div>
  )
}

export default Form
