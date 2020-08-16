const BaseModel = require('../bmapp/index').BaseModel;

class Users extends BaseModel {
  /** @param {Partial<Users>} data */
  constructor(data) {
    super('users')
    this._id = '';
    this.name = '';
    this.gender = '';
    this.yearOfBirth = null;
    this.birth = null;

  }

  getDataRaw() {
    let rawData = {}
    rawData._id = this._id
    rawData.name = String(this.name)
    rawData.gender = this.gender
    rawData.yearOfBirth = Number(this.yearOfBirth)
    rawData.birth = this.birth
    return rawData
  }

  setDataRaw(dataInput) {
    this._id = dataInput._id
    this.name = dataInput.name
    this.gender = dataInput.gender
    this.yearOfBirth = dataInput.yearOfBirth
    this.birth = {
      date: 1,
      month: 2,
      year: dataInput.yearOfBirth
    }
  }

}

module.exports = Users;