import {Staff} from "./Staff";

export class Engineer extends Staff{
    private specializationMajor: string;

    constructor(fullName: string, age: number, gender: string, address: string, specializationMajor: string) {
        super(fullName, age, gender, address);
        this.specializationMajor = specializationMajor;
    }
}