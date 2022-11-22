import {StaffManager} from "./StaffManager";
import {Staff} from "./Staff";
import {Worker} from "./Worker";

let readlineSync = require('readline-sync');

let staffManagement = new StaffManager();
let woker1 = new Worker('Doan Ngoc Duy', 28, 'Nam', 'Ha Noi', 1);

staffManagement.add(woker1);
console.log(staffManagement.displayAll());

function addWorker() {
    console.log('-----Hiển thị form thêm mới công nhân-------');
    let fullName = readlineSync.question('Enter fullname : ');
    let age = +readlineSync.question('Enter age : ');
    let gender = readlineSync.question('Enter gender : ');
    let address = readlineSync.question('Enter address : ');
    let rank = +readlineSync.question('Enter rank : ');
    let worker = new Worker(fullName, age, gender, address, rank)
    staffManagement.add(worker);
};

function addEngineer() {
    console.log('-----Hiển thị form thêm mới kỹ sư-------');
    let fullName = readlineSync.question('Enter fullname : ');
    let age = +readlineSync.question('Enter age : ');
    let gender = readlineSync.question('Enter gender : ');
    let address = readlineSync.question('Enter address : ');
    let specializationMajor = readlineSync.question('Enter specializationMajor : ');
    let engineer = new Worker(fullName, age, gender, address, specializationMajor)
    staffManagement.add(engineer);
};

function addEmployee() {
    console.log('-----Hiển thị form thêm mới nhân viên-------');
    let fullName = readlineSync.question('Enter fullname : ');
    let age = +readlineSync.question('Enter age : ');
    let gender = readlineSync.question('Enter gender : ');
    let address = readlineSync.question('Enter address : ');
    let jobPosition = readlineSync.question('Enter jobPosition : ');
    let employee = new Worker(fullName, age, gender, address, jobPosition)
    staffManagement.add(employee);
};

function addChoice() {
    let menu = `--------Chọn cán bộ ----------
    1.Thêm công nhân
    2.Thêm kỹ sư
    3.Thêm nhân viên
    4.Dừng việc thêm cán bộ`

    let choice = -1;
    do {
        console.log(menu);
        choice = +readlineSync.question('Enter choice : ');
        switch (choice) {
            case 1:
                addWorker();
                break;
            case 2:
                addEngineer();
                break;
            case 3:
                addEmployee();
                break;
        }
    } while (choice !== 0);
};

function display() {
    console.log('-------Hiển thị sản phẩm--------');
    console.log(staffManagement.displayAll());
};

function findByName () {
    console.log('------Tìm kiếm cán bộ theo tên-------');
    let fullName = readlineSync.question('Enter fullname : ');
    // let result = staffManagement.listStaff.filter((staff) => staff.fullName === fullName);
    // console.log(result)
    console.log(staffManagement.findName(fullName));
};

function main() {
    let menu = `--------Menu chính----------
    1.Thêm cán bộ
    2.Hiển thị danh sách cán bộ
    3.Tìm kiếm cán bộ theo tên
    0.Thoát chương trình`

    let choice = -1;
    do {
        console.log(menu);
        choice = +readlineSync.question('Enter choice : ');
        switch (choice) {
            case 1:
                addChoice();
                break;
            case 2:
                display();
                break;
            case 3:
                findByName();
                break;
        }
    } while (choice !== 0)
};

main();