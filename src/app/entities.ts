export interface Promo {
    id?:number;
    name:string;
    cursus:string;
    students:Student[];
    startDate:string;
    endDate:string;
}

export interface Student {
    id?:number;
    name:string;
    birthdate:string;
    address:string;
    notes:string[];
}

export interface Note {
    id?:number;
    createdAt:string;
    review:string;
    attachmentLink:string;
    student:string;
}

export interface ApiList<T> {
    'hydra:member': T[];
    'hydra:totalItems':number
}