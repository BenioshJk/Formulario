// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDx1uokgtw6DvQNl8BUGAOgnQTUlDIbuPY",
  authDomain: "formulario-robert.firebaseapp.com",
  projectId: "formulario-robert",
  storageBucket: "formulario-robert.firebasestorage.app",
  messagingSenderId: "93982228094",
  appId: "1:93982228094:web:33da311a87bd99c86c622f"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Manejar envío del formulario
document.getElementById('formulario').addEventListener('submit', async function(e) {
  e.preventDefault();

  const datos = {
    nombres: e.target.nombres.value,
    apellidos: e.target.apellidos.value,
    cedula: e.target.cedula.value,
    email: e.target.email.value,
    direccion: e.target.direccion.value,
    telefono: e.target.telefono.value,
    fechaNacimiento: e.target.fechaNacimiento.value,
    genero: e.target.genero.value,
    enviadoEn: new Date()
  };

  try {
    await db.collection("formularios").add(datos);
    alert("Formulario enviado correctamente ✅");
    e.target.reset();
  } catch (error) {
    console.error("Error al enviar:", error);
    alert("Ocurrió un error al guardar el formulario ❌");
  }
});
