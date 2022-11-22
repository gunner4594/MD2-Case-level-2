export class Staff {
    fullName: string;
    age: number;
    gender: string;
    address: string;

    constructor(fullName: string, age: number, gender: string, address: string) {
        this.fullName = fullName;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }

    getFullName (): string {
        return this.fullName;
    }

    setFullName (fullName: string): void {
        this.fullName = fullName;
    }

    getAge (): number {
        return this.age;
    }

    setAge (age: number): void {
        this.age = age;
    }

    getGender (): string {
        return this.gender;
    }

    setGender (gender: string): void {
        this.gender = gender;
    }

    getAddress (): string {
        return this.address;
    }

    setAddress (address: string): void {
        this.address = address;
    }

}