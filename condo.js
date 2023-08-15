// Evento que captura la selección de la lista de filtrado
let filtro_busqueda = document.getElementById("filtro_busqueda");
filtro_busqueda.addEventListener("change", cambiarFiltro);

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

// VARIABLES GENERALES
let ano = 2022;

let meses_ano = [
	"Enero",
	"Febrero",
	"Marzo",
	"Abril",
	"Mayo",
	"Junio",
	"Julio",
	"Agosto",
	"Septiembre",
	"Octubre",
	"Noviembre",
	"Diciembre"
];

let indice_enero = meses_ano.indexOf("Enero");
let indice_febrero = meses_ano.indexOf("Febrero");
let indice_marzo = meses_ano.indexOf("Marzo");
let indice_abril = meses_ano.indexOf("Abril");
let indice_mayo= meses_ano.indexOf("Mayo");
let indice_junio = meses_ano.indexOf("Junio");
let indice_julio = meses_ano.indexOf("Julio");
let indice_agosto= meses_ano.indexOf("Agosto");
let indice_septiembre = meses_ano.indexOf("Septiembre");
let indice_octubre = meses_ano.indexOf("Octubre");
let indice_noviembre = meses_ano.indexOf("Noviembre");
let indice_diciembre = meses_ano.indexOf("Diciembre");


let ultimo_mes_vencido;
// ultimo_mes_vencido = "Agosto";
let indice_ultimo_mes_vencido;

function actualizarMesVencido(mes) {
	ultimo_mes_vencido = mes;
	document.getElementById("mes_vencido").innerText = ultimo_mes_vencido;
	document.getElementById("mes_fondo").innerText = ultimo_mes_vencido;
	console.log("Último mes vencido: " + ultimo_mes_vencido);

	indice_ultimo_mes_vencido = meses_ano.indexOf(ultimo_mes_vencido);
	console.log("Índice del último mes vencido: " + indice_ultimo_mes_vencido);
}

actualizarMesVencido("Agosto");


let tasa_mora = 0.1;


//OBJETO LITERAL PARA LAS CUOTAS DE CONDOMINIO
const cuotasCondominio = {
	cuotaEnero: 6,
	cuotaFebrero: 6,
	cuotaMarzo: 6,
	cuotaAbril: 13,
	cuotaMayo: 18,
	cuotaJunio: 23,
	cuotaJulio: 23,
	cuotaAgosto: 23,
	cuotaSeptiembre: 23,
	cuotaOctubre: 28,
	cuotaNoviembre: 28,
	cuotaDiciembre: 28,
};
console.log("Objeto Literal Cuotas Condominio: ");
console.log(cuotasCondominio);

// AGREGAR CUOTAS EN TABLA

// Accedo al body de la tabla de cuotas condominio
let cuerpo_tabla_cuotas_condominio = document.getElementById("cuerpo_tabla_cuotas_condominio");

// Ciclo para agregar cada nueva fila con el número de columnas indicado y contenido correspondiente
for(let i = 0; i < meses_ano.length; i++) {
	// Creo una nueva fila
	let nueva_fila_cuotas_condominio = document.createElement("tr");

	// Creo las columnas de esa nueva fila
	let nueva_columna1 = document.createElement("td");
	let nueva_columna2 = document.createElement("td");

	// Inserto todas las columnas dentro de la fila que creé
	nueva_fila_cuotas_condominio.appendChild(nueva_columna1);
	nueva_fila_cuotas_condominio.appendChild(nueva_columna2);

	// Inserto la fila al cuerpo de la tabla
	cuerpo_tabla_cuotas_condominio.appendChild(nueva_fila_cuotas_condominio);

	// Inserto contenido a las celdas de la nueva fila
	nueva_columna1.innerText = meses_ano[i];
	nueva_columna2.innerText = Object.values(cuotasCondominio)[i];

	// Aplico color de fondo a los hijos impares del cuerpo de tabla
	if(i % 2 !== 0) {
		nueva_fila_cuotas_condominio.style.backgroundColor = '#f4e4e7';
	}
}


//OBJETO LITERAL PARA LAS CUOTAS ESPECIALES 
const cuotasEspeciales = {
	hidrolago: 115.35,
	tanque_azotea: 1.5,
	corpoelec:25,
};
console.log("Objeto Literal Cuotas Especiales: ");
console.log(cuotasEspeciales);

// Añadir los montos de las cuotas especiales en sus tablas
document.getElementById("cuota_azotea").innerText = cuotasEspeciales.tanque_azotea;
document.getElementById("cuota_hidrolago").innerText = cuotasEspeciales.hidrolago;


// OBJETO LITERAL PARA LOS INGRESOS EN BOLÍVARES DE LA CUOTA DE LA AZOTEA
const ingresos_cuota_azotea_Bs = {
	helen_ramones: 6.15,
	ceila_fuenmayor: 6.15,
	maria_troconiz: 6.15,
	euro_ochoa: 6.15,
	oscar_salas: 6.15,
	thania_avila: 6.15,
	wilson_manzano: 6.15,
	yesenia_berris: 6.15,
	luzmarina_paz: 6.15,
	luis_rivas: 6.15,
	veronica_hernandez: 6.15,
	euro_alfaro: 6.15,
	manuel_araujo: 6.15,
	neidy_atencio: 0,
	mariely_garcia: 6.15,
	elias_gamboa: 6.85,
	isabel_aponte: 6.9,
};

console.log("Objeto Literal Ingresos Bolívares Cuota Azotea: ");
console.log(ingresos_cuota_azotea_Bs);

// Cálculo de bolívares totales por cuota azotea
let array_tanque_Bs = Object.values(ingresos_cuota_azotea_Bs);
let ingreso_tanque_total_Bs = array_tanque_Bs.reduce((sum, item) => sum + item, 0);

//OBJETO LITERAL PARA LOS GASTOS DE LAS CUOTAS ESPECIALES 
const gastosCuotasEspeciales = {
	hidrolago: 1060+10,
	tanque_azotea: 12.5+41+3.6+6.15,
};
console.log("Objeto Literal Gastos Cuotas Especiales: ");
console.log(gastosCuotasEspeciales);


//PROTIPO PARA LOS PROPIETARIOS
// Pago: Correspondiente al mes en curso o mes vencido.
// Abono: Correpondiente a mes adelantado.
// Deuda: Correspondiente al mes en curso o mes vencido.
// Pendiente: Correpondiente a mes adelantado.
class Propietario {
	constructor({
		nombre,
		apellido,
		apartamento,
		administrador = false,

		pagoEnero = [],
		pagoFebrero = [],
		pagoMarzo = [],
		pagoAbril = [],
		pagoMayo = [],
		pagoJunio = [],
		pagoJulio = [],
		pagoAgosto = [],
		pagoSeptiembre = [],
		pagoOctubre = [],
		pagoNoviembre = [],
		pagoDiciembre = [],

		totalEnero = 0,
		totalFebrero = 0,
		totalMarzo = 0,
		totalAbril = 0,
		totalMayo = 0,
		totalJunio = 0,
		totalJulio = 0,
		totalAgosto = 0,
		totalSeptiembre = 0,
		totalOctubre = 0,
		totalNoviembre = 0,
		totalDiciembre = 0,
		totalPagos = 0,
		/* Creo que hay que aplicar arrays a los abonos también */
		abonoEnero = 0,
		abonoFebrero = 0,
		abonoMarzo = 0,
		abonoAbril = 0,
		abonoMayo = 0,
		abonoJunio = 0,
		abonoJulio = 0,
		abonoAgosto = 0,
		abonoSeptiembre = 0,
		abonoOctubre = 0,
		abonoNoviembre = 0,
		abonoDiciembre = 0,
		totalAbonos = 0,

		deudaCondominioEnero = 0,
		deudaCondominioFebrero = 0,
		deudaCondominioMarzo = 0,
		deudaCondominioAbril = 0,
		deudaCondominioMayo = 0,
		deudaCondominioJunio = 0,
		deudaCondominioJulio = 0,
		deudaCondominioAgosto = 0,
		deudaCondominioSeptiembre = 0,
		deudaCondominioOctubre = 0,
		deudaCondominioNoviembre = 0,
		deudaCondominioDiciembre = 0,
		deudaCondominioTotal,

		pendienteEnero = 0,
		pendienteFebrero = 0,
		pendienteMarzo = 0,
		pendienteAbril = 0,
		pendienteMayo = 0,
		pendienteJunio = 0,
		pendienteJulio = 0,
		pendienteAgosto = 0,
		pendienteSeptiembre = 0,
		pendienteOctubre = 0,
		pendienteNoviembre = 0,
		pendienteDiciembre = 0,

		pagoCuotaHidrolago = 0,
		deudaCuotaHidrolago,

		pagoCuotaAzotea = 0,
		deudaCuotaAzotea,

	}) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.apartamento = apartamento;
		this.administrador = administrador;

		this.pagoEnero = pagoEnero;
		this.pagoFebrero = pagoFebrero;
		this.pagoMarzo = pagoMarzo;
		this.pagoAbril = pagoAbril;
		this.pagoMayo = pagoMayo;
		this.pagoJunio = pagoJunio;
		this.pagoJulio = pagoJulio;
		this.pagoAgosto = pagoAgosto;
		this.pagoSeptiembre = pagoSeptiembre;
		this.pagoOctubre = pagoOctubre;
		this.pagoNoviembre = pagoNoviembre;
		this.pagoDiciembre = pagoDiciembre;

		this.totalEnero = totalEnero;
		this.totalFebrero = totalFebrero;
		this.totalMarzo = totalMarzo;
		this.totalAbril = totalAbril;
		this.totalMayo = totalMayo;
		this.totalJunio = totalJunio;
		this.totalJulio = totalJulio;
		this.totalAgosto = totalAgosto;
		this.totalSeptiembre = totalSeptiembre;
		this.totalOctubre = totalOctubre;
		this.totalNoviembre = totalNoviembre;
		this.totalDiciembre = totalDiciembre;
		this.totalPagos = totalPagos;

		this.abonoEnero = abonoEnero;
		this.abonoFebrero = abonoFebrero;
		this.abonoMarzo = abonoMarzo;
		this.abonoAbril = abonoAbril;
		this.abonoMayo = abonoMayo;
		this.abonoJunio = abonoJunio;
		this.abonoJulio = abonoJulio;
		this.abonoAgosto = abonoAgosto;
		this.abonoSeptiembre = abonoSeptiembre;
		this.abonoOctubre = abonoOctubre;
		this.abonoNoviembre = abonoNoviembre;
		this.abonoDiciembre = abonoDiciembre;
		this.totalAbonos = totalAbonos;

