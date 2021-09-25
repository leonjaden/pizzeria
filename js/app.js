let shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle("active");
}

window.onscroll = () => {
  shoppingCart.classList.remove("active");
}

const totalOrder = [];
const orderSummary = $("#order-summary");
const tot = $("#total-price");

const prices = {
    small : 500,
    medium: 700,
    large: 1200
}
let total = 0;


$("form").submit(function(event){
    event.preventDefault()
    const fd = new FormData(this);   
    const orderLine = {
        type: fd.get("type"),
        flavour : fd.get("flavour"),
        size : fd.get("size"),
        qty: fd.get("qty"),
        toppings: fd.getAll("toppings"),
        cost: prices[fd.get("size")]
    }
    total += parseFloat(prices[fd.get("size")])
    totalOrder.push(orderLine)
    orderSummary.append(`
        <tr>
            <td>${orderLine.type}</td>
            <td>${orderLine.flavour}</td>
            <td>${orderLine.size}</td>
            <td>${orderLine.qty}</td>
            <td>${orderLine.toppings.join()}</td>
            <td>${orderLine.cost}</td>
            <td><button class='btn-remove'>Remove</button></td>
        </tr>
    `);
    tot.html(`<strong>KSH${total}</strong>`);
  });

$("#tbl").on('click', '.btn-remove', function () {
    $(this).closest('tr').remove();
});

$('#checkout').on('click', () => {
    if (total === 0) {
        return alert('Choose your Pizza')
    } else {
    prompt("enter your physical address");
    alert("Your pizza will be delivered to you within 1 hour. Delivery charge is 300kshs/-");
    }
})