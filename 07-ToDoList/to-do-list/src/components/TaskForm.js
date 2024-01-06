import React, { useEffect, useState } from 'react'
import '../assets/css/TaskForm.css'
import { v4 as uuid } from 'uuid'
import Tasks from './Tasks';
import ComplatedTasks from './ComplatedTasks';


const TaskForm = () => {
    const emptyTask = {
        task: '',
        description: '',
        priority: false,
        isDone: false,
        tags: []
    };

    const [form, setForm] = useState(emptyTask);
    const [tasks, setTasks] = useState([]);
    const [complatedTasks, setComplatedTasks] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    const [isComplated, setIsComplated] = useState(false);
    const [isFilledBlanks, setIsFilledBlanks] = useState(false);
    const [isFilledBlanksForDesc, setisFilledBlanksForDesc] = useState(false);
    const [taskLocalUpdateCount, setTaskLocalUpdateCount] = useState(0);


    useEffect(() => {
        if (taskLocalUpdateCount > 0) {
            localStorage.setItem("tasks", JSON.stringify(tasks))
            localStorage.setItem("complatedTasks", JSON.stringify(complatedTasks))
        }
    }, [complatedTasks, taskLocalUpdateCount, tasks]);

    useEffect(() => {
        const taskList = JSON.parse(localStorage.getItem("tasks"));
        const complatedTaskList = JSON.parse(localStorage.getItem("complatedTasks"));

        setTasks(taskList ?? [])
        setComplatedTasks(complatedTaskList ?? []);
    }, [])


    function handleComplatedTaskListener(id) {
        const completedTask = tasks.find(task => task.uuid === id);
        const complatedTaskToNormalTask = complatedTasks.find(task => task.uuid === id);
        setTaskLocalUpdateCount(prev => prev + 1);

        if (completedTask) {
            setTasks(prev => prev.filter(task => task.uuid !== id));
            setComplatedTasks(prev => [...prev, completedTask]);
            setIsComplated(true);

            setTimeout(() => {
                setIsComplated(false);
            }, 3000);
        } else if (complatedTaskToNormalTask) {
            setComplatedTasks(prev => prev.filter(task => task.uuid !== id));
            setTasks(prev => [...prev, complatedTaskToNormalTask]);
            setIsComplated(true);

            setTimeout(() => {
                setIsComplated(false);
            }, 3000);
        }
    }

    function editTask(id) {
        const task = tasks.find(x => x.uuid === id)
        const complatedTask = complatedTasks.find(x => x.uuid === id);
        setTaskLocalUpdateCount(prev => prev + 1);

        if (task) {
            setForm({ ...task, isEdited: true, alt: "task" })
        } else {
            setForm({ ...complatedTask, isEdited: true, alt: "complatedTask" });
        }
    }

    const handleInputChange = (e) => {
        setForm((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
            };
        });
        setTaskLocalUpdateCount((prev) => prev + 1);

        setIsFilledBlanks(form.task.length >= 3);
        setisFilledBlanksForDesc(form.description.length >= 3);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setTaskLocalUpdateCount((prev) => prev + 1, () => {
            if (form.isEdited) {
                // ... (Düzenleme işlemleri)
            } else if (form.task.length > 3 && form.description.length > 3) {
                form.uuid = uuid();
                setTasks((prev) => [...prev, form]);
            } else {
                setIsFilledBlanks(false);
                setisFilledBlanksForDesc(false);
            }

            setForm(emptyTask);
            event.target.reset();
        });
    };

    function removeTask(id) {
        const completedTask = tasks.find(task => task.uuid === id);
        const complatedTaskToNormalTask = complatedTasks.find(task => task.uuid === id)
        setTaskLocalUpdateCount(prev => prev + 1);

        if (completedTask) {
            setTasks(prev => prev.filter(task => task.uuid !== id));
            setIsDeleted(true);

            setTimeout(() => {
                setIsDeleted(false);
            }, 3000);
        } else if (complatedTaskToNormalTask) {
            setComplatedTasks(prev => prev.filter(task => task.uuid !== id));
            setIsDeleted(true);

            setTimeout(() => {
                setIsDeleted(false);
            }, 3000);
        }
    }

    return (
        <div style={{ backgroundColor: "#323232" }}>
            <div className='container bg-dark text-light'>
                <h1 className='col-12 text-center mt-4'>URETKEN TASK MANAGER</h1>
                {isDeleted && (
                    <div className='d-flex justify-content-center'>
                        <div className="alert fade show alert-success col-7 mt-1" role="alert">
                            Başarıyla silindi!
                        </div>
                    </div>
                )}
                {
                    isComplated && (
                        <div className='d-flex justify-content-center'>
                            <div className="alert fade show alert-success col-7 mt-1" role="alert">
                                Başarıyla liste güncellendi!
                            </div>
                        </div>
                    )
                }
                <form onSubmit={handleFormSubmit}>
                    <div className="row col-12 mt-3 mb-2 justify-content-center">
                        <div className="col-sm-8">
                            <input onChange={handleInputChange} value={form.task} className={`form-control mb-3 ${isFilledBlanks ? "is-valid" : "is-invalid"}`} type="text" id="task" name='task' placeholder='Başlık giriniz..' />
                            <textarea onChange={handleInputChange} value={form.description} className={`form-control ${isFilledBlanksForDesc ? "is-valid" : "is-invalid"}`} id="description" name='description' placeholder='Metin giriniz..' rows="1"></textarea>
                            <div className="form-check mt-3">
                                <input onChange={handleInputChange} checked={form.priority} className="form-check-input" type="checkbox" name="priority" id="priority" value="priority" />
                                <label className="form-check-label" htmlFor="priority">
                                    Öncelikli
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center mb-5">
                            <button type="submit" className="btn btn-success">Kaydet</button>
                        </div>
                    </div>
                </form>
                <Tasks tasks={tasks} editTask={editTask} removeTask={removeTask} handleComplatedTaskListener={handleComplatedTaskListener} />
                <ComplatedTasks tasks={tasks} complatedTasks={complatedTasks} editTask={editTask} removeTask={removeTask} handleComplatedTaskListener={handleComplatedTaskListener} />
            </div>
        </div>
    )
}



export default TaskForm