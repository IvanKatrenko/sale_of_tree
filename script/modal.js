const btnOrder = document.querySelectorAll('.product__button_order'); //для заказов
const btnMore = document.querySelectorAll('.product__button_more');
const overlayOrder = document.querySelector('.overlay_order');
const overlayConsultation = document.querySelector('.overlay_consultation');
const order = overlayOrder.querySelector('.modal__order');

btnOrder.forEach(btn => {
    btn.addEventListener('click', () => {
        overlayOrder.classList.add('overlay_active');
        order.value = btn.dataset.order;
    })
})

overlayOrder.addEventListener('click', e => {
    const target = e.target;

    if (target === overlayOrder || target.closest('.modal__close')) {
        overlayOrder.classList.remove('overlay_active');
    }
})

btnMore.forEach(btn => {
    btn.addEventListener('click', () => {
        overlayConsultation.classList.toggle('overlay_active');
        const order = overlayOrder.querySelector('.modal__order');
        order.value = btn.dataset.order;
    })
})

overlayConsultation.addEventListener('click', e => {
    const target = e.target;

    if (target === overlayConsultation || target.closest('.modal__close')) {
        overlayConsultation.classList.toggle('overlay_active');
    }
})