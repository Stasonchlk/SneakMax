document.getElementById("applyFilters").addEventListener("click", function() {
    const titleValue = document.getElementById("titleFilter").value.toLowerCase();
    const minPriceValue = parseInt(document.getElementById("minPrice").value);
    const maxPriceValue = parseInt(document.getElementById("maxPrice").value);
    const genderValue = document.getElementById("genderFilter").value;
    const sizeValues = [];
    const checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
    checkboxes.forEach(function(checkbox) {
        if (checkbox.id === "allSizes") {
            sizeValues.push("35", "36", "37", "38", "39", "40", "41", "42");
        } else {
            sizeValues.push(checkbox.value);
        }
        if (checkbox.classList.contains("active")) {
            checkbox.style.background = "#ffffff"
        }
    });
    const products = document.querySelectorAll(".product");
    products.forEach(function(product) {
        const title = product.dataset.title.toLowerCase();
        const price = parseInt(product.dataset.price);
        const gender = product.dataset.gender;
        const size = product.dataset.size;

        if ((title.includes(titleValue) || titleValue === "") &&
            (price >= minPriceValue || isNaN(minPriceValue)) &&
            (price <= maxPriceValue || isNaN(maxPriceValue)) &&
            (gender === genderValue || genderValue === "all") &&
            (sizeValues.includes(size) || sizeValues.length === 0)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});
document.getElementById("resetFilters").addEventListener("click", function() {
    const products = document.querySelectorAll(".product");
    products.forEach(function(product) {
        product.style.display = "block";
    });
});

function active(r) {
    if(r.classList.contains('active')) {
        r.classList.remove("active");
    } else {
        r.classList.add("active");
    }
}
let prince = 0;
let kolJ = 0;
var kolH = document.querySelector(".kol");
var kol1 = document.querySelector('.kol1');
function addToCart(item) {
    var cart = document.getElementById("card");
    var newItem = document.createElement("div");
    var sum = document.querySelector('.sum');
    var mi = item.parentElement.parentElement;
    let num = mi.dataset.price;
    newItem.innerHTML = mi.innerHTML;
    newItem.dataset.price = num;
    cart.appendChild(newItem);
    prince += parseInt(mi.dataset.price);
    sum.textContent = prince;
    kolJ += 1;
    kolH.textContent = kolJ;
    kol1.textContent = kolJ;
}

function delToCart(item) {
    var mi = item.parentElement.parentElement;
    var sum = document.querySelector('.sum');
    mi.style.display = 'none';
    prince -= mi.dataset.price;
    sum.textContent = prince;
    kolJ -= 1;
    kolH.textContent = kolJ;
    kol1.textContent = kolJ;
}


window.onload = function() {
    const phoneInput = document.getElementById('phone');

    phoneInput.addEventListener('input', function(e) {
        let input = e.target.value.replace(/\D/g, ''); // Оставляем только цифры
        let formattedInput = '+7 (' + input.slice(1, 4) + ') ' + input.slice(4, 7) + ' ' + input.slice(7, 9) + ' ' + input.slice(9, 11); // Преобразуем в нужный формат

        e.target.value = formattedInput;
    });
}













