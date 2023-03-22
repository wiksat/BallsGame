interface IPointer {
    point: number,
}

export class Pointer implements IPointer {
    public point: number = 0
    static setpoint(point: number): void {
        document.getElementById("licznik").innerHTML = "Punkty: " + point
    }
}
