function initTodo() {
	todo = [];
	tarea = {
		titulo: "Ir al Cine",
		prioridad: 5,
		fecha: new Date()
	};
	todo.push(tarea);
	tarea = {
		titulo: "Pasear",
		prioridad: 4,
		fecha: new Date()
	};
	todo.push(tarea);

	return todo;
}

$(document).ready(function(){
	todo = initTodo();
	tarea = {};
	
	$("#agregar").click(agregartarea);
	crearContenedor();
	imprimirtarea();

});

function crearContenedor() {
	$(".semana").velocity("scroll", { 
	  container: $(".contenedor"),
	  duration: 800,
	  delay: 500
	});
}
function agregartarea(){
	tarea.titulo = $("#dato").val();
	tarea.prioridad = $("#prioridad").val();
	tarea.fecha = $("#fecha").val();
	if(tarea.titulo != '' && tarea.prioridad != '' && tarea.fecha != ''){
		todo.push(tarea);
		imprimirtarea();
		imprimirMensaje(true);
	} else {
		imprimirMensaje(false);
	}
}

function imprimirtarea(){
	$(".semana").html("");
	todo.forEach(function(tarea){
		$(".semana").append("<div class='row' style='margin-bottom:-10px;'> <div class='col s12 m4'>  <div class='card' style='margin-bottom:0px;'> <div class='card-content'> <p>" + tarea.titulo + " " + tarea.prioridad+ "<br/>" + ""  + "</p></div></div></div></div>");
	});
}

function imprimirMensaje(esCampoValido){
	if(esCampoValido){
		$("#msj").html("Bien!").css({
			"color": "skyblue",
			"border-color": "red"
		});
		$("#dato").val("");
		$("#prioridad").val("");
		$("#dato").css({
			"border-color": "skyblue"
		});
		$("#prioridad").css({
			"border-color": "skyblue"
		});
		$("#fecha").css({
			"border-color": "skyblue"
		});

		$(".p").html(" <div class='progress'><div id='p' class='indeterminate'></div></div>");
		$("#fecha").val(undefined)
		setTimeout(function(){
				$(".p").html("");
		}, 500);

		setTimeout(function(){
			$("#msj").html("");
			$("#dato").css({
				"border-color": ""
			});
			$("#prioridad").css({
				"border-color": ""
			});
			$("#fecha").css({
				"border-color": ""
			});
		}, 2000);
	} else {
		if(tarea.titulo == ''){
			$("#dato").css({
				"border-color": "red",
				"color": "red"
			});
		}  if (tarea.prioridad == ''){
			$("#prioridad").css({
				"border-color": "red",
				"color": "red"
			});
		}
		 if (tarea.fecha == ''){
			$("#fecha").css({
				"border-color": "red",
				"color": "red"
			});
		}
		
		$("#msj").html("Campos Vacio!").css({
			"border-color": "red",
			"color": "red"
		});
		
		

		setTimeout(function(){
			$("#msj").html("");
			$("#dato").css({
				"border-color": "",
				"color": "black"

			});
			$("#prioridad").css({
				"color": "black",
				"border-color": ""
			});
			$("#fecha").css({
				"color": "black",
				"border-color": ""
			});
		}, 2000);
	}
}