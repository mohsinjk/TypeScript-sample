module CarModule {
    export class Drive implements IDrive {
        left(): void { console.log("left"); }

        right(): void { console.log("right"); }

        forward(): void { console.log("forward"); }

        backward(): void { console.log("backward"); }
    }
}
