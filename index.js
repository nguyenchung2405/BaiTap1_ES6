let guessNumber = Math.round(Math.random() * 100);
console.log(guessNumber);

const arrHistoryTrue = [];

document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    const tagInput = document.getElementsByTagName('input')[0];
    let { value } = tagInput;

    document.querySelectorAll('p')[0].style.display = 'none';
    document.querySelectorAll('p')[1].style.display = 'none';
    document.querySelectorAll('p')[2].style.display = 'none';

    if (value === '') {
        alert('Vui lòng nhập số cần đoán.');
        return;
    }
    if (value > guessNumber) {
        document.querySelectorAll('p')[0].style.display = 'block';
    }
    if (value < guessNumber) {
        document.querySelectorAll('p')[1].style.display = 'block';
    }
    if (value == guessNumber) {
        document.querySelectorAll('p')[2].style.display = 'block';
        arrHistoryTrue.push(value);
        let arrHTML = arrHistoryTrue.map((value, index) => {
            return (
                `<p>Lần ${index + 1}: ${value}</p>`
            )
        });
        let tagHTML = '';
        for (let html of arrHTML) {
            tagHTML += `${html}`;
        }

        document.getElementById('history').innerHTML = tagHTML;
        guessNumber = Math.round(Math.random() * 100);
        tagInput.value = '';
        console.log(guessNumber);
    }
})