function punkty(){
    for(var i=1; i<=10; i++){
        var kropek = document.createElement('div')
        kropek.classList.add('falaa')
        kropek.style.position='absolute'

        kropek.style.top='16.5%'
        kropek.style.left=36.5+2*i+"%"

        kropek.style.animation='falanga 1.5s '+ i/10 +'s infinite';

        document.getElementById("fala").appendChild(kropek)
    }
}
