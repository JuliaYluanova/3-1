let element = document.querySelector('.newtext');

element.addEventListener('click', event => {
    event.preventDefault();
    element.textContent = prompt();
    console.log('Текст изменен');
    })