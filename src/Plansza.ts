export class Plansza {
    public arr: string[][]
    static ilosc: number
    constructor() {
        this.create()
        this.arr = []
        this.tab()
        this.update()
    }
    create(): void {
        for (let i = 1; i <= 9; i++) {
            for (let u = 1; u <= 9; u++) {
                var pole: HTMLDivElement = document.createElement("div")
                pole.className = "pole"
                pole.id = "i_" + i + "_" + u;
                var zm: HTMLElement = document.getElementById("game")
                zm.appendChild(pole)
            }
        }
    }
    tab(): void {
        for (var y = 0; y <= 10; y++) {
            this.arr[y] = []
            for (var x = 0; x <= 10; x++) {
                this.arr[y][x] = "Z"
            }
        }
        for (var y = 1; y < 10; y++) {
            for (var x = 1; x < 10; x++) {
                this.arr[y][x] = "0"
            }
        }
        for (var t = 0; t < 3; t++) {
            var y: number = Math.floor(Math.random() * 9)
            var x: number = Math.floor(Math.random() * 9)
            var c: number = Math.floor(Math.random() * 6)
            c = c + 1
            console.log("y: " + y + "x: " + x)
            console.log(c)
            if (c != 0) {
                c = -c
            }
            var f: string = c.toString()
            console.log(f)
            if (parseInt(this.arr[y + 1][x + 1]) < 0) {
                t--
            } else {
                this.arr[y + 1][x + 1] = f
            }
        }
        console.table(this.arr)
    }
    update(): void {
        for (var y = 1; y < 10; y++) {
            for (var x = 1; x < 10; x++) {
                //napisy
                // document.getElementById(`i_${y}_${x}`).innerHTML = this.arr[y][x]
            }
        }
    }
}