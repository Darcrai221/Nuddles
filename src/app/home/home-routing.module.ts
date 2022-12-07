import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ExercisesPage } from '../exercises/exercises.page';
import { NutritionPage } from '../nutrition/nutrition.page';
import { AboutPage } from '../about/about.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'exercises',
    loadChildren: () => import('../exercises/exercises.module').then( m => m.ExercisesPageModule)
  },
  {
    path: 'nutrition',
    loadChildren: () => import('../nutrition/nutrition.module').then( m => m.NutritionPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
