let propietarios = [];
let apartamentos = [];

// Crear la lista de propietarios y apartamentos
condominio_deuda_2023.forEach(item => {
	const name = item["PROPIETARIO"];
	propietarios.push(name);

	const apart = item["APTO."];
	apartamentos.push(apart);
});

// console.log(propietarios);
// console.log(apartamentos);

// Agregar propietarios a la lista desplegable
let lista_propietarios = document.getElementById("lista_propietarios");
propietarios.forEach(item => {
	const option = document.createElement('option');
	option.innerText = item;
	option.value = item;
	lista_propietarios.appendChild(option);
});

// Agregar apartamentos a la lista desplegable
let lista_propietarios_apto = document.getElementById("lista_propietarios_apto");
apartamentos.forEach(item => {
	const option = document.createElement('option');
	option.innerText = item;
	option.value = item;
	lista_propietarios_apto.appendChild(option);
});


// Evento que captura la selección de la lista de filtrado
let filtro_busqueda = document.getElementById("filtro_busqueda");
filtro_busqueda.addEventListener("change", cambiarFiltro);

const lista_propietarios_container = document.getElementById("lista_propietarios_container");

const lista_propietarios_apto_container = document.getElementById("lista_propietarios_apto_container");
lista_propietarios_apto_container.style.display = "none";

function cambiarFiltro() {
	let valor_busqueda = filtro_busqueda.value;
	if(valor_busqueda == "apto") {
		lista_propietarios_apto_container.style.display = "block";
		lista_propietarios_container.style.display = "none";
	}
	else if(valor_busqueda == "nombre") {
		lista_propietarios_apto_container.style.display = "none";
		lista_propietarios_container.style.display = "block";
	}
}

const boton_deuda = document.getElementById("boton_deuda");
boton_deuda.addEventListener("click", calcularDeudaTotal);

const detalle_deuda = document.getElementById("detalle_deuda");

function calcularDeudaTotal() {
	let deuda_total_bs;
	let deuda_total_usd
	let prop;
	let text;

	let valor_busqueda = filtro_busqueda.value;
	console.log(valor_busqueda);

	if(valor_busqueda === "nombre") {
		prop = lista_propietarios.value;
		console.log(prop);

		let prop_hid = cuota_hidrolago.find(item => item["PROPIETARIO"] === prop);

		let prop_corp = cuota_corpoelec.find(item => item["PROPIETARIO"] === prop);

		let prop_sedemat = cuota_sedemat.find(item => item["PROPIETARIO"] === prop);

		let prop_corpii = cuota_corpoelec_ii.find(item => item["PROPIETARIO"] === prop);

		let prop_2022 = condominio_deuda_2022.find(item => item["PROPIETARIO"] === prop);

		let prop_hid_2023 = hidrolago_deuda_2023.find(item => item["PROPIETARIO"] === prop);

		// Suma con condicionales para que haga 0 los valores undefined (Hay un propietario que no está en todas las bases de datos)
		deuda_total_bs = (prop_hid ? prop_hid["DEUDA"]:0) + (prop_corp ? prop_corp["DEUDA"]:0) + (prop_sedemat? prop_sedemat["DEUDA"]:0) + (prop_corpii? prop_corpii["DEUDA"]:0) + (prop_2022? prop_2022["DEUDA"]:0) + (prop_hid_2023 ? prop_hid_2023["DEUDA"]:0);

		let prop_2023 = condominio_deuda_2023.find(item => item["PROPIETARIO"] === prop);

		deuda_total_usd = prop_2023["DEUDA"];

		text = `El propietario ${prop}`;

	} else if(valor_busqueda === "apto") {
		prop = lista_propietarios_apto.value;
		console.log(prop);

		let prop_hid = cuota_hidrolago.find(item => item["APTO."] === prop);

		let prop_corp = cuota_corpoelec.find(item => item["APTO."] === prop);

		let prop_sedemat = cuota_sedemat.find(item => item["APTO."] === prop);

		let prop_corpii = cuota_corpoelec_ii.find(item => item["APTO."] === prop);

		let prop_2022 = condominio_deuda_2022.find(item => item["APTO."] === prop);

		let prop_hid_2023 = hidrolago_deuda_2023.find(item => item["APTO."] === prop);

		// Suma con condicionales para que haga 0 los valores undefined (Hay un propietario que no está en todas las bases de datos)
		deuda_total_bs = (prop_hid ? prop_hid["DEUDA"]:0) + (prop_corp ? prop_corp["DEUDA"]:0) + (prop_sedemat? prop_sedemat["DEUDA"]:0) + (prop_corpii? prop_corpii["DEUDA"]:0) + (prop_2022? prop_2022["DEUDA"]:0) + (prop_hid_2023 ? prop_hid_2023["DEUDA"]:0);

		let prop_2023 = condominio_deuda_2023.find(item => item["APTO."] === prop);

		deuda_total_usd = prop_2023["DEUDA"];

		text = `El propietario del apartamento ${prop}`;
	}

	detalle_deuda.innerText = `${text} tiene una deuda total de ${deuda_total_bs.toFixed(2)} Bolívares y ${deuda_total_usd.toFixed(2)} Dólares.`
}


