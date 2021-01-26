const Router = require ('./router.js')

window.addEventListener("DOMContentLoaded", function() {
    let lis = Array.from(document.querySelectorAll(".sidebar-nav li"));
    lis.forEach(li => {
        li.addEventListener("click", () => {
            let location = li.innerText.toLowerCase();
            window.location.hash = location;
        })
    })

    let content = document.querySelector('.content');
    let router = new Router(content)
    router.start();
})