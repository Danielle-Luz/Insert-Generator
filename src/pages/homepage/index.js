import { getRequestData, buildRequestData } from "../../scripts/requests.js";

function addEventToForm () {
    let form = document.getElementById("form-fields");
    
    form.addEventListener("submit", async event => {
        event.preventDefault();
        if (document.querySelector(".form-group") != null) {
            const insertCodeElement = document.querySelector(".code-block pre");
            const registersNumber = parseInt(document.getElementById("registers-number").value);
            const tableName = document.getElementById("table-name").value;
    
            const fieldsData = getDataFromForm();
    
            fieldsData["_repeat"] = registersNumber;
            
            const requestData = buildRequestData(fieldsData, registersNumber);
    
            const responseData = await getRequestData(requestData);
    
            const insert = createInserts(responseData, tableName);

            insertCodeElement.innerHTML = insert;
        } else {
            toggleTooltip();
        }
    });
    
}

function getDataFromForm () {
    const form = document.getElementById("form-fields");

    const formElements = form.querySelectorAll(".form-group");

    const fieldsData = {};

    formElements.forEach((element) => {
        const fieldName = element.querySelector("input");
        const fieldValue = element.querySelector("select");
        
        fieldsData[fieldName.value] = fieldValue.value;
    });

    return fieldsData;
}

function addNewColumnEvent () {
    const addColumnButton = document.getElementById("new-column");
    
    addColumnButton.addEventListener("click",
    () => {
        const formGroup = document.createElement("div");
        const deleteButton = document.createElement("button");

        formGroup.classList = "d-flex form-group";
        deleteButton.classList = "align-center d-flex delete-button justify-center form-element";

        deleteButton.setAttribute("aria-label", "botão de exclusão");

        formGroup.innerHTML = `
        <input type="text" class="form-element text-1" aria-label="nome do campo" placeholder="Nome do campo" autocomplete="off" required>
        <select class="form-element text-1" aria-label="tipo do campo" required>
            <option value="nameFirst">
                Nome (pessoa)
            </option>
            <option value="nameLast">
                Sobrenome
            </option>
            <option value="name">
                Nome completo
            </option>
            <option value="phoneMobile">
                Celular
            </option>
            <option value="personGender">
                Sexo
            </option>
            <option value="internetEmail">
                Email
            </option>
            <option value="addressStreetName">
                Rua
            </option>
            <option value="addressState">
                Estado
            </option>
            <option value="addressCity">
                Cidade
            </option>
            <option value="addressZipCode">
                CEP
            </option>
            <option value="productName">
                Nome de produto
            </option>
            <option value="companyName">
                Nome de empresa
            </option>
            <option value="date">
                Data
            </option>
        </select>
        `;
        deleteButton.innerHTML = `<img src="assets/imgs/trash.svg" alt="icone de lixeira">`;

        deleteButton.addEventListener("click",
        () => {
            deleteFormGroup(deleteButton);
        });
        
        formGroup.insertAdjacentElement("beforeend", deleteButton);

        addColumnButton.insertAdjacentElement("beforebegin", formGroup);

    });
}

function createInserts (data, tableName) {
    let fields = ``;
    let values = ``;
    let insert = ``;
    let fieldsNames;
    
    if (data.constructor == Array) {
        fieldsNames = Object.keys(data[0]);
    } else {
        fieldsNames = Object.keys(data);
        data = [data];
    }

    fieldsNames.forEach(
    (field, index) => {
        if (index != 0) fields += `, `;

        fields += field;
    });

    data.forEach(
    register => {
        const registerValues = Object.values(register);
        values += `(`;

        registerValues.forEach(
        (value, index)=> {
            if (index != 0) values += ", ";

            values += `'${value}'`;
        });


        values += `),\n`;
    });

    insert =
    `INSERT INTO ${tableName}\n(${fields})\nVALUES\n${values}`;
    
    insert = insert.substring(0, insert.length - 2) + ";";

    return insert;
}

function deleteFormGroup (button) {
    const formGroup = button.closest(".form-group");

    formGroup.remove();
}

function addDeleteEventToButton () {
    const button = document.querySelector(".delete-button");

    button.addEventListener("click",
    () => {
        deleteFormGroup(button);
    });
}

function toggleTooltip () {
    let tooltip = `
    <article class="align-center d-flex justify-center tooltip position-absolute">
        <p class="text-1">Insira pelo menos uma coluna</p>
    </article>
    `;
    document.body.insertAdjacentHTML("afterbegin", tooltip);
    
    tooltip = document.querySelector(".tooltip");
    
    
    setTimeout(
    () => {
        tooltip.style.animationName = "hide";
    }, 2000);

    setTimeout(
    () => {
        document.body.removeChild(tooltip);
    }, 3000);
}

addEventToForm();

addNewColumnEvent();

addDeleteEventToButton();