		this.deudaCondominioEnero = deudaCondominioEnero;
		this.deudaCondominioFebrero = deudaCondominioFebrero;
		this.deudaCondominioMarzo = deudaCondominioMarzo;
		this.deudaCondominioAbril = deudaCondominioAbril;
		this.deudaCondominioMayo = deudaCondominioMayo;
		this.deudaCondominioJunio = deudaCondominioJunio;
		this.deudaCondominioJulio = deudaCondominioJulio;
		this.deudaCondominioAgosto = deudaCondominioAgosto;
		this.deudaCondominioSeptiembre = deudaCondominioSeptiembre;
		this.deudaCondominioOctubre = deudaCondominioOctubre;
		this.deudaCondominioNoviembre = deudaCondominioNoviembre;
		this.deudaCondominioDiciembre = deudaCondominioDiciembre;

		this.pendienteEnero = pendienteEnero;
		this.pendienteFebrero = pendienteFebrero;
		this.pendienteMarzo = pendienteMarzo;
		this.pendienteAbril = pendienteAbril;
		this.pendienteMayo = pendienteMayo;
		this.pendienteJunio = pendienteJunio;
		this.pendienteJulio = pendienteJulio;
		this.pendienteAgosto = pendienteAgosto;
		this.pendienteSeptiembre = pendienteSeptiembre;
		this.pendienteOctubre = pendienteOctubre;
		this.pendienteNoviembre = pendienteNoviembre;
		this.pendienteDiciembre = pendienteDiciembre;

		this.deudaCondominioTotal = deudaCondominioTotal;

		this.pagoCuotaHidrolago = pagoCuotaHidrolago;
		this.deudaCuotaHidrolago = deudaCuotaHidrolago;

