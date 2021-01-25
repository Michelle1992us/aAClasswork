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

    children() {
        let arr = [];
        this.elements.forEach(node => {
            arr = arr.concat(Array.from(node.children))
        })
        arr.forEach(child => {
            arr = arr.concat(Array.from(child.children))
        })
        return new DomNodeCollection(arr)
    }

    parent() {
        let arr = [];
        this.elements.forEach(node => {
            arr.push(node.parentElement)
        })
        return new DomNodeCollection(arr)
    }

    find(selector) {

    }
}

module.exports = DomNodeCollection;