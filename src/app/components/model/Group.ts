import { User } from './User';
import { MatTableDataSource } from '@angular/material';

export class Group {
    Name: string;
    Id: number;
    Department: string;
    CreateBy: string;
    CreateDate: string;
    Users: User[] | MatTableDataSource<User>;
}