		this.pagoCuotaAzotea = pagoCuotaAzotea;
		this.deudaCuotaAzotea = deudaCuotaAzotea;
	}

	actualizarEnero(aporte) {
		this.pagoEnero.push(aporte);

		let suma = (this.pagoEnero.reduce((sum, item) => sum + item, 0));

		let capital = (this.deudaCondominioEnero / (1 + tasa_mora*(indice_ultimo_mes_vencido-indice_enero+1-1)));

		let interes = this.deudaCondominioEnero - capital;

		if(this.deudaCondominioEnero != 0) {
			if(indice_enero <= indice_ultimo_mes_vencido) {
				if(aporte < interes) {
					interes = capital*(tasa_mora*(indice_ultimo_mes_vencido-indice_enero+1)) - aporte;
				}
				else {
					capital = capital - (aporte - interes);
					interes = capital * (tasa_mora*(indice_ultimo_mes_vencido-indice_enero+1));
				}
				this.deudaCondominioEnero = capital + interes;
			}
		}
		else {
			if(indice_enero <= indice_ultimo_mes_vencido) {
				capital = cuotasCondominio.cuotaEnero - aporte;
				interes = capital*(tasa_mora*(indice_ultimo_mes_vencido-indice_enero+1));
				this.deudaCondominioEnero = capital + interes;
				this.abonoEnero = 0;
			}
			else {
				this.abonoEnero = suma;
				this.pendienteEnero = cuotasCondominio.cuotaEnero - this.abonoEnero;
			}
		}
		this.actualizarPagosTotales();
		this.actualizarDeudaTotal();
		this.actualizarAbonosTotales();
	}

	actualizarFebrero(aporte) {
		this.pagoFebrero.push(aporte);

		let suma = (this.pagoFebrero.reduce((sum, item) => sum + item, 0));

		let capital = (this.deudaCondominioFebrero / (1 + tasa_mora*(indice_ultimo_mes_vencido-indice_febrero+1-1)));

		let interes = this.deudaCondominioFebrero - capital;

		if(this.deudaCondominioFebrero != 0) {
			if(indice_febrero <= indice_ultimo_mes_vencido) {
				if(aporte < interes) {
					interes = capital*(tasa_mora*(indice_ultimo_mes_vencido-indice_febrero+1)) - aporte;
				}
				else {
					capital = capital - (aporte - interes);
					interes = capital * (tasa_mora*(indice_ultimo_mes_vencido-indice_febrero+1));
				}
				this.deudaCondominioFebrero = capital + interes;
			}
		}
		else {
			if(indice_febrero <= indice_ultimo_mes_vencido) {
				capital = cuotasCondominio.cuotaFebrero - aporte;
				interes = capital*(tasa_mora*(indice_ultimo_mes_vencido-indice_febrero+1));
				this.deudaCondominioFebrero = capital + interes;
				this.abonoFebrero = 0;
			}
			else {
				this.abonoFebrero = suma;
				this.pendienteFebrero = cuotasCondominio.cuotaFebrero - this.abonoFebrero;
			}
		}
		this.actualizarPagosTotales();
		this.actualizarDeudaTotal();
		this.actualizarAbonosTotales();
	}

	actualizarMarzo(aporte) {
		this.pagoMarzo.push(aporte);

		let suma = (this.pagoMarzo.reduce((sum, item) => sum + item, 0));

		let capital = (this.deudaCondominioMarzo / (1 + tasa_mora*(indice_ultimo_mes_vencido-indice_marzo+1-1)));

		let interes = this.deudaCondominioMarzo - capital;

		if(this.deudaCondominioMarzo != 0) {
			if(indice_marzo <= indice_ultimo_mes_vencido) {
				if(aporte < interes) {
					interes = capital*(tasa_mora*(indice_ultimo_mes_vencido-indice_marzo+1)) - aporte;
				}
				else {
					capital = capital - (aporte - interes);
					interes = capital * (tasa_mora*(indice_ultimo_mes_vencido-indice_marzo+1));
				}
				this.deudaCondominioMarzo = capital + interes;
			}
		}
		else {
			if(indice_marzo <= indice_ultimo_mes_vencido) {
				capital = cuotasCondominio.cuotaMarzo - aporte;
				interes = capital*(tasa_mora*(indice_ultimo_mes_vencido-indice_marzo+1));
				this.deudaCondominioMarzo = capital + interes;
				this.abonoMarzo = 0;
			}
			else {
				this.abonoMarzo = suma;
				this.pendienteMarzo = cuotasCondominio.cuotaMarzo - this.abonoMarzo;
			}
		}
		this.actualizarPagosTotales();
		this.actualizarDeudaTotal();
		this.actualizarAbonosTotales();
	}

	actualizarAbril(aporte) {
		this.pagoAbril.push(aporte);

		let suma = (this.pagoAbril.reduce((sum, item) => sum + item, 0));

		let capital = (this.deudaCondominioAbril / (1 + tasa_mora*(indice_ultimo_mes_vencido-indice_abril+1-1)));

		let interes = this.deudaCondominioAbril - capital;

		if(this.deudaCondominioAbril != 0) {
			if(indice_abril <= indice_ultimo_mes_vencido) {
				if(aporte < interes) {
					interes = - aporte + capital*(tasa_mora*(indice_ultimo_mes_vencido-indice_abril+1));
				}
				else {
					capital = capital - (aporte - interes);
					interes = capital * (tasa_mora*(indice_ultimo_mes_vencido-indice_abril+1));
				}
				this.deudaCondominioAbril = capital + interes;
			}
		}
		else {
			if(indice_abril <= indice_ultimo_mes_vencido) {
				capital = cuotasCondominio.cuotaAbril - aporte;
				interes = capital*(tasa_mora*(indice_ultimo_mes_vencido-indice_abril+1));
				this.deudaCondominioAbril = capital + interes;
				this.abonoAbril = 0;
			}
			else {
				this.abonoAbril = suma;
				this.pendienteAbril = cuotasCondominio.cuotaAbril - this.abonoAbril;
			}
		}
		this.actualizarPagosTotales();
		this.actualizarDeudaTotal();
		this.actualizarAbonosTotales();
	}

	actualizarMayo(aporte) {
		this.pagoMayo.push(aporte);

		let suma = (this.pagoMayo.reduce((sum, item) => sum + item, 0));

		let capital = (this.deudaCondominioMayo / (1 + tasa_mora*(indice_ultimo_mes_vencido-indice_mayo+1-1)));

		let interes = this.deudaCondominioMayo - capital;

		if(this.deudaCondominioMayo != 0) {
			if(indice_mayo <= indice_ultimo_mes_vencido) {
				if(aporte < interes) {
					interes = - aporte + capital*(tasa_mora*(indice_ultimo_mes_vencido-indice_mayo+1));
				}
				else {
					capital = capital - (aporte - interes);
					interes = capital * (tasa_mora*(indice_ultimo_mes_vencido-indice_mayo+1));
				}
				this.deudaCondominioMayo = capital + interes;
			}
		}
		else {
			if(indice_mayo <= indice_ultimo_mes_vencido) {
				capital = cuotasCondominio.cuotaMayo - aporte;
				interes = capital*(tasa_mora*(indice_ultimo_mes_vencido-indice_mayo+1));
				this.deudaCondominioMayo = capital + interes;
				this.abonoMayo = 0;
			}
			else {
				this.abonoMayo = suma;
				this.pendienteMayo = cuotasCondominio.cuotaMayo - this.abonoMayo;
			}
		}
		this.actualizarPagosTotales();
		this.actualizarDeudaTotal();
		this.actualizarAbonosTotales();
	}

	actualizarJunio(aporte) {
		this.pagoJunio.push(aporte);

		let suma = (this.pagoJunio.reduce((sum, item) => sum + item, 0));

		let capital = (this.deudaCondominioJunio / (1 + tasa_mora*(indice_ultimo_mes_vencido-indice_junio+1-1)));

		let interes = this.deudaCondominioJunio - capital;

		if(this.deudaCondominioJunio != 0) {
			if(indice_junio <= indice_ultimo_mes_vencido) {
				if(aporte < interes) {
					interes = - aporte + capital*(tasa_mora*(indice_ultimo_mes_vencido-indice_junio+1));
				}
				else {
					capital = capital - (aporte - interes);
					interes = capital * (tasa_mora*(indice_ultimo_mes_vencido-indice_junio+1));
				}
				this.deudaCondominioJunio = capital + interes;
			}
		}
		else {
			if(indice_junio <= indice_ultimo_mes_vencido) {
				capital = cuotasCondominio.cuotaJunio - aporte;
				interes = capital*(tasa_mora*(indice_ultimo_mes_vencido-indice_junio+1));
				this.deudaCondominioJunio = capital + interes;
				this.abonoJunio = 0;
			}
			else {
				this.abonoJunio = suma;
				this.pendienteJunio = cuotasCondominio.cuotaJunio - this.abonoJunio;
			}
		}
		this.actualizarPagosTotales();
		this.actualizarDeudaTotal();
		this.actualizarAbonosTotales();
	}

	actualizarJulio(aporte) {
		this.pagoJulio.push(aporte);

		let suma = (this.pagoJulio.reduce((sum, item) => sum + item, 0));

		let capital = (this.deudaCondominioJulio / (1 + tasa_mora*(indice_ultimo_mes_vencido-indice_julio+1-1)));

		let interes = this.deudaCondominioJulio - capital;

		if(this.deudaCondominioJulio != 0) {
			if(indice_julio <= indice_ultimo_mes_vencido) {
				if(aporte < interes) {
					interes = - aporte + capital*(tasa_mora*(indice_ultimo_mes_vencido-indice_julio+1));
				}
				else {
					capital = capital - (aporte - interes);
					interes = capital * (tasa_mora*(indice_ultimo_mes_vencido-indice_julio+1));
				}
				this.deudaCondominioJulio = capital + interes;
			}
		}
		else {
			if(indice_julio <= indice_ultimo_mes_vencido) {
				capital = cuotasCondominio.cuotaJulio - aporte;
				interes = capital*(tasa_mora*(indice_ultimo_mes_vencido-indice_julio+1));
				this.deudaCondominioJulio = capital + interes;
				this.abonoJulio = 0;
			}
			else {
				this.abonoJulio = suma;
				this.pendienteJulio = cuotasCondominio.cuotaJulio - this.abonoJulio;
			}
		}
		this.actualizarPagosTotales();
		this.actualizarDeudaTotal();
		this.actualizarAbonosTotales();
	}

	actualizarAgosto(aporte) {
		this.pagoAgosto.push(aporte);

		let suma = (this.pagoAgosto.reduce((sum, item) => sum + item, 0));

		let capital = (this.deudaCondominioAgosto / (1 + tasa_mora*(indice_ultimo_mes_vencido-indice_agosto+1-1)));

		let interes = this.deudaCondominioAgosto - capital;

		if(this.deudaCondominioAgosto != 0) {
			if(indice_agosto <= indice_ultimo_mes_vencido) {
				if(aporte < interes) {
					interes = - aporte + capital*(tasa_mora*(indice_ultimo_mes_vencido-indice_agosto+1));
				}
				else {
					capital = capital - (aporte - interes);
					interes = capital * (tasa_mora*(indice_ultimo_mes_vencido-indice_agosto+1));
				}
				this.deudaCondominioAgosto = capital + interes;
			}
		}
		else {
			if(indice_agosto <= indice_ultimo_mes_vencido) {
				capital = cuotasCondominio.cuotaAgosto - aporte;
				interes = capital*(tasa_mora*(indice_ultimo_mes_vencido-indice_agosto+1));
				this.deudaCondominioAgosto = capital + interes;
				this.abonoAgosto = 0;
			}
			else {
				this.abonoAgosto = suma;
				this.pendienteAgosto = cuotasCondominio.cuotaAgosto - this.abonoAgosto;
			}
		}
		this.actualizarPagosTotales();
		this.actualizarDeudaTotal();
		this.actualizarAbonosTotales();
	}

	actualizarSeptiembre(aporte) {
		this.pagoSeptiembre.push(aporte);

		let suma = (this.pagoSeptiembre.reduce((sum, item) => sum + item, 0));

		let capital = (this.deudaCondominioSeptiembre / (1 + tasa_mora*(indice_ultimo_mes_vencido-indice_septiembre+1-1)));

		let interes = this.deudaCondominioSeptiembre - capital;

		if(this.deudaCondominioSeptiembre != 0) {
			if(indice_septiembre <= indice_ultimo_mes_vencido) {
				if(aporte < interes) {
					interes = - aporte + capital*(tasa_mora*(indice_ultimo_mes_vencido-indice_septiembre+1));
				}
				else {
					capital = capital - (aporte - interes);
					interes = capital * (tasa_mora*(indice_ultimo_mes_vencido-indice_septiembre+1));
				}
				this.deudaCondominioSeptiembre = capital + interes;
			}
		}
		else {
			if(indice_septiembre <= indice_ultimo_mes_vencido) {
				capital = cuotasCondominio.cuotaSeptiembre - aporte;
				interes = capital*(tasa_mora*(indice_ultimo_mes_vencido-indice_septiembre+1));
				this.deudaCondominioSeptiembre = capital + interes;
				this.abonoSeptiembre = 0;
			}
			else {
				this.abonoSeptiembre = suma;
				this.pendienteSeptiembre = cuotasCondominio.cuotaSeptiembre - this.abonoSeptiembre;
			}
		}
		this.actualizarPagosTotales();
		this.actualizarDeudaTotal();
		this.actualizarAbonosTotales();
	}

	actualizarOctubre(aporte) {
		this.pagoOctubre.push(aporte);

		let suma = (this.pagoOctubre.reduce((sum, item) => sum + item, 0));

		let capital = (this.deudaCondominioOctubre / (1 + tasa_mora*(indice_ultimo_mes_vencido-indice_octubre+1-1)));

		let interes = this.deudaCondominioOctubre - capital;

		if(this.deudaCondominioOctubre != 0) {

			if(indice_octubre <= indice_ultimo_mes_vencido) {
				if(aporte < interes) {
					interes = - aporte + capital*(tasa_mora*(indice_ultimo_mes_vencido-indice_octubre+1));
				}
				else {
					capital = capital - (aporte - interes);
					interes = capital * (tasa_mora*(indice_ultimo_mes_vencido-indice_octubre+1));
				}
				this.deudaCondominioOctubre = capital + interes;
			}
		}
		else {
			if(indice_octubre <= indice_ultimo_mes_vencido) {
				capital = cuotasCondominio.cuotaOctubre - aporte;
				interes = capital*(tasa_mora*(indice_ultimo_mes_vencido-indice_octubre+1));
				this.deudaCondominioOctubre = capital + interes;
				this.abonoOctubre = 0;
			}
			else {
				this.abonoOctubre = suma;
				this.pendienteOctubre = cuotasCondominio.cuotaOctubre - this.abonoOctubre;
			}
		}
		this.actualizarPagosTotales();
		this.actualizarDeudaTotal();
		this.actualizarAbonosTotales();
	}

	actualizarNoviembre(aporte) {
		this.pagoNoviembre.push(aporte);

		let suma = (this.pagoNoviembre.reduce((sum, item) => sum + item, 0));

		let capital = (this.deudaCondominioNoviembre / (1 + tasa_mora*(indice_ultimo_mes_vencido-indice_noviembre+1-1)));

		let interes = this.deudaCondominioNoviembre - capital;

		if(this.deudaCondominioNoviembre != 0) {
			if(indice_noviembre <= indice_ultimo_mes_vencido) {
				if(aporte < interes) {
					interes = - aporte + capital*(tasa_mora*(indice_ultimo_mes_vencido-indice_noviembre+1));
				}
				else {
					capital = capital - (aporte - interes);
					interes = capital * (tasa_mora*(indice_ultimo_mes_vencido-indice_noviembre+1));
				}
				this.deudaCondominioNoviembre = capital + interes;
			}
		}
		else {
			if(indice_noviembre <= indice_ultimo_mes_vencido) {
				capital = cuotasCondominio.cuotaNoviembre - aporte;
				interes = capital*(tasa_mora*(indice_ultimo_mes_vencido-indice_noviembre+1));
				this.deudaCondominioNoviembre = capital + interes;
				this.abonoNoviembre = 0;
			}
			else {
				this.abonoNoviembre = suma;
				this.pendienteNoviembre = cuotasCondominio.cuotaNoviembre - this.abonoNoviembre;
			}
		}
		this.actualizarPagosTotales();
		this.actualizarDeudaTotal();
		this.actualizarAbonosTotales();
	}

	actualizarDiciembre(aporte) {
		this.pagoDiciembre.push(aporte);

		let suma = (this.pagoDiciembre.reduce((sum, item) => sum + item, 0));

		let capital = (this.deudaCondominioDiciembre / (1 + tasa_mora*(indice_ultimo_mes_vencido-indice_diciembre+1-1)));

		let interes = this.deudaCondominioDiciembre - capital;

		if(this.deudaCondominioDiciembre != 0) {
			if(indice_diciembre <= indice_ultimo_mes_vencido) {
				if(aporte < interes) {
					interes = - aporte + capital*(tasa_mora*(indice_ultimo_mes_vencido-indice_diciembre+1));
				}
				else {
					capital = capital - (aporte - interes);
					interes = capital * (tasa_mora*(indice_ultimo_mes_vencido-indice_diciembre+1));
				}
				this.deudaCondominioDiciembre = capital + interes;
			}
		}
		else {
			if(indice_diciembre <= indice_ultimo_mes_vencido) {
				capital = cuotasCondominio.cuotaDiciembre - aporte;
				interes = capital*(tasa_mora*(indice_ultimo_mes_vencido-indice_diciembre+1));
				this.deudaCondominioDiciembre = capital + interes;
				this.abonoDiciembre = 0;
			}
			else {
				this.abonoDiciembre = suma;
				this.pendienteDiciembre = cuotasCondominio.cuotaDiciembre - this.abonoDiciembre;
			}
		}
		this.actualizarPagosTotales();
		this.actualizarDeudaTotal();
		this.actualizarAbonosTotales();
	}

	actualizarPagosTotales() {

		this.totalEnero = this.pagoEnero.reduce((sum, item) => sum + item, 0);

		this.totalFebrero = this.pagoFebrero.reduce((sum, item) => sum + item, 0);

		this.totalMarzo = this.pagoMarzo.reduce((sum, item) => sum + item, 0);

		this.totalAbril = this.pagoAbril.reduce((sum, item) => sum + item, 0);

		this.totalMayo = this.pagoMayo.reduce((sum, item) => sum + item, 0);

		this.totalJunio = this.pagoJunio.reduce((sum, item) => sum + item, 0);

		this.totalJulio = this.pagoJulio.reduce((sum, item) => sum + item, 0);

		this.totalAgosto = this.pagoAgosto.reduce((sum, item) => sum + item, 0);

		this.totalSeptiembre = this.pagoSeptiembre.reduce((sum, item) => sum + item, 0);

		this.totalOctubre = this.pagoOctubre.reduce((sum, item) => sum + item, 0);

		this.totalNoviembre = this.pagoNoviembre.reduce((sum, item) => sum + item, 0);

		this.totalDiciembre = this.pagoDiciembre.reduce((sum, item) => sum + item, 0);

		this.totalPagos = this.totalEnero + this.totalFebrero + this.totalMarzo + this.totalAbril + this.totalMayo + this.totalJunio + this.totalJulio + this.totalAgosto + this.totalSeptiembre + this.totalOctubre + this.totalNoviembre + this.totalDiciembre;
	}

	actualizarAbonosTotales() {
		this.totalAbonos = this.abonoEnero + this.abonoFebrero + this.abonoMarzo + this.abonoAbril + this.abonoMayo + this.abonoJunio + this.abonoJulio + this.abonoAgosto + this.abonoSeptiembre + this.abonoOctubre + this.abonoNoviembre + this.abonoDiciembre
	}

	actualizarDeudaTotal() {
		this.deudaCondominioTotal = this.deudaCondominioEnero + this.deudaCondominioFebrero + this.deudaCondominioMarzo + this.deudaCondominioAbril + this.deudaCondominioMayo + this.deudaCondominioJunio + this.deudaCondominioJulio + this.deudaCondominioAgosto + this.deudaCondominioSeptiembre + this.deudaCondominioOctubre + this.deudaCondominioNoviembre + this.deudaCondominioDiciembre;
	}

	actualizarDeudaHidrolago(aporte) {
		this.pagoCuotaHidrolago = aporte;
		this.deudaCuotaHidrolago = cuotasEspeciales.hidrolago - this.pagoCuotaHidrolago;	
	}

	actualizarDeudaAzotea(aporte) {
		this.pagoCuotaAzotea = aporte;
		this.deudaCuotaAzotea = cuotasEspeciales.tanque_azotea - this.pagoCuotaAzotea;
	}
}


