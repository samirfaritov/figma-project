let item;

const today = document.querySelector(".today");

function getItem() {
  item = JSON.parse(localStorage.getItem("today") || "[]");

  let itemHtml = `
            <div class="item">
            <div class="chek"></div>
            <div class="box">
            <b class="buy">Buy S Plaid!</b>
            <p class="title">
            ${item.title}
            </p>
            <p class="day" id="${item.id}">Today</p>
            </div>
            </div>
            `;
  today.insertAdjacentHTML("beforeend", itemHtml);

}

getItem()