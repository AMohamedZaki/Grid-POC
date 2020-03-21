import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { GridComponent } from './components/grid/grid.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkTableModule } from '@angular/cdk/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatMenuModule, MatIconModule, MatFormFieldModule, MatInputModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material';
import { MasterGridComponent } from './components/master-grid/master-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GridComponent,
    MasterGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    DragDropModule,
    CdkTableModule,
    MatNativeDateModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  entryComponents: [GridComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
