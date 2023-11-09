// Module imports
import { IonicModule } from '@ionic/angular';

import { ChangeDetectionStrategy, Component, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Task {
  id: string;
  type: 'todo' | 'done';
  label: string;
  points: number;
}

const todoList: Task[] = [
  {
    id: 'ertgnmkuyt-245',
    type: 'todo',
    label: 'Hacer las compras semanales',
    points: 5
  }, {
    id: 'ertgnmkuyt-5653',
    type: 'todo',
    label: 'Limpiar el baño',
    points: 10
  },
  {
    id: 'ertgnmkuyt-232423445',
    type: 'done',
    label: 'Secar toallas',
    points: 5
  }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
  ]
})
export class HomeComponent {

  public progress: number = 72;

  public todoTaskList: Signal<Task[]> = signal<Task[]>(todoList.filter((task) => task.type === 'todo'));
  public doneTaskList: Signal<Task[]> = signal<Task[]>(todoList.filter((task) => task.type === 'done'));

}
