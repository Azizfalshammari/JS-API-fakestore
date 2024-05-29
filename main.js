const url = "https://fakestoreapi.com/products";

fetchData();

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  var list = document.createElement("div");
  document.body.append(list);
  // list.style.display ='flex'
  // list.style.flexWrap = 'wrap'
  // list.style.textAlign = 'center'
  // list.style.justifyContent = 'center'

  list.classList.add("flex-wrap");
  list.classList.add("d-flex");
  list.classList.add("container-fluid");
  list.classList.add("col-12");
  list.classList.add("col-sm-12");
  list.classList.add("gap-1");
  list.classList.add('p-2')
 
  data.forEach((element) => {
    let div = document.createElement("div");
    let title = document.createElement("h3");
    let img = document.createElement("img");
    let price = document.createElement("h3");
    img.src = element.image;
    img.style.objectFit = 'cover'
    img.classList.add("img-fluid");
    title.innerText = element.title;
    price.innerText = element.price;

    div.classList.add("container-fluid");
    div.classList.add("col-12");
    div.classList.add("col-sm-4");
    div.style.border = 'solid black'
    // div.style.width='30vw'

    div.append(title);
    div.append(img);
    list.append(div);
    div.append(price);
  });
}
