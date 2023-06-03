/* eslint-disable prettier/prettier */
import {getData} from '../../config/AsyncStorage';
import {api} from '../../config/api';
import {
  createTaskFailure,
  createTaskRequest,
  createTaskSuccess,
  deleteTaskFailure,
  deleteTaskRequest,
  deleteTaskSuccess,
  getAllTasksFailure,
  getAllTasksRequest,
  getAllTasksSuccess,
  updateTaskStatusFailure,
  updateTaskStatusRequest,
  updateTaskStatusSuccess,
} from './ActionCreator';

export const createTask = taskData => {
  return async dispatch => {
    dispatch(createTaskRequest());

    try {
      const jwt = await getData('jwt');
      if (jwt) {
        api.defaults.headers.common.Authorization = `Bearer ${jwt}`;
      }

      const response = await api.post('/api/tasks/create', taskData);

      const createdTask = response.data;
console.log("created task",createdTask);
      dispatch(createTaskSuccess(createdTask));
    } catch (error) {
      dispatch(createTaskFailure(error));
    }
  };
};

export const getAllTasks = (status, priority, today) => {
  return async dispatch => {
    dispatch(getAllTasksRequest());

    try {
      const jwt = await getData('jwt');
      if (jwt) {
        api.defaults.headers.common.Authorization = `Bearer ${jwt}`;
      }

      const response = await api.get('/api/tasks', {
        params: {
          status,
          priority,
          today,
        },
      });

      const tasks = response.data;

      dispatch(getAllTasksSuccess(tasks));
    } catch (error) {
      dispatch(getAllTasksFailure(error));
    }
  };
};

export const deleteTask = taskId => {
  return async dispatch => {
    dispatch(deleteTaskRequest());

    try {
      const jwt = await getData('jwt');
      if (jwt) {
        api.defaults.headers.common.Authorization = `Bearer ${jwt}`;
      }

      const res=await api.delete(`/api/tasks/delete/${taskId}`);
      console.log("deleted task", res.data)

      dispatch(deleteTaskSuccess(taskId));
    } catch (error) {
      console.log("catch error ",error,"--- task id --- ",taskId)
      dispatch(deleteTaskFailure(error));
    }
  };
};

export const updateTaskStatus = (taskId, newStatus) => {
  return async dispatch => {
    dispatch(updateTaskStatusRequest());

    try {
      const jwt = await getData('jwt');
      if (jwt) {
        api.defaults.headers.common.Authorization = `Bearer ${jwt}`;
      }

      const response = await api.put(`/api/tasks/update/${taskId}`, {
        status: newStatus,
      });

      const updatedTask = response.data;
      console.log("updated task",updatedTask)

      dispatch(updateTaskStatusSuccess(updatedTask));
    } catch (error) {
      dispatch(updateTaskStatusFailure(error));
    }
  };
};
