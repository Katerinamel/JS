document.addEventListener('DOMContentLoaded', function () {

    var logo = document.getElementById('als-logo');
    var colorGeneratorConstant = 1000000;

    function randomCount() {
        return Math.floor(Math.random()*colorGeneratorConstant);
    }

    function setNewGradient() {

        randomColor = Math.floor(Math.random()*colorGeneratorConstant);
        logo.style.background = ('radial-gradient(at top left, ' + "#" + (randomColor + randomCount()) + ', ' + "#" + (randomColor + randomCount()) + ')');}
    
    logo.addEventListener('mouseenter', setNewGradient, false);

    setInterval(function () {
        setNewGradient();
    }, 1000)

});











