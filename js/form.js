document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  const telefono = "541127390105";

  const cliente = document.querySelector("#cliente").value;
  const lote = document.querySelector("#lote").value;
  const tel = document.querySelector("#tel").value;
  const fecha = document.querySelector("#fecha").value;
  const hora = document.querySelector("#hora").value;
  const cantidad = document.querySelector("#cantidad").value;
  const resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*_Reservas AzuleiNetwork_*%0A%0A
    *🗓---------------------------🗓*%0A%0A
		*✍¿Cuál es tu nombre?✍*%0A
		${cliente}%0A%0A
		*🏠¿Cuál es tu Lote y Area?🏠*%0A
		${lote}%0A%0A
		*☎¿Cuál es tu telefono?☎*%0A
		${tel}%0A%0A
		*🗓Indica la fecha de tu reserva🗓*%0A
		${fecha}%0A%0A
		*🕛Indica la hora de tu reserva🕛*%0A
		${hora}%0A%0A
		*👥¿Cantidad de personas?👥*%0A
		${cantidad}%0A%0A
    *⌛Tu Reserva esta siendo procesada, por favor aguarda la confirmacion⌛.
		`;

  if (cliente === "" || fecha === "" || hora === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

  window.open(url);
});
