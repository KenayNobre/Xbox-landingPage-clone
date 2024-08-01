/*animações*/

const menuDeCompra = document.querySelector(".menuDeCompra");
const menuDeCompraContent = document.querySelector(".menuDeCompra-content");
const chevronDown = document.querySelector(".fa-chevron-down");

const buyNowButton = document.querySelector(".buyNow-button");
const buyNowButtonContent = document.querySelector(".buyNow-button-content");
const chevronRight = document.querySelector(".fa-chevron-right");

const buyNowButtonBanner = document.querySelector(".buyNow-button-banner");
const buyNowButtonContentBanner = document.querySelector(".buyNow-button-content-banner");
const chevronRightBanner = document.querySelector(".fa-chevron-right-banner");

const buyNowButtonMobile = document.querySelector(".buyNow-button-mobile");
const buyNowButtonContentMobile = document.querySelector(".buyNow-button-content-mobile");
const chevronRightMobile = document.querySelector(".fa-chevron-right-mobile");


menuDeCompra.addEventListener("mouseover", () => {
    menuDeCompra.style.color = "var(--color-verde)";
    menuDeCompraContent.style.textDecoration = "underline";
    chevronDown.style.color = "white";
});

menuDeCompra.addEventListener("mouseout", () => {
    menuDeCompra.style.color = "white";
    menuDeCompraContent.style.textDecoration = "none";
    chevronDown.style.color = "rgb(180, 180, 180)";
});

buyNowButton.addEventListener("mouseover", () => {
    chevronRight.style.marginLeft = "13px"
    buyNowButtonContent.style.borderBottom = "2px solid"
});

buyNowButton.addEventListener("mouseout", () => {
    chevronRight.style.marginLeft = "0px"
    buyNowButtonContent.style.borderBottom = "none"
});

buyNowButtonBanner.addEventListener("mouseover", () => {
    chevronRightBanner.style.marginLeft = "13px"
    buyNowButtonContentBanner.style.borderBottom = "2px solid"
});

buyNowButtonBanner.addEventListener("mouseout", () => {
    chevronRightBanner.style.marginLeft = "0px"
    buyNowButtonContentBanner.style.borderBottom = "none"
});

buyNowButtonMobile.addEventListener("mouseover", () => {
    chevronRightMobile.style.marginLeft = "13px"
    buyNowButtonContentMobile.style.borderBottom = "2px solid"
});

buyNowButtonMobile.addEventListener("mouseout", () => {
    chevronRightMobile.style.marginLeft = "0px"
    buyNowButtonContentMobile.style.borderBottom = "none"
});


/*FIM-ANIMAÇÕES*/

/*FUNCIONALIDADES*/

const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");

const bannerPrice = document.querySelector(".banner-price");
const headerPrice = document.querySelector(".price");

const imagem = document.querySelector(".imagem-xbox");
const banner = document.querySelector(".banner");

const item1 = document.querySelector(".list-item1");
const item2 = document.querySelector(".list-item2");
const item3 = document.querySelector(".list-item3");

function XBOX1() {
    button1.style.borderColor = "var(--color-verde)";
    button2.style.borderColor = "white";
    button3.style.borderColor = "white";
    bannerPrice.innerHTML = "<del>US$ 499,99</del> $ 487,99";
    headerPrice.innerHTML = "$ 487,99";
    menuDeCompraContent.innerHTML = "Unidade de disco de 1 TB Carbon Black";

    imagem.src = "https://assets.xboxservices.com/assets/bc/40/bc40fdf3-85a6-4c36-af92-dca2d36fc7e5.png?n=642227_Hero-Gallery-0_A1_857x676.png";

    banner.style.backgroundImage = "url(https://assets.xboxservices.com/assets/d8/36/d83647e8-269a-47b0-a992-e7ab2fd42d00.jpg?n=642227_Hero-Background-Image-1400_Light-BG_1920x1250.jpg)";

    item1.style.borderColor = "var(--color-verde)";
    item2.style.borderColor = "transparent";
    item3.style.borderColor = "transparent";

    item1.style.color = "var(--color-verde)";
    item2.style.color = "white";
    item3.style.color = "white";

    item1.style.textDecoration = "underline";
    item2.style.textDecoration = "none";
    item3.style.textDecoration = "none";
}

