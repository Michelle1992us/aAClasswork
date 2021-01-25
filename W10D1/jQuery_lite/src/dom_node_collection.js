class DomNodeCollection {
    constructor(elements) {
        this.elements = elements;
    }

    html(string = null) {
        if (string) {
            this.elements.forEach((node) => {
                node.innerHTML = string;
            })
        } else {
            return this.elements[0].innerHTML;
        }
    }

    empty() {
        this.html("")
    }

    append(arg) {

    }
}

module.exports = DomNodeCollection;