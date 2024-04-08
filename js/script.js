const modalFunc = () => {
  const busketOrder = document.querySelector("#busket");
  const modalWindow = document.querySelector(".cart-model__overlay");

  const openModal = () => {
    modalWindow.classList.add("open");
  };

  const closeModal = () => {
    modalWindow.classList.remove("open");
  };

  busketOrder.addEventListener("click", () => {
    openModal();
  });

  modalWindow.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("cart-model__overlay") ||
      event.target.closest(".cart-modal__close")
    ) {
      closeModal();
    }
  });
};

const restsFunc = () => {
  const container = document.querySelector("#rests-container");

  const restArray = [
    {
      id: 0,
      title: "Пицца плюс",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "pizza-plus.jpg",
    },
    {
      id: 1,
      title: "Тануки",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "pizza-tanuki.jpg",
    },
    {
      id: 2,
      title: "FoodBand",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "pizza-foodband.jpg",
    },
    {
      id: 3,
      title: "Жадина-пицца",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "pizza-jadina.jpg",
    },
    {
      id: 4,
      title: "Точка еды",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "pizza-dot.jpg",
    },
    {
      id: 5,
      title: "PizzaBurger",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "pizza-burger.jpg",
    },
  ];

  const loading = () => {
    container.innerHTML =
      '<p style="width: 100%; text-align: center;">Загрузка</p>';
  };

  const renderRests = (array) => {
    container.innerHTML = "";
    array.forEach((card) => {
      container.insertAdjacentHTML(
        "afterbegin",
        `
     <a href="./goods.html?id=${card.id}" class="product-card">
     <div class="product-card__image">
       <img src="./img/rests/${card.image}" alt="${card.image}">
     </div>
     <div class="product-card__description">
       <div class="product-card__description-row">
         <h4 class="product-card__title">
         ${card.title}
         </h4>
         <div class="product-card__badge">${card.time} мин</div>
       </div>
       <div class="product-card__description-row">
         <div class="product-card__description-info">
           <div class="product-card__description-info product-card__description-info_raiting">
             <img src="./img/icons/star.svg" alt="star">
             ${card.rating}
           </div>
           <div class="product-card__description-info product-card__description-info_price">
             от ${card.price} ₽
           </div>
           <div class="product-card__description-info product-card__description-info_group">
             ${card.type}
           </div>
         </div>
       </div>
     </div>
   </a>
     `
      );
    });
  };

  if (container) {
    loading();
    setTimeout(() => {
      renderRests(restArray);
    }, 1000);
  }

  //Goods page
  const containerGoods = document.querySelector("#container-goods");

  const goodsArray = [
    {
      id: 0,
      image: "goods-1.jpg",
      title: "Ролл угорь стандарт",
      descr: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
      price: "250",
    },
    {
      id: 1,
      image: "goods-2.jpg",
      title: "Калифорния лосось",
      descr:
        "Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.",
      price: "395",
    },
    {
      id: 2,
      image: "goods-3.jpg",
      title: "Окинава стандарт",
      descr: "Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...",
      price: "250",
    },
    {
      id: 3,
      image: "goods-4.jpg",
      title: "Цезарь маки хl",
      descr:
        "Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...",
      price: "250",
    },
    {
      id: 4,
      image: "goods-5.jpg",
      title: "Ясай маки стандарт 185 г",
      descr: "Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг",
      price: "250",
    },
    {
      id: 5,
      image: "goods-6.jpg",
      title: "Ролл с креветкой стандарт",
      descr: "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы",
      price: "250",
    },
  ];

  const loadingGoods = () => {
    containerGoods.innerHTML =
      '<p style="width: 100%; text-align: center;">Загрузка</p>';
  };

  const renderGoods = (array) => {
    containerGoods.innerHTML = "";
    array.forEach((goods) => {
      containerGoods.insertAdjacentHTML(
        "afterbegin",
        `<div class="product-card">
      <div class="product-card__image">
        <img src="./img/goods/${goods.image}" alt="${goods.image}">
      </div>
      <div class="product-card__description">
        <div class="product-card__description-row">
          <h5 class="product-card__description-name">${goods.title}</h5>
        </div>
        <div class="product-card__description-row">
          <p class="product-card__description-text">${goods.descr}</p>
        </div>
        <div class="product-card__description-row">
          <div class="product-card__description-controls description-controls">
            <button class="btn btn-primary">
              В корзину
              <img src="./img/icons/shopping-cart-white.svg" alt="shopping-cart-white">
            </button>
            <span class="description-controls description-controls_price">${goods.price} ₽</span>
          </div>
        </div>
      </div>
    </div>`
      );
    });
  };

  if (containerGoods) {
    loadingGoods();
    setTimeout(() => {
      renderGoods(goodsArray);
    }, 1000);
  }
};

modalFunc();
restsFunc();