/* CORPOELEC */
// Accedo al body de la tabla de deuda corpoelec
let cuerpo_tabla_deuda_azotea = document.getElementById("cuerpo_tabla_deuda_azotea");

// Ciclo para agregar cada nueva fila con el número de columnas indicado y contenido correspondiente
for(let i = 0; i < cuota_corpoelec.length; i++) {
	// Creo una nueva fila
	let nueva_fila_deuda_azotea = document.createElement("tr");

	// Creo las columnas de esa nueva fila
	let nueva_columna1 = document.createElement("td");
	let nueva_columna2 = document.createElement("td");
	let nueva_columna3 = document.createElement("td");
	let nueva_columna4 = document.createElement("td");

	// Inserto todas las columnas dentro de la fila que creé
	nueva_fila_deuda_azotea.appendChild(nueva_columna1);
	nueva_fila_deuda_azotea.appendChild(nueva_columna2);
	nueva_fila_deuda_azotea.appendChild(nueva_columna3);
	nueva_fila_deuda_azotea.appendChild(nueva_columna4);

	// Inserto la nueva fila al cuerpo de la tabla
	cuerpo_tabla_deuda_azotea.appendChild(nueva_fila_deuda_azotea);

	// Inserto contenido a las celdas de la nueva fila
	nueva_columna1.innerText = cuota_corpoelec[i]["APTO."];
	nueva_columna2.innerText = `${cuota_corpoelec[i]["PROPIETARIO"]}`;
	nueva_columna3.innerText = cuota_corpoelec[i]["PAGO"].toFixed(2);
	nueva_columna4.innerText = cuota_corpoelec[i]["DEUDA"].toFixed(2);

	// Cuento las filas del cuerpo de la tabla
	let conteo_filas = cuerpo_tabla_deuda_azotea.getElementsByTagName("tr").length;

	// Aplico color de fondo a los hijos impares del cuerpo de tabla
	if(conteo_filas % 2 !== 0) {
		nueva_fila_deuda_azotea.style.backgroundColor = '#caeae5';
	}
}


/* HIDROLAGO */
// Accedo al body de la tabla de deuda hidrolago
const cuerpo_tabla_deuda_hidrolago = document.getElementById("cuerpo_tabla_deuda_hidrolago");

