const form = document.getElementById('form');
const dateStart = document.getElementById('datePickStart');
const dateEnd = document.getElementById('datePickEnd');

const getError = (dateEndParent) => {
    const errorDisplay = dateEndParent.querySelector('.error');
    errorDisplay.innerText = "Дата и время окончания бронирования не может быть раньше даты и времени начала";
    errorDisplay.style = 'color: red; height: 13px; margin-bottom: 15px; margin-top: 5px;';
}

form.addEventListener('submit', e => {
    e.preventDefault();
    dateEnd.parentElement.querySelector('.error').style = "display: none;";

    if(dateEnd.value <= dateStart.value){
        getError(dateEnd.parentElement);
        return;
    }

    const formData = new FormData(form);
    const data = {};

    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }

    console.log(JSON.stringify(data));
});