function $l(arg) {
    if (typeof arg === 'string') {
        // console.log(document.querySelectorAll(arg))
        let array = Array.from(document.querySelectorAll(arg));
        return array;
    }
}
window.$l = $l;