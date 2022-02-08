
let productСards = [
    {
        id: "wrapper",
        img: "images/im.jpg",
        title: "Eguilibrium #3429",
        description: "Our Eguilibrim collection promotes balace and colm.",
        icon: "images/icon-ethereum.svg",
        price: "0.041 ETH",
        clockIcon: "images/icon-clock.svg",
        clock: "3 days left",
        avatar: "images/image-avatar.png",
        creation: "Creation of",
        name: "Jules Wyvern",
    }
];


window.addEventListener("load", function () {
    card(productСards);
});



function card(productСards) {
    let arr = productСards.map(function (item) {

        const div = document.createElement("div");
        const inner = document.createElement("div");
        const container = document.createElement("div");
        const mainPhoto = document.createElement("img");
        const cardTitle = document.createElement("h3");
        const cardInf = document.createElement("p");
        const cardInform = document.createElement("div");
        const cardInformImg = document.createElement("img");
        const cardInformImgParag = document.createElement("p");
        const cardInformClock = document.createElement("img");
        const cardInformParag = document.createElement("p");

        const linia = document.createElement("div");

        const footer = document.createElement("div");
        const cardFooter = document.createElement("img");
        const cardFooterParag = document.createElement("p");
        const cardFooterJules = document.createElement("p");
        const body = document.body;
        body.append(div);
        div.id = "wrapper";
        body.style.background = "#0d1a2d";

        div.append(inner);
        inner.style.cssText = `
             width: 1440px;
             height: 100%;
             margin: 0 auto;
             padding: 0;
             float: left;
             `;

        inner.append(container);
        container.style.cssText = `
             width: 340px;
             margin: 0 auto;
             padding: 25px;
             background: #15273f;
             border-radius: 10px;
             text-align: center;
             font-weight: bold;
             font-size: 18px;
        `

        container.append(mainPhoto);
        mainPhoto.src = item.img;
        mainPhoto.style.width = "100%";
        mainPhoto.style.padding = "0px";
        mainPhoto.style.borderRadius = "10px";

        container.append(cardTitle);
        cardTitle.innerHTML = item.title;
        cardTitle.style.cssText = `
             color: #fff;
             font-weight: 600;
             text-align: left;
            `;

        container.append(cardInf);
        cardInf.innerHTML = item.description;
        cardInf.style.textAlign = "left";
        cardInf.style.color = "#9bb1d6";
        cardInf.style.fontWeight = "300";
        cardInf.style.margin = "left";
        cardInf.style.width = "280px";


        container.append(cardInform);
        cardInform.append(cardInformImg);
        cardInform.append(cardInformImgParag);
        cardInform.append(cardInformClock);
        cardInform.append(cardInformParag);
        cardInformImg.src = item.icon;
        cardInformImgParag.textContent = item.price;
        cardInformClock.src = item.clockIcon;
        cardInformParag.textContent = item.clock;

        cardInform.style.display = "flex";
        cardInform.style.justifyContent = "space-between";
        cardInform.style.alignItems = "center";

        cardInformImg.style.width = "15px";
        cardInformImg.style.height = "20px";

        cardInformImgParag.style.color = "#43dae1";
        cardInformImgParag.style.marginLeft = "-110px";

        cardInformClock.style.width = "20px";
        cardInformClock.style.height = "20px";
        cardInformClock.style.marginRight = "-110px";

        cardInformParag.style.color = "#9bb1d6";

        container.append(linia);
        linia.style.width = "340px";
        linia.style.height = "1px";
        linia.style.borderRadius = "1px";
        linia.style.background = "#9bb1d6";

        container.append(footer);
        footer.append(cardFooter);
        footer.append(cardFooterParag);
        footer.append(cardFooterJules);

        footer.style.display = "flex";
        footer.style.marginTop = "20px";
        footer.style.alignItems = "center";
        footer.style.fontWeight = "300";


        cardFooter.src = "images/image-avatar.png";
        cardFooter.style.width = "40px";
        cardFooter.style.height = "40px";
        cardFooter.style.border = "2px  solid #fff";
        cardFooter.style.borderRadius = "50px";



        cardFooterParag.textContent = "Creation of";
        cardFooterParag.style.color = "#43dae1";
        cardFooterParag.style.marginLeft = "25px";

        cardFooterJules.textContent = "Jules Wyvern";
        cardFooterJules.style.color = "#fff";
        cardFooterJules.style.marginLeft = "10px";

        console.log(wrapper);
        alert("Я оцениваю свою работу на 90 баллов");
    })
    a.innerHTML = arr;
}