function XBOX2() {
    button2.style.borderColor = "var(--color-verde)";
    button1.style.borderColor = "white";
    button3.style.borderColor = "white";
    bannerPrice.innerHTML = "Disponível feriado 2024<br>$ 449,99";
    headerPrice.innerHTML = "$ 449,99";
    menuDeCompraContent.innerHTML = "Robô totalmente digital de 1 TB branco";

    imagem.src = "https://assets.xboxservices.com/assets/5c/5b/5c5bf348-d948-4c48-b7cc-55aaf94f2782.png?n=642227_Hero-Gallery-0_B1_857x676.png";

    banner.style.backgroundImage = "url(https://assets.xboxservices.com/assets/fb/7c/fb7c9d40-3cec-4fad-84d8-66414cf1fc9c.jpg?n=642227_Hero-Background-Image-1400_Dark-BG_1920x1250.jpg";

    item2.style.borderColor = "var(--color-verde)";
    item1.style.borderColor = "transparent";
    item3.style.borderColor = "transparent";

    item2.style.color = "var(--color-verde)";
    item1.style.color = "white";
    item3.style.color = "white";

    item2.style.textDecoration = "underline";
    item1.style.textDecoration = "none";
    item3.style.textDecoration = "none";
}

function XBOX3() {
    button3.style.borderColor = "var(--color-verde)";
    button2.style.borderColor = "white";
    button1.style.borderColor = "white";
    bannerPrice.innerHTML = "Disponível feriado 2024<br>$ 599,99";
    headerPrice.innerHTML = "$ 599,99";
    menuDeCompraContent.innerHTML = "Unidade de disco de 2 TB Galaxy Black";

    imagem.src = "https://assets.xboxservices.com/assets/37/d2/37d211d0-5c2c-42c6-bb71-ca7492c5e088.png?n=642227_Hero-Gallery-0_C1_857x676.png";

    banner.style.backgroundImage = "url(https://assets.xboxservices.com/assets/d8/36/d83647e8-269a-47b0-a992-e7ab2fd42d00.jpg?n=642227_Hero-Background-Image-1400_Light-BG_1920x1250.jpg)";

    item3.style.borderColor = "var(--color-verde)";
    item1.style.borderColor = "transparent";
    item2.style.borderColor = "transparent";

    item3.style.color = "var(--color-verde)";
    item2.style.color = "white";
    item1.style.color = "white";

    item3.style.textDecoration = "underline";
    item2.style.textDecoration = "none";
    item1.style.textDecoration = "none";
}

button1.addEventListener("click", XBOX1);

button2.addEventListener("click", XBOX2);

button3.addEventListener("click", XBOX3);

/*FIM-FUNCIONALIDADES*/

/*MENU*/
const menu = document.querySelector(".menu");
let active = false;

menuDeCompra.addEventListener("click", () => {
    if (active) {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
    active = !active
});

item1.addEventListener("click", XBOX1);

item2.addEventListener("click", XBOX2);

item3.addEventListener("click", XBOX3);

/*FIM-MENU*/

const logo = document.querySelector(".logo");
const mobileNav = document.querySelector(".mobile-nav");
const chevronFDP = document.querySelector(".mobile")
let active2 = false;

if (innerWidth<= 1350){
    logo.addEventListener("click", () => {
    if(active2){
        mobileNav.style.display = "none";
    }else{

        mobileNav.style.display = "block" ;
    }
    active2 = !active2;
    });
}else{
    chevronFDP.style.display = "none";
    logo.removeEventListener("click");
}

