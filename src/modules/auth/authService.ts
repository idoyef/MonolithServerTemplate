import { MongoRepository } from "../../common/mongo/mongooseWrapperRepository";

export class AuthService {
    constructor(private repository: MongoRepository) { }

}