var UserRole;
(function (UserRole) {
    UserRole[UserRole["Admin"] = 0] = "Admin";
    UserRole[UserRole["User"] = 1] = "User";
    UserRole[UserRole["Guest"] = 2] = "Guest";
})(UserRole || (UserRole = {}));
// Кортеж для хранения данных о пользователе
var user = ["Ерасыл", 25, UserRole.Admin];
function greet(user) {
    return "\u041F\u0440\u0438\u0432\u0435\u0442, ".concat(user.name, "! \u0422\u0435\u0431\u0435 ").concat(user.age, " \u043B\u0435\u0442 \u0438 \u0442\u0432\u043E\u044F \u0440\u043E\u043B\u044C - ").concat(UserRole[user.role], ".");
}
// Класс ProductStore
var ProductStore = /** @class */ (function () {
    function ProductStore() {
        this.products = [];
    }
    ProductStore.prototype.addProduct = function (product) {
        this.products.push(product);
        console.log("\u0422\u043E\u0432\u0430\u0440 \"".concat(product.name, "\" \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u043C\u0430\u0433\u0430\u0437\u0438\u043D."));
    };
    ProductStore.prototype.updateProductQuantity = function (id, quantity) {
        var product = this.products.find(function (p) { return p.id === id; });
        if (product) {
            product.quantity = quantity;
            console.log("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0442\u043E\u0432\u0430\u0440\u0430 \"".concat(product.name, "\" \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043E \u0434\u043E ").concat(quantity, "."));
        }
    };
    ProductStore.prototype.removeProduct = function (id) {
        var index = this.products.findIndex(function (p) { return p.id === id; });
        if (index !== -1) {
            this.products.splice(index, 1);
            console.log("\u0422\u043E\u0432\u0430\u0440 \u0441 ID ".concat(id, " \u0443\u0434\u0430\u043B\u0435\u043D \u0438\u0437 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430."));
        }
    };
    return ProductStore;
}());
//Реализация класса User с getter и setter
var User = /** @class */ (function () {
    function User(name, age) {
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(User.prototype, "name", {
        //Геттер для имени
        get: function () {
            return this._name;
        },
        //Сеттер
        set: function (newName) {
            if (newName.length > 0) {
                this._name = newName;
            }
            else {
                console.error("Имя не может быть пустым");
            }
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
//Абстрактнйы коасс и унаследование
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
