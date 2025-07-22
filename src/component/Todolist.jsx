import { MdDeleteForever, MdCheck } from "react-icons/md";

const Todolist = ({cur,index,handleDeleteTodo,onCheCK,check}) => {
    
    return (
        <>
            <li className="todo-item">
                <span className={check ? "checked" :""}>{cur}</span>
                <div className="actions">
                    <MdCheck className="check-btn" onClick={()=>onCheCK(cur)} />
                    <MdDeleteForever
                        className="delete-btn"
                        onClick={() => handleDeleteTodo(cur)}
                    />
                </div>
            </li>
        </>
    )
}

export default Todolist