window.addEventListener("load", cargarPagina);
var contenedor = document.getElementById("js-list");
var addList = document.getElementById("añadirlista");
var contenedorListas = document.getElementById("wrapper-list")
var botonIniciar = document.getElementById("btn-iniciar");

var contador = 0;

function cargarPagina(e){
	e.preventDefault();
	addList.addEventListener("click", nuevaLista);
};

function nuevaLista(e){
	e.preventDefault();
	addList.style.display = "none";

	var bloquesito = document.createElement("form");

	contenedor.appendChild(bloquesito).classList.add("estilo-bloquesito");

	bloquesito.addEventListener("dragenter", entraArrastra);
	bloquesito.addEventListener("drop", soltar);
	bloquesito.addEventListener("dragover", arrastraEncima);

	function entraArrastra(e){
		this.classList.add("over");
	}

	function arrastraEncima(e){
		e.preventDefault();
	}

	function soltar(e){
//var elemento arrastraso = e.dataTranfer.getDta("jala texto");
		var yaArrastrado = document.getElementById(e.dataTransfer.getData("text"));
		this.insertBefore(yaArrastrado, this.children[3]);
		this.classList.remove("over");
	}

	var input = document.createElement("input")
	input.focus();

	bloquesito.appendChild(input).classList.add("estiloseInput");

	var boton = document.createElement("button");
	bloquesito.appendChild(boton).classList.add("styleButton");

	var textAgregar = document.createTextNode("Guardar");
	boton.appendChild(textAgregar);

	boton.addEventListener("click", nuevaTarjeta);

	function nuevaTarjeta(e){
		e.preventDefault();
		input.style.display = "none";
		boton.style.display = "none";

		var textoDeLista = input.value;
		var tittleDeLista = document.createElement("div");
		tittleDeLista.innerHTML = textoDeLista;
		bloquesito.appendChild(tittleDeLista).classList.add("bold");

		var enlace = document.createElement("a")
		enlace.href = "#";
		var textoDeEnlace = document.createTextNode("Añadir target");
		enlace.appendChild(textoDeEnlace);
		bloquesito.appendChild(enlace).classList.add("enlaceTarjeta");

		listaSiguiente(bloquesito);
		enlace.addEventListener("click", añadirTarjeta);

		function añadirTarjeta(e){
			e.preventDefault();
			enlace.style.display = "none";
			var añadirTarjeta = document.createElement("textarea");
			añadirTarjeta.classList.add("textarea");
			bloquesito.appendChild(añadirTarjeta);

			var botonAñadir = document.createElement("button");
			botonAñadir.classList.add("estiloBoton");
			bloquesito.appendChild(botonAñadir);

			var textAgregar = document.createTextNode("Añadir");
			botonAñadir.appendChild(textAgregar);

			botonAñadir.addEventListener("click", guardarTexto);

			function guardarTexto(e){
				e.preventDefault();
				var guardarTexto = document.createElement("div");

				var textoTextArea = añadirTarjeta.value;
				guardarTexto.innerHTML = textoTextArea;
				bloquesito.insertBefore(guardarTexto,bloquesito.clildNodes[3]);
				guardarTexto.classList.add("style-de-div");

				añadirTarjeta.style.display = "none";
				botonAñadir.style.display = "none";
				enlace.style.display = "inline-block";

				guardarTexto.draggable = true;
				guardarTexto.id = "id" + contador;
				guardarTexto.addEventListener("dragstart", empiezaArrastrar);
				guardarTexto.addEventListener("dragend", terminarArrastrar);
				contador+=1;

				function empiezaArrastrar(e){
					e.dataTransfer.setData("text", this.id);
					this.classList.add("colorDnD");
				}

				function terminarArrastrar(e){
					this.classList.remove("colorDnD");
					this.classList.add("animated","jello");
				}

			}
		}
	}

};

function listaSiguiente(bloquesito){
	container.appendChild(botonIniciar);
	agregarLista.style.color = "#fff";
	agregarLista.style.display = "inline-block";
	bloquesito.style.display = "inline-block";
};


//El DataTransfer.setData()método establece la operación de arrastre de drag datalos datos y el tipo especificados. Si no se dispone de datos para el tipo determinado, se añade al final del almacén de datos de la fricción, de tal manera que el último elemento de la typeslista será el nuevo tipo. Si los datos para el tipo dado ya existe, los datos existentes serán reemplazados en la misma posición. Es decir, el orden de la typeslista no se cambia cuando la sustitución de los datos del mismo tipo.