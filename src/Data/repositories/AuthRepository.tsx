import { user } from "../../Domain/entities/User";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseApiDelivery } from "../sources/remote/models/ResponseApiDelivery";

export class AutRepositoryImpl implements AuthRepository {
    async register(user: user){
        try {
            const response = await ApiDelivery.post<ResponseApiDelivery>('/users/create', user);
            console.log('RESPONSE: ', JSON.stringify(response.data));
            return Promise.resolve({
                error: undefined,
                result: response.data
            })
        } catch (error) {
            let e = (error as Error).message;
            console.log('ERROR:', e );
            return Promise.resolve({
                error: e, 
                result: undefined
            })
        }
    }
}