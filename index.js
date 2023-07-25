const slider_block = document.querySelector('.slider_block');
const slider = document.querySelector('.slider');
const blur = document.querySelector('.blur');
const pagin = document.querySelector('.pagin');
const pagin_2 = document.querySelector('.pagin_2');
const themes = document.querySelector('.themes');
const body = document.querySelector('body');
const title = document.querySelector('title');

let pagin_count;

data_img = [
    './img/horizon-forbidden-west-secondary-keyart-3840x2160-desktop-en-04feb22.jpg',
    './img/playstation-wallpapers_ghost-of-tsushima-keyart-4K-01-ps4-26jun20-en-us.png',
    './img/Stray-5-de-2400x1350-11jul22.jpg',
    './img/the-last-of-us-part-ii-outbreak-day-2018-wallpaper-ipad-pro-image-block-01-ps4-us-04oct19.jpg',
];



function class_add(e, className) {
    e.classList.add(className)
}

function class_reemuve(e, className) {
    e.classList = className;
}

function img_set(e) {
    slider.style.cssText = `
    background:url(${e});  
    background-size: cover;
    transition: all 0.5s;`


    blur.style.cssText = `
        background:url(${e});  
        background-size: cover;
        filter: blur(5px);
        transition: all 0.8s;`


}

img_set(data_img[0]);

let reemuve_img;

for (let i = 1; i <= data_img.length; i++) {
    pagin.innerHTML += `<button class="pagin_btn " id=${i}>${i}</button>`;
    const pagin_btn = document.querySelectorAll('.pagin_btn');
    class_add(pagin_btn[0], 'btn_active');
    pagin_btn.forEach(item => item.addEventListener('click', (e) => {

        pagin_btn.forEach(item => {
            class_reemuve(item, 'pagin_btn')
        })
        reemuve_img = +e.target.id - 1;

        img_set(data_img[reemuve_img]);


        class_add(e.target, 'btn_active')
        pagin_2_text.innerHTML = reemuve_img+1;

    }))
}

pagin_2.innerHTML = `
        <div class="pagin_2_cont">
            <button class="btn_down">${"<"}</button>
            <div class="pagin_2_text"></div>
            <button class="btn_up">${">"}</button>
        </div>
        `
const btn_down = document.querySelector('.btn_down');
const btn_up = document.querySelector('.btn_up');
const pagin_2_text = document.querySelector('.pagin_2_text');
const pagin_btn = document.querySelectorAll('.pagin_btn');
reemuve_img = 0;
pagin_2_text.innerHTML = 1;

function down() {
    if (reemuve_img > 0 && reemuve_img != 0) {
        reemuve_img--;
    } else {
        reemuve_img = data_img.length - 1
    }

    img_set(data_img[reemuve_img]);

    pagin_2_text.innerHTML = reemuve_img + 1;

    pagin_btn.forEach(item => {
        class_reemuve(item, 'pagin_btn')
        if (item.id == reemuve_img + 1) {
            class_add(item, 'btn_active')
        }
    })
}

function up() {
    if (reemuve_img < data_img.length - 1) {
        reemuve_img++;



    } else {
        reemuve_img = 0;
    }

    img_set(data_img[reemuve_img]);
    pagin_2_text.innerHTML = reemuve_img + 1;
    pagin_btn.forEach(item => {
        class_reemuve(item, 'pagin_btn')
        if (item.id == reemuve_img + 1) {
            class_add(item, 'btn_active')
        }
    })
}

btn_down.addEventListener('click', down)

btn_up.addEventListener('click', up)

document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowRight") {
        up();
    }
    if (e.key === "ArrowLeft") {
        down();
    }
})

themes.innerHTML= "Black";
themes.addEventListener('click', (e) => {

    e.target.classList.toggle('white_theme')
    body.classList.toggle('black_theme')
    title.classList.toggle('black_theme')

    e.target.classList.contains('white_theme')? themes.innerHTML= "White" : themes.innerHTML= "Black";



    console.log(body)
});