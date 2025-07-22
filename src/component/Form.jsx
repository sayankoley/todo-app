import { useState } from 'react'

const Form = ({ submiton }) => {
    const [input, setInput] = useState({ id: '', content: '', checked: false });
    const handleChange = (e) => {
        const value = e.target.value;
        setInput({ id: value, content: value, checked: false })
    }
    const submitHandle = (e) => {
        e.preventDefault();
        submiton(input);
        setInput({ id: '', content: '', checked: false });
    }
    return (
        <>
            <form className="form" onSubmit={submitHandle}>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    className="todo-input"
                    value={input.content}
                    onChange={handleChange}


                />
                <button type="submit" className="todo-btn" >
                    Add Task
                </button>
            </form>


        </>
    )
}

export default Form