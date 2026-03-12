// 1. Перечисление ролей
const UserRole = {
    Admin: 'Admin',
    Teacher: 'Teacher',
    Student: 'Student'
} as const;

type UserRole = typeof UserRole[keyof typeof UserRole];

//Интерфейс User
interface User {
    id: number;
    name: string;
    role: UserRole;
}

//Функции вывода
function displayInfo(user: User): void {
    switch (user.role) {
        case UserRole.Admin:
            console.log(`Пользователь ${user.name} имеет роль Администратора.`);
            break;
        case UserRole.Teacher:
            console.log(`Пользователь ${user.name} имеет роль Учителя.`);
            break;
        case UserRole.Student:
            console.log(`Пользователь ${user.name} имеет роль Студента.`);
            break;
    }
}

//Типы для курсов
type Course = {
    id: number;
    title: string;
    description: string;
};

class CourseManager {
    private courses: Course[] = [];


    addCourse(course: Course): void {
        this.courses.push(course);
        console.log(`Курс "${course.title}" успешно добавлен.`);
    }

    removeCourse(id: number): void {
        const index = this.courses.findIndex(c => c.id === id);
        if (index !== -1) {
            const removed = this.courses.splice(index, 1);
            console.log(`Курс "${removed[0].title}" удален.`);
        } else {
            console.log(`Курс с ID ${id} не найден.`);
        }
    }


    listCourses(): void {
        console.log("--- Список доступных курсов ---");
        if (this.courses.length === 0) {
            console.log("Список пуст.");
            return;
        }
        this.courses.forEach(course => {
            console.log(`[ID: ${course.id}] ${course.title}: ${course.description}`);
        });
    }
}

const users: User[] = [
    { id: 1, name: 'Ерасыл', role: UserRole.Admin },
    { id: 2, name: 'Ернур', role: UserRole.Teacher },
    { id: 3, name: 'Даян', role: UserRole.Student }
];

console.log("--- Информация о пользователях ---");
users.forEach(user => displayInfo(user));

// Использование менеджера курсов
const myManager = new CourseManager();

myManager.addCourse({ id: 101, title: "TypeScript Basics", description: "Изучаем основы типизации" });
myManager.addCourse({ id: 102, title: "React Deep Dive", description: "Погружение в компоненты" });

myManager.listCourses();

myManager.removeCourse(101);
myManager.listCourses();


//readonly свойство в одном из интерфейсов
interface ReadonlyCourse {
    readonly id: number;
    title: string;
    description: string;
}