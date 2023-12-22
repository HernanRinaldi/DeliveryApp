import { ResponseApiDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { user } from "../entities/User";

export interface AuthRepository {
    register(user: user): Promise<ResponseApiDelivery>
    login(email:string, passport:string): Promise<ResponseApiDelivery>
}