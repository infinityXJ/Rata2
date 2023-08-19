const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('click',function () {
    alert('SABIA QUE IVAS A DECIR QUE NO AGG')
    alert("ESA RATA ASQUEROSA MUGRIENTA DE MRD")
});

const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*350);
    const randomY = parseInt(Math.random()*350);
    yesBtn.style.setProperty('top',randomY+'%');
    yesBtn.style.setProperty('left',randomX+'%');
    yesBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})