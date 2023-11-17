/*===== Dark Mode Start =====*/
let darkIcon = document.querySelector(".dark-icon");;
darkIcon.addEventListener("click", ()=>{
    darkIcon.classList.toggle("fa-sun");
    document.body.classList.toggle("dark");
    darkIcon.classList.toggle("fa-moon");
});
window.addEventListener("load", ()=>{
    if(document.body.classList.contains("dark")){
        darkIcon.classList.add("fa-sun");
    }
    else{
        darkIcon.classList.add("fa-moon");
    }
});

/*===== Dark Mode End =====*/

/*===== Skill Start =====*/
let skillContainer = document.getElementsByClassName("skills-container")[0];
let run = document.querySelectorAll(".skill-inner");
let circle = document.querySelectorAll(".anim");
let html = 0, css = 0, js = 0, python = 0, c = 0, mo = 0, ap = 0, figma = 0;


window.addEventListener("scroll", ()=>{
    let windowHeight = window.innerHeight;
    let skillContainerDistance = skillContainer.getBoundingClientRect().top;
    let visiblePoint = 120;

    if(skillContainerDistance < windowHeight - visiblePoint){
        //HTML
        circle[0].classList.add("html");
        setInterval(()=>{
            if(html == 86){
                clearInterval();
            }
            else{
                html += 1;
                run[0].children[0].innerHTML = html+"%";
            }
        }, 35);

        //CSS
        circle[1].classList.add("css");
        setInterval(()=>{
            if(css == 80){
                clearInterval();
            }
            else{
                css += 1;
                run[1].children[0].innerHTML = css+"%";
            }
        }, 25);
        
        //javascript
        circle[2].classList.add("js");
        setInterval(()=>{
            if(js == 70){
                clearInterval();
            }
            else{
                js += 1;
                run[2].children[0].innerHTML = js+"%";
            }
        }, 40);
        
        //python
        circle[3].classList.add("python");
        setInterval(()=>{
            if(python == 30){
                clearInterval();
            }
            else{
                python += 1;
                run[3].children[0].innerHTML = python+"%";
            }
        }, 65);
        
        //c
        circle[4].classList.add("c");
        setInterval(()=>{
            if(c == 60){
                clearInterval();
            }
            else{
                c += 1;
                run[4].children[0].innerHTML = c+"%";
            }
        }, 35);
        
        //Microsoft Office
        circle[5].classList.add("mo");
        setInterval(()=>{
            if(mo == 80){
                clearInterval();
            }
            else{
                mo += 1;
                run[5].children[0].innerHTML = mo+"%";
            }
        }, 25);
        
        //Adobe Photoshop
        circle[6].classList.add("ap");
        setInterval(()=>{
            if(ap == 25){
                clearInterval();
            }
            else{
                ap += 1;
                run[6].children[0].innerHTML = ap+"%";
            }
        },115);
        
        //Figma
        //let figma = 0; Need to declar in top
        circle[7].classList.add("figma");
        setInterval(()=>{
            if(figma == 60){
                clearInterval();
            }
            else{
                figma += 1;
                run[7].children[0].innerHTML = figma+"%";
            }
        }, 35);
    }
})

/*===== Skill End =====*/


/*===== Footer Section Start =====*/
let copyrightYear = document.querySelector(".copyright>.copyright-text").firstElementChild;
let date = new Date();
copyrightYear.innerHTML = `@${date.getFullYear()}, `;
/*===== Footer Section End =====*/

/*===== Responsive JS =====*/
let mobileBar = document.querySelector(".mobile-bar-container");
let mobileMenu = document.querySelector(".menu-section");
mobileBar.addEventListener("click", ()=>{
    mobileMenu.classList.toggle("show-menu");
});


/*===== Style Switcher Start =====*/
let setting = document.querySelector(".style-switcher-icons").children[1];
let styleSwitcher = document.querySelector(".style-switcher-inner");
setting.addEventListener("click", ()=>{
    styleSwitcher.classList.toggle("show-color");
});

window.addEventListener("scroll", ()=>{
    if(styleSwitcher.classList.contains("show-color")){
        styleSwitcher.classList.remove("show-color")
    }
});

//Color Switching
let links = document.querySelectorAll(".otherColors");
function switchToOtherColors(color){
    links.forEach((link)=>{
        if(color == link.getAttribute("title")){
            link.removeAttribute("disabled");
        }
        else{
            link.setAttribute("disabled", "true");
        }
    });
}
/*===== Style Switcher End =====*/

/*===== Typing Animation =====*/
let typed = new Typed(".typing", {
    strings: ["","Web Developer", "Web Designer", "EEE Student"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});
