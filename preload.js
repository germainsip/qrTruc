const QRCodeStyling = require("qr-code-styling");
const { ipcRenderer } = require("electron");

let qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  type: "svg",
  data: "https://www.tomoetek.fr",
  image: "https://www.tomoetek.fr/tomotek.png",
  dotsOptions: {
    color: "#6265F1",
    type: "rounded",
  },
  backgroundOptions: {
    color: "#e9ebee",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 10,
  },
});

const persoQrcode = (url) => {
   return new QRCodeStyling({
    width: 300,
    height: 300,
    type: "svg",
    data: `url`,
    image: "https://www.tomoetek.fr/tomotek.png",
    dotsOptions: {
      color: "#6265F1",
      type: "rounded",
    },
    backgroundOptions: {
      color: "#e9ebee",
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 10,
    },
  });
};

//
window.addEventListener("DOMContentLoaded", () => {
  const vignette = document.getElementById("canvas");

  qrCode.append(vignette);

  document.querySelector("#btn1").addEventListener('click', (event) => {
    event.preventDefault();
    // on récupère le chemin
    const  url  = document.querySelector("input").value;
    // on envoie le chemin avec une signature avec ipcRenderer
    console.log(url)
    qrCode.update({data: url})
    //qrCode.append(vignette);
  });
  document.querySelector("#btn2").addEventListener('click', (event) => {
    event.preventDefault();
      qrCode.download({ name: "qr", extension: "png" })
  })
});

//qrCode.download({ name: "qr", extension: "svg" });
