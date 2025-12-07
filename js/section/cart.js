const electonik = [
  {
    // airpods
    star: 4.5,
    oldPrice: 240000,
    get newPrice() {
      return this.oldPrice - this.discount_count
    },
    discount: 60,
    discount_count: 191050,
    name: 'airpods black',
    fullname: "Беспроводные наушники Pods Pro, для iPhone и Android, сенсорные",
    IMG: {
      img_1: 'https://images.uzum.uz/d13s2r0n274lpu38oks0/original.jpg 1x, https://images.uzum.uz/d13s2r0n274lpu38oks0/original.jpg 2x',
      img_2: 'https://images.uzum.uz/csh454lpq3ghb2qltg50/original.jpg 1x, https://images.uzum.uz/csh454lpq3ghb2qltg50/original.jpg 2x',
      img_3: 'https://images.uzum.uz/csh455rvgbkl7nommcrg/original.jpg 1x, https://images.uzum.uz/csh455rvgbkl7nommcrg/original.jpg 2x',
    }
  },
  {
    // chexol
    star: 5,
    oldPrice: 50000,
    get newPrice() {
      return this.oldPrice - this.discount_count
    },
    discount: 35,
    discount_count: 30500,
    name: 'chexol',
    fullname: "Прозрачный чехол Magsafe для iPhone",
    IMG: {
      img_1: "https://images.uzum.uz/cv3ei7ui4n36ls3t081g/original.jpg 1x, https://images.uzum.uz/cv3ei7ui4n36ls3t081g/original.jpg 2x",
      img_2: "https://images.uzum.uz/cv3ei7tpb7f9qcnfme50/original.jpg 1x, https://images.uzum.uz/cv3ei7tpb7f9qcnfme50/original.jpg 2x",
      img_3: "https://images.uzum.uz/cv3ei83vgbkm5ehi3po0/original.jpg 1x, https://images.uzum.uz/cv3ei83vgbkm5ehi3po0/original.jpg 2x",
    }
  },
  {
    // type-c sim
    star: 4.5,
    oldPrice: 14602,
    get newPrice() {
      return this.oldPrice - this.discount_count
    },
    discount: 5,
    discount_count: 5000,
    name: 'type-c',
    fullname: "Кабель для зарядного устройства 120W, USB - Type-C, тканевая поверхность",
    IMG: {
      img_1: 'https://images.uzum.uz/d44d7kuj76ovvevcg4b0/original.jpg 1x, https://images.uzum.uz/d44d7kuj76ovvevcg4b0/original.jpg 2x',
      img_3: 'https://images.uzum.uz/d444cbtv2sjo4rvg67i0/original.jpg 1x, https://images.uzum.uz/d444cbtv2sjo4rvg67i0/original.jpg 2x',
      img_2: 'https://images.uzum.uz/d44d7kuj76ovvevcg4b0/original.jpg',
    }
  },
  {
    // zashita kamera
    star: 5,
    oldPrice: 18424,
    get newPrice() {
      return this.oldPrice - this.discount_count
    },
    discount: 8,
    discount_count: 8000,
    name: 'Kamera himoyasi',
    fullname: "Kamera uchun himoya:Защита камеры для iPhone",
    IMG: {
      img_1: "https://images.uzum.uz/d43hj65v2sjj05ospmp0/original.jpg 1x, https://images.uzum.uz/d43hj65v2sjj05ospmp0/original.jpg 2x",
      img_2: "https://images.uzum.uz/d43hjcdv2sjj05ospmrg/original.jpg 1x, https://images.uzum.uz/d43hjcdv2sjj05ospmrg/original.jpg 2x",
      img_3: "https://images.uzum.uz/co3gbntlqsilsr3lho9g/original.jpg 1x, https://images.uzum.uz/co3gbntlqsilsr3lho9g/original.jpg 2x"
    }
  },
  {
    // yopishqoq chexol ushlagich
    star: 5,
    oldPrice: 28325,
    get newPrice() {
      return this.oldPrice - this.discount_count
    },
    discount: 20,
    discount_count: 20000,
    name: 'lipper',
    fullname: "Липпер - держатель для телефона, наклейка-присоска, липучка для телефона",
    IMG: {
      img_1: "https://images.uzum.uz/cv2rh0ui4n36ls3sr2rg/original.jpg 1x, https://images.uzum.uz/cv2rh0ui4n36ls3sr2rg/original.jpg 2x",
      img_2: "https://images.uzum.uz/cusmhfmi4n36ls3r4il0/original.jpg 1x, https://images.uzum.uz/cusmhfmi4n36ls3r4il0/original.jpg 2x",
      img_3: "https://images.uzum.uz/cv2s1oui4n36ls3sr6p0/original.jpg 1x, https://images.uzum.uz/cv2s1oui4n36ls3sr6p0/original.jpg 2x"
    }
  },
  {
    // telefon ushidigan
    star: 5,
    oldPrice: 37259,
    get newPrice() {
      return this.oldPrice - this.discount_count
    },
    discount: 20,
    discount_count: 20000,
    name: 'selfi tayoqcha',
    fullname: 'Селфи палка 3 в 1 со штативом и Bluetooth пультом, монопод-трипод для телефона',
    IMG: {
      img_1: 'https://images.uzum.uz/cuvmk5tpb7f9qcnem3u0/original.jpg 1x, https://images.uzum.uz/cuvmk5tpb7f9qcnem3u0/original.jpg 2x',
      img_2: "https://images.uzum.uz/cuvmk0bvgbkm5ehh3jjg/original.jpg",
      img_3: "https://images.uzum.uz/d28qqpb4eu2ndi3rkj20/original.jpg"
    }
  },
  {
    // smart witch
    star: 4.2,
    oldPrice: 65815,
    get newPrice() {
      return this.oldPrice - this.discount_count
    },
    discount: 20,
    discount_count: 20000,
    name: 'smart witch',
    fullname: 'Aqlli soatlar Smart Watch Big T800 Pro Max, Android va iOS uchun, 45 mm, Новые умные часы Aqlli Big T800 Pro Max, Android и iOS, 45 мм',
    IMG: {
      img_1: 'https://images.uzum.uz/csj5uib4nkdv7h9itqd0/original.jpg 1x, https://images.uzum.uz/csj5uib4nkdv7h9itqd0/original.jpg 2x',
      img_2: 'https://images.uzum.uz/cspluk5pq3ggq63csrv0/original.jpg 1x, https://images.uzum.uz/cspluk5pq3ggq63csrv0/original.jpg 2x',
      img_3: 'https://images.uzum.uz/csj5uibvgbkipf220e80/original.jpg 1x, https://images.uzum.uz/csj5uibvgbkipf220e80/original.jpg 2x',
    }
  },
  {
    // fleshka
    star: 4.2,
    oldPrice: 50000,
    get newPrice() {
      return this.oldPrice - this.discount_count
    },
    discount: 36,
    discount_count: 13838,
    name: 'fleshka',
    fullname: 'Aqlli soatlar Smart Watch Big T800 Pro Max, Android va iOS uchun, 45 mm, Новые умные часы Aqlli Big T800 Pro Max, Android и iOS, 45 мм',
    IMG: {
      img_1: "https://images.uzum.uz/cq2223b5qt1gj8ddrehg/original.jpg 1x, https://images.uzum.uz/cq2223b5qt1gj8ddrehg/original.jpg 2x",
      img_2: 'https://images.uzum.uz/d1im6s8jsv1jqvb7hdhg/original.jpg 1x, https://images.uzum.uz/d1im6s8jsv1jqvb7hdhg/original.jpg 2x',
      img_3: "https://images.uzum.uz/cq221fgsarnfdo9a76fg/original.jpg 1x, https://images.uzum.uz/cq221fgsarnfdo9a76fg/original.jpg 2x"
    }
  },
  {
    // Stend for LAPTOP
    star: 3.5,
    oldPrice: 120000,
    get newPrice() {
      return this.oldPrice - this.discount_count
    },
    discount: 20,
    discount_count: 67750,
    name: 'Noutbuk uchun stend',
    fullname: 'Подставка для ноутбука, складная, регулируемая, универсальная, yig\'iladigan, sozlanishi, universal',
    IMG: {
      img_1: 'https://avatars.mds.yandex.net/get-mpic/16503961/2a00000197d9decfacfd0c95905f22ac0726/orig',
      img_2: 'https://avatars.mds.yandex.net/get-mpic/4912684/2a00000197d9decfae8bd969d5c572f15b71/orig',
      img_3: 'https://avatars.mds.yandex.net/get-mpic/15131989/2a0000019aa0ac08f4e9ae1dd8354b59393c/orig',
    }
  },
  {
    // SSD
    star: 5,
    oldPrice: 60000,
    get newPrice() {
      return this.oldPrice - this.discount_count
    },
    discount: 30,
    discount_count: 33462,
    name: 'SSD',
    fullname: 'SSD накопитель Lexar 256 ГБ, 512 ГБ, 1 ТБ, 2 ТБ, NM620 M.2 NVMe',
    IMG: {
      img_1: 'https://images.uzum.uz/d2mjboj4eu2h0tmouqug/original.jpg 1x, https://images.uzum.uz/d2mjboj4eu2h0tmouqug/original.jpg 2x',
      img_2: 'https://images.uzum.uz/d2mjauviub35i07hs0dg/original.jpg 1x, https://images.uzum.uz/d2mjauviub35i07hs0dg/original.jpg 2x',
      img_3: 'https://images.uzum.uz/d2mjbpviub35i07hs0j0/original.jpg 1x, https://images.uzum.uz/d2mjbpviub35i07hs0j0/original.jpg 2x',
    }
  },
]


