const rangePercent = document.getElementById('rangePercent');
const orderSelect = document.getElementById('orderSelect');
const currentSelect = document.getElementById('selectCurrent');

function init() {
    document.getElementById('selectList').addEventListener('click', e => optionSelected(e))
    document.getElementById('selectHeader').addEventListener('click', selectOpen)
    document.getElementById('rangeInput').addEventListener('input', (e) => {
        rangePercent.innerText = e.target.value + '%'
    })

    //input type file
    const inputFile = document.getElementById('inputFile');
    const inputText = document.getElementById('inputFileText');

    inputFile.addEventListener('change', function () {
        if (this.files && this.files.length >= 1)
            inputText.innerText = 'Прикреплено файлов: ' + this.files.length;
    });
    submitForm()
}

function submitForm() {
    const form = document.getElementById('formOrder');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(form);
        formData.select = currentSelect.innerHTML;
    });
}

//custom select
function selectOpen() {
    orderSelect.classList.toggle('select__header__active')
}

function optionSelected(e) {

    if (e.target && e.target.tagName === 'LI') {
        currentSelect.innerHTML = e.target.innerText
        orderSelect.classList.toggle('select__header__active')
    }
}

init()