/*****************/

// OBJETOS DEL PROTOTIPO "Propietarios"
const ceila_fuenmayor = new Propietario({
	nombre:"Ceila",
	apellido: "Fuenmayor",
	apartamento: "0-A",
});

ceila_fuenmayor.actualizarEnero(6);
ceila_fuenmayor.actualizarFebrero(6);
ceila_fuenmayor.actualizarMarzo(6);
ceila_fuenmayor.actualizarAbril(13);
ceila_fuenmayor.actualizarMayo(18);
ceila_fuenmayor.actualizarJunio(23);
ceila_fuenmayor.actualizarJulio(23);
ceila_fuenmayor.actualizarAgosto(23);
//ceila_fuenmayor.actualizarSeptiembre(23);

ceila_fuenmayor.actualizarDeudaHidrolago(40+12.5);
ceila_fuenmayor.actualizarDeudaAzotea(1.5);

console.log("Objeto Ceila: ");
console.log(ceila_fuenmayor);



/**************/
const maria_troconiz = new Propietario({
	nombre:"María",
	apellido: "Troconiz",
	apartamento: "0-B",
	administrador: true,
});

maria_troconiz.actualizarEnero(6);
maria_troconiz.actualizarFebrero(6);
maria_troconiz.actualizarMarzo(6);
maria_troconiz.actualizarAbril(13);
maria_troconiz.actualizarMayo(18);
maria_troconiz.actualizarJunio(23);
maria_troconiz.actualizarJulio(23);
maria_troconiz.actualizarAgosto(23);

maria_troconiz.actualizarDeudaHidrolago(100);
maria_troconiz.actualizarDeudaAzotea(1.5);

console.log("Objeto María: ");
console.log(maria_troconiz);



/*****************/
const euro_ochoa = new Propietario({
	nombre:"Euro",
	apellido: "Ochoa",
	apartamento: "0-C",
});

euro_ochoa.actualizarEnero(0.79);
euro_ochoa.actualizarFebrero(0);
euro_ochoa.actualizarMarzo(0);
euro_ochoa.actualizarAbril(0);
euro_ochoa.actualizarMayo(0);
euro_ochoa.actualizarJunio(0);
euro_ochoa.actualizarJulio(0);
euro_ochoa.actualizarAgosto(0);

euro_ochoa.actualizarDeudaHidrolago(0);
euro_ochoa.actualizarDeudaAzotea(1.5);

console.log("Objeto Euro Ochoa: ");
console.log(euro_ochoa);



/*****************/
const oscar_salas = new Propietario({
	nombre:"Oscar",
	apellido: "Salas",
	apartamento: "0-D",
});

oscar_salas.actualizarEnero(6);
oscar_salas.actualizarFebrero(6);
oscar_salas.actualizarMarzo(6);
oscar_salas.actualizarAbril(13);
oscar_salas.actualizarMayo(18);
oscar_salas.actualizarJunio(23);
oscar_salas.actualizarJulio(23);
oscar_salas.actualizarAgosto(0);

oscar_salas.actualizarDeudaHidrolago(0);
oscar_salas.actualizarDeudaAzotea(1.5);

console.log("Objeto Oscar: ");
console.log(oscar_salas);


/*****************/
const thania_avila = new Propietario({
	nombre:"Thania",
	apellido: "Ávila",
	apartamento: "1-A",
});

thania_avila.actualizarEnero(6);
thania_avila.actualizarFebrero(6);
thania_avila.actualizarMarzo(6);
thania_avila.actualizarAbril(13);
thania_avila.actualizarMayo(18);
thania_avila.actualizarJunio(23);
thania_avila.actualizarJulio(23);
thania_avila.actualizarAgosto(23);
//thania_avila.actualizarSeptiembre(23);

thania_avila.actualizarDeudaHidrolago(115.35);
thania_avila.actualizarDeudaAzotea(1.5);

console.log("Objeto Thania: ");
console.log(thania_avila);


/*****************/
const wilson_manzano = new Propietario({
	nombre:"Wilson",
	apellido: "Manzano",
	apartamento: "1-B",
});

wilson_manzano.actualizarEnero(6);
wilson_manzano.actualizarFebrero(6);
wilson_manzano.actualizarMarzo(2.4);
wilson_manzano.actualizarAbril(0);
wilson_manzano.actualizarMayo(0);
wilson_manzano.actualizarJunio(0);
wilson_manzano.actualizarJulio(0);
wilson_manzano.actualizarAgosto(0);

wilson_manzano.actualizarDeudaHidrolago(0);
wilson_manzano.actualizarDeudaAzotea(1.5);

console.log("Objeto Wilson: ");
console.log(wilson_manzano);


/*****************/
const yesenia_berris = new Propietario({
	nombre:"Yesenia",
	apellido: "Berris",
	apartamento: "1-C",
});

yesenia_berris.actualizarEnero(6);
yesenia_berris.actualizarFebrero(6);
yesenia_berris.actualizarMarzo(6);
yesenia_berris.actualizarAbril(13);
yesenia_berris.actualizarMayo(18);
yesenia_berris.actualizarJunio(0);
yesenia_berris.actualizarJulio(0);
yesenia_berris.actualizarAgosto(0);

yesenia_berris.actualizarDeudaHidrolago(0);
yesenia_berris.actualizarDeudaAzotea(1.5);

console.log("Objeto Yesenia: ");
console.log(yesenia_berris);


/*****************/
const luzmarina_paz = new Propietario({
	nombre:"Luzmarina",
	apellido: "Paz",
	apartamento: "1-D",
});

luzmarina_paz.actualizarEnero(6);
luzmarina_paz.actualizarFebrero(6);
luzmarina_paz.actualizarMarzo(6);
luzmarina_paz.actualizarAbril(13);
luzmarina_paz.actualizarMayo(11.84);
luzmarina_paz.actualizarJunio(0);
luzmarina_paz.actualizarJulio(0);
luzmarina_paz.actualizarAgosto(0);

luzmarina_paz.actualizarDeudaHidrolago(115.35);
luzmarina_paz.actualizarDeudaAzotea(1.5);

console.log("Objeto Luzmarina: ");
console.log(luzmarina_paz);


/*****************/
const luis_rivas = new Propietario({
	nombre:"Luís",
	apellido: "Rivas",
	apartamento: "2-A",
});

luis_rivas.actualizarEnero(6);
luis_rivas.actualizarFebrero(6);
luis_rivas.actualizarMarzo(6);
luis_rivas.actualizarAbril(13);
luis_rivas.actualizarMayo(18);
luis_rivas.actualizarJunio(23);
luis_rivas.actualizarJulio(23);
luis_rivas.actualizarAgosto(23);

luis_rivas.actualizarDeudaHidrolago(32+7+22);
luis_rivas.actualizarDeudaAzotea(1.5);

console.log("Objeto Luís: ");
console.log(luis_rivas);


/*****************/
const veronica_hernandez = new Propietario({
	nombre:"Verónica",
	apellido: "Hernández",
	apartamento: "2-B",
});

veronica_hernandez.actualizarEnero(6);
veronica_hernandez.actualizarFebrero(6);
veronica_hernandez.actualizarMarzo(6);
veronica_hernandez.actualizarAbril(13);
veronica_hernandez.actualizarMayo(18);
veronica_hernandez.actualizarJunio(18);
veronica_hernandez.actualizarJulio(0);
veronica_hernandez.actualizarAgosto(0);

veronica_hernandez.actualizarDeudaHidrolago(115.35);
veronica_hernandez.actualizarDeudaAzotea(1.5);

console.log("Objeto Verónica: ");
console.log(veronica_hernandez);


/*****************/
const euro_alfaro = new Propietario({
	nombre:"Euro",
	apellido: "Alfaro",
	apartamento: "2-C",
});

euro_alfaro.actualizarEnero(6);
euro_alfaro.actualizarFebrero(6);
euro_alfaro.actualizarMarzo(6);
euro_alfaro.actualizarAbril(13);
euro_alfaro.actualizarMayo(18);
euro_alfaro.actualizarJunio(23);
euro_alfaro.actualizarJulio(23);
euro_alfaro.actualizarAgosto(3.25);

euro_alfaro.actualizarDeudaHidrolago(115.35);
euro_alfaro.actualizarDeudaAzotea(1.5);

console.log("Objeto Euro Alfaro: ");
console.log(euro_alfaro);


/*****************/
const manuel_araujo = new Propietario({
	nombre:"Manuel",
	apellido: "Araujo",
	apartamento: "2-D",
});

manuel_araujo.actualizarEnero(6);
manuel_araujo.actualizarFebrero(6);
manuel_araujo.actualizarMarzo(6);
manuel_araujo.actualizarAbril(13);
manuel_araujo.actualizarMayo(18);
manuel_araujo.actualizarJunio(23);
manuel_araujo.actualizarJulio(23);
manuel_araujo.actualizarAgosto(23);

manuel_araujo.actualizarDeudaHidrolago(115.35);
manuel_araujo.actualizarDeudaAzotea(1.5);

console.log("Objeto Manuel: ");
console.log(manuel_araujo);


/*****************/
const neidy_atencio = new Propietario({
	nombre:"Neidy",
	apellido: "Atencio",
	apartamento: "3-A",
});

neidy_atencio.actualizarEnero(6);
neidy_atencio.actualizarFebrero(6);
neidy_atencio.actualizarMarzo(6);
neidy_atencio.actualizarAbril(13);
neidy_atencio.actualizarMayo(18);
neidy_atencio.actualizarJunio(23);
neidy_atencio.actualizarJulio(23);
neidy_atencio.actualizarAgosto(8.8);

neidy_atencio.actualizarDeudaHidrolago(100);
neidy_atencio.actualizarDeudaAzotea(0);

console.log("Objeto Neidy: ");
console.log(neidy_atencio);


/*****************/
const mariely_garcia = new Propietario({
	nombre:"Mariely",
	apellido: "García",
	apartamento: "3-B",
});