const electonikList = document.querySelector('.electronik_list')
const input = document.querySelector('.input')

function renderProduct(arr) {
  const html = arr.map(product => `
    <li class="electronik_list_item">
      <div class="empty-item_content">
        <img class="empty-product_img" src="${product.IMG.img_1.split(' ')[0]}" alt="">
        <svg class="empty-product_favorites" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999Z"
            stroke="#233c66" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <div class="empty-about_product">
          <h3 class="empty-product_name">
            ${product.name.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')}
          </h3>
          <div class="empty-about_product_wrapper">
            <ul class="empty-price_list">
              <div class="empty-price_list_wrapper">
                <li class="empty-price_item empty-old_price">${product.oldPrice} sum</li>
                <li class="empty-price_item empty-price_discount">-${product.discount}</li>
              </div>
              <li class="empty-price_item empty-new_price">${product.newPrice} sum</li>
            </ul>
            <a href="./components/ProductPage.html">
              <button class="empty-product_buy empty-btn">BUY</button>            
            </a>
          </div>
        </div>
      </div>
    </li>
  `).join('')

  electonikList.innerHTML = html

  const favoriteBtn = document.querySelectorAll('.empty-product_favorites');

  favoriteBtn.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      e.preventDefault()
      this.classList.toggle('is-active');
    });
  })
}

const categoryList = document.querySelector('.header_content')
const btnBlock = document.querySelector('.btn_wrapper')

// ? NAVBAR SEARCH FILTER FUNCTION 
input.addEventListener('input', () => {
  const value = input.value.toLowerCase()

  if (value.length > 0) {
    const filteredInputValue = electonik.filter(item => item.name.toLowerCase().includes(value) || item.fullname.toLowerCase().includes(value))
    categoryList.style.display = 'none'

    if (document.body.clientWidth < 450) {
      btnBlock.style.display = 'none'
    } else { 
      btnBlock.style.display = 'flex'
    }

    renderProduct(filteredInputValue)
  } else {
    btnBlock.style.display = 'flex'
    categoryList.style.display = 'block'
  }
})

renderProduct(electonik)