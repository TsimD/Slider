const slider_block = document.querySelector('.slider_block');
const slider = document.querySelector('.slider');
const blur = document.querySelector('.blur');
const pagin = document.querySelector('.pagin');

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
        reemuve_img = data_img[+e.target.id - 1];
        // console.log(e.target.id);

        img_set(reemuve_img);


        class_add(e.target, 'btn_active')

        // console.log(e);
    }))
}




console.dir(slider_block)