
import { AutRepositoryImpl } from "../../../Data/repositories/AuthRepository";
import { user } from "../../entities/User";


const { register } = new AutRepositoryImpl();

export const RegisterAuthUseCase = async( user: user )=>{
    return await register(user);
}