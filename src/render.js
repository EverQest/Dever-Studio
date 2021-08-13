const container = document.querySelector('.flex_direction');
console.log(prod_list);
function render(Array, Wrapper) {
  let contentStr = ' ';

  Array.forEach(function (prod) {
    contentStr += ` 
    <div class="card_hover">
    <div class="card">
      <div class="price_container">
        <span class="left_side"></span>
        <span class="price">${prod.price}</span>
        <span class="right_side"></span>
      </div>
      <div class="img_card">
        <img src="${prod.Img_url}" alt="${prod.Img_alt}" />
      </div>
      <div class="card_name">${prod.Name}</div>
    </div>
  </div>
    `;
  });

  Wrapper.innerHTML = contentStr;
}


render(prod_list, container);