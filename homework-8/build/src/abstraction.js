"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimplifiedData = exports.ApiData = void 0;
exports.transformToSimplified = transformToSimplified;
class BaseEntity {
    constructor(id) {
        this.id = id;
    }
}
class ApiData extends BaseEntity {
    constructor(id, name, details) {
        super(id);
        this.name = name;
        this.details = details;
    }
    display() {
        console.log(`ID: ${this.id}, Name: ${this.name}`);
        console.log(`Description: ${this.details.description}`);
        console.log(`Value: ${this.details.value}`);
    }
}
exports.ApiData = ApiData;
class SimplifiedData {
    constructor(id, summary, totalValue) {
        this.id = id;
        this.summary = summary;
        this.totalValue = totalValue;
    }
}
exports.SimplifiedData = SimplifiedData;
function transformToSimplified(data) {
    const summary = `${data.name} - ${data.details.description}`;
    const totalValue = data.details.value;
    return new SimplifiedData(data.id, summary, totalValue);
}