mariely_garcia.actualizarEnero(6);
mariely_garcia.actualizarFebrero(6);
mariely_garcia.actualizarMarzo(6);
mariely_garcia.actualizarAbril(13);
mariely_garcia.actualizarMayo(18);
mariely_garcia.actualizarJunio(23);
mariely_garcia.actualizarJulio(23);
mariely_garcia.actualizarAgosto(23);
// mariely_garcia.actualizarSeptiembre(1.95);

mariely_garcia.actualizarDeudaHidrolago(115.35);
mariely_garcia.actualizarDeudaAzotea(1.5);

console.log("Objeto Mariely: ");
console.log(mariely_garcia);


/*****************/
const elias_gamboa = new Propietario({
	nombre:"Elías",
	apellido: "Gamboa",
	apartamento: "3-C",
});

elias_gamboa.actualizarEnero(6);
elias_gamboa.actualizarFebrero(6);
elias_gamboa.actualizarMarzo(6);
elias_gamboa.actualizarAbril(13);
elias_gamboa.actualizarMayo(18);
elias_gamboa.actualizarJunio(4.48);
elias_gamboa.actualizarJulio(0);
elias_gamboa.actualizarAgosto(0);

elias_gamboa.actualizarDeudaHidrolago(115.35);
elias_gamboa.actualizarDeudaAzotea(1.5);

console.log("Objeto Elías: ");
console.log(elias_gamboa);


/*****************/
const isabel_aponte = new Propietario({
	nombre:"Isabel",
	apellido: "Aponte",
	apartamento: "3-D",
});

isabel_aponte.actualizarEnero(6);
isabel_aponte.actualizarFebrero(6);
isabel_aponte.actualizarMarzo(6);
isabel_aponte.actualizarAbril(13);
isabel_aponte.actualizarMayo(6.65);
isabel_aponte.actualizarJunio(0);
isabel_aponte.actualizarJulio(0);
isabel_aponte.actualizarAgosto(0);

isabel_aponte.actualizarDeudaHidrolago(0);
isabel_aponte.actualizarDeudaAzotea(1.5);

console.log("Objeto Isabel: ");
console.log(isabel_aponte);


/* ACTUALIZACIÓN DE CONDOMINIO */

luzmarina_paz.actualizarMayo(8.624);
luzmarina_paz.actualizarJunio(29.9);
luzmarina_paz.actualizarJulio(27.6);
luzmarina_paz.actualizarAgosto(3.86);

actualizarMesVencido("Septiembre");

ceila_fuenmayor.actualizarSeptiembre(23);

maria_troconiz.actualizarSeptiembre(6);

euro_ochoa.actualizarEnero(0);
euro_ochoa.actualizarFebrero(0);
euro_ochoa.actualizarMarzo(0);
euro_ochoa.actualizarAbril(0);
euro_ochoa.actualizarMayo(0);
euro_ochoa.actualizarJunio(0);
euro_ochoa.actualizarJulio(0);
euro_ochoa.actualizarAgosto(0);
euro_ochoa.actualizarSeptiembre(0);

oscar_salas.actualizarAgosto(0);
oscar_salas.actualizarSeptiembre(0);

thania_avila.actualizarSeptiembre(23);

wilson_manzano.actualizarMarzo(0);
wilson_manzano.actualizarAbril(0);
wilson_manzano.actualizarMayo(0);
wilson_manzano.actualizarJunio(0);
wilson_manzano.actualizarJulio(0);
wilson_manzano.actualizarAgosto(0);
wilson_manzano.actualizarSeptiembre(0);

yesenia_berris.actualizarJunio(0);
yesenia_berris.actualizarJulio(0);
yesenia_berris.actualizarAgosto(0);
yesenia_berris.actualizarSeptiembre(0);

luzmarina_paz.actualizarAgosto(3.86);
luzmarina_paz.actualizarSeptiembre(0);

luis_rivas.actualizarSeptiembre(23);

veronica_hernandez.actualizarJunio(0);
veronica_hernandez.actualizarJulio(0);
veronica_hernandez.actualizarAgosto(0);
veronica_hernandez.actualizarSeptiembre(0);

euro_alfaro.actualizarAgosto(0);
euro_alfaro.actualizarSeptiembre(0);

manuel_araujo.actualizarSeptiembre(23);

neidy_atencio.actualizarAgosto(0);
neidy_atencio.actualizarSeptiembre(0);

mariely_garcia.actualizarSeptiembre(1.95+21.05);
//mariely_garcia.actualizarOctubre(1.95);

elias_gamboa.actualizarJunio(0);
elias_gamboa.actualizarJulio(0);
elias_gamboa.actualizarAgosto(0);
elias_gamboa.actualizarSeptiembre(0);

isabel_aponte.actualizarMayo(0);
isabel_aponte.actualizarJunio(0);
isabel_aponte.actualizarJulio(0);
isabel_aponte.actualizarAgosto(0);
isabel_aponte.actualizarSeptiembre(0);


actualizarMesVencido("Octubre");


ceila_fuenmayor.actualizarOctubre(28);
//ceila_fuenmayor.actualizarNoviembre(0.5);

maria_troconiz.actualizarSeptiembre(18.7);
maria_troconiz.actualizarOctubre(21.3);

euro_ochoa.actualizarEnero(0);
euro_ochoa.actualizarFebrero(0);
euro_ochoa.actualizarMarzo(0);
euro_ochoa.actualizarAbril(0);
euro_ochoa.actualizarMayo(0);
euro_ochoa.actualizarJunio(0);
euro_ochoa.actualizarJulio(0);
euro_ochoa.actualizarAgosto(0);
euro_ochoa.actualizarSeptiembre(0);
euro_ochoa.actualizarOctubre(0);

oscar_salas.actualizarAgosto(27.6);
oscar_salas.actualizarSeptiembre(25.3);
oscar_salas.actualizarOctubre(17.1);

thania_avila.actualizarOctubre(28);
thania_avila.actualizarNoviembre(28);

wilson_manzano.actualizarMarzo(0);
wilson_manzano.actualizarAbril(0);
wilson_manzano.actualizarMayo(0);
wilson_manzano.actualizarJunio(0);
wilson_manzano.actualizarJulio(0);
wilson_manzano.actualizarAgosto(0);
wilson_manzano.actualizarSeptiembre(0);
wilson_manzano.actualizarOctubre(0);

yesenia_berris.actualizarJunio(32.2);
yesenia_berris.actualizarJulio(29.9);
yesenia_berris.actualizarAgosto(27.6);
yesenia_berris.actualizarSeptiembre(21.1);
yesenia_berris.actualizarOctubre(0);

luzmarina_paz.actualizarAgosto(0);
luzmarina_paz.actualizarSeptiembre(0);
luzmarina_paz.actualizarOctubre(0);

luis_rivas.actualizarOctubre(28);

veronica_hernandez.actualizarJunio(7);
veronica_hernandez.actualizarJulio(29.9);
veronica_hernandez.actualizarAgosto(27.6);
veronica_hernandez.actualizarSeptiembre(25.3);
veronica_hernandez.actualizarOctubre(28);

euro_alfaro.actualizarAgosto(0);
euro_alfaro.actualizarSeptiembre(0);
euro_alfaro.actualizarOctubre(0);

manuel_araujo.actualizarOctubre(28);

neidy_atencio.actualizarAgosto(0);
neidy_atencio.actualizarSeptiembre(0);
neidy_atencio.actualizarOctubre(0);

mariely_garcia.actualizarOctubre(28);
mariely_garcia.actualizarNoviembre(28);
mariely_garcia.actualizarDiciembre(28);

elias_gamboa.actualizarJunio(25.925);
elias_gamboa.actualizarJulio(29.9);
elias_gamboa.actualizarAgosto(27.6);
elias_gamboa.actualizarSeptiembre(25.3);
elias_gamboa.actualizarOctubre(28);
elias_gamboa.actualizarNoviembre(28);
elias_gamboa.actualizarDiciembre(27.28);

isabel_aponte.actualizarMayo(0);
isabel_aponte.actualizarJunio(0);
isabel_aponte.actualizarJulio(0);
isabel_aponte.actualizarAgosto(0);
isabel_aponte.actualizarSeptiembre(0);
isabel_aponte.actualizarOctubre(0);


// CÓDIGO PARA LLENAR LAS TABLAS DE AZOTEA E HIDROLAGO
let propietarios = [
	ceila_fuenmayor,
	maria_troconiz,
	euro_ochoa,
	oscar_salas,
	thania_avila,
	wilson_manzano,
	yesenia_berris,
	luzmarina_paz,
	luis_rivas,
	veronica_hernandez,
	euro_alfaro,
	manuel_araujo,
	neidy_atencio,
	mariely_garcia,
	elias_gamboa,
	isabel_aponte
];

let administrador = propietarios.find(item => item.administrador);
console.log("El administrador del condominio es: ", administrador);

// Accedo al body de la tabla de deuda azotea
let cuerpo_tabla_deuda_azotea = document.getElementById("cuerpo_tabla_deuda_azotea");

// Ciclo para agregar cada nueva fila con el número de columnas indicado y contenido correspondiente
for(let i = 0; i < propietarios.length; i++) {
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
	nueva_columna1.innerText = propietarios[i].apartamento;
	nueva_columna2.innerText = `${propietarios[i].nombre} ${propietarios[i].apellido}`;
	nueva_columna3.innerText = propietarios[i].pagoCuotaAzotea.toFixed(2);
	nueva_columna4.innerText = propietarios[i].deudaCuotaAzotea.toFixed(2);

	// Cuento las filas del cuerpo de la tabla
	let conteo_filas = cuerpo_tabla_deuda_azotea.getElementsByTagName("tr").length;

	// Aplico color de fondo a los hijos impares del cuerpo de tabla
	if(conteo_filas % 2 !== 0) {
		nueva_fila_deuda_azotea.style.backgroundColor = '#caeae5';
	}
}


// Accedo al body de la tabla de deuda hidrolago
let cuerpo_tabla_deuda_hidrolago = document.getElementById("cuerpo_tabla_deuda_hidrolago");

// Ciclo para agregar cada nueva fila con el número de columnas indicado y contenido correspondiente
for(let i = 0; i < propietarios.length; i++) {
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
	nueva_columna1.innerText = propietarios[i].apartamento;
	nueva_columna2.innerText = `${propietarios[i].nombre} ${propietarios[i].apellido}`;
	nueva_columna3.innerText = propietarios[i].pagoCuotaHidrolago;
	nueva_columna4.innerText = propietarios[i].deudaCuotaHidrolago.toFixed(2);

	// Cuento las filas del cuerpo de la tabla
	let conteo_filas = cuerpo_tabla_deuda_hidrolago.getElementsByTagName("tr").length;

	// Aplico color de fondo a los hijos impares del cuerpo de tabla
	if(conteo_filas % 2 !== 0) {
		nueva_fila_deuda_hidrolago.style.backgroundColor = '#e4e7f4';
	}
}


