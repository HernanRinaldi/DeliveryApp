
export interface user {
    id?: string;
    name: string;
    lastName: string;
    email: string;
    telephone: string;
    password: string;
    confirm_password: string;
    session_token?: string;
}