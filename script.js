
function closeLetter() {
  document.getElementById('letter').style.display = 'none';
}

function updateClock() {
  const now = new Date();
  const clock = document.getElementById('clock');
  clock.innerHTML = now.toLocaleTimeString('es-ES') + '<br>' + now.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

setInterval(updateClock, 1000);
window.onload = updateClock;

// Cumpleaños
const counters = document.getElementById('counters');
const today = new Date();
const valerieBday = new Date(today.getFullYear(), 4, 10);
const diegoBday = new Date(today.getFullYear(), 5, 8);
if (today > valerieBday) valerieBday.setFullYear(valerieBday.getFullYear() + 1);
if (today > diegoBday) diegoBday.setFullYear(diegoBday.getFullYear() + 1);
const daysToValerie = Math.ceil((valerieBday - today) / (1000 * 60 * 60 * 24));
const daysToDiego = Math.ceil((diegoBday - today) / (1000 * 60 * 60 * 24));

counters.innerHTML = `🎂 Faltan ${daysToValerie} días para el cumple de Valerie (10 mayo)<br>🎉 Faltan ${daysToDiego} días para el cumple de Dieguito (8 junio)`;

// Consejo y piropo del día
const consejos = Array.from({ length: 365 }, (_, i) => `Consejo de amor #${i + 1}: Recuerda siempre sonreírle a Valerie.`);
const piropos = [
  "¿Eres un tulipán? Porque cada día contigo florezco.",
  "Tu nombre debería estar al lado de 'perfección'.",
  "Ni Google tiene todas las respuestas, pero tus ojos sí.",
  "Si fueras canción, serías mi favorita.",
  "Tus pasos suenan como poesía."
];
const dayOfYear = Math.floor((Date.now() - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
const daily = document.getElementById('daily');
daily.innerHTML = `<p><b>${consejos[dayOfYear % 365]}</b></p><p><i>“${piropos[dayOfYear % piropos.length]}”</i></p>`;
