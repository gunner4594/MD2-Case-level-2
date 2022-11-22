import {Staff} from "./Staff";

export interface IManagement<T> {
    add(t: T):void;

    findName(fullName: string): T[];

    displayAll(): T[];
}