import { Timestamp } from 'rxjs';

export interface User {
    id?: string;
    email?: string;
    name?: string;
    adresse?: string;
    password?: string;
    fidecoins?: number;
    status?: boolean;
    dateOfRegistry?: Date;
}
