export interface UserData {

 
        id: string;
        name: string;
        avatar: string;  
    
}
export interface UserTask {

    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: Date;
}