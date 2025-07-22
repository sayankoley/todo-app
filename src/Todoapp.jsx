import { useRef, useState } from "react";
import BubbleBackground from "./BubbleBackground";
import Dates from "./Dates";
import { Footer } from "./Footer";
import Form from "./component/Form";
import Todolist from "./component/Todolist";
import { useEffect } from "react";
import { sayan, setdata } from "./Localstorage";


export const Todoapp = () => {
    

    const [data, setData] = useState(sayan)
    const warningRef = useRef();

    const submitHandle = (input) => {
        const { id, content, checked } = input;
        //console.log(input);

        if (!content) {
            warningRef.current.classList.add('active');
            warningRef.current.textContent = "Need to type something!🎯😎📲💬";
            setTimeout(() => {
                warningRef.current.classList.remove('active');
                warningRef.current.textContent = "";
            }, 2000);
            return;
        }
        console.log(data);
        const exists = data.filter(item => {
         
            return item.content.toLowerCase() === content.toLowerCase();
        });


        if (exists.length > 0) {
            console.log(exists)
            warningRef.current.classList.add('active');
            warningRef.current.textContent = "This task already added!🎯😎📲💬";
            setTimeout(() => {
                warningRef.current.classList.remove('active');
                warningRef.current.textContent = "";
            }, 2000);
            return;
        }


        setData((prev) => [...prev, { id: id, content: content, checked: checked }]);



    }
    useEffect(() => {
        setdata(data);
    }, [data])



    const handleDeleteTodo = (value) => {
        const newData = [...data].filter((cur) => cur.content !== value);
        setData(newData);

    }
    const onCheCK = (val) => {
        const checkdata = [...data].map((cur) => {
            if (cur.content === val) {
                return { ...cur, checked: !cur.checked }
            } else {
                return cur;
            }
            
        })
        setData(checkdata);

    }
    const deleteData = () => {
        setData([]);
    }




    return (
        <>
        <section className="dd todo-containers">
            <section className="todo-container">
                <BubbleBackground></BubbleBackground>


                <header>
                    <h1>Todo List</h1>
                    <Dates></Dates>
                </header>
                <Form submiton={submitHandle}></Form>

                {data.length === 0 && (
                    <div className="type active">Please add some tasks 🎯😎</div>
                )}

                <div ref={warningRef} className="type"></div>

                <ul className="todo-list">

                    {data.map((curTask) => (
                        <Todolist key={curTask.id} check={curTask.checked} cur={curTask.content} onCheCK={onCheCK} handleDeleteTodo={handleDeleteTodo}></Todolist>
                    ))}
                </ul>

                <button className="clear-btn" onClick={deleteData} >
                    Clear All
                </button>
                <Footer></Footer>
            </section>
            </section>

        </>

    );
};
