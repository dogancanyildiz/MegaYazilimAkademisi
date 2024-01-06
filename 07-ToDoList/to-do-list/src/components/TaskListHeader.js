import React from 'react'

function TaskListHeader({ priority, handleFilteredTasks }) {
    return (
        <div>
            <h1 className='lead fw-bold d-flex justify-content-center'>Görevler</h1>
            <button onClick={handleFilteredTasks} type="button" className='btn btn-md btn-warning flex-end col-3'>
                {priority ? "Tümünü Göster" : "Öncelikli olanları Göster"}
            </button>
            <hr />
        </div>
    )
}

export default TaskListHeader