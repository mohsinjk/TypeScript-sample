module CarModule {
    export class Engine implements IEngine {
        private name: string;

        constructor(name: string) {
            this.name = name;
        }

        getEngine(): string {
            return this.name;
        }
    }
}
