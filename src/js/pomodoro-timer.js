export const PomodoroTimer = (() => {
  // DOM Elements
  let minutesEl;
  let secondsEl;
  let progressBarEl;
  let startBtn;
  let stopBtn;
  let resetBtn;
  let shortBreakBtn;
  let focusBtn;
  let longBreakBtn;

  // Constantes para los tiempos
  const FOCUS_TIME = 25 * 60; // 25 minutos en segundos
  const SHORT_BREAK = 5 * 60; // 5 minutos en segundos
  const LONG_BREAK = 15 * 60; // 15 minutos en segundos

  // Variables de estado
  let timerInterval;
  let timeLeft = FOCUS_TIME;
  let isRunning = false;
  let currentMode = "focus";
  let originalTime = FOCUS_TIME;

  // Formatear tiempo (convertir segundos a formato mm:ss)
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return {
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };

  // Actualizar la UI del temporizador
  const updateTimerDisplay = (timeInSeconds) => {
    const { minutes, seconds } = formatTime(timeInSeconds);
    minutesEl.textContent = minutes;
    secondsEl.textContent = `:${seconds}`;

    // Actualizar barra de progreso
    const progressPercentage =
      ((originalTime - timeInSeconds) / originalTime) * 100;
    progressBarEl.style.width = `${progressPercentage}%`;
  };

  // Iniciar el temporizador
  const startTimer = () => {
    if (isRunning) return;

    isRunning = true;
    timerInterval = setInterval(() => {
      timeLeft--;
      updateTimerDisplay(timeLeft);

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        isRunning = false;
        playAlarmSound();

        // Notificación al completar
        alert(`¡Tiempo de ${currentMode} completado!`);
      }
    }, 1000);
  };

  // Detener el temporizador
  const stopTimer = () => {
    clearInterval(timerInterval);
    isRunning = false;
  };

  // Reiniciar el temporizador
  const resetTimer = () => {
    stopTimer();
    timeLeft = originalTime;
    updateTimerDisplay(timeLeft);
    progressBarEl.style.width = "0%";
  };

  // Cambiar modo (focus, short break, long break)
  const changeMode = (mode, time) => {
    stopTimer();
    currentMode = mode;
    originalTime = time;
    timeLeft = time;
    updateTimerDisplay(time);
    progressBarEl.style.width = "0%";
  };

  // Sonido de alarma
  const playAlarmSound = () => {
    // En una implementación real, aquí se reproduciría un sonido
    console.log("¡Ding! Tiempo completado");

    // Si quieres implementar un sonido real, puedes usar algo como:
    // const audio = new Audio('ruta/a/tu/sonido.mp3');
    // audio.play();
  };

  // Configurar los event listeners
  const eventListeners = () => {
    startBtn.addEventListener("click", startTimer);
    stopBtn.addEventListener("click", stopTimer);
    resetBtn.addEventListener("click", resetTimer);
    shortBreakBtn.addEventListener("click", () =>
      changeMode("short break", SHORT_BREAK)
    );
    focusBtn.addEventListener("click", () => changeMode("focus", FOCUS_TIME));
    longBreakBtn.addEventListener("click", () =>
      changeMode("long break", LONG_BREAK)
    );
  };

  // Función de inicialización
  const init = async () => {
    console.log("Pomodoro Timer Initialized");

    // Seleccionar elementos DOM
    minutesEl = document.querySelector(".pomodoro-timer__timer__time__minutes");
    secondsEl = document.querySelector(".pomodoro-timer__timer__time__seconds");
    progressBarEl = document.querySelector(
      ".pomodoro-timer__timer__progress__bar"
    );
    startBtn = document.querySelector(".action-buttons__button--start");
    stopBtn = document.querySelector(".action-buttons__button--stop");
    resetBtn = document.querySelector(".action-buttons__button--reset");
    shortBreakBtn = document.querySelector(
      ".action-buttons__button--shortbraek"
    );
    focusBtn = document.querySelector(".action-buttons__button--focus");
    longBreakBtn = document.querySelector(".action-buttons__button--longbreak");

    // Configurar event listeners
    eventListeners();

    // Inicializar la UI
    updateTimerDisplay(timeLeft);
  };

  // Exponer métodos públicos
  return { init };
})();
