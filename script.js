const h1 = document.querySelector('h1');

const button = document.querySelector('button');
button.addEventListener('click', function () {
    h1.classList.toggle('white');
    document.body.classList.toggle('black');
})

const buttonBaru = document.createElement('button');
const teks = document.createTextNode('ubahaWarna');
buttonBaru.appendChild(teks);
buttonBaru.setAttribute('type','button');
button.after(buttonBaru);

buttonBaru.addEventListener('click',function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
 document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})

const sMerah = document.querySelector('input[name=sMerah');
const sHijau = document.querySelector('input[name=sHijau');
const sBiru = document.querySelector('input[name=sBiru');
sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
})
sHijau.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
})
sBiru.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
})



document.body.addEventListener('mousemove', function(event) {
   const xpos =Math.round((event.clientX / window.innerWidth) * 255);
    const ypos = Math.round((event.clientY/ window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb(' + xpos + ',' + ypos + ',' + '100)';
})