
function home(){
    addEventListener("click", function(){
        location.href = "home.html";
    });
}
function projects(){
    addEventListener("click", function(){
        location.href = "./projects/projects.html";
    });
}
function blogs(){
    addEventListener("click", function(){
        location.href = "./blogs/blogs.html";
    });
}
function paper(){
    addEventListener("click", function(){
        location.href = "./papers/papers.html";
    });
}
function about(){
    addEventListener("click", function(){
        location.href = "./about/about.html";
    });
}
about();
function typewriterEffect(){
    const text = "DIVYANSHU MISHRA";
    let i=0;
    const speed=120;
    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
}
typewriterEffect();
function welcomeMessage(){
    let text="Welcome to my portfolio Website!";
    let speed=100;
    let i=0;
    function type(){
        if(i<text.length){
            document.getElementById("body").innerHTML+=text.charAt(i);
            i++;
            setTimeout(type,speed);
        }
    }
    type();

}
welcomeMessage();
