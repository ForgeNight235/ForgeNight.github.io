const catalogFilterModal = () => {
    const modalOpen = document.querySelector('.filter_modal-btn');
    const modal = document.querySelector('.filters_modal');
    const modalClose = document.querySelector('.modalClose');
    const body = document.querySelector('body');

    modalOpen.addEventListener('click', () => {
        modal.classList.toggle('active');
        body.classList.toggle('locked');
    });
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
        body.classList.remove('locked');
    });
}

const init = () => {
    catalogFilterModal();
}
document.addEventListener('DOMContentLoaded', init);
