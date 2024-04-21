document.addEventListener("DOMContentLoaded", main)
    function main() {
        count();
        enlace();
        imagen();

        document.getElementById("abstract").addEventListener("click", colorF);
        document.getElementById("content").addEventListener("click", tamanoLetra);

        let botones = document.getElementsByClassName("oculta");
    for (let index = 0; index < botones.length; index++) {
        botones[index].addEventListener("click", function (e) {
            ocultar(e.currentTarget);
            e.stopPropagation();
        });
    }
        
    }

    function count() {
        let texto = document.getElementsByTagName("p"); 

        for (let i = 0; i < texto.length; i++) {
            const element = texto[i];

            let palabras = element.innerHTML.split(" ");
            let num = palabras.length;
            palabras.push("<br> <strong>" +  num  + "</strong> </br>");
            let final = palabras.join(" ");
            element.innerHTML = final;
        }
    }

    function enlace() {
        let texto = document.getElementsByTagName("p"); 

        for (let i = 0; i < texto.length; i++) {
            let palabras = texto[i].innerHTML.split(" ");
            for (let j = 0; j < palabras.length; j++) {
                if (palabras[j] == "nulla") {
                    palabras[j] = "<a href='http://google.com'> nulla </a>";
                }
            } 
            let final = palabras.join(" ");
            texto[i].innerHTML = final;
        }
    }

    function imagen() {
        let parrafos = document.getElementsByTagName("h1");

        for (let i = 0; i < parrafos.length; i++) {
            const element = parrafos[i];
            
            let img = document.createElement("img")
            img.src="https://lledogrupo.com/wp-content/uploads/2019/01/star-256.png";
            img.height=16;
            img.width=10;
            element.appendChild(img);
        }
    }

    function colorF(){
        let color = window.getComputedStyle(this).getPropertyValue("background-color");
            if (color == 'rgb(144, 238, 144)') {
                this.style.backgroundColor = 'rgb(122, 100, 100)';
            } else {
                this.style.backgroundColor = 'rgb(144, 238, 144)';
            }
    }

    function tamanoLetra(){
        let tamano = window.getComputedStyle(document.body).getPropertyValue("font-size");
        let newTamano = tamano.slice(0, -2);
        let tamanoMax = parseInt(newTamano * 2);
        let tamanoContent = window.getComputedStyle(this).getPropertyValue("font-size");
        let newContent = parseInt(tamanoContent.slice(0, 2));

        if (newContent < tamanoMax) {
            newContent = parseInt(newContent + 1);
            this.style.fontSize = newContent + "px";
            } else {
            this.style.fontSize = newTamano + "px";
        }
    }

    function ocultar(ele) {
        let hermano = ele.nextSibling;
        while (hermano.nodeName != "DIV") {
            hermano = hermano.nextSibling;
        };
        hermano.style.display = (ele.innerHTML == "Mostrar") ? "block" : "none";
        ele.innerHTML = (ele.innerHTML == "Mostrar") ? "Ocultar" : "Mostrar";
    }