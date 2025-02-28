package TodoAppication.Todos.controller;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import TodoAppication.Todos.entity.Task;
import java.util.List;
import TodoAppication.Todos.service.TaskService;

@RestController
@RequestMapping("/api/tasks")
//@CrossOrigin(origins = "http://localhost:5173")
public class TaskController {
    
    @Autowired
    private TaskService taskService;

    @GetMapping
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskService.createTask(task);
    }

    // @DeleteMapping("/{id}")
    // public void deleteTask(@PathVariable Long id) {
    //     taskService.deleteTask(id);
    // }

    @PatchMapping("/{id}")
    public Task updateTask(@PathVariable Long id) {
        return taskService.updateTask(id);
    }
}