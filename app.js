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

function gora(){
    var x = document.getElementById('xx').value
    var y = document.getElementById('yy').value
    var z = document.getElementById('zz').value
    var angle = document.getElementById('angle').value
    var top = document.getElementById("top").value
    var left = document.getElementById("left").value

    var gora=document.getElementById("b6")
    if(x=="") {
        x=0
    }
    if(y=="") {
        y=0
    }
    if(z=="") {
        z=0
    }
    if(angle=="") {
        angle=0
    }

    if(top!=""){
        gora.style.top=top+"vh"
    }
    if(left!=""){
        gora.style.left=left+'%'
    }

    gora.style.background='radial-gradient(rgb(252, 172, 0), rgb(163, 122, 9))'
    gora.style.transform='rotate3d('+x+', '+y+', '+z+', '+angle+'deg'+')'
    console.log(x,y,z,angle,'deg')
}