import React from 'react'
import Controllers from './Controllers'

function TaskListItem({ x, handleComplatedTaskListener, editTask, removeTask }) {
    return (
        <li key={x.uuid} className="list-group-item d-flex justify-content-between align-items-start bg-dark text-light">
            <input type="checkbox" onChange={() => handleComplatedTaskListener(x.uuid)} name="isDone" id="isDone" className='mt-3 form-check-input form-check-lg' />
            <div className="ms-2 me-auto">
                <div className="fw-bold">{x.task}</div>
                {x.description}
            </div>
            {
                x.priority ?
                    <span className="badge m-1 bg-primary rounded-pill">Öncelikli</span> :
                    ""
            }
            <Controllers editTask={editTask} removeTask={removeTask} x={x} />
        </li>
    )
}

export default TaskListItem