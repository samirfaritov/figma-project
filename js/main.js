let arr = [
  { userId: 1, id: 1, title: "delectus aut autem", completed: false, left: 12 },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
    left: 0,
  },
  { userId: 1, id: 3, title: "fugiat veniam minus", completed: false, left: 1 },
  { userId: 1, id: 4, title: "et porro tempora", completed: true, left: 41 },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
    left: 22,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
    left: 21,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
    left: 4,
  },
  {
    userId: 1,
    id: 13,
    title: "et doloremque nulla",
    completed: false,
    left: 3,
  },
  {
    userId: 1,
    id: 14,
    title: "repellendus sunt dolores architecto voluptatum",
    completed: true,
    left: 2,
  },
  {
    userId: 1,
    id: 15,
    title: "ab voluptatum amet voluptas",
    completed: true,
    left: 8,
  },
  {
    userId: 1,
    id: 16,
    title: "accusamus eos facilis sint et aut voluptatem",
    completed: true,
    left: 6,
  },
  {
    userId: 1,
    id: 17,
    title: "quo laboriosam deleniti aut qui",
    completed: true,
    left: 4,
  },
  {
    userId: 1,
    id: 18,
    title: "dolorum est consequatur ea mollitia in culpa",
    completed: false,
    left: 2,
  },
  {
    userId: 1,
    id: 19,
    title: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
    completed: true,
    left: 0,
  },
  {
    userId: 1,
    id: 20,
    title: "ullam nobis libero sapiente ad optio sint",
    completed: true,
    left: 0,
  },
  {
    userId: 2,
    id: 21,
    title: "suscipit repellat esse quibusdam voluptatem incidunt",
    completed: false,
    left: 0,
  },
  {
    userId: 2,
    id: 22,
    title: "distinctio vitae autem nihil ut molestias quo",
    completed: true,
    left: 1,
  },
  {
    userId: 2,
    id: 23,
    title: "et itaque necessitatibus maxime molestiae qui quas velit",
    completed: false,
    left: 1,
  },
  {
    userId: 2,
    id: 24,
    title: "adipisci non ad dicta qui amet quaerat doloribus ea",
    completed: false,
    left: 23,
  },
  {
    userId: 2,
    id: 25,
    title: "voluptas quo tenetur perspiciatis explicabo natus",
    completed: true,
    left: 1,
  },
  { userId: 2, id: 26, title: "aliquam aut quasi", completed: true, left: 26 },
  {
    userId: 2,
    id: 27,
    title: "veritatis pariatur delectus",
    completed: true,
    left: 29,
  },
  {
    userId: 2,
    id: 28,
    title: "nesciunt totam sit blanditiis sit",
    completed: false,
    left: 12,
  },
  {
    userId: 2,
    id: 29,
    title: "laborum aut in quam",
    completed: false,
    left: 6,
  },
  {
    userId: 2,
    id: 30,
    title:
      "nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis",
    completed: true,
    left: 12,
  },
  {
    userId: 2,
    id: 31,
    title: "repudiandae totam in est sint facere fuga",
    completed: false,
    left: 52,
  },
  {
    userId: 2,
    id: 32,
    title: "earum doloribus ea doloremque quis",
    completed: false,
    left: 21,
  },
  { userId: 2, id: 33, title: "sint sit aut vero", completed: false, left: 41 },
  {
    userId: 2,
    id: 34,
    title: "porro aut necessitatibus eaque distinctio",
    completed: false,
    left: 31,
  },
  {
    userId: 2,
    id: 35,
    title: "repellendus veritatis molestias dicta incidunt",
    completed: true,
    left: 1,
  },
];

const today = document.querySelector(".today");
const forr = document.querySelector(".for");
const tomorrow = document.querySelector(".tomorrow");
const tom = document.querySelector(".tom");
const later = document.querySelector(".later");
const lat = document.querySelector(".lat");

function chizish() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].left < 2) {
      let itemHtml = `
            <div class="item">
            <div class="chek"></div>
            <div class="box">
            <b class="buy">Buy S Plaid!</b>
            <p class="title">
            ${arr[i].title}
            </p>
            <p class="day" id="${arr[i].id}">Today</p>
            </div>
            </div>
            `;
      today.insertAdjacentHTML("beforeend", itemHtml);

      const item = document.querySelectorAll(".item");

      forr.innerHTML = item.length;

      let a = arr.filter((item) => item == arr[i]);


      localStorage.setItem("today", JSON.stringify(a));

    }

    if (arr[i].left === 2 || arr[i].left === 3) {
      let itemHtml = `
            <div class="item2">
            <div class="chek"></div>
            <div class="box">
              <b class="buy">Buy S Plaid!</b>
              <p class="title">
                ${arr[i].title}
              </p>
              <p class="day" id="${arr[i].id}">tomorrow</p>
            </div>
          </div>
            `;
      tomorrow.insertAdjacentHTML("beforeend", itemHtml);

      const item2 = document.querySelectorAll(".item2");

      tom.innerHTML = item2.length;
    }

    if (arr[i].left > 3) {
      let itemHtml = `
            <div class="item3">
            <div class="chek"></div>
            <div class="box">
              <b class="buy">Buy S Plaid!</b>
              <p class="title">
                ${arr[i].title}
              </p>
              <p class="day" id="${arr[i].id}">Nov 22</p>
            </div>
          </div>
            `;
      later.insertAdjacentHTML("beforeend", itemHtml);

      const item3 = document.querySelectorAll(".item3");

      lat.innerHTML = item3.length;
    }
  }
  const chek = document.querySelectorAll('.chek')

  for (let i = 0; i < chek.length; i++) {
      chek[i].addEventListener('click', () => {
        active = !active
        if (active) {
            chek[i].style.backgroundColor = '#FFC700'   
        } else {
            chek[i].style.backgroundColor = '#f0f0f0'   
        }
      })

      let active = false
  }
}


chizish();
