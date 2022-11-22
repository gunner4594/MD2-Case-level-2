import {Staff} from "./Staff";

export class Employee extends Staff {
    private jobPosition: string;

    constructor(fullName: string, age: number, gender: string, address: string, jobPosition: string) {
        super(fullName, age, gender, address);
        this.jobPosition = jobPosition;
    }
}