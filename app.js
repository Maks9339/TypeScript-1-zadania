// 1. Перечисление ролей
var UserRole = {
    Admin: 'Admin',
    Teacher: 'Teacher',
    Student: 'Student'
};
//Функции вывода
function displayInfo(user) {
    switch (user.role) {
        case UserRole.Admin:
            console.log("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ".concat(user.name, " \u0438\u043C\u0435\u0435\u0442 \u0440\u043E\u043B\u044C \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430."));
            break;
        case UserRole.Teacher:
            console.log("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ".concat(user.name, " \u0438\u043C\u0435\u0435\u0442 \u0440\u043E\u043B\u044C \u0423\u0447\u0438\u0442\u0435\u043B\u044F."));
            break;
        case UserRole.Student:
            console.log("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ".concat(user.name, " \u0438\u043C\u0435\u0435\u0442 \u0440\u043E\u043B\u044C \u0421\u0442\u0443\u0434\u0435\u043D\u0442\u0430."));
            break;
    }
}
var CourseManager = /** @class */ (function () {
    function CourseManager() {
        this.courses = [];
    }
    CourseManager.prototype.addCourse = function (course) {
        this.courses.push(course);
        console.log("\u041A\u0443\u0440\u0441 \"".concat(course.title, "\" \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D."));
    };
    CourseManager.prototype.removeCourse = function (id) {
        var index = this.courses.findIndex(function (c) { return c.id === id; });
        if (index !== -1) {
            var removed = this.courses.splice(index, 1);
            console.log("\u041A\u0443\u0440\u0441 \"".concat(removed[0].title, "\" \u0443\u0434\u0430\u043B\u0435\u043D."));
        }
        else {
            console.log("\u041A\u0443\u0440\u0441 \u0441 ID ".concat(id, " \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D."));
        }
    };
    CourseManager.prototype.listCourses = function () {
        console.log("--- Список доступных курсов ---");
        if (this.courses.length === 0) {
            console.log("Список пуст.");
            return;
        }
        this.courses.forEach(function (course) {
            console.log("[ID: ".concat(course.id, "] ").concat(course.title, ": ").concat(course.description));
        });
    };
    return CourseManager;
}());
var users = [
    { id: 1, name: 'Ерасыл', role: UserRole.Admin },
    { id: 2, name: 'Ернур', role: UserRole.Teacher },
    { id: 3, name: 'Даян', role: UserRole.Student }
];
console.log("--- Информация о пользователях ---");
users.forEach(function (user) { return displayInfo(user); });
// Использование менеджера курсов
var myManager = new CourseManager();
myManager.addCourse({ id: 101, title: "TypeScript Basics", description: "Изучаем основы типизации" });
myManager.addCourse({ id: 102, title: "React Deep Dive", description: "Погружение в компоненты" });
myManager.listCourses();
myManager.removeCourse(101);
myManager.listCourses();
