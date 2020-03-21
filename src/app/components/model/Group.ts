import { User } from './User';

export class Group {
    Name: string;
    Id: number;
    Department: string;
    CreateBy: string;
    CreateDate: string;
    Users: User[];
}
