import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './components/grid/grid.component';
import { MasterGridComponent } from './components/master-grid/master-grid.component';

const routes: Routes = [
  {
    path: '',
    component: GridComponent
  },
  {
    path: 'grid',
    component: GridComponent
  },
  {
    path: 'testGrid',
    component: MasterGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
