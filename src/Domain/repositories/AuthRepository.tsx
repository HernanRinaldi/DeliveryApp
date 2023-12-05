import { user } from "../entities/User";

export interface AuthRepository {
    register(user: user): Promise<any>
}