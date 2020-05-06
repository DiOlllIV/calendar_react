const baseUrl = 'https://5e870549781e48001676b644.mockapi.io/api/v1/tasks'

export const createTask = taskData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;utf-8',
        },
        body: JSON.stringify(taskData),
    })
    .then(response => {
        if(!response.ok) 
            throw new Error('Failed to create task'); 
    });
};

export const fetchTasksList = () => {
    return fetch(baseUrl)
        .then(response => {
            if(response.ok)
                return response.json();
        });
};

export const updateTask = (taskId, taskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        header: {
            'Content-Type': 'application/json;utf-8',
        },
        body: JSON.stringify(taskData),
    })
    .then(response => {
        if (!response.ok)
            throw new Error('Failed to change status of task');
    });
};

export const deleteTask = (taskId) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if(!response.ok) 
            throw new Error('Failed to delete task');
    });
};