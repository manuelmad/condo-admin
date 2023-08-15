// Imprimir recibo en .pdf
let boton_recibo = document.getElementById("boton_recibo");
boton_recibo.addEventListener("click", crearPDF);

function crearPDF() {
	let doc = new jsPDF('landscape'); // 295 x 210

	// Método .split() para crear un array a partir del string de nombre y apellido que aparece en la tabla
	let nombre_propietario = document.getElementById("nombre_propietario").innerText.split(' ');

	// Notificar al usuario que debe elegir propietario
	if(nombre_propietario[0] === "") {
		alert("Por favor, elija un propietario o apartamento para generar el recibo.");
		console.error("No se eligió propietario.");
		return;
	}

	// Método .find() para encontrar cuál propietario de la base de datos coincide con el que está en la tabla
	let propietario = propietarios.find(item => item.nombre == nombre_propietario[0] && item.apellido == nombre_propietario[1]);
	console.log(propietario);

	// Marco
	doc.line(10, 10, 285, 10); // línea horizontal superior //
	doc.line(10, 10, 10, 200); // línea vertical izquierda //
	doc.line(10, 200, 285, 200); // línea horizontal inferior //
	doc.line(285, 10, 285, 200); // línea vertical derecha //

	// Cabecera
	doc.setFontSize(10);
	doc.text(20, 20, "Junta Administrativa del Condominio Los Apamates");
	doc.text(20, 25, "Domicilio Fiscal: Conjunto Residencial El Varillal - Condominio Los Apamates II. - Parroquia Cecilio Acosta - Maracaibo, Edo. Zulia");
	doc.text(230, 20, "R.I.F.: J-31622933-5");
	doc.text(230, 25, "N° de recibo: " + ano + "-" + (meses_ano.indexOf(ultimo_mes_vencido)+1) + "-" + propietario.apartamento);
	let fecha = new Date();
	doc.text(230, 30, "Fecha de emisión: " + fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear());

	// Fila Propietario
	doc.setFillColor(171, 42, 62);
	doc.rect(10, 50, 20, 10, 'f'); // 3ra coordenada: ancho, 4° coordenada: alto
	doc.rect(228, 50, 30, 10, 'f'); // 3ra coordenada: ancho, 4° coordenada: alto
	doc.line(10, 50, 285, 50); // Línea horizontal superior
	doc.setTextColor(255,255,255); // Blanco
	doc.text(12, 56, "Recibí de: ");
	doc.setTextColor(0,0,0); // Negro
	doc.text(35, 56, propietario.nombre + " " + propietario.apellido);
	doc.setTextColor(255,255,255); // Blanco
	doc.text(230, 56, "Apartamento N°: ");
	doc.setTextColor(0,0,0); // Negro
	doc.text(263, 56, propietario.apartamento);
	doc.line(10, 60, 285, 60); // Línea horizontal inferior
	doc.line(30, 50, 30, 60); // Línea vertical separadora
	doc.line(228, 50, 228, 60); // Línea vertical separadora
	doc.line(258, 50, 258, 60); // Línea vertical separadora

	// Fila mensualidades
	doc.setFillColor(171,42,62); // Granate
	doc.rect(10, 70, 275, 10, 'f'); // 3ra coordenada: ancho, 4° coordenada: alto
	doc.line(10, 70, 285, 70); // Línea horizontal superior
	doc.line(10, 80, 285, 80); // Línea horizontal inferior
	doc.setTextColor(255,255,255); // Blanco
	doc.text(147.5, 76, "CUOTAS DE CONDOMINIO", 'center');
	
	doc.line(10, 90, 285, 90); // Línea horizontal
	doc.line(10, 100, 285, 100); // Línea horizontal
	doc.line(10, 110, 285, 110); // Línea horizontal
	doc.line(10, 120, 285, 120); // Línea horizontal
	doc.line(98.3, 80, 98.3, 120); // Línea vertical separadora
	doc.line(196.67, 80, 196.67, 120); // Línea vertical separadora

	doc.setTextColor(0,0,0); // Negro
	doc.text(12, 86, "Ene-2022: ");
	doc.text(12, 96, "Feb-2022: ");
	doc.text(12, 106, "Mar-2022: ");
	doc.text(12, 116, "Abr-2022: ");

	doc.line(30, 80, 30, 120); // Línea vertical separadora

	// CÓDIGO PARA ASIGNAR EL ESTATUS MENSUAL DE CADA PROPIETARIO
	// En un condominio donde se conozcan los montos de todas las cuotas del año, hay que agregar el condicional para que si se hace un pago adelantado, determinar si es completo o un abono.
	let check_enero;
	if(propietario.deudaCondominioEnero.toFixed(1) == 0 && meses_ano.indexOf("Enero") <= meses_ano.indexOf(ultimo_mes_vencido)) {
		check_enero = "PAGADO";
	} else if (propietario.abonoEnero !== 0) {
		check_enero = "ABONADO";
	} else if(propietario.deudaCondominioEnero.toFixed(1) !== 0 && meses_ano.indexOf("Enero") <= meses_ano.indexOf(ultimo_mes_vencido)) {
		check_enero = "MES ADEUDADO";
	} else {
		check_enero = "-";
	}
	doc.text(32, 86, check_enero);

	let check_febrero;
	if(propietario.deudaCondominioFebrero.toFixed(1) == 0 && meses_ano.indexOf("Febrero") <= meses_ano.indexOf(ultimo_mes_vencido)) {
		check_febrero = "PAGADO";
	} else if (propietario.abonoFebrero !== 0) {
		check_febrero = "ABONADO";
	} else if(propietario.deudaCondominioFebrero.toFixed(1) !== 0 && meses_ano.indexOf("Febrero") <= meses_ano.indexOf(ultimo_mes_vencido)) {
		check_febrero = "MES ADEUDADO";
	} else {
		check_febrero = "-";
	}
	doc.text(32, 96, check_febrero);

	let check_marzo;
	if(propietario.deudaCondominioMarzo.toFixed(1) == 0 && meses_ano.indexOf("Marzo") <= meses_ano.indexOf(ultimo_mes_vencido)) {
		check_marzo = "PAGADO";
	} else if (propietario.abonoMarzo !== 0) {
		check_marzo = "ABONADO";
	} else if(propietario.deudaCondominioMarzo.toFixed(1) !== 0 && meses_ano.indexOf("Marzo") <= meses_ano.indexOf(ultimo_mes_vencido)) {
		check_marzo = "MES ADEUDADO";
	} else {
		check_marzo = "-";
	}
	doc.text(32, 106, check_marzo);

	let check_abril;
	if(propietario.deudaCondominioAbril.toFixed(1) == 0 && meses_ano.indexOf("Abril") <= meses_ano.indexOf(ultimo_mes_vencido)) {
		check_abril = "PAGADO";
	} else if (propietario.abonoAbril !== 0) {
		check_abril = "ABONADO";
	} else if(propietario.deudaCondominioAbril.toFixed(1) !== 0 && meses_ano.indexOf("Abril") <= meses_ano.indexOf(ultimo_mes_vencido)) {
		check_abril = "MES ADEUDADO";
	} else {
		check_abril = "-";
	}
	doc.text(32, 116, check_abril);

	doc.text(100.3, 86, "May-2022: ");
	doc.text(100.3, 96, "Jun-2022: ");
	doc.text(100.3, 106, "Jul-2022: ");
	doc.text(100.3, 116, "Ago-2022: ");

	doc.line(118.3, 80, 118.3, 120); // Línea vertical separadora

	let check_mayo;
	if(propietario.deudaCondominioMayo.toFixed(1) == 0 && meses_ano.indexOf("Mayo") <= meses_ano.indexOf(ultimo_mes_vencido)) {
		check_mayo = "PAGADO";
	} else if (propietario.abonoMayo !== 0) {
		check_mayo = "ABONADO";
	} else if(propietario.deudaCondominioMayo.toFixed(1) !== 0 && meses_ano.indexOf("Mayo") <= meses_ano.indexOf(ultimo_mes_vencido)) {
		check_mayo = "MES ADEUDADO";
	} else {
		check_mayo = "-";
	}
	doc.text(120.3, 86, check_mayo);

	let check_junio;
	if(propietario.deudaCondominioJunio.toFixed(1) == 0 && meses_ano.indexOf("Junio") <= meses_ano.indexOf(ultimo_mes_vencido)) {
		check_junio = "PAGADO";
	} else if (propietario.abonoJunio !== 0) {
		check_junio = "ABONADO";
	} else if(propietario.deudaCondominioJunio.toFixed(1) !== 0 && meses_ano.indexOf("Junio") <= meses_ano.indexOf(ultimo_mes_vencido)) {
		check_junio = "MES ADEUDADO";
	} else {
		check_junio = "-";
	}
	doc.text(120.3, 96, check_junio);

	let check_julio;
	if(propietario.deudaCondominioJulio.toFixed(1) == 0 && meses_ano.indexOf("Julio") <= meses_ano.indexOf(ultimo_mes_vencido)) {
		check_julio = "PAGADO";
	} else if (propietario.abonoJulio !== 0) {
		check_julio = "ABONADO";
	} else if(propietario.deudaCondominioJulio.toFixed(1) !== 0 && meses_ano.indexOf("Julio") <= meses_ano.indexOf(ultimo_mes_vencido)) {
		check_julio = "MES ADEUDADO";
	} else {
		check_julio = "-";
	}
	doc.text(120.3, 106, check_julio);

	let check_agosto;
	if(propietario.deudaCondominioAgosto.toFixed(1) == 0 && meses_ano.indexOf("Agosto") <= meses_ano.indexOf(ultimo_mes_vencido)) {
		check_agosto = "PAGADO";
	} else if (propietario.abonoAgosto !== 0) {
		check_agosto = "ABONADO";
	} else if(propietario.deudaCondominioAgosto.toFixed(1) !== 0 && meses_ano.indexOf("Agosto") <= meses_ano.indexOf(ultimo_mes_vencido)) {
		check_agosto = "MES ADEUDADO";
	} else {
		check_agosto = "-";
	}
	doc.text(120.3, 116, check_agosto);

	doc.text(198.67, 86, "Sep-2022: ");
	doc.text(198.67, 96, "Oct-2022: ");
	doc.text(198.67, 106, "Nov-2022: ");
	doc.text(198.67, 116, "Dic-2022: ");

	doc.line(216.67, 80, 216.67, 120); // Línea vertical separadora

	let check_septiembre;
	if(propietario.deudaCondominioSeptiembre.toFixed(1) == 0 && meses_ano.indexOf("Septiembre") <= meses_ano.indexOf(ultimo_mes_vencido)) {
		check_septiembre = "PAGADO";
	} else if (propietario.abonoSeptiembre !== 0) {
		check_septiembre = "ABONADO";
	} else if(propietario.deudaCondominioSeptiembre.toFixed(1) !== 0 && meses_ano.indexOf("Septiembre") <= meses_ano.indexOf(ultimo_mes_vencido)) {
		check_septiembre = "MES ADEUDADO";
	} else {
		check_septiembre = "-";
	}
	doc.text(218.67, 86, check_septiembre);

	let check_octubre;
	if(propietario.deudaCondominioOctubre.toFixed(1) == 0 && meses_ano.indexOf("Octubre") <= meses_ano.indexOf(ultimo_mes_vencido)) {
		check_octubre = "PAGADO";
	} else if (propietario.abonoOctubre !== 0) {
		check_octubre = "ABONADO";
	} else if(propietario.deudaCondominioOctubre.toFixed(1) !== 0 && meses_ano.indexOf("Octubre") <= meses_ano.indexOf(ultimo_mes_vencido)) {
		check_octubre = "MES ADEUDADO";
	} else {
		check_octubre = "-";
	}
	doc.text(218.67, 96, check_octubre);

	let check_noviembre;
	if(propietario.deudaCondominioNoviembre.toFixed(1) == 0 && meses_ano.indexOf("Noviembre") <= meses_ano.indexOf(ultimo_mes_vencido)) {
		check_noviembre = "PAGADO";
	} else if (propietario.abonoNoviembre !== 0) {
		check_noviembre = "ABONADO";
	} else if(propietario.deudaCondominioNoviembre.toFixed(1) !== 0 && meses_ano.indexOf("Noviembre") <= meses_ano.indexOf(ultimo_mes_vencido)) {
		check_noviembre = "MES ADEUDADO";
	} else {
		check_noviembre = "-";
	}
	doc.text(218.67, 106, check_noviembre);

	let check_diciembre;
	if(propietario.deudaCondominioDiciembre.toFixed(1) == 0 && meses_ano.indexOf("Diciembre") <= meses_ano.indexOf(ultimo_mes_vencido)) {
		check_diciembre = "PAGADO";
	} else if (propietario.abonoDiciembre !== 0) {
		check_diciembre = "ABONADO";
	} else if(propietario.deudaCondominioDiciembre.toFixed(1) !== 0 && meses_ano.indexOf("Diciembre") <= meses_ano.indexOf(ultimo_mes_vencido)) {
		check_diciembre = "MES ADEUDADO";
	} else {
		check_diciembre = "-";
	}
	doc.text(218.67, 116, check_diciembre);


	// Fila cuotas especiales
	doc.setFillColor(171,42,62); // Granate
	doc.rect(10, 130, 275, 10, 'f'); // 3ra coordenada: ancho, 4° coordenada: alto
	doc.line(10, 130, 285, 130); // Línea horizontal superior
	doc.line(10, 140, 285, 140); // Línea horizontal inferior
	doc.setTextColor(255,255,255); // Blanco
	doc.text(147.5, 136, "CUOTAS ESPECIALES", 'center');

	doc.line(10, 150, 285, 150); // Línea horizontal
	doc.line(147.5, 140, 147.5, 150); // Línea vertical separadora
	doc.line(50, 140, 50, 150); // Línea vertical separadora
	doc.line(178, 140, 178, 150); // Línea vertical separadora

	doc.setTextColor(0,0,0); // Negro
	doc.text(12, 146, "Cuota Tanque Azotea: ");
	doc.text(149.5, 146, "Cuota Hidrolago: ");

	let check_azotea;
	if(propietario.deudaCuotaAzotea == 0) {
		check_azotea = "PAGADO";
	} else if (propietario.pagoCuotaAzotea !==0 && propietario.pagoCuotaAzotea !==0 < cuotasEspeciales.tanque_azotea) {
		check_azotea = "ABONADO";
	} else if(propietario.pagoCuotaAzotea == 0) {
		check_azotea = "CUOTA ADEUDADA";
	}
	doc.text(52, 146, check_azotea);

	let check_hidrolago;
	if(propietario.deudaCuotaHidrolago == 0) {
		check_hidrolago = "PAGADO";
	} else if (propietario.pagoCuotaHidrolago !==0 && propietario.pagoCuotaHidrolago !==0 < cuotasEspeciales.hidrolago) {
		check_hidrolago = "ABONADO";
	} else if(propietario.pagoCuotaHidrolago == 0) {
		check_hidrolago = "CUOTA ADEUDADA";
	}
	doc.text(180, 146, check_hidrolago);

	// Firma
	doc.line(117.5, 185, 177.5, 185); // Línea horizontal
	doc.text(147.5, 190, `Aprobado por: ${administrador.nombre} ${administrador.apellido}`, 'center');
	doc.text(147.5, 195, `Administrador(a) del Condominio`, 'center');
	
	window.open(doc.output('bloburl'), '_blank'); // Para que el .pdf aparezca en una nueva ventana //
}