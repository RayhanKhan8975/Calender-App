
function displayid(id) {

    input.innerHTML = "";

    var text = document.createElement('input')

    text.classList.add("form-control");

    text.classList.add("col-sm");

    text.classList.add("btn-outline-danger");

    text.type = "text";


    input.appendChild(text)

    var modalButton = document.createElement('button')

    modalButton.classList.add("btn");

    modalButton.classList.add("btn-block");

    modalButton.classList.add("col-sm-12");

    input.style.alignItems = "center";

    modalButton.style.marginTop = "50px"

    modalButton.classList.add("btn-success");

    modalButton.innerHTML = "Add";

    modalButton.addEventListener('click', function () {

        localStorage.setItem((id + "/" + months[currentMonth] + "/" + currentYear), text.value)

        document.location.reload()
    })

    input.appendChild(modalButton)

}
