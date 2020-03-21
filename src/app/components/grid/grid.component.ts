import { Component, OnInit, ViewChild, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { moveItemInArray, CdkDragStart, CdkDropList } from '@angular/cdk/drag-drop';
import { trigger, state, style, transition, animate } from '@angular/animations';

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', age: 15, dateOfBirth: new Date(), addresses: [
      {
        street: 'Street 1',
        zipCode: '78542',
        city: 'Kansas'
      },
      {
        street: 'Street 2',
        zipCode: '78554',
        city: 'Texas'
      }
    ]
  },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', age: 15, dateOfBirth: new Date() },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', age: 15, dateOfBirth: new Date() },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', age: 15, dateOfBirth: new Date() },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', age: 15, dateOfBirth: new Date() },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', age: 15, dateOfBirth: new Date() },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', age: 15, dateOfBirth: new Date() },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', age: 15, dateOfBirth: new Date() },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', age: 15, dateOfBirth: new Date() },
  {
    position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', age: 15, dateOfBirth: new Date(), addresses: [
      {
        street: 'Street 1',
        zipCode: '78542',
        city: 'Kansas'
      },
      {
        street: 'Street 2',
        zipCode: '78554',
        city: 'Texas'
      }
    ]
  },
];

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

  headerDetails: HeaderDetails[] = [
    {
      header: 'NO.',
      field: 'position'
    },
    {
      header: 'Name.',
      field: 'name'
    },
    {
      header: 'Weight.',
      field: 'weight'
    },
    {
      header: 'Symbol.',
      field: 'symbol'
    },
    {
      header: 'Age.',
      field: 'age'
    },
    {
      header: 'Date Of Birth.',
      field: 'dateOfBirth'
    },
  ];
  innerDisplayedColumns = ['street', 'zipCode', 'city'];
  displayedColumns: string[] = [];
  gridData = [];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  previousIndex: number;
  // context menu
  contextMenuXpos: number;
  contextMenuYpos: number;
  showContextMenu = false;
  selectedElement: PeriodicElement;
  expandedElement: PeriodicElement | null;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChildren('innerSort') innerSort: QueryList<MatSort>;
  @ViewChildren('innerTables') innerTables: QueryList<MatTable<Address>>;

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.setData();
    this.setDisplayedColumns();
    this.dataSource.sort = this.sort;
  }

  setData() {
    ELEMENT_DATA.forEach(user => {
      if (user.addresses && Array.isArray(user.addresses) && user.addresses.length) {
        this.gridData = [...this.gridData, { ...user, addresses: new MatTableDataSource(user.addresses) }];
      } else {
        this.gridData = [...this.gridData, user];
      }
    });
    this.dataSource = new MatTableDataSource(this.gridData);
    this.dataSource.sort = this.sort;
  }


  setDisplayedColumns() {
    this.headerDetails.forEach((colunm, index) => {
      colunm[index] = index;
      this.displayedColumns[index] = colunm.field;
    });
  }

  rearrange() {
    const a = this.displayedColumns[1];
    const b = this.displayedColumns[2];
    this.displayedColumns[1] = b;
    this.displayedColumns[2] = a;

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  dragStarted(event: CdkDragStart, index: number) {
    this.previousIndex = index;
  }

  dropListDropped(event: CdkDropList, index: number) {
    if (event) {
      moveItemInArray(this.headerDetails, this.previousIndex, index);
      this.setDisplayedColumns();
    }
  }

  onrightClick(event, row) {
    this.contextMenuXpos = event.clientX - 100;
    this.contextMenuYpos = event.clientY;
    this.showContextMenu = true;
    this.selectedElement = row;

  }
  disableContextMenu() {
    this.showContextMenu = false;
  }

  toggleRow(element: PeriodicElement) {
    element.addresses && (element.addresses as MatTableDataSource<Address>).data.length ?
      (this.expandedElement = this.expandedElement === element ? null : element) : null;
    this.cd.detectChanges();
    this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<Address>).sort = this.innerSort.toArray()[index]);
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  age: number;
  dateOfBirth: Date;
  addresses?: Address[] | MatTableDataSource<Address>;
}

export interface HeaderDetails {
  header: string;
  field: string;
}


export interface Address {
  street: string;
  zipCode: string;
  city: string;
}
