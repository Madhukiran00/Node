let tasks = [];

class TaskService {
  static getTasks() {
    return tasks;
  }

  static createTask(data) {
    if (!data.title) {
      const error = new Error("Title is required");
      error.status = 400;
      throw error;
    }

    const newTask = {
      id: tasks.length + 1,
      title: data.title,
    };

    tasks.push(newTask);
    return newTask;
  }
}

export default TaskService;
