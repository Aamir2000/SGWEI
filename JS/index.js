let images = document.querySelectorAll(".middle_middle img");
let right_btn = document.querySelectorAll(".middle_middle .btn_right")[0];
let left_btn = document.querySelectorAll(".middle_middle .btn_left")[0];
let current = 0;

function reset() {
    images.forEach(img => { 
        img.style.display = "none";
    });
}

function Prev() {
    reset();
    if (images[current - 1].style.display === "none") {
        images[current - 1].style.display = "block";
    }
    current--;
    
}
function Next() {
    reset();
    if (images[current + 1].style.display === "none") {
        images[current + 1].style.display = "block";
    }
    current++;
}

right_btn.addEventListener("click", () => {
    if (current == images.length-1) {
        current = -1;
    }
    console.log(current);
    Next();
});

left_btn.addEventListener("click", () => {
    if (current == 0) {
        current = images.length;
    }
    console.log(current);
    Prev();
});

setInterval(() => {
    if (current == images.length-1) {
        current = -1;
    }
    Next();
}, 3000);