// CÓDIGO PARA LLENAR LA TABLA DE CONDOMINIO

// Insertar nombres y apellidos en la lista desplegable
document.getElementById("prop01").innerHTML = `${ceila_fuenmayor.nombre} ${ceila_fuenmayor.apellido}`;
document.getElementById("prop02").innerHTML = `${maria_troconiz.nombre} ${maria_troconiz.apellido}`;
document.getElementById("prop03").innerHTML = `${euro_ochoa.nombre} ${euro_ochoa.apellido}`;
document.getElementById("prop04").innerHTML = `${oscar_salas.nombre} ${oscar_salas.apellido}`;
document.getElementById("prop05").innerHTML = `${thania_avila.nombre} ${thania_avila.apellido}`;
document.getElementById("prop06").innerHTML = `${wilson_manzano.nombre} ${wilson_manzano.apellido}`;
document.getElementById("prop07").innerHTML = `${yesenia_berris.nombre} ${yesenia_berris.apellido}`;
document.getElementById("prop08").innerHTML = `${luzmarina_paz.nombre} ${luzmarina_paz.apellido}`;
document.getElementById("prop09").innerHTML = `${luis_rivas.nombre} ${luis_rivas.apellido}`;
document.getElementById("prop10").innerHTML = `${veronica_hernandez.nombre} ${veronica_hernandez.apellido}`;
document.getElementById("prop11").innerHTML = `${euro_alfaro.nombre} ${euro_alfaro.apellido}`;
document.getElementById("prop12").innerHTML = `${manuel_araujo.nombre} ${manuel_araujo.apellido}`;
document.getElementById("prop13").innerHTML = `${neidy_atencio.nombre} ${neidy_atencio.apellido}`;
document.getElementById("prop14").innerHTML = `${mariely_garcia.nombre} ${mariely_garcia.apellido}`;
document.getElementById("prop15").innerHTML = `${elias_gamboa.nombre} ${elias_gamboa.apellido}`;
document.getElementById("prop16").innerHTML = `${isabel_aponte.nombre} ${isabel_aponte.apellido}`;

// Insertar apartamentos en la lista desplegable
document.getElementById("prop1").innerHTML = `${ceila_fuenmayor.apartamento}`;
document.getElementById("prop2").innerHTML = `${maria_troconiz.apartamento}`;
document.getElementById("prop3").innerHTML = `${euro_ochoa.apartamento}`;
document.getElementById("prop4").innerHTML = `${oscar_salas.apartamento}`;
document.getElementById("prop5").innerHTML = `${thania_avila.apartamento}`;
document.getElementById("prop6").innerHTML = `${wilson_manzano.apartamento}`;
document.getElementById("prop7").innerHTML = `${yesenia_berris.apartamento}`;
document.getElementById("prop8").innerHTML = `${luzmarina_paz.apartamento}`;
document.getElementById("prop9").innerHTML = `${luis_rivas.apartamento}`;
document.getElementById("prop010").innerHTML = `${veronica_hernandez.apartamento}`;
document.getElementById("prop011").innerHTML = `${euro_alfaro.apartamento}`;
document.getElementById("prop012").innerHTML = `${manuel_araujo.apartamento}`;
document.getElementById("prop013").innerHTML = `${neidy_atencio.apartamento}`;
document.getElementById("prop014").innerHTML = `${mariely_garcia.apartamento}`;
document.getElementById("prop015").innerHTML = `${elias_gamboa.apartamento}`;
document.getElementById("prop016").innerHTML = `${isabel_aponte.apartamento}`;

// Evento que captura la selección de la lista de nombres y ejecuta una función
let lista_propietarios = document.getElementById("lista_propietarios");
lista_propietarios.addEventListener("change", datosPropietario);

// Evento que captura la selección de la lista de apartamentos y ejecuta una función
let lista_propietarios_apto = document.getElementById("lista_propietarios_apto");
lista_propietarios_apto.addEventListener("change", datosPropietario2);

// Funciones para mostrar la información del propietario seleccionado
function datosPropietario() {
	let propietario_selected = lista_propietarios.value;
	
	if(propietario_selected == "") {
		document.getElementById("nombre_propietario").innerHTML = "";
		document.getElementById("apart_propietario").innerHTML = "";
		document.getElementById("pago_enero_propietario").innerHTML = "";
		document.getElementById("deuda_enero_propietario").innerHTML = "";
		document.getElementById("pago_febrero_propietario").innerHTML = "";
		document.getElementById("deuda_febrero_propietario").innerHTML = "";
		document.getElementById("pago_marzo_propietario").innerHTML = "";
		document.getElementById("deuda_marzo_propietario").innerHTML = "";
		document.getElementById("pago_abril_propietario").innerHTML = "";
		document.getElementById("deuda_abril_propietario").innerHTML = "";
		document.getElementById("pago_mayo_propietario").innerHTML = "";
		document.getElementById("deuda_mayo_propietario").innerHTML = "";
		document.getElementById("pago_junio_propietario").innerHTML = "";
		document.getElementById("deuda_junio_propietario").innerHTML = "";
		document.getElementById("pago_julio_propietario").innerHTML = "";
		document.getElementById("deuda_julio_propietario").innerHTML = "";
		document.getElementById("pago_agosto_propietario").innerHTML = "";
		document.getElementById("deuda_agosto_propietario").innerHTML = "";
		document.getElementById("pago_septiembre_propietario").innerHTML = "";
		document.getElementById("deuda_septiembre_propietario").innerHTML = "";
		document.getElementById("pago_octubre_propietario").innerHTML = "";
		document.getElementById("deuda_octubre_propietario").innerHTML = "";
		document.getElementById("pago_noviembre_propietario").innerHTML = "";
		document.getElementById("deuda_noviembre_propietario").innerHTML = "";
		document.getElementById("pago_diciembre_propietario").innerHTML = "";
		document.getElementById("deuda_diciembre_propietario").innerHTML = "";

		document.getElementById("deuda_total_propietario").innerHTML = "";
	}
	else {
		document.getElementById("nombre_propietario").innerHTML = `${propietarios[propietario_selected].nombre} ${propietarios[propietario_selected].apellido}`;
		document.getElementById("apart_propietario").innerHTML = `Apartamento ${propietarios[propietario_selected].apartamento}`;
		document.getElementById("pago_enero_propietario").innerHTML = `${propietarios[propietario_selected].totalEnero.toFixed(2)}`;
		document.getElementById("deuda_enero_propietario").innerHTML = `${propietarios[propietario_selected].deudaCondominioEnero.toFixed(2)}`;
		document.getElementById("pago_febrero_propietario").innerHTML = `${propietarios[propietario_selected].totalFebrero.toFixed(2)}`;
		document.getElementById("deuda_febrero_propietario").innerHTML = `${propietarios[propietario_selected].deudaCondominioFebrero.toFixed(2)}`;
		document.getElementById("pago_marzo_propietario").innerHTML = `${propietarios[propietario_selected].totalMarzo.toFixed(2)}`;
		document.getElementById("deuda_marzo_propietario").innerHTML = `${propietarios[propietario_selected].deudaCondominioMarzo.toFixed(2)}`;
		document.getElementById("pago_abril_propietario").innerHTML = `${propietarios[propietario_selected].totalAbril.toFixed(2)}`;
		document.getElementById("deuda_abril_propietario").innerHTML = `${propietarios[propietario_selected].deudaCondominioAbril.toFixed(2)}`;
		document.getElementById("pago_mayo_propietario").innerHTML = `${propietarios[propietario_selected].totalMayo.toFixed(2)}`;
		document.getElementById("deuda_mayo_propietario").innerHTML = `${propietarios[propietario_selected].deudaCondominioMayo.toFixed(2)}`;
		document.getElementById("pago_junio_propietario").innerHTML = `${propietarios[propietario_selected].totalJunio.toFixed(2)}`;
		document.getElementById("deuda_junio_propietario").innerHTML = `${propietarios[propietario_selected].deudaCondominioJunio.toFixed(2)}`;
		document.getElementById("pago_julio_propietario").innerHTML = `${propietarios[propietario_selected].totalJulio.toFixed(2)}`;
		document.getElementById("deuda_julio_propietario").innerHTML = `${propietarios[propietario_selected].deudaCondominioJulio.toFixed(2)}`;
		document.getElementById("pago_agosto_propietario").innerHTML = `${propietarios[propietario_selected].totalAgosto.toFixed(2)}`;
		document.getElementById("deuda_agosto_propietario").innerHTML = `${propietarios[propietario_selected].deudaCondominioAgosto.toFixed(2)}`;
		document.getElementById("pago_septiembre_propietario").innerHTML = `${propietarios[propietario_selected].totalSeptiembre.toFixed(2)}`;
		document.getElementById("deuda_septiembre_propietario").innerHTML = `${propietarios[propietario_selected].deudaCondominioSeptiembre.toFixed(2)}`;
		document.getElementById("pago_octubre_propietario").innerHTML = `${propietarios[propietario_selected].totalOctubre.toFixed(2)}`;
		document.getElementById("deuda_octubre_propietario").innerHTML = `${propietarios[propietario_selected].deudaCondominioOctubre.toFixed(2)}`;
		document.getElementById("pago_noviembre_propietario").innerHTML = `${propietarios[propietario_selected].totalNoviembre.toFixed(2)}`;
		document.getElementById("deuda_noviembre_propietario").innerHTML = `${propietarios[propietario_selected].deudaCondominioNoviembre.toFixed(2)}`;
		document.getElementById("pago_diciembre_propietario").innerHTML = `${propietarios[propietario_selected].totalDiciembre.toFixed(2)}`;
		document.getElementById("deuda_diciembre_propietario").innerHTML = `${propietarios[propietario_selected].deudaCondominioDiciembre.toFixed(2)}`;

		document.getElementById("deuda_total_propietario").innerHTML = `${propietarios[propietario_selected].deudaCondominioTotal.toFixed(2)}`;
	}
}


function datosPropietario2() {
	let apartamento_selected = lista_propietarios_apto.value;
	
	if(apartamento_selected == "") {
		document.getElementById("nombre_propietario").innerHTML = "";
		document.getElementById("apart_propietario").innerHTML = "";
		document.getElementById("pago_enero_propietario").innerHTML = "";
		document.getElementById("deuda_enero_propietario").innerHTML = "";
		document.getElementById("pago_febrero_propietario").innerHTML = "";
		document.getElementById("deuda_febrero_propietario").innerHTML = "";
		document.getElementById("pago_marzo_propietario").innerHTML = "";
		document.getElementById("deuda_marzo_propietario").innerHTML = "";
		document.getElementById("pago_abril_propietario").innerHTML = "";
		document.getElementById("deuda_abril_propietario").innerHTML = "";
		document.getElementById("pago_mayo_propietario").innerHTML = "";
		document.getElementById("deuda_mayo_propietario").innerHTML = "";
		document.getElementById("pago_junio_propietario").innerHTML = "";
		document.getElementById("deuda_junio_propietario").innerHTML = "";
		document.getElementById("pago_julio_propietario").innerHTML = "";
		document.getElementById("deuda_julio_propietario").innerHTML = "";
		document.getElementById("pago_agosto_propietario").innerHTML = "";
		document.getElementById("deuda_agosto_propietario").innerHTML = "";
		document.getElementById("pago_septiembre_propietario").innerHTML = "";
		document.getElementById("deuda_septiembre_propietario").innerHTML = "";
		document.getElementById("pago_octubre_propietario").innerHTML = "";
		document.getElementById("deuda_octubre_propietario").innerHTML = "";
		document.getElementById("pago_noviembre_propietario").innerHTML = "";
		document.getElementById("deuda_noviembre_propietario").innerHTML = "";
		document.getElementById("pago_diciembre_propietario").innerHTML = "";
		document.getElementById("deuda_diciembre_propietario").innerHTML = "";

		document.getElementById("deuda_total_propietario").innerHTML = "";
	}
	else {
		document.getElementById("nombre_propietario").innerHTML = `${propietarios[apartamento_selected].nombre} ${propietarios[apartamento_selected].apellido}`;
		document.getElementById("apart_propietario").innerHTML = `Apartamento ${propietarios[apartamento_selected].apartamento}`;
		document.getElementById("pago_enero_propietario").innerHTML = `${propietarios[apartamento_selected].totalEnero.toFixed(2)}`;
		document.getElementById("deuda_enero_propietario").innerHTML = `${propietarios[apartamento_selected].deudaCondominioEnero.toFixed(2)}`;
		document.getElementById("pago_febrero_propietario").innerHTML = `${propietarios[apartamento_selected].totalFebrero.toFixed(2)}`;
		document.getElementById("deuda_febrero_propietario").innerHTML = `${propietarios[apartamento_selected].deudaCondominioFebrero.toFixed(2)}`;
		document.getElementById("pago_marzo_propietario").innerHTML = `${propietarios[apartamento_selected].totalMarzo.toFixed(2)}`;
		document.getElementById("deuda_marzo_propietario").innerHTML = `${propietarios[apartamento_selected].deudaCondominioMarzo.toFixed(2)}`;
		document.getElementById("pago_abril_propietario").innerHTML = `${propietarios[apartamento_selected].totalAbril.toFixed(2)}`;
		document.getElementById("deuda_abril_propietario").innerHTML = `${propietarios[apartamento_selected].deudaCondominioAbril.toFixed(2)}`;
		document.getElementById("pago_mayo_propietario").innerHTML = `${propietarios[apartamento_selected].totalMayo.toFixed(2)}`;
		document.getElementById("deuda_mayo_propietario").innerHTML = `${propietarios[apartamento_selected].deudaCondominioMayo.toFixed(2)}`;
		document.getElementById("pago_junio_propietario").innerHTML = `${propietarios[apartamento_selected].totalJunio.toFixed(2)}`;
		document.getElementById("deuda_junio_propietario").innerHTML = `${propietarios[apartamento_selected].deudaCondominioJunio.toFixed(2)}`;
		document.getElementById("pago_julio_propietario").innerHTML = `${propietarios[apartamento_selected].totalJulio.toFixed(2)}`;
		document.getElementById("deuda_julio_propietario").innerHTML = `${propietarios[apartamento_selected].deudaCondominioJulio.toFixed(2)}`;
		document.getElementById("pago_agosto_propietario").innerHTML = `${propietarios[apartamento_selected].totalAgosto.toFixed(2)}`;
		document.getElementById("deuda_agosto_propietario").innerHTML = `${propietarios[apartamento_selected].deudaCondominioAgosto.toFixed(2)}`;
		document.getElementById("pago_septiembre_propietario").innerHTML = `${propietarios[apartamento_selected].totalSeptiembre.toFixed(2)}`;
		document.getElementById("deuda_septiembre_propietario").innerHTML = `${propietarios[apartamento_selected].deudaCondominioSeptiembre.toFixed(2)}`;
		document.getElementById("pago_octubre_propietario").innerHTML = `${propietarios[apartamento_selected].totalOctubre.toFixed(2)}`;
		document.getElementById("deuda_octubre_propietario").innerHTML = `${propietarios[apartamento_selected].deudaCondominioOctubre.toFixed(2)}`;
		document.getElementById("pago_noviembre_propietario").innerHTML = `${propietarios[apartamento_selected].totalNoviembre.toFixed(2)}`;
		document.getElementById("deuda_noviembre_propietario").innerHTML = `${propietarios[apartamento_selected].deudaCondominioNoviembre.toFixed(2)}`;
		document.getElementById("pago_diciembre_propietario").innerHTML = `${propietarios[apartamento_selected].totalDiciembre.toFixed(2)}`;
		document.getElementById("deuda_diciembre_propietario").innerHTML = `${propietarios[apartamento_selected].deudaCondominioDiciembre.toFixed(2)}`;

		document.getElementById("deuda_total_propietario").innerHTML = `${propietarios[apartamento_selected].deudaCondominioTotal.toFixed(2)}`;
	}
}

// Accedo al body de la tabla de pago de condominio
let cuerpo_tabla_propietarios = document.getElementById("cuerpo_tabla_propietarios");

// Cuento las filas del cuerpo de la tabla
let conteo_filas_propietarios = cuerpo_tabla_propietarios.getElementsByTagName("tr").length;

// Aplico color de fondo a los hijos impares del cuerpo de tabla
for(let i = 0; i < conteo_filas_propietarios; i++) {
	if(i % 2 !== 0) {
		let fila_propietario = cuerpo_tabla_propietarios.children[i];
		fila_propietario.style.backgroundColor = '#dfeaca';
	}
}



/******** EGRESOS *********/
// Prototipo para los egresos
class Egresos {
	constructor({
		egresos = [],
		totalEgresos = 0,
	}) {
		this.egresos = egresos;
		this.totalEgresos = totalEgresos;
	}
	agregarEgreso(palabra, numero) {
		let word = palabra;
		let number = numero;
		let egreso = {
			concepto: word,
			monto: number,
		};
		this.egresos.push(egreso);
		
		let total = 0;
		for(let i = 0; i < this.egresos.length; i++) {
			total = total + this.egresos[i].monto;
		}
		this.totalEgresos = total;
	}
}

// Objetos del prototipo "Egresos"
// ENERO
const egresosEnero = new Egresos ({});

egresosEnero.agregarEgreso("Bloques + Transporte", 72.33);
egresosEnero.agregarEgreso("Bolsas Negras", 10.64);
egresosEnero.agregarEgreso("Productos", 68.32);

console.log("Objeto Egresos Enero");
console.log(egresosEnero);

// FEBRERO
const egresosFebrero = new Egresos ({});

egresosFebrero.agregarEgreso("Productos", 12.13);
egresosFebrero.agregarEgreso("Bombillos", 2);

console.log("Objeto Egresos Febrero");
console.log(egresosFebrero);

// MARZO
const egresosMarzo = new Egresos ({});

egresosMarzo.agregarEgreso("Bolsas Negras", 10);
egresosMarzo.agregarEgreso("Productos", 65.4);

console.log("Objeto Egresos Marzo");
console.log(egresosMarzo);


// ABRIL
const egresosAbril = new Egresos ({});

egresosAbril.agregarEgreso("Bolsas Negras", 13);
egresosAbril.agregarEgreso("Productos", 100);
egresosAbril.agregarEgreso("Cloro", 6);
egresosAbril.agregarEgreso("Llaves", 10);

console.log("Objeto Egresos Abril");
console.log(egresosAbril);


// MAYO
const egresosMayo = new Egresos ({});

egresosMayo.agregarEgreso("Bolsas Negras", 13);
egresosMayo.agregarEgreso("Factura Pago Limpieza", 90);
egresosMayo.agregarEgreso("Balde + Desinfectante", 30.38);
egresosMayo.agregarEgreso("Bonbillos", 14.7);

console.log("Objeto Egresos Mayo");
console.log(egresosMayo);


// JUNIO
const egresosJunio = new Egresos ({});

egresosJunio.agregarEgreso("Creolina", 6);
egresosJunio.agregarEgreso("Factura Pago Limpieza", 85.5);
egresosJunio.agregarEgreso("Talonario", 6.64);

console.log("Objeto Egresos Junio");
console.log(egresosJunio);


// JULIO
const egresosJulio = new Egresos ({});

egresosJulio.agregarEgreso("Bolsas Negras", 23);
egresosJulio.agregarEgreso("Factura Pago Limpieza", 240);
egresosJulio.agregarEgreso("Agua para Limpieza", 15);
egresosJulio.agregarEgreso("Trabajo Tanque Azotea", 108);
egresosJulio.agregarEgreso("Breaker", 40);
egresosJulio.agregarEgreso("Llaves", 12);

console.log("Objeto Egresos Julio");
console.log(egresosJulio);

// AGOSTO
const egresosAgosto = new Egresos ({});

egresosAgosto.agregarEgreso("Factura Pago Limpieza", 134.5);
egresosAgosto.agregarEgreso("Agua para Limpieza", 12);
egresosAgosto.agregarEgreso("Instalación Breaker", 38.5);

console.log("Objeto Egresos Agosto");
console.log(egresosAgosto);


// SEPTIEMBRE
const egresosSeptiembre = new Egresos ({});

egresosSeptiembre.agregarEgreso("Factura Pago Limpieza", 40+81+41);
egresosSeptiembre.agregarEgreso("Bolsas Negras", 10+10);
egresosSeptiembre.agregarEgreso("Agua para Limpieza", 3+9);
egresosSeptiembre.agregarEgreso("Cloro", 10.3);
egresosSeptiembre.agregarEgreso("Bombillos", 14.35);

console.log("Objeto Egresos Septiembre");
console.log(egresosSeptiembre);


// OCTUBRE
const egresosOctubre = new Egresos ({});

egresosOctubre.agregarEgreso("Bolsas Negras", 20+20);
egresosOctubre.agregarEgreso("Factura Pago Limpieza", 41.5+25.2);
egresosOctubre.agregarEgreso("Agua para Limpieza", 3);
egresosOctubre.agregarEgreso("Corte de Maleza", 84.5+129.9);

console.log("Objeto Egresos Octubre");
console.log(egresosOctubre);


// NOVIEMBRE
const egresosNoviembre = new Egresos ({});

// egresosNoviembre.agregarEgreso("Factura Pago Limpieza", 134.5);
// egresosNoviembre.agregarEgreso("Agua para Limpieza", 12);
// egresosNoviembre.agregarEgreso("Instalación Breaker", 38.5);

console.log("Objeto Egresos Noviembre");
console.log(egresosNoviembre);


