import {Staff} from "./Staff";

enum Rank {
    rank1 = 1,
    rank2,
    rank3,
    rank4,
    rank5,
    rank6,
    rank7,
    rank8,
    rank9,
    rank10
};

export class Worker extends Staff {
    private rank: Rank;

    constructor(fullName: string, age: number, gender: string, address: string, rank: Rank) {
       super(fullName,age,gender,address);
       this.rank = rank;
    }
}