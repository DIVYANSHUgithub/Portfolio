
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
