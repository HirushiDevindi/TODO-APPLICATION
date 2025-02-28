package TodoAppication.Todos.service;

import TodoAppication.Todos.entity.Task;
import TodoAppication.Todos.repository.TaskRepo;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.*;

public class TaskServiceTest {
    @Mock
    private TaskRepo taskRepository;

    @InjectMocks
    private TaskService taskService;

    public TaskServiceTest() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetAllTasks() {
        Task task1 = new Task(1L, "Task 1", "Description 1", false);
        Task task2 = new Task(2L, "Task 2", "Description 2", true);
        List<Task> tasks = Arrays.asList(task1, task2);

        when(taskRepository.findAll()).thenReturn(tasks);

        List<Task> result = taskService.getAllTasks();
        assertEquals(2, result.size());
        assertEquals("Task 1", result.get(0).getTitle());
    }

    @Test
    public void testCreateTask() {
        Task task = new Task(1L, "Task 1", "Description 1", false);

        when(taskRepository.save(any(Task.class))).thenReturn(task);

        Task result = taskService.createTask(task);
        assertEquals("Task 1", result.getTitle());
    }
    // @Test
    // public void testDeleteTask() {
    //     doNothing().when(taskRepository).deleteById(anyLong());

    //     taskService.deleteTask(1L);

    //     verify(taskRepository, times(1)).deleteById(1L);
    // }

    @Test
    public void testUpdateTask() {
        Task existingTask = new Task(1L, "Task 1", "Description 1", false);
        Task updatedTask = new Task(1L, "Updated Task", "Updated Description", true);

        when(taskRepository.findById(anyLong())).thenReturn(Optional.of(existingTask));
        when(taskRepository.save(any(Task.class))).thenReturn(updatedTask);

        Task result = taskService.updateTask(1L);
        assertEquals("Updated Task", result.getTitle());
    }
    @Test
    public void testUpdateTaskNotFound() {
        when(taskRepository.findById(anyLong())).thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () -> {
            taskService.updateTask(1L);
        });
    }
}
