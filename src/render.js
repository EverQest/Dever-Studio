const container = document.querySelector('.flex_direction');
var page_categoty = container.dataset.page;

//Рендер для футболок
function render_ts(Array, Wrapper) {
  let contentStr = ' ';

  Array.forEach(function (prod) {
    contentStr += ` 
    <div class="card_hover">
    <div class="card">
      <div class="price_container">
        <span class="left_side"></span>
        <span class="price">${prod.price.ts}</span>
        <span class="right_side"></span>
      </div>
      <div class="img_card">
        <img src="${prod.img.img_ts}" alt="${prod.img_alt}" />
      </div>
      <div class="card_name">${prod.Name}</div>
    </div>
  </div>
    `;
  });

  Wrapper.innerHTML = contentStr;
}

//Рендер для худи
function render_hoodie(Array, Wrapper) {
  let contentStr = ' ';

  Array.forEach(function (prod) {
    contentStr += ` 
    <div class="card_hover">
    <div class="card">
      <div class="price_container">
        <span class="left_side"></span>
        <span class="price">${prod.price.hoodie}</span>
        <span class="right_side"></span>
      </div>
      <div class="img_card">
        <img src="${prod.img.img_hoodie}" alt="${prod.img_alt}" />
      </div>
      <div class="card_name">${prod.Name}</div>
    </div>
  </div>
    `;
  });

  Wrapper.innerHTML = contentStr;
}





if (page_categoty == "ts") {render_ts(prod_list, container); }
else if (page_categoty == "hoodie") {render_hoodie(prod_list, container);}