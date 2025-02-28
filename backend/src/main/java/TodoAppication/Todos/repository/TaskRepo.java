package TodoAppication.Todos.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import TodoAppication.Todos.entity.Task;

public interface TaskRepo extends JpaRepository<Task, Long> {
}