// DICIEMBRE
const egresosDiciembre = new Egresos ({});

// egresosDiciembre.agregarEgreso("Factura Pago Limpieza", 134.5);
// egresosDiciembre.agregarEgreso("Agua para Limpieza", 12);
// egresosDiciembre.agregarEgreso("Instalación Breaker", 38.5);

console.log("Objeto Egresos Diciembre");
console.log(egresosDiciembre);

// Array que contiene los egresos del año del condominio
let array_egresos_condominio_ano = [
	egresosEnero,
	egresosFebrero,
	egresosMarzo,
	egresosAbril,
	egresosMayo,
	egresosJunio,
	egresosJulio,
	egresosAgosto,
	egresosSeptiembre,
	egresosOctubre,
	egresosNoviembre,
	egresosDiciembre
];


// OBJETO LITERAL PARA EL CONDOMINIO
const Condominio = {
	ingresos_condominio: propietarios.reduce((sum, item) => sum + item.totalPagos, 0),

	ingresos_cuota_tanque: ingreso_tanque_total_Bs,

	ingresos_cuota_hidrolago: propietarios.reduce((sum, item) => sum + item.pagoCuotaHidrolago, 0),

	egresos: array_egresos_condominio_ano.reduce((sum, item) => sum + item.totalEgresos, 0) + gastosCuotasEspeciales.hidrolago + gastosCuotasEspeciales.tanque_azotea,

	balance: undefined,
	fondo: undefined,
}


// CÓDIGO PARA LLENAR TABLA RESUMEN
// Ingresos Condominio
// Enero
let ingresos_enero = propietarios.reduce((sum, item) => sum + item.totalEnero, 0);
document.getElementById("ingreso_enero").innerHTML = `${ingresos_enero.toFixed(2)}`;

// Febrero
let ingresos_febrero = propietarios.reduce((sum, item) => sum + item.totalFebrero, 0);
document.getElementById("ingreso_febrero").innerHTML = `${ingresos_febrero.toFixed(2)}`;

// Marzo
let ingresos_marzo = propietarios.reduce((sum, item) => sum + item.totalMarzo, 0);
document.getElementById("ingreso_marzo").innerHTML = `${ingresos_marzo.toFixed(2)}`;

// Abril
let ingresos_abril = propietarios.reduce((sum, item) => sum + item.totalAbril, 0);
document.getElementById("ingreso_abril").innerHTML = `${ingresos_abril.toFixed(2)}`;

// Mayo
let ingresos_mayo = propietarios.reduce((sum, item) => sum + item.totalMayo, 0);
document.getElementById("ingreso_mayo").innerHTML = `${ingresos_mayo.toFixed(2)}`;

// Junio
let ingresos_junio = propietarios.reduce((sum, item) => sum + item.totalJunio, 0);
document.getElementById("ingreso_junio").innerHTML = `${ingresos_junio.toFixed(2)}`;

// Julio
let ingresos_julio = propietarios.reduce((sum, item) => sum + item.totalJulio, 0);
document.getElementById("ingreso_julio").innerHTML = `${ingresos_julio.toFixed(2)}`;

// Agosto
let ingresos_agosto = propietarios.reduce((sum, item) => sum + item.totalAgosto, 0);
document.getElementById("ingreso_agosto").innerHTML = `${ingresos_agosto.toFixed(2)}`;

// Septiembre
let ingresos_septiembre = propietarios.reduce((sum, item) => sum + item.totalSeptiembre, 0);
document.getElementById("ingreso_septiembre").innerHTML = `${ingresos_septiembre.toFixed(2)}`;

// Octubre
let ingresos_octubre = propietarios.reduce((sum, item) => sum + item.totalOctubre, 0);
document.getElementById("ingreso_octubre").innerHTML = `${ingresos_octubre.toFixed(2)}`;

// Noviembre
let ingresos_noviembre = propietarios.reduce((sum, item) => sum + item.totalNoviembre, 0);
document.getElementById("ingreso_noviembre").innerHTML = `${ingresos_noviembre.toFixed(2)}`;

// Diciembre
let ingresos_diciembre = propietarios.reduce((sum, item) => sum + item.totalDiciembre, 0);
document.getElementById("ingreso_diciembre").innerHTML = `${ingresos_diciembre.toFixed(2)}`;

// Total Ingresos Condominio
document.getElementById("ingreso_fondo_2022").innerHTML = (Condominio.ingresos_condominio).toFixed(2);

// Egresos Condominio
document.getElementById("egreso_enero").innerHTML = `${egresosEnero.totalEgresos.toFixed(2)}`;
document.getElementById("egreso_febrero").innerHTML = `${egresosFebrero.totalEgresos.toFixed(2)}`;
document.getElementById("egreso_marzo").innerHTML = `${egresosMarzo.totalEgresos.toFixed(2)}`;
document.getElementById("egreso_abril").innerHTML = `${egresosAbril.totalEgresos.toFixed(2)}`;
document.getElementById("egreso_mayo").innerHTML = `${egresosMayo.totalEgresos.toFixed(2)}`;
document.getElementById("egreso_junio").innerHTML = `${egresosJunio.totalEgresos.toFixed(2)}`;
document.getElementById("egreso_julio").innerHTML = `${egresosJulio.totalEgresos.toFixed(2)}`;
document.getElementById("egreso_agosto").innerHTML = `${egresosAgosto.totalEgresos.toFixed(2)}`;
document.getElementById("egreso_septiembre").innerHTML = `${egresosSeptiembre.totalEgresos.toFixed(2)}`;
document.getElementById("egreso_octubre").innerHTML = `${egresosOctubre.totalEgresos.toFixed(2)}`;
document.getElementById("egreso_noviembre").innerHTML = `${egresosNoviembre.totalEgresos.toFixed(2)}`;
document.getElementById("egreso_diciembre").innerHTML = `${egresosDiciembre.totalEgresos.toFixed(2)}`;

// Total Egresos Condominio
document.getElementById("egreso_fondo_2022").innerHTML = (array_egresos_condominio_ano.reduce((sum, item) => sum + item.totalEgresos, 0)).toFixed(2);


// Prototipo para los ingresos adicionales
class ingresosAdicionales {
	constructor({
		ingresos = [],
		totalIngresos = 0,
	}) {
		this.ingresos = ingresos;
		this.totalIngresos = totalIngresos;
	}
	agregarIngreso(palabra, numero) {
		let word = palabra;
		let number = numero;
		let ingreso = {
			concepto: word,
			monto: number,
		};
		this.ingresos.push(ingreso);
		
		this.totalIngresos = this.ingresos.reduce((sum, item) => sum + item.monto, 0);
	}
}

//Objetos del prototipo "ingresosAdicionales"
const total_ingresos_adicionales = new ingresosAdicionales({});
total_ingresos_adicionales.agregarIngreso("Fondo Año Anterior", 74.37);
total_ingresos_adicionales.agregarIngreso("Pagos Año Anterior", 15 + 32.4);
total_ingresos_adicionales.agregarIngreso("Reintegro Comisión Pago Móvil", 3);
total_ingresos_adicionales.agregarIngreso("Pagos de Intereses", 0.5+0.44+0.6+1.14+0.6+3.9+3.6+0.88+0.6+0.27+1.8+1.2+1.3+2.6+1.8+0.1+3.6+3+2.4+3.9+3.6+2.3+1.8+1.2+0.6+0.12+1.8);
total_ingresos_adicionales.agregarIngreso("Pago de Agua Apto 0-2-A", 10+10);
console.log("Objeto Ingresos Adicionales: ",total_ingresos_adicionales);

// Llenar fila de ingreso / egreso couta azotea
document.getElementById("ingreso_cuota_tanque").innerHTML = Condominio.ingresos_cuota_tanque.toFixed(2);
document.getElementById("egreso_cuota_tanque").innerHTML = gastosCuotasEspeciales.tanque_azotea;

// Llenar fila de ingreso / egreso couta hidrolago
document.getElementById("ingreso_cuota_hidrolago").innerHTML = Condominio.ingresos_cuota_hidrolago.toFixed(2);
document.getElementById("egreso_cuota_hidrolago").innerHTML = gastosCuotasEspeciales.hidrolago.toFixed(2);

// Llenar fila de ingreso / egreso total de cuotas especiales
document.getElementById("ingresos_cuotas_especiales").innerHTML = (Condominio.ingresos_cuota_tanque + Condominio.ingresos_cuota_hidrolago).toFixed(2);

document.getElementById("egresos_cuotas_especiales").innerHTML = gastosCuotasEspeciales.tanque_azotea + gastosCuotasEspeciales.hidrolago;

// Llenar fila de ingreso / egreso fondo 2021
document.getElementById("ingreso_fondo_2021").innerHTML = total_ingresos_adicionales["ingresos"][0]["monto"];

document.getElementById("egreso_fondo_2021").innerHTML = (0).toFixed(2);

// Llenar fila de ingreso / egreso año 2021
document.getElementById("pagos_ano_2021").innerHTML = total_ingresos_adicionales["ingresos"][1]["monto"].toFixed(2);

document.getElementById("egresos_ano_2021").innerHTML = (0).toFixed(2);

// Llenar fila de ingreso / egreso reintegro comisión
document.getElementById("reintegro_comision").innerHTML = total_ingresos_adicionales["ingresos"][2]["monto"].toFixed(2);

document.getElementById("egresos_reintegro").innerHTML = (0).toFixed(2);

// Llenar fila de ingreso / egreso pago de intereses
document.getElementById("pago_intereses").innerHTML = total_ingresos_adicionales["ingresos"][3]["monto"];

document.getElementById("egresos_intereses").innerHTML = (0).toFixed(2);

// Llenar fila de ingreso / egreso pago de agua 0-2-A
document.getElementById("pago_agua_02A").innerHTML = total_ingresos_adicionales["ingresos"][4]["monto"].toFixed(2);

document.getElementById("egresos_02A").innerHTML = (0).toFixed(2);

// Llenar fila de ingreso / egreso total adicionales
document.getElementById("ingresos_adicionales_cell").innerHTML = total_ingresos_adicionales.totalIngresos.toFixed(2);

document.getElementById("egresos_adicionales_cell").innerHTML = (0).toFixed(2);


// CÁLCULO DEL BALANCE Y FONDO
function calcularBalanceFondo() {
	let blnc = Condominio.ingresos_condominio + Condominio.ingresos_cuota_tanque + Condominio.ingresos_cuota_hidrolago - Condominio.egresos;
	Condominio.balance = blnc;

	let fnd = blnc + total_ingresos_adicionales.totalIngresos;
	Condominio.fondo = fnd;
}

calcularBalanceFondo();

console.log("Objeto Literal Condomimio: ");
console.log(Condominio);


// Llenar fila de fondo
document.getElementById("fondo_actual").innerHTML = Condominio.fondo.toFixed(2);

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