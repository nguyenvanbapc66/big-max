const app = process.app;

class BaseModel {
    constructor(name) {
        this.collection = app.db.collection(name);
    }

    async new(dataInput) {
        this.setDataRaw(dataInput);
        const result = await this.collection.insertOne(this.getDataRaw());
        return result;
    }

    async edit(_id, dataInput) {
        this.setDataRaw(dataInput);
        const data = await this.collection.updateMany(
            { _id: new mongodb.ObjectId(_id) },
            {
                $set: this.getDataRaw(),
            }
        );
        return data;
    }

    async delete(_id) {
        this.setDataRaw(dataInput);
        const data = await this.collection.remove(
        { _id: new mongodb.ObjectId(_id) },
        {
            $set: this.getDataRaw(),
        }
        );
        return data;
    }

    async get(_id) {
        const data = await this.collection.findOne({
        _id: new mongodb.ObjectId(_id),
        });
        this.setDataRaw(data);
        return this;
    }

    async getAll() {
        const data = await this.collection.find({}).toArray();
        return data;
    }
}

module.exports = BaseModel;
