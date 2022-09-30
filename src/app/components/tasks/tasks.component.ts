import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task.interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  // Assiging TASKS as a property of our class
  tasks: Task[] = [];
  // In order to use the TaskService, we need to inject it into the constructor
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // We need to call the getTasks method from the TaskService
    // If you have async stuff, you should use Observables
    // this.tasks = this.taskService.getTasks();
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    console.log('task :>> ', task);
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
    // this.tasks = this.tasks.filter((t) => t.id !== task.id);
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => {
      this.tasks.push(task);
    });
  }
}
