document.addEventListener("DOMContentLoaded", function() {
    let lis = Array.from(document.querySelectorAll(".sidebar-nav li"));
    lis.forEach(li => {
        li.addEventListener("click", () => {
            let location = li.innerText.toLowerCase();
            window.location.hash = location;
        })
    })
})