// Ciclo para agregar cada nueva fila con el número de columnas indicado y contenido correspondiente
for(let i = 0; i < cuota_hidrolago.length; i++) {
	// Creo una nueva fila
	let nueva_fila_deuda_hidrolago = document.createElement("tr");

	// Creo las columnas de esa nueva fila
	let nueva_columna1 = document.createElement("td");
	let nueva_columna2 = document.createElement("td");
	let nueva_columna3 = document.createElement("td");
	let nueva_columna4 = document.createElement("td");

	// Inserto todas las columnas dentro de la fila que creé
	nueva_fila_deuda_hidrolago.appendChild(nueva_columna1);
	nueva_fila_deuda_hidrolago.appendChild(nueva_columna2);
	nueva_fila_deuda_hidrolago.appendChild(nueva_columna3);
	nueva_fila_deuda_hidrolago.appendChild(nueva_columna4);

	// Inserto la nueva fila al cuerpo de la tabla
	cuerpo_tabla_deuda_hidrolago.appendChild(nueva_fila_deuda_hidrolago);

	// Inserto contenido a las celdas de la nueva fila
	nueva_columna1.innerText = cuota_hidrolago[i]["APTO."];
	nueva_columna2.innerText = `${cuota_hidrolago[i]["PROPIETARIO"]}`;
	nueva_columna3.innerText = cuota_hidrolago[i]["PAGO"].toFixed(2);
	nueva_columna4.innerText = cuota_hidrolago[i]["DEUDA"].toFixed(2);

	// Cuento las filas del cuerpo de la tabla
	let conteo_filas = cuerpo_tabla_deuda_hidrolago.getElementsByTagName("tr").length;

	// Aplico color de fondo a los hijos impares del cuerpo de tabla
	if(conteo_filas % 2 !== 0) {
		nueva_fila_deuda_hidrolago.style.backgroundColor = '#e4e7f4';
	}
}

/* SEDEMAT */
// Accedo al body de la tabla de deuda sedemat
const cuerpo_tabla_deuda_sedemat = document.getElementById("cuerpo_tabla_deuda_sedemat");

// Ciclo para agregar cada nueva fila con el número de columnas indicado y contenido correspondiente
for(let i = 0; i < cuota_sedemat.length; i++) {
	// Creo una nueva fila
	let nueva_fila_deuda_sedemat = document.createElement("tr");

	// Creo las columnas de esa nueva fila
	let nueva_columna1 = document.createElement("td");
	let nueva_columna2 = document.createElement("td");
	let nueva_columna3 = document.createElement("td");
	let nueva_columna4 = document.createElement("td");

	// Inserto todas las columnas dentro de la fila que creé
	nueva_fila_deuda_sedemat.appendChild(nueva_columna1);
	nueva_fila_deuda_sedemat.appendChild(nueva_columna2);
	nueva_fila_deuda_sedemat.appendChild(nueva_columna3);
	nueva_fila_deuda_sedemat.appendChild(nueva_columna4);

	// Inserto la nueva fila al cuerpo de la tabla
	cuerpo_tabla_deuda_sedemat.appendChild(nueva_fila_deuda_sedemat);

	// Inserto contenido a las celdas de la nueva fila
	nueva_columna1.innerText = cuota_sedemat[i]["APTO."];
	nueva_columna2.innerText = `${cuota_sedemat[i]["PROPIETARIO"]}`;
	nueva_columna3.innerText = cuota_sedemat[i]["PAGO"].toFixed(2);
	nueva_columna4.innerText = cuota_sedemat[i]["DEUDA"].toFixed(2);

	// Cuento las filas del cuerpo de la tabla
	let conteo_filas = cuerpo_tabla_deuda_sedemat.getElementsByTagName("tr").length;

	// Aplico color de fondo a los hijos impares del cuerpo de tabla
	if(conteo_filas % 2 !== 0) {
		nueva_fila_deuda_sedemat.style.backgroundColor = '#FCE7C0';
	}
}

/* CORPOELEC II */
// Accedo al body de la tabla de deuda corpoelec 2
const cuerpo_tabla_deuda_corpoelec2 = document.getElementById("cuerpo_tabla_deuda_corpoelec2");

// Ciclo para agregar cada nueva fila con el número de columnas indicado y contenido correspondiente
for(let i = 0; i < cuota_corpoelec_ii.length; i++) {
	// Creo una nueva fila
	let nueva_fila_deuda_corpoelec2 = document.createElement("tr");

	// Creo las columnas de esa nueva fila
	let nueva_columna1 = document.createElement("td");
	let nueva_columna2 = document.createElement("td");
	let nueva_columna3 = document.createElement("td");
	let nueva_columna4 = document.createElement("td");

	// Inserto todas las columnas dentro de la fila que creé
	nueva_fila_deuda_corpoelec2.appendChild(nueva_columna1);
	nueva_fila_deuda_corpoelec2.appendChild(nueva_columna2);
	nueva_fila_deuda_corpoelec2.appendChild(nueva_columna3);
	nueva_fila_deuda_corpoelec2.appendChild(nueva_columna4);

	// Inserto la nueva fila al cuerpo de la tabla
	cuerpo_tabla_deuda_corpoelec2.appendChild(nueva_fila_deuda_corpoelec2);

	// Inserto contenido a las celdas de la nueva fila
	nueva_columna1.innerText = cuota_corpoelec_ii[i]["APTO."];
	nueva_columna2.innerText = `${cuota_corpoelec_ii[i]["PROPIETARIO"]}`;
	nueva_columna3.innerText = cuota_corpoelec_ii[i]["PAGO"].toFixed(2);
	nueva_columna4.innerText = cuota_corpoelec_ii[i]["DEUDA"].toFixed(2);

	// Cuento las filas del cuerpo de la tabla
	let conteo_filas = cuerpo_tabla_deuda_corpoelec2.getElementsByTagName("tr").length;

	// Aplico color de fondo a los hijos impares del cuerpo de tabla
	if(conteo_filas % 2 !== 0) {
		nueva_fila_deuda_corpoelec2.style.backgroundColor = '#FCFCB0';
	}
}

/* AÑO 2022*/
// Accedo al body de la tabla de deuda 2022
const cuerpo_tabla_deuda_2022 = document.getElementById("cuerpo_tabla_deuda_2022");

// Ciclo para agregar cada nueva fila con el número de columnas indicado y contenido correspondiente
for(let i = 0; i < condominio_deuda_2022.length; i++) {
	// Creo una nueva fila
	let nueva_fila_deuda_2022 = document.createElement("tr");

	// Creo las columnas de esa nueva fila
	let nueva_columna1 = document.createElement("td");
	let nueva_columna2 = document.createElement("td");
	let nueva_columna3 = document.createElement("td");
	

	// Inserto todas las columnas dentro de la fila que creé
	nueva_fila_deuda_2022.appendChild(nueva_columna1);
	nueva_fila_deuda_2022.appendChild(nueva_columna2);
	nueva_fila_deuda_2022.appendChild(nueva_columna3);


	// Inserto la nueva fila al cuerpo de la tabla
	cuerpo_tabla_deuda_2022.appendChild(nueva_fila_deuda_2022);

	// Inserto contenido a las celdas de la nueva fila
	nueva_columna1.innerText = condominio_deuda_2022[i]["APTO."];
	nueva_columna2.innerText = `${condominio_deuda_2022[i]["PROPIETARIO"]}`;
	nueva_columna3.innerText = condominio_deuda_2022[i]["DEUDA"].toFixed(2);

	// Cuento las filas del cuerpo de la tabla
	let conteo_filas = cuerpo_tabla_deuda_2022.getElementsByTagName("tr").length;

	// Aplico color de fondo a los hijos impares del cuerpo de tabla
	if(conteo_filas % 2 !== 0) {
		nueva_fila_deuda_2022.style.backgroundColor = '#9F9D9D';
	}
}

/* AÑO 2023*/
// Accedo al body de la tabla de deuda 2023
const cuerpo_tabla_deuda_2023 = document.getElementById("cuerpo_tabla_deuda_2023");

// Ciclo para agregar cada nueva fila con el número de columnas indicado y contenido correspondiente
for(let i = 0; i < condominio_deuda_2023.length; i++) {
	// Creo una nueva fila
	let nueva_fila_deuda_2023 = document.createElement("tr");

	// Creo las columnas de esa nueva fila
	let nueva_columna1 = document.createElement("td");
	let nueva_columna2 = document.createElement("td");
	let nueva_columna3 = document.createElement("td");
	

	// Inserto todas las columnas dentro de la fila que creé
	nueva_fila_deuda_2023.appendChild(nueva_columna1);
	nueva_fila_deuda_2023.appendChild(nueva_columna2);
	nueva_fila_deuda_2023.appendChild(nueva_columna3);


	// Inserto la nueva fila al cuerpo de la tabla
	cuerpo_tabla_deuda_2023.appendChild(nueva_fila_deuda_2023);

	// Inserto contenido a las celdas de la nueva fila
	nueva_columna1.innerText = condominio_deuda_2023[i]["APTO."];
	nueva_columna2.innerText = `${condominio_deuda_2023[i]["PROPIETARIO"]}`;
	nueva_columna3.innerText = condominio_deuda_2023[i]["DEUDA"].toFixed(2);

	// Cuento las filas del cuerpo de la tabla
	let conteo_filas = cuerpo_tabla_deuda_2023.getElementsByTagName("tr").length;

	// Aplico color de fondo a los hijos impares del cuerpo de tabla
	if(conteo_filas % 2 !== 0) {
		nueva_fila_deuda_2023.style.backgroundColor = '#C3F4FE';
	}
}

/* HIDROLAGO AÑO 2023*/
// Accedo al body de la tabla de deuda hidrolago 2023
const cuerpo_tabla_deuda_hidrolago_2023 = document.getElementById("cuerpo_tabla_deuda_hidrolago_2023");

// Ciclo para agregar cada nueva fila con el número de columnas indicado y contenido correspondiente
for(let i = 0; i < hidrolago_deuda_2023.length; i++) {
	// Creo una nueva fila
	let nueva_fila_deuda_hidrolago_2023 = document.createElement("tr");

	// Creo las columnas de esa nueva fila
	let nueva_columna1 = document.createElement("td");
	let nueva_columna2 = document.createElement("td");
	let nueva_columna3 = document.createElement("td");
	

	// Inserto todas las columnas dentro de la fila que creé
	nueva_fila_deuda_hidrolago_2023.appendChild(nueva_columna1);
	nueva_fila_deuda_hidrolago_2023.appendChild(nueva_columna2);
	nueva_fila_deuda_hidrolago_2023.appendChild(nueva_columna3);


	// Inserto la nueva fila al cuerpo de la tabla
	cuerpo_tabla_deuda_hidrolago_2023.appendChild(nueva_fila_deuda_hidrolago_2023);

	// Inserto contenido a las celdas de la nueva fila
	nueva_columna1.innerText = hidrolago_deuda_2023[i]["APTO."];
	nueva_columna2.innerText = `${hidrolago_deuda_2023[i]["PROPIETARIO"]}`;
	nueva_columna3.innerText = hidrolago_deuda_2023[i]["DEUDA"].toFixed(2);

	// Cuento las filas del cuerpo de la tabla
	let conteo_filas = cuerpo_tabla_deuda_hidrolago_2023.getElementsByTagName("tr").length;

	// Aplico color de fondo a los hijos impares del cuerpo de tabla
	if(conteo_filas % 2 !== 0) {
		nueva_fila_deuda_hidrolago_2023.style.backgroundColor = '#ACD982';
	}
}


// CÓDIGO PARA LLENAR TABLA RESUMEN


// Accedo al body de la tabla de resumen de condominio
let cuerpo_tabla_resumen = document.getElementById("cuerpo_tabla_resumen");

// Cuento las filas del cuerpo de la tabla
let conteo_filas_resumen = cuerpo_tabla_resumen.getElementsByTagName("tr").length;

// Aplico color de fondo a los hijos impares del cuerpo de tabla
for(let i = 0; i < 12; i++) {
	if(i % 2 !== 0) {
		let fila_resumen = cuerpo_tabla_resumen.children[i];
		fila_resumen.style.backgroundColor = '#eae4f4';
	}
}