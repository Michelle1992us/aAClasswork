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
        this.html("");
    }

    append(arg) {
        if (arg instanceof DomNodeCollection) {
            this.elements.forEach(currentNode => {
                arg.elements.forEach(newNode => {
                    currentNode.innerHTML = newNode.outerHTML;
                })
            })
        } else if (arg instanceof HTMLElement) {
            this.elements.forEach(currentNode => currentNode.innerHTML = arg.outerHTML);
        } else if (typeof arg === 'string') {
            this.elements.forEach(currentNode => currentNode.innerHTML = arg);
        }
    }

    attr(name, value = null) {
        if (value) {
            this.elements.forEach(node => node.setAttribute(name, value))
        } else {
            this.elements.forEach(node => console.log(node.getAttribute(name)))
            
        }
    }

    addClass(name) {
        this.elements.forEach(node => node.classList.add(name));
    }

    removeClass(name) {
        this.elements.forEach(node => node.classList.remove(name));
    }
}

module.exports = DomNodeCollection;