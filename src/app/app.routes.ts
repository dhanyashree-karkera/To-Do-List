// app.routes.ts
import { Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';

export const routes: Routes = [
 {
    path: 'todolist',
    component: TodolistComponent
 },
 {
    path: '', redirectTo: 'todolist', pathMatch: 'full'
 }
];