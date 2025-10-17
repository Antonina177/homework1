abstract class BaseEntity {
    public constructor(public id: string) {}
    public abstract display(): void;
}

class ApiData extends BaseEntity {
    public constructor(
        id: string,
        public name: string,
        public details: { description: string; value: number }
    ) {
        super(id);
    }

    public display(): void {
        console.log(`ID: ${this.id}, Name: ${this.name}`);
        console.log(`Description: ${this.details.description}`);
        console.log(`Value: ${this.details.value}`);
    }
}

class SimplifiedData {
    public constructor(
        public id: string,
        public summary: string,
        public totalValue: number
    ) {}
}

export function transformToSimplified(data: ApiData): SimplifiedData {
    const summary = `${data.name} - ${data.details.description}`;
    const totalValue = data.details.value;
    return new SimplifiedData(data.id, summary, totalValue);
}

export { ApiData, SimplifiedData };
