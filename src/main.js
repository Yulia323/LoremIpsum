const sliderPercent = document.getElementById('sliderPercent');
const select = document.getElementById('select');
const currentSelect = document.getElementById('selectCurrent');

function init() {
    document.getElementById('selectBody').addEventListener('click', e => optionSelected(e))
    document.getElementById('selectHeader').addEventListener('click', selectOpen)
    document.getElementById('sliderInput').addEventListener('input', (e) => {
        sliderPercent.innerText = e.target.value + '%'
    })

    //input type file
    const inputFile = document.getElementById('inputFile');
    const inputLabel = document.getElementById('inputLabel');

    inputFile.addEventListener('change', function () {
        if (this.files && this.files.length >= 1)
            inputLabel.innerText = 'Прикреплено файлов: ' + this.files.length;
    });
    submitForm()
}

function submitForm() {
    const form = document.getElementById('form-order');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(form);
        formData.select = currentSelect.innerHTML;
    });
}

//custom select
function selectOpen() {
    select.classList.toggle('select-active')
}

function optionSelected(e) {

    if (e.target && e.target.tagName === 'LI') {
        currentSelect.innerHTML = e.target.innerText
        select.classList.toggle('select-active')
    }
}


init()
