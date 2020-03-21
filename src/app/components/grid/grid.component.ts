import { Component, OnInit, ViewChild, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ELEMENT_DATA } from '../model/GridData/ElementData';
import { HeaderDetails, InnerHeader } from '../model/GridData/headers';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { User } from '../model/User';
import { Group } from '../model/Group';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class GridComponent implements OnInit {

  headerDetails = HeaderDetails;
  previousIndex: number;

  columnsToDisplay = HeaderDetails;
  innerDisplayedColumns = InnerHeader;

  groupData: Group[] = [];
  expandedElement: Group | null;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild('outerSort') sort: MatSort;
  @ViewChildren('innerSort') innerSort: QueryList<MatSort>;
  @ViewChildren('innerTables') innerTables: QueryList<MatTable<User>>;

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.setGroupData();
    this.dataSource = new MatTableDataSource(this.groupData);
    this.dataSource.sort = this.sort;
  }


  private setGroupData() {
    ELEMENT_DATA.forEach(group => {
      if (group.Users && Array.isArray(group.Users) && group.Users.length) {
        this.groupData = [...this.groupData, { ...group, Users: new MatTableDataSource(group.Users) }];
      } else {
        this.groupData = [...this.groupData, group];
      }
    });
  }

  toggleRow(element: Group) {
    const users = (element.Users as MatTableDataSource<User>).data;
    users && users.length ?
      (this.expandedElement = this.expandedElement === element ? null : element) : null;
    this.cd.detectChanges();
    this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<User>).sort = this.innerSort.toArray()[index]);
  }





}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  age: number;
  dateOfBirth: Date;
}

export interface HeaderDetails {
  header: string;
  field: string;
}
