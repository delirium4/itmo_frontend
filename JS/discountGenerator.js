document.addEventListener('submit', function (e) {
    e.preventDefault();


    const saveFormData = () => {
        const formData = {
            statusType: e.target.elements.membershipStatus.value,
        };
        localStorage.setItem('discountFormData', JSON.stringify(formData));
        return formData
    };

    const saveTable = () => {
        localStorage.setItem('discountTable', tableContainer.innerHTML);
    };

    const formData = saveFormData();
    const statusType = formData.statusType;
    tableContainer.innerHTML = '';

    const table = document.createElement('table');
    table.classList.add('table_section');

    const headerRow = document.createElement('tr');

    const status = document.createElement('th');
    status.textContent= 'Статус';
    status.style.width="40%"
    const discount = document.createElement('th');
    discount.textContent= 'Скидка';
    discount.style.width="30%"

    headerRow.appendChild(status);
    headerRow.appendChild(discount);

    console.log(headerRow);
    table.appendChild(headerRow);



    const rollDiscount = (type) => Math.floor(Math.random() * type) + 1;
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = `${statusType}`;
    row.appendChild(nameCell);

    const discountCell = document.createElement('td');
    if(statusType === 'Platinum')
        discountMax = 50;
    else if (statusType === 'Gold')
        discountMax = 40;
    else if(statusType === 'Silver')
        discountMax = 25;
    else if(statusType === 'Bronze')
        discountMax = 15
    discountCell.textContent = rollDiscount(discountMax);
    row.appendChild(discountCell);
    table.appendChild(row);

    tableContainer.appendChild(table);

    saveFormData();
    saveTable();

});

window.addEventListener('load', function () {

    const loadFormData = () => {
        const savedData = JSON.parse(localStorage.getItem('discountFormData'));
        if (savedData) {
            document.getElementById('membershipStatus').value = savedData.statusType || '';
        }
    };
    const loadTable = () => {
        const savedTable = localStorage.getItem('discountTable');
        if (savedTable) {
            document.getElementById('tableContainer').innerHTML = savedTable;
        }
    };

    loadFormData();
    loadTable();
});