import { MongoRepository } from "../../common/mongo/mongooseWrapperRepository";
import { ApiWrapper } from "../../utils/apiWrapper";

export class UsersService {
    constructor(private repository: MongoRepository) { }
    async createUser(user: any) {
        return await this.repository.insert(user);
    }

    async getUser() {
        const api = new ApiWrapper();
        const result = await api.get('http://www.api-football.com/demo/api/v2/');
        console.log(result);
    }
}