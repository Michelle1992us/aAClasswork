class Router {
    constructor (node) {
        this.node = node;

    }

    start () {
        window.addEventListener('hashchange', this.render.bind(this));
        this.render();
    }

    activateRoute() {
        return window.location.hash.slice(1)
    }

    render() {
        this.node.innerHTML = "";
        let route = this.activateRoute();
        let p = document.createElement('p');
        p.innerHTML = route;
        this.node.appendChild(p);
    }
}

module.exports = Router;