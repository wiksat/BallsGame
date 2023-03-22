import { Pointer } from "./Pointer"
import { log } from "./decorators";
interface Collist {
    [index: number]: string
}
interface Isecond {
    canSelect: boolean;
}
interface Iret {
    function(el: HTMLElement): void;
}
export class Move implements Isecond {
    canSelect = true;
    private is_down: boolean
    private arr: string[][]
    private col: Collist
    private sx: number
    private sy: number
    private krok: number
    private path: string[]
    private flag: boolean
    private val: string
    private nextcol: string[]
    private point: number
    private d: boolean
    private time: number
    private def: string[]
    readonly zm: string
    constructor(arr: string[][]) {
        this.point = 0
        this.time = 0
        new Pointer
        Pointer.setpoint(this.point)
        this.arr = arr
        this.path = []
        this.col = ["", "green", "blue", "aquamarine", "yellow", "pink", "grey", "black"]
        this.nextcol = []
        this.setnextcol()
        this.update()
        // console.log(this.path)
        // console.log(this.arr)
        document.body.onclick = (e) => {
            // console.log("klik")
            let el = e.target as HTMLElement;
            if (el.parentElement.id == "game") {
                this.click(el)
            }
        }
        document.body.onmousemove = (e) => {
            let el = e.target as HTMLElement;
            // console.log(el)
            if (el.className == "pole") {
                // this.mousemove(e.pageX, e.pageY, this);
                if (this.is_down) {
                    // console.log("POLE")
                    this.flag = true
                    this.path = []
                    this.ret(el)
                }
            }
        }
        console.log(this.time)
        this.interv();
    }
    interv() {
        let timerId = setInterval(() => {
            this.time++
            document.getElementById("czas").innerHTML = "Czas gry: " + this.time + " s"
        }, 1000);

    }
    @log
    setnextcol(): void {
        this.nextcol = []
        document.getElementById("preview").innerHTML = ""
        for (let i = 0; i < 3; i++) {
            var c: number = Math.floor(Math.random() * 7)
            c = c + 1
            var r: number = -c
            var f: string = r.toString()
            console.log(r)
            this.nextcol.push(f)
            var circle: HTMLElement = document.createElement("div")
            circle.className = "kula"
            circle.style.backgroundColor = this.col[c]
            document.getElementById("preview").appendChild(circle)
        }
        console.log(this.nextcol)
    }
    next(): void {
        var count: number = 0
        for (var y = 1; y < 10; y++) {
            for (var x = 1; x < 10; x++) {
                if (parseInt(this.arr[y][x]) < 0) {
                    count++
                }
            }
        }
        if (count >= 78) {
            alert("Koniec gry\nUzbierano " + this.point + " punktów\nCzas gry: " + this.time + " sekund")

            window.location.reload(true);
        } else {
            for (var t = 0; t < this.nextcol.length; t++) {
                var y: number = Math.floor(Math.random() * 9)
                var x: number = Math.floor(Math.random() * 9)
                if (parseInt(this.arr[y + 1][x + 1]) < 0) {
                    t--
                } else {
                    this.arr[y + 1][x + 1] = this.nextcol[t]
                }
            }
            this.update()
            this.setnextcol()
        }
    }
    ret(el: HTMLElement): void {
        // console.log(el.id)
        var x: number = parseInt(el.id.split("_")[1])
        var y: number = parseInt(el.id.split("_")[2])

        if (this.arr[x][y] != "S" && this.arr[x][y] != "M" && parseInt(this.arr[x][y]) >= 0) {
            // if (this.arr[x][y] != "S" && this.arr[x][y] != "M" && this.arr[x][y] != "X") {
            // console.log(this.arr[x][y])
            this.retrek(parseInt(this.arr[x][y]), el, [])
        }
    }
    retrek(num: number, el: HTMLElement, tab: string[]): void {
        // this.path.push(el.id)
        tab.push(el.id)
        var x: number = parseInt(el.id.split("_")[1])
        var y: number = parseInt(el.id.split("_")[2])
        var min: number = num - 1
        // console.log(x, y, num-1)
        if (this.arr[x - 1][y] == min.toString() && this.flag) {
            // console.log("MINUS")
            this.retrek(min, document.getElementById(`i_${x - 1}_${y}`), tab)
            // console.log(document.getElementById(`i_${x - 1}_${y}`))
        }
        if (this.arr[x][y - 1] == min.toString() && this.flag) {
            this.retrek(min, document.getElementById(`i_${x}_${y - 1}`), tab)
        }
        if (this.arr[x + 1][y] == min.toString() && this.flag) {
            this.retrek(min, document.getElementById(`i_${x + 1}_${y}`), tab)
        }
        if (this.arr[x][y + 1] == min.toString() && this.flag) {
            this.retrek(min, document.getElementById(`i_${x}_${y + 1}`), tab)
        }
        if (min == 0) {
            if (this.flag) {
                this.flag = false
                this.path = tab
                this.show()
            }
        }
    }
    show(): void {
        for (var y = 1; y < 10; y++) {
            for (var x = 1; x < 10; x++) {
                if (parseInt(this.arr[y][x]) > 0) {
                    document.getElementById(`i_${y}_${x}`).style.backgroundColor = "white"
                }
            }
        }
        for (let i = 0; i < this.path.length; i++) {
            document.getElementById(this.path[i]).style.backgroundColor = "red"

        }
    }
    click(el: HTMLElement): void {
        var x: number = parseInt(el.id.split("_")[1])
        var y: number = parseInt(el.id.split("_")[2])
        if (this.is_down) {
            //meta
            // console.log(this.path)
            // console.log(el.id)
            if (this.sx == x && this.sy == y) {
                // console.log("odklik")
                this.is_down = false
                // this.arr[x][y] = this.val
                for (var y = 1; y < 10; y++) {
                    for (var x = 1; x < 10; x++) {
                        document.getElementById(`i_${y}_${x}`).style.backgroundColor = "white"
                        if (parseInt(this.arr[x][y]) > 0) {
                            this.arr[x][y] = "0"
                        }
                    }
                }
            } else if (parseInt(this.arr[x][y]) < 0) {
                for (var i = 1; i < 10; i++) {
                    for (var j = 1; j < 10; j++) {
                        document.getElementById(`i_${j}_${i}`).style.backgroundColor = "white"
                        if (parseInt(this.arr[j][i]) > 0) {
                            this.arr[j][i] = "0"

                        }
                    }
                }
                document.getElementById(`i_${x}_${y}`).style.backgroundColor = "red"
                this.arr[this.sx][this.sy] = this.val
                this.is_down = false
                this.path = []
                this.is_down = true
                this.val = this.arr[x][y]
                this.sx = x
                this.sy = y
                this.rek(this.sx, this.sy, 0)
            }


            if (this.path.includes(el.id)) {
                if (parseInt(this.arr[x][y]) > 0 || this.arr[x][y] != "S") {
                    this.is_down = false
                    this.arr[x][y] = this.val
                    this.krok = 1
                    this.arr[this.sx][this.sy] = "0"
                    console.log("przestawiono")
                    let ddd = setTimeout(() => {
                        this.next()
                    }, 500)
                    // console.log(this.sx, this.sy)
                    for (var y = 1; y < 10; y++) {
                        for (var x = 1; x < 10; x++) {
                            document.getElementById(`i_${y}_${x}`).style.backgroundColor = "white"
                            if (parseInt(this.arr[x][y]) > 0) {
                                this.arr[x][y] = "0"
                            }
                        }
                    }
                }
            }

        } else {
            if (parseInt(this.arr[x][y]) < 0) {
                if (this.arr[x - 1][y] == "0" || this.arr[x + 1][y] == "0" || this.arr[x][y - 1] == "0" || this.arr[x][y + 1] == "0") {
                    this.is_down = true
                    document.getElementById(`i_${x}_${y}`).style.backgroundColor = "red"
                    this.val = this.arr[x][y]
                    this.sx = x
                    this.sy = y
                    this.rek(this.sx, this.sy, 0)
                }

            }
        }
        this.update()
    }
    rek(x: number, y: number, step: number): void {
        // this.krok++
        // console.log(this.krok)
        if (this.arr[x - 1][y] == "0" || parseInt(this.arr[x - 1][y]) > step + 1) {
            this.arr[x - 1][y] = (step + 1).toString()
            this.rek(x - 1, y, step + 1)
        }
        if (this.arr[x][y - 1] == "0" || parseInt(this.arr[x][y - 1]) > step + 1) {
            this.arr[x][y - 1] = (step + 1).toString()
            this.rek(x, y - 1, step + 1)
        }
        if (this.arr[x][y + 1] == "0" || parseInt(this.arr[x][y + 1]) > step + 1) {
            this.arr[x][y + 1] = (step + 1).toString()
            this.rek(x, y + 1, step + 1)
        }
        if (this.arr[x + 1][y] == "0" || parseInt(this.arr[x + 1][y]) > step + 1) {
            this.arr[x + 1][y] = (step + 1).toString()
            this.rek(x + 1, y, step + 1)
        }
    }
    check(): void {
        this.def = []
        this.d = false
        for (var y = 1; y < 10; y++) {
            for (var x = 1; x < 10; x++) {
                // console.log(y, x)
                if (parseInt(this.arr[y][x]) < 0) {
                    this.checkext(y, x, this.arr[y][x], 1, [], 0)
                    // this.del(this.def)

                }
            }
        }
    }
    checkext(y: number, x: number, num: string, step: number, tab: string[], dir: number) {
        // console.log("rekourencja")
        // console.log(y, x)
        tab.push(`i_${y}_${x}`)
        if (this.arr[y + 1][x + 1] == num && dir == 0 || this.arr[y + 1][x + 1] == num && dir == 3) {
            //3
            this.checkext(y + 1, x + 1, this.arr[y + 1][x + 1], step + 1, tab, 3)
        } else if (this.arr[y][x + 1] == num && dir == 0 || this.arr[y][x + 1] == num && dir == 4) {
            //4
            this.checkext(y, x + 1, this.arr[y][x + 1], step + 1, tab, 4)
        } else if (this.arr[y + 1][x] == num && dir == 0 || this.arr[y + 1][x] == num && dir == 2) {
            //2
            this.checkext(y + 1, x, this.arr[y + 1][x], step + 1, tab, 2)
        } else if (this.arr[y + 1][x - 1] == num && dir == 0 || this.arr[y + 1][x - 1] == num && dir == 1) {
            //1
            this.checkext(y + 1, x - 1, this.arr[y + 1][x - 1], step + 1, tab, 1)
        } else if (tab.length > 4) {
            // console.log("ZNALEZIONO", tab)
            // this.del(tab)
            for (let i = 0; i < tab.length; i++) {
                if (this.def.includes(tab[i])) {

                } else {
                    this.def.push(tab[i])
                    console.log("sssss")
                    console.log(this.def)

                }

            }
            if (this.d == false) {
                this.d = true
                let ddd = setTimeout(() => {
                    this.del(this.def)
                }, 300);
            }

        }
    }
    del(tab: string[]) {
        console.log(tab)
        console.log("usuwanie")
        for (let i = 0; i < tab.length; i++) {

            document.getElementById(tab[i]).innerHTML = ""
            var x: number = parseInt(tab[i].split("_")[1])
            var y: number = parseInt(tab[i].split("_")[2])
            console.log(x, y)
            this.arr[x][y] = "0"
            this.point = this.point + 1
            Pointer.setpoint(this.point)
        }
    }
    update(): void {
        var test = document.getElementsByClassName('kula')
        // console.log(test)
        for (let i = 0; i < test.length; i++) {
            // console.log(test[i])
            // test[i].remove()

        }

        console.table(this.arr)

        for (var y = 1; y < 10; y++) {
            for (var x = 1; x < 10; x++) {

                //napisy
                // document.getElementById(`i_${y}_${x}`).innerHTML = this.arr[y][x]
                document.getElementById(`i_${y}_${x}`).innerHTML = ""
                var d = parseInt(this.arr[y][x])
                var dd = -d
                if (d < 0) {
                    // console.log(this.col[dd])
                    // document.getElementById(`i_${y}_${x}`).style.backgroundColor = this.col[dd]
                    var circle: HTMLElement = document.createElement("div")
                    circle.className = "kula"
                    circle.style.backgroundColor = this.col[dd]
                    document.getElementById(`i_${y}_${x}`).appendChild(circle)
                } else {
                    document.getElementById(`i_${y}_${x}`).style.backgroundColor = "white"
                }
            }
        }

        //odpalać sprawdzanie kulek
        this.check()

    }
}