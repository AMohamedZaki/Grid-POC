import { Group } from '../Group';
import { Role } from '../enums/Role';

export const ELEMENT_DATA: Group[] = [
    {
        Id: 1, Name: 'Hydrogen', Department: '1.0079', CreateBy: 'H', CreateDate: '15',
        Users: [
            { Address: 'Cairo', Id: 1, Name: 'Ahmed', Role: Role.Admin, NationalId: '12345623798' },
            { Address: 'Nasr', Id: 1, Name: 'Salman', Role: Role.Employee, NationalId: '123423456798' },
            { Address: 'Empapa', Id: 1, Name: 'Zaki', Role: Role.IT, NationalId: '12343298' },
            { Address: 'Obour', Id: 1, Name: 'Ali', Role: Role.Admin, NationalId: '123456723498' },
        ]
    },
    { Id: 2, Name: 'Helium', Department: '4.0026', CreateBy: 'He', CreateDate: '15', Users: [] },
    { Id: 3, Name: 'Lithium', Department: '6.941', CreateBy: 'Li', CreateDate: '15', Users: [] },
    { Id: 4, Name: 'Beryllium', Department: '9.0122', CreateBy: 'Be', CreateDate: '15', Users: [] },
    { Id: 5, Name: 'Boron', Department: '10.811', CreateBy: 'B', CreateDate: '15', Users: [] },
    { Id: 6, Name: 'Carbon', Department: '12.0107', CreateBy: 'C', CreateDate: '15', Users: [] },
    { Id: 7, Name: 'Nitrogen', Department: '14.0067', CreateBy: 'N', CreateDate: '15', Users: [] },
    { Id: 8, Name: 'Oxygen', Department: '15.9994', CreateBy: 'O', CreateDate: '15', Users: [] },
    { Id: 9, Name: 'Fluorine', Department: '18.9984', CreateBy: 'F', CreateDate: '15', Users: [] },
    { Id: 10, Name: 'Neon', Department: '20.1797', CreateBy: 'Ne', CreateDate: '15', Users: [] },
];
