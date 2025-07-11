window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import './sass/custom.scss';
import './css/style.css'
import '@fortawesome/fontawesome-free/js/all.min';
import './sass/style.scss';

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(item => new bootstrap.Tooltip(item))

document.querySelectorAll('.add-to-cart-btn').forEach(item => {
    item.addEventListener("click", () => {
        alert("تمت اضافته الى عربة الشراء")
    })
} )

document.querySelectorAll('.size-option input[type="radio"]').forEach(item => {
    item.addEventListener('change' , () => {
        document.querySelectorAll('.size-option').forEach(i => {
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active')
    })
})
document.querySelectorAll('.color-option input[type="radio"]').forEach(item => {
    item.addEventListener('change' , () => {
        document.querySelectorAll('.color-option').forEach(i => {
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active')
    })
})

// حساب سعر اجمالي المنتج

 document.querySelectorAll('[data-product-quantity]').forEach(item => {
     item.addEventListener('change', () => {
         const newQuantity = item.value;
         const parent = item.closest('[data-product-info]');
         const pricePerUnit = parent.getAttribute('data-product-price');
         const totalPriceForProduct = newQuantity * pricePerUnit
         parent.querySelector('.total-price-for-product').innerHTML = totalPriceForProduct + "$" ;

        calculateTotalPrice()
     })
 })

document.querySelectorAll('[data-remove-from-card]').forEach(item => {
    item.addEventListener('click' , () => {
        item.closest('[data-product-info]').remove()
        calculateTotalPrice()
        

    })
})
function calculateTotalPrice() {
    let totalPriceForAllProduct = 0;
        document.querySelectorAll('[data-product-info]').forEach(product => {
            const pricePerUnite = product.getAttribute('data-product-price');
            const quantity = product.querySelector('[data-product-quantity]').value
            const totalPriceForProduct = pricePerUnite * quantity

            totalPriceForAllProduct = totalPriceForAllProduct + totalPriceForProduct;
    })
    document.getElementById('total-price-for-all-product').innerHTML = totalPriceForAllProduct + '$'
}

// -----أختيار المدينة ------

 const citiesByCountry = {
     sa:['جده','الرياض'],
     eg:['القاهرة','الاسكندرية'],
     jo:['الاردنية','عمان'],
     lb:['ليبيا','طرابلس'],
     rq:['الكوفة','البصرة'],
 }

 document.querySelectorAll('select[name="country"]').forEach(item => {
     item.addEventListener('change', () => {
         const country = item.value

         const cities = citiesByCountry[country]

         document.querySelectorAll('#paymentcities option').forEach(Option => Option.remove())

         const firstOption = document.createElement('option')
         const optionText = document.createTextNode('اختر المدينة')
         firstOption.appendChild(optionText)
         firstOption.setAttribute('value', '')
         firstOption.setAttribute('disabled', 'true')
         firstOption.setAttribute('selected', 'true')

         const city_options = document.getElementById('paymentcities')
         city_options.appendChild(firstOption)

         cities.forEach(city => {
             const newOption = document.createElement('option')
             const optionText = document.createTextNode(city)
             newOption.appendChild(optionText)
             newOption.setAttribute('value', city)
             city_options.appendChild(newOption)
         })
     })
 })

//  ------ الدفع عند الاستلام -----

document.querySelectorAll('#form-checkout input[name="payment-method"]').forEach(item => {
    item.addEventListener('change', () => {
        const paymentMethod = item.value;

        const creditCardInputs = document.querySelectorAll('#credit_card_info input');

        if(paymentMethod === 'on_delivery') {
            creditCardInputs.forEach(input => {
                input.style.display='none'
            })
        } else {
             creditCardInputs.forEach(input => {
                input.style.display='block'
        })
    }
})
})

// document.querySelectorAll('#form-checkout input[name="payment-method"]').forEach(item => {
//     item.addEventListener('change', () => {
//         const paymentMethod = item.value;

//         const creditCardInputs = document.querySelectorAll('#credit_card_info input');

//         if(paymentMethod === 'on_delivery') {
//             creditCardInputs.forEach(input => {
//                 input.style.display='none'
//             })
//         } else {
//             creditCardInputs.forEach(input => {
//                 input.style.display='block'
//             })
//         }
//     })
// })



// const citiesByCountry = {
//     sa: ['جدة', 'الرياض'],
//     eg: ['القاهرة', 'الإسكندرية'],
//     jo: ['عمان', 'الزرقاء'],
//     sy: ['دمشق', 'حلب', 'حماه']
// }

// document.querySelectorAll('select[name="country"]').forEach(item => {
//     item.addEventListener('change', () => {
//         const country = item.value

//         const cities = citiesByCountry[country]

//         document.querySelectorAll('#paymentcities option').forEach(option => option.remove())

//         const firstOption = document.createElement('option')
//         const optionText = document.createTextNode('اختر المدينة')
//         firstOption.appendChild(optionText)
//         firstOption.setAttribute('value', '')
//         firstOption.setAttribute('disabled', 'true')
//         firstOption.setAttribute('selected', 'true')

//         const city_options = document.getElementById('paymentcities')
//         city_options.appendChild(firstOption)

//         cities.forEach(city => {
//             const newOption = document.createElement('option')
//             const optionText = document.createTextNode(city)
//             newOption.appendChild(optionText)
//             newOption.setAttribute('value', city)
//             city_options.appendChild(newOption)
//         })
//     })
// })


document.getElementById("copyright").innerHTML = "جميع الحقوق محفوظة" + new Date().getFullYear();


