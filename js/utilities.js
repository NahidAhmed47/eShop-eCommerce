// discover products data set
const setDiscoverProduct = () => {
  const container = document.getElementById("discover-products-container");
  productData.discoverProducts.forEach((product) => {
    console.log(product );
    const div = document.createElement("div");
    div.classList.add( "card", "bg-base-100", "shadow-xl", "hover:scale-[1.03]", "transfrom-origin", "duration-300", "rounded" );
    div.innerHTML = `
    <figure><img class="rounded w-full h-[145px]" src="${product.image}" alt="Shoes" /></figure>
            <div class="card-body p-3 md:p-5">
              <h2 class="card-title text-base md:text-lg">${product.name}<div class="badge badge-primary text-[10px]">NEW</div>
              </h2>
              <div class="flex gap-[1px] md:gap-[2px]">
                <img class="w-3 md:w-4" src="icons/star-solid (1).svg" alt="">
                <img class="w-3 md:w-4" src="icons/star-solid (1).svg" alt="">
                <img class="w-3 md:w-4" src="icons/star-solid (1).svg" alt="">
                <img class="w-3 md:w-4" src="icons/star-solid (1).svg" alt="">
                <img class="w-3 md:w-4" src="${product.ratingImg}" alt="">
                <span class="text-yellow-500 text-xs md:text-sm sm:ml-1">(${product.rating})</span>
              </div>
              <p class="text-base md:text-xl font-semibold  text-[#D9461A]"><del class="font-medium text-base text-slate-500">$${product.oldPrice}</del>  $${product.newPrice}</p>
              <div class="flex items-center justify-between">
                <p class="text-xs md:text-sm font-semibold text-primary">${product.stock}</p>
                <button class="px-2 py-1 bg-[#D9461A] font-semibold text-xs font-sans text-white rounded hover:scale-[1.2] transfrom-origin duration-300 hover:bg-primary">Add Cart</button>
              </div>
            </div>
    `;
    container.appendChild(div);
  });
};
