const amountEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${amountEl.length}`);
amountEl.forEach(function (element) {
    console.log('Category: ', element.firstElementChild.textContent);
    console.log('Element: ', element.lastElementChild.children.length);
});