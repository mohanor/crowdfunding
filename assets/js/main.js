const close = document.getElementById('close');
const hamburger = document.getElementById('hamburger');
const section_0 = document.getElementById('section_0');
const bookmark = document.getElementById('bookmark');
const model = document.getElementById('model');
const closemodal = document.getElementById('closemodal');
const thanks = document.getElementById('thanks');
const gotit = document.getElementById('gotit');

const cont = document.getElementsByClassName("cont");
const check = document.getElementsByClassName("check");
const parentOfShow = document.getElementsByClassName('parentOfShow');
const show = document.getElementsByClassName('show');
const parentbox = document.getElementsByClassName('parentbox');
const reward = document.getElementsByClassName('reward');
console.log(reward)
const html = document.documentElement;

hamburger.addEventListener('click', () => {
    section_0.style.display = 'block';
})

close.addEventListener('click', () => {
    section_0.style.display = 'none';
})

bookmark.addEventListener('click', () => {
    html.style.overflow = 'hidden';
    model.style.display = 'block';
})

closemodal.addEventListener('click', () => {
    html.style.overflow = 'auto';
    model.style.display = 'none';
})

for (let i = 0; i < parentOfShow.length; i++) {
    parentOfShow[i].addEventListener('click', () => {
        if (show[i].style.display == 'none') {
            check[i].checked = true;
            show[i].style.display = 'block';
            parentbox[i].style.border = '2px solid hsl(0deg 4% 86%';
        } else {
            check[i].checked = false;
            show[i].style.display = 'none';
            parentbox[i].style.border = '1px solid hsl(0deg 4% 86%)';
        }
    })
}

for (let i = 0; i < cont.length; i++) {
    cont[i].addEventListener('click', () => {
        model.style.display = 'none';
        thanks.style.display = 'block';
    })
}

gotit.addEventListener('click', () => {
    thanks.style.display = 'none';
    html.style.overflow = 'auto';
})

for (let i = 0; i < reward.length; i++) {
    reward[i].addEventListener('click', () => {
        model.style.display = 'block';
        check[i].checked = true;
        show[i].style.display = 'block';
        parentbox[i].style.border = '2px solid hsl(0deg 4% 86%';
        console.log('hello')
    })
}