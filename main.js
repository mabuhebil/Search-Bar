const searchInput = document.querySelector('.searchInput')
const input = document.querySelector('input')
const ul = document.querySelector('ul')

input.onkeyup = (e) => {

    let inputValue = e.target.value
    let arry = []

    if (inputValue != '') {
        searchInput.classList.add('active')
        arry = suggestions.filter(data => {
            return data.toLowerCase().startsWith(inputValue.toLowerCase())
        }).map(data => {
            return `<li>${data}</li>`
        }).join('')

        let li;
        if (arry.length) {
            ul.innerHTML = arry;
        } else {
            li = '<li>' + inputValue + '</li>'
            ul.innerHTML = li
        }

        const liList = document.querySelectorAll('ul li');

        for (let i = 0; i < liList.length; i++) {
            liList[i].setAttribute('onclick', 'select(this)')

        }

    } else {
        searchInput.classList.remove('active')
        ul.innerHTML = ''
    }
}

function select(element) {
    let contentLi = element.textContent
    searchInput.classList.remove('active')
    input.value = contentLi
}