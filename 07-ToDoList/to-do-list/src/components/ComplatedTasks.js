import React, { useEffect, useState } from 'react';
import '../assets/css/TaskForm.css';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

function ComplatedTasks({ tasks, complatedTasks, handleComplatedTaskListener, removeTask, editTask }) {
    const [isAllComplated, setIsAllComplated] = useState(false);
    useWindowSize();

    const calculateThePercent = () => {
        const complated = complatedTasks.length;
        const onDemand = tasks.length;
        return (complated / (complated + onDemand)) * 100;
    };

    useEffect(() => {
        if (calculateThePercent() === 100) {
            setIsAllComplated(true);
            const resetIsAllComplated = () => setIsAllComplated(false);

            const timeoutId = setTimeout(resetIsAllComplated, 3000);

            return () => clearTimeout(timeoutId);
        }
    }, [complatedTasks]);


    return (
        <div>
            {
                isAllComplated && (
                    <Confetti
                        width="1300px"
                        height="700px"
                        numberOfPieces={200}
                        recycle={false}
                        gravity={0.1}
                    />
                )
            }
            <ol className="list-group list-group mb-4 p-2">
                <h1 className='lead fw-bold d-flex justify-content-center'>Tamamlanan Görevler</h1>
                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{ width: `${calculateThePercent(complatedTasks, tasks) || 0}%` }}>{Math.round(calculateThePercent(complatedTasks, tasks) || 0)}%</div>
                </div>
                <hr />
                {
                    complatedTasks?.map(x => {
                        return (
                            <li key={x.uuid} className="list-group-item active d-flex justify-content-between align-items-start bg-success text-light">
                                <input type="checkbox" onChange={() => handleComplatedTaskListener(x.uuid)} name="isDone" checked id="isDone" className='mt-3 form-check-input form-check-lg' />
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold"><del>{x.task}</del></div>
                                    <del>{x.description}</del>
                                </div>
                                {
                                    x.priority ?
                                        <span className="badge m-1 bg-primary rounded-pill">Öncelikli</span> :
                                        ""
                                }
                                <span className="badge bg-danger rounded-pill m-1" onClick={() => removeTask(x.uuid)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                                    </svg>
                                </span>
                                <span className="badge bg-info rounded-pill m-1" onClick={() => editTask(x.uuid)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen-fill" viewBox="0 0 16 16">
                                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
                                    </svg>
                                </span>
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default ComplatedTasks