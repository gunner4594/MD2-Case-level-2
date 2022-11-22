import {IManagement} from "./IManagement";
import {Staff} from "./Staff";
import {Worker} from "./Worker";

export class StaffManager implements IManagement<Staff> {

    listStaff: Staff[] = [];
    add(t: Staff) {
        this.listStaff.push(t);
    }

    displayAll(): Staff[] {
        return this.listStaff
    };

    findName(fullName: string): Staff[] {
        return this.listStaff.filter((staff) => staff.fullName === fullName)
    }

}

