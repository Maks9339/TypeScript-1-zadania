enum UserRole {
    Admin,
    User,
    Guest
}

// Кортеж для хранения данных о пользователе
let user: [string, number, UserRole] = ["Ерасыл", 25, UserRole.Admin];

function greet(user: { name: string; age: number; role: UserRole }): string {
    return `Привет, ${user.name}! Тебе ${user.age} лет и твоя роль - ${UserRole[user.role]}.`;
}

// Интерфейс
interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

// Класс ProductStore
class ProductStore {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
        console.log(`Товар "${product.name}" добавлен в магазин.`);
    }

    updateProductQuantity(id: number, quantity: number): void {
        const product = this.products.find(p => p.id === id);
        if (product) {
            product.quantity = quantity;
            console.log(`Количество товара "${product.name}" обновлено до ${quantity}.`);
        }
    }

    removeProduct(id: number): void {
        const index = this.products.findIndex(p => p.id === id);
        if (index !== -1) {
            this.products.splice(index, 1);
            console.log(`Товар с ID ${id} удален из магазина.`);
        }
    }
}

//Реализация класса User с getter и setter
class User {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    //Геттер для имени
    get name(): string {
        return this._name;
    }

    //Сеттер
    set name(newName: string) {
        if (newName.length > 0) {
            this._name = newName;
        } else {
            console.error("Имя не может быть пустым");
        }
    }
}

//Абстрактнйы коасс и унаследование
abstract class Person {
    constructor(public name: string, public age: number) {}
    abstract getInfo(): string;
}

//Интерфейс в классе implents
interface Employee {
    position: string;
    getPosition(): string;
}


//Использовать Record <K, T> для хранения данных в виде словаря
type UserDictionary = Record<number, { name: string; role: UserRole }>;
