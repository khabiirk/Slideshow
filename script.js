imageList = [];

let right = document.querySelector("#right");
let left = document.querySelector("#left");
let main = document.querySelector(".main");
let img = document.createElement("img");
let count = 0;
let dot = document.querySelector('.dot');

img.src = imageList[0];
main.appendChild(img);

left.onmouseover = function() {
    left.style.background = 'grey';
};
left.onmouseout = function() {
    left.style.background = 'white';
}

right.onmouseover = function() {
    right.style.background = 'grey';
};
right.onmouseout = function() {
    right.style.background = 'white';
}
for (let i = 0; i < imageList.length; i++) {
    let d = document.createElement('span');
    d.classList.add('d');
    d.setAttribute('id', i);
    d.addEventListener('click', () => {
        img.src = imageList[d.id];
        let m = parseInt(d.id) - 1;
        if (m < 0) {
            m = parseInt(d.id) + 1;
        }
        let v = document.getElementById(m);
        //let p = document.getElementById();
        v.style.background = '#bbb'
        d.style.background = 'black';
    })
    dot.appendChild(d);
}
let d = document.getElementById('0');
d.style.background = 'black';

right.addEventListener("click", () => {
    count += 1;
    if (count >= imageList.length) {
        count = 0;
    }
    //let c = count;
    let d = document.getElementById(count.toString());
    let p = document.getElementById((count - 1).toString());
    p.style.background = '#bbb'
        //alert(c);
    d.style.background = 'black';
    img.src = imageList[count];
});

left.addEventListener('click', () => {
    count -= 1;
    if (count < 0) {
        count = imageList.length - 1;
    }
    let d = document.getElementById(count.toString());
    let p = document.getElementById((count + 1).toString());
    p.style.background = '#bbb'
    d.style.background = 'black';
    img.src = imageList[count];
})