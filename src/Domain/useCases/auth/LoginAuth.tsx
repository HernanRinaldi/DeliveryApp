import { AutRepositoryImpl } from "../../../Data/repositories/AuthRepository";


const { login } = new AutRepositoryImpl();

export const LoginAuthUseCase = async( email:string, passport:string )=>{
    return await login(email, passport);
}