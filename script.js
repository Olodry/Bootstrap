const Productos =  [ 
    {
        id: 1,
        title: 'Zapato 1',
        category: 'Zapatos',
        price: 1000,
        img: 'zp1.jpg',
    },
    {
        id: 2,
        title: 'Zapato 2',
        category: 'Zapatos',
        price: 750,
        img: 'zp2.jpg',
    },
    {
        id: 3,
        title: 'Zapato 3',
        category: 'Zapatos',
        price: 800,
        img: 'zp3.jpg',
    },
    {
        id: 4,
        title: 'Zapato 4',
        category: 'Zapatos',
        price: 600,
        img: 'zp4.jpg',
    },
    {
        id: 5,
        title: 'Camisa 1',
        category: 'Camisas',
        price: 679,
        img: 'cs1.jpg',
    },
    {
        id: 6,
        title: 'Camisa 2',
        category: 'Camisas',
        price: 800,
        img: 'cs2.jpg',
    },
    {
        id: 7,
        title: 'Camisa 3',
        category: 'Camisas',
        price: 520,
        img: 'cs3.jpg',
    },
    {
        id: 8,
        title: 'Camisa 4',
        category: 'Camisas',
        price: 500,
        img: 'cs4.jpg',
    },
    {
        id: 9,
        title: 'Bota 1',
        category: 'Botas',
        price: 899,
        img: 'bt1.jpg',
    },
    {
        id: 10,
        title: 'Bota 2',
        category: 'Botas',
        price: 999,
        img: 'bt2.jpg',
    },
    {
        id: 11,
        title: 'Bota 3',
        category: 'Botas',
        price: 900,
        img: 'bt3.jpg',
    },
    {
        id: 12,
        title: 'Bota 4',
        category: 'Botas',
        price: 850,
        img: 'bt4.jpg',
    },
];

const btns = document.querySelector(".btns-container")
const products = document.querySelector(".products-container")

window.addEventListener("DOMContentLoaded", () =>{
    displayProducts(Productos)
    displayButtons()
})

const displayButtons = () => {
    const categorias = Productos.reduce((values,product) => {
        if(!values.includes(product.category)) {
            values.push(product.category)
        }
        return values
    },  ['Todos'])

    const categoryBtn = categorias.map((category) => {
        return `
            <button class="button rounded-pill" type="button" data-id=${category}>
            ${category}
            </button>
        `
    }).join('')

    btns.innerHTML = categoryBtn

    const filterCategory = btns.querySelectorAll(".button")

    filterCategory.forEach((btn) => {
        btn.addEventListener("click",(e) => {
            const category = e.currentTarget.dataset.id
            const productCategory = Productos.filter((product) => {
                if (product.category === category)
                return product
            })

            category == 'Todos'
            ? displayProducts(Productos)
            : displayProducts(productCategory)
        })
    })

}

const displayProducts = (allProduct) => {
    let displayProduct = allProduct.map((product) =>{
        return `
            <div class="product col-md-3 mt-2">
                <div class="card shadow">
                    <div class="card-header">
                        <i class="fa fa-into-circle text-success"></i>
                        <img src="${product.img}" alt="" class="image mt-5 mb-5">
                    </div>
                    <div class="card-body">
                        <h6 class="card-title m-0 mb-2 text-success">${product.title}</h6>
                        <i class="cart fa fa-cart-plus text-success"></i>
                        <i class="fa fa-star text-warrning small"></i>
                        <i class="fa fa-star text-warrning small ms-1"></i>
                        <i class="fa fa-star text-warrning small ms-1"></i>
                        <i class="fa fa-star text-warrning small ms-1"></i>
                        <h1 class="price mt-2">$${product.price}</h1>
                    </div>
                </div>
            </div>
        `;
    })
    displayProduct = displayProduct.join('')
    products.innerHTML = displayProduct
}

