import { Schema, model } from 'mongoose';

export class MongoRepository {
    private model!: any;

    constructor(private collectionName: string, private schema: Schema) {
        this.model = model(collectionName, schema);
    }
    async insert(item: any) {
        return await this.model.create(item).then((response: any) => {
            return response;
        }).catch((error: any) => {
            console.log(error);
        });
    }

    async getById(id: string) {

    }

    async updateById(id: string) {

    }

    async deleteById(id: string) {

    }



}