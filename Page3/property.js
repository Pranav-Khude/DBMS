var id = true

function pagechange() {
    if (id) {

        const bg = document.querySelector(".curve");
        bg.style.translate = '20px 20px'
        document.querySelector("#Vector1").style.filter = 'drop-shadow(1px 0px 3px black)';
        bg.style.width = '98.5%'
        id = false
    } else {
        const bg = document.querySelector(".curve");
        bg.style.translate = '0px 0px'
        document.querySelector("#Vector1").style.filter = 'none';
        bg.style.width = '100%'
        id = true
    }
}