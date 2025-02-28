package    TodoAppication.Todos.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import TodoAppication.Todos.entity.Task;
import TodoAppication.Todos.repository.TaskRepo;

@Service
public class TaskService {
    @Autowired
    private TaskRepo taskRepository;


    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    // public void deleteTask(Long id) {
    //     taskRepository.deleteById(id);
    // }

    public Task updateTask(Long id) {
        Optional<Task> existingTask = taskRepository.findById(id);
        if (existingTask.isPresent()) {
            Task updatedTask = existingTask.get();
            // updatedTask.setTitle(task.getTitle());
            // updatedTask.setDescription(task.getDescription());
            // updatedTask.setCompleted(task.isCompleted());
            updatedTask.setCompleted(true);
            return taskRepository.save(updatedTask);
        } else {
            throw new RuntimeException("Task not found with id " + id);
        }
    }
}

