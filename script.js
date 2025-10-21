// Botón principal
document.getElementById('visitarBtn').addEventListener('click', function() {
  alert('¡Te esperamos en el stand el 27 de octubre en el Colegio Monseñor Ramon A.! No te pierdas la ruleta con preguntas y premios 🎉');
});

// Botón para descargar folleto
document.getElementById('folletoBtn').addEventListener('click', function() {
  const contenido = `
    <html>
      <head><meta charset="utf-8"><title>Folleto - Métodos Anticonceptivos</title></head>
      <body style="font-family:Arial;padding:20px;">
        <h2>Folleto Informativo</h2>
        <ul>
          <li>Píldora: uso diario.</li>
          <li>Condón: protección doble.</li>
          <li>DIU: larga duración.</li>
          <li>Implante: subdérmico y seguro.</li>
        </ul>
        <p>Ven y participa en nuestra <strong>ruleta educativa</strong> el 27 de octubre en el Colegio Monseñor Ramon A., de 10:00 am a 4:00 p.m.</p>
      </body>
    </html>
  `;
  const w = window.open('', '_blank');
  w.document.write(contenido);
  w.document.close();
});
