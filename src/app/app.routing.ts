import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';

const appRoutes: Routes = [
    { path: '' , component: AppComponent },
    { path: 'todo' , component: TodoComponent }
  ];

  export const routing = RouterModule.forRoot(appRoutes);
