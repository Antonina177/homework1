//=== 1. Інтерфейс ===
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//=== 2. Абстрактний клас ==='
var FloweringPlant = /** @class */ (function () {
    function FloweringPlant(name, species) {
        this.name = name;
        this.species = species;
        this.waterLevel = 0;
    }
    FloweringPlant.prototype.water = function (amount) {
        this.waterLevel += amount;
        console.log("".concat(this.getInfo(), " \u043E\u0442\u0440\u0438\u043C\u0430\u043B\u0430 ").concat(amount, " \u043C\u043B \u0432\u043E\u0434\u0438. \u041F\u043E\u0442\u043E\u0447\u043D\u0438\u0439 \u0440\u0456\u0432\u0435\u043D\u044C \u0432\u043E\u0434\u0438: ").concat(this.waterLevel, " \u043C\u043B."));
    };
    FloweringPlant.prototype.getInfo = function () {
        return "".concat(this.name, " (").concat(this.species, ")");
    };
    return FloweringPlant;
}());
//3. Конкретні реалізації ==='
var Cactus = /** @class */ (function (_super) {
    __extends(Cactus, _super);
    function Cactus(name, species, spikesCount) {
        var _this = _super.call(this, name, species) || this;
        _this.spikesCount = spikesCount;
        return _this;
    }
    Cactus.prototype.grow = function () {
        if (this.waterLevel < 10) {
            console.log("".concat(this.getInfo(), " \u043D\u0435 \u043E\u0442\u0440\u0438\u043C\u0430\u0432 \u0434\u043E\u0441\u0442\u0430\u0442\u043D\u044C\u043E \u0432\u043E\u0434\u0438 \u0434\u043B\u044F \u0440\u043E\u0441\u0442\u0443"));
        }
        else {
            console.log("".concat(this.getInfo(), " \u0432\u0438\u0440\u0456\u0441 \u0449\u0435 \u043D\u0430 1 \u0441\u043C"));
            this.waterLevel -= 5;
        }
    };
    Cactus.prototype.protect = function () {
        console.log("".concat(this.getInfo(), " \u043C\u0430\u0454 ").concat(this.spikesCount, " \u043A\u043E\u043B\u044E\u0447\u043E\u043A \u0434\u043B\u044F \u0437\u0430\u0445\u0438\u0441\u0442\u0443"));
    };
    return Cactus;
}(FloweringPlant));
var Rose = /** @class */ (function (_super) {
    __extends(Rose, _super);
    function Rose(name, species, color) {
        var _this = _super.call(this, name, species) || this;
        _this.color = color;
        return _this;
    }
    Rose.prototype.grow = function () {
        if (this.waterLevel < 20) {
            console.log("".concat(this.getInfo(), " \u0432\u0438\u0433\u043B\u044F\u0434\u0430\u0454 \u043C\u043B\u044F\u0432\u043E"));
        }
        else {
            console.log("".concat(this.getInfo(), " \u0440\u043E\u0437\u043A\u0432\u0456\u0442\u0430\u0454 \u0447\u0443\u0434\u043E\u0432\u043E\u044E ").concat(this.color, " \u043A\u0432\u0456\u0442\u043A\u043E\u044E"));
            this.waterLevel -= 10;
        }
    };
    Rose.prototype.smell = function () {
        console.log("".concat(this.getInfo(), " \u043F\u0430\u0445\u043D\u0435 \u043D\u0435\u0439\u043C\u043E\u0432\u0456\u0440\u043D\u043E"));
    };
    return Rose;
}(FloweringPlant));
//=== 4. Функція, яка працює з будь-якою рослиною ===
function careForPlant(plant) {
    console.log("\u041F\u043E\u0447\u0438\u043D\u0430\u0454\u043C\u043E \u0434\u043E\u0433\u043B\u044F\u0434 \u0437\u0430: ".concat(plant.getInfo()));
    plant.water(15);
    plant.grow();
    console.log('Догляд завершено.\n');
}
//=== 5. Використання ==='
var desertCactus = new Cactus('Echinocactus', 'Grusonii', 300);
var gardenRose = new Rose('Queen Rose', 'Rosa Gallica', 'червона');
careForPlant(desertCactus);
desertCactus.protect();
careForPlant(gardenRose);
gardenRose.smell();
