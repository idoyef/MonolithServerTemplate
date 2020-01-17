import mongoose, { Schema } from 'mongoose';

export class MongoRepository {
    private model!: any;

    constructor(private collectionName: string, private schema: Schema) {
        this.model = mongoose.model(collectionName, schema);
    }
    public insert = async function (item: any) {
        return await this.model.create(item).then((response) => {
            return response;
        }).catch(error => {
            console.log(error);
        });
    }

    public getById = async function (id: string) {

    }

    public updateById = async function (id: string) {

    }

    public deleteById = async function (id: string) {

    }



}