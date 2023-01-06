//javascript selector
const x = document.getElementById('x');
const z = document.getElementById('z');
const box = document.querySelector('.row');
const submit = document.querySelector('.subm');
const result = document.getElementById('result');
const close = document.getElementById('close');
const closeBox = document.getElementById('alertBox');
const option = document.getElementsByClassName('option');

//sistem kalkulator
submit.addEventListener('click', function(){
    if(x.valueAsNumber % 2 == 1 || z.valueAsNumber % 2 == 0){//pengecekan angka
        //perhitungan matematika      
        if(option[0].selected == 1){
            result.innerHTML = x.valueAsNumber + z.valueAsNumber;
            closeBox.classList.toggle('dNone');
        } else if(option[1].selected == 1){
            result.innerHTML = x.valueAsNumber - z.valueAsNumber;
            closeBox.classList.toggle('dNone');
        } else if(option[2].selected == 1){
            result.innerHTML = x.valueAsNumber * z.valueAsNumber;
            closeBox.classList.toggle('dNone');
        } else if(option[3].selected == 1){
            result.innerHTML = x.valueAsNumber / z.valueAsNumber;
            closeBox.classList.toggle('dNone');
        } else  {
            result.innerHTML = 'Kesalahan. System tidak bisa memproses';
            closeBox.classList.toggle('dNone');
        }
    } else if(x.valueAsNumber % 2 == 0 || z.valueAsNumber % 2 == 1){
        if(option[0].selected == 1){
            result.innerHTML = x.valueAsNumber + z.valueAsNumber;
            closeBox.classList.toggle('dNone');
        } else if(option[1].selected == 1){
            result.innerHTML = x.valueAsNumber - z.valueAsNumber;
            closeBox.classList.toggle('dNone');
        } else if(option[2].selected == 1){
            result.innerHTML = x.valueAsNumber * z.valueAsNumber;
            closeBox.classList.toggle('dNone');
        } else if(option[3].selected == 1){
            result.innerHTML = x.valueAsNumber / z.valueAsNumber;
            closeBox.classList.toggle('dNone');
        } else  {
            result.innerHTML = 'Kesalahan. System tidak bisa memproses';
            closeBox.classList.toggle('dNone');
        }
    } else {
        result.innerHTML = 'Angka yang anda masukan salah atau Bukan sebuah angka';
        closeBox.classList.toggle('dNone');
    }
});


close.addEventListener('click', function(){
    closeBox.classList.toggle('dNone');
});