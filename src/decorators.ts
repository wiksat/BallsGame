export function log(target: any, name: string, descriptor: any) {
    console.log(target)
    console.log(name)
    console.log(descriptor)
    document.getElementById("preview").style.border = "1px solid black"
}