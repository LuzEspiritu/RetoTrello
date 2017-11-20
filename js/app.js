window.addEventListener("load", function () {
  var plantilla = document.getElementById("lista-plantilla");
 
  function iniciar() {
    var parentListBoard = document.getElementById("list-board");
    var divItem = document.createElement("div");
    /*asigando atributoss*/
    divItem.setAttribute('class', 'lista-item');

    /*asignando estilos css y js*/
    divItem.classList.add("lista-item");
    divItem.innerHTML = plantilla.innerHTML;
    parentListBoard.appendChild(divItem);
    inputMessage = divItem.getElementsByClassName('input-message')[0];
    inputMessage.addEventListener("click", crearLista);
    textAñadirTarjeta = divItem.getElementsByClassName('textAñadirTarjeta')[0];
    textAñadirTarjeta.addEventListener("click", crearTarjeta);

  }

  function crearLista(event) {
    plantilla = event.target.parentNode.parentNode;
    var listBoard = plantilla.getElementsByClassName('container-board')[0];
    listBoard.classList.add("box-container-board")
    var btnSave = document.createElement("button");
    var btnClose = document.createElement("i");
    /*definiendo atributos*/
    btnSave.textContent = "Guardar";
    btnSave.setAttribute('class', 'btnSave');
    btnSave.classList.add("btnGuardar")
    listBoard.appendChild(btnSave);
    listBoard.appendChild(btnClose);
    btnSave.addEventListener("click", AddLista);
    //ubicamos al inputMessage
    var inputMessage = plantilla.getElementsByClassName('input-message')[0];
    inputMessage.focus();
    inputMessage.removeEventListener("click", crearLista);
  }

  function AddLista(event) {
    divPadre = event.target.parentNode.parentNode;
    var containerBoard = divPadre.getElementsByClassName('container-board')[0];
    var inputMessage = divPadre.getElementsByClassName('input-message')[0];
    var btnSave = divPadre.getElementsByClassName("btnSave")[0];
    var listBoard = divPadre.getElementsByClassName('container-board')[0];
    var message = "";
    if (inputMessage.value) {
      message = inputMessage.value;
      var titulo = document.createElement("div");
      var contenido = document.createElement("div");
      titulo.setAttribute("class", "titulo");
      titulo.setAttribute("id", "titulo");
      titulo.classList.add("titulo");
      contenido.setAttribute("class", "contenido");
      contenido.setAttribute("id", "contenido");
      containerBoard.appendChild(titulo);
      containerBoard.appendChild(contenido);
      titulo.innerHTML = "<span>" + message + "</span>";
      var addCard = divPadre.getElementsByClassName('anadirTarjeta')[0];//document.getElementById("anadirTarjeta");
      addCard.style.display = "";
      listBoard.removeChild(btnSave);
      listBoard.removeChild(inputMessage);
      
    }
  }
  
  /*creando una nueva tarjeta*/
  function crearTarjeta(event) {

    divPadre = event.target.parentNode.parentNode.parentNode;
    var span= divPadre.getElementsByClassName("textAñadirTarjeta")[0];
    var addCard = divPadre.getElementsByClassName('anadirTarjeta')[0];
    addCard.style.display = "";
    var linkCard = divPadre.getElementsByClassName("linkAnadirTarjeta2")[0];
    var btnAddCar = document.createElement("button");
    btnAddCar.setAttribute("id","Addcard");
    var textArea = document.createElement("textarea");
    textArea.setAttribute("class","textoarea");
    textArea.setAttribute("id","textoarea");
    textArea.textContent = "";
    btnAddCar.textContent ="Añadir";
    linkCard.appendChild(textArea);
    linkCard.appendChild(btnAddCar);
    btnAddCar.addEventListener("click", addTarjeta);
    textArea.focus();
    span.style.display="none";
  }

/*añadiendo la tarjeta*/
  function addTarjeta(event) {
    divPadre = event.target.parentNode.parentNode.parentNode;
    var textoArea = divPadre.getElementsByClassName('textoArea')[0]
    var divTexto = document.createElement("div");
    divTexto.innerHTML = "<span>" + textoArea.value + "</span>";
    var divContenido = divPadre.getElementsByClassName('contenido')[0]
    divContenido.appendChild(divTexto);
    var textoArea = divPadre.getElementsByClassName('textoArea')[0];
    textoArea.value = "";
    textoArea.focus();
  }
  iniciar();
});






