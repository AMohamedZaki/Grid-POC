import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './components/grid/grid.component';
import { TableExpandableRowsExample } from './components/test-grid/table-expandable-rows-example';

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
    path: 'test',
    component: TableExpandableRowsExample
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
