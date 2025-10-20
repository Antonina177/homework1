//=== 1. Інтерфейс ===

interface Plant {
    grow(): void;
    water(amount: number): void;
    getInfo(): string;
}

//=== 2. Абстрактний клас ==='

abstract class FloweringPlant implements Plant {
    protected waterLevel = 0;

    public constructor(protected name: string, protected species: string) {}

    public abstract grow(): void;

    public water(amount: number): void {
        this.waterLevel += amount;
        console.log(`${this.getInfo()} отримала ${amount} мл води. Поточний рівень води: ${this.waterLevel} мл.`);
    }

    public getInfo(): string {
        return `${this.name} (${this.species})`;
    }
}

//3. Конкретні реалізації ==='

class Cactus extends FloweringPlant {
    private spikesCount: number;

    public constructor(name: string, species: string, spikesCount: number) {
        super(name, species);
        this.spikesCount = spikesCount;
    }

    public grow(): void {
        if (this.waterLevel < 10) {
            console.log(`${this.getInfo()} не отримав достатньо води для росту`);
        } else {
            console.log(`${this.getInfo()} виріс ще на 1 см`);
            this.waterLevel -= 5;
        }
    }

    public protect(): void {
        console.log(`${this.getInfo()} має ${this.spikesCount} колючок для захисту`);
    }
}

class Rose extends FloweringPlant {
    private color: string;

    public constructor(name: string, species: string, color: string) {
        super(name, species);
        this.color = color;
    }

    public grow(): void {
        if (this.waterLevel < 20) {
            console.log(`${this.getInfo()} виглядає мляво`);
        } else {
            console.log(`${this.getInfo()} розквітає чудовою ${this.color} квіткою`);
            this.waterLevel -= 10;
        }
    }

    public smell(): void {
        console.log(`${this.getInfo()} пахне неймовірно`);
    }
}

//=== 4. Функція, яка працює з будь-якою рослиною ===

function careForPlant(plant: Plant): void {
    console.log(`Починаємо догляд за: ${plant.getInfo()}`);
    plant.water(15);
    plant.grow();
    console.log('Догляд завершено.\n');
}

//=== 5. Використання ==='

const desertCactus = new Cactus('Echinocactus', 'Grusonii', 300);
const gardenRose = new Rose('Queen Rose', 'Rosa Gallica', 'червона');

careForPlant(desertCactus);
desertCactus.protect();

careForPlant(gardenRose);
gardenRose.smell();
