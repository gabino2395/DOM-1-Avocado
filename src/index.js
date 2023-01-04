/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo";
const base_url = "https://platzi-avo.vercel.app";
const appNode = document.querySelector("#appNode");

//Usando la api de internacionalizacion para poder cambiar el tipo de cambios $ segun pais
const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "GBP",
  }).format(price);
  return newPrice;
};

//using async await
async function fetchDat() {
  const response = await fetch(url),
    data = await response.json();
  console.log(data);
}
fetchDat();
//using just promise

window
  .fetch(`${base_url}/api/avo`)
  .then((respuesta) => respuesta.json())
  .then((resp) => {
    const allItems = [];
    resp.data.forEach((item) => {
      const image = document.createElement("img");
      image.src = `${base_url}${item.image}`;
      const title = document.createElement("h2");
      title.textContent = item.name;
      const price = document.createElement("div");
      price.textContent = formatPrice(item.price);
      const container = document.createElement("div");
      container.append(image, title, price);

      allItems.push(container);
    });

    appNode.append(...allItems);
  });
