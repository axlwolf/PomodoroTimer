export const TemperatureConverter = (() => {
    // DOM Elements
    const $temperatureInput = document.querySelector("#temperature");
    const $form = document.querySelector(".form");
    const $fromSelect = document.querySelector("#from");
    const $toSelect = document.querySelector("#to");
    const $submitBtn = document.querySelector(".submit-btn");
    const $result = document.querySelector(".result p #result"); // Corrected selector

    // Constantes para conversiones de temperatura (Consolidadas y organizadas)
    const CONVERSION_CONSTANTS = {
        CELSIUS_TO_KELVIN: 273.15,
        FAHRENHEIT_OFFSET: 32,
        KELVIN_FAHRENHEIT_MULTIPLIER: 9 / 5,
        FAHRENHEIT_KELVIN_MULTIPLIER: 5 / 9,
    };

    // Funciones de conversión (Simplificadas)
    const CONVERSION_FUNCTIONS = {
        celsius: {
            kelvin: (c) => c + CONVERSION_CONSTANTS.CELSIUS_TO_KELVIN,
            fahrenheit: (c) =>
                c * CONVERSION_CONSTANTS.KELVIN_FAHRENHEIT_MULTIPLIER +
                CONVERSION_CONSTANTS.FAHRENHEIT_OFFSET,
        },
        kelvin: {
            celsius: (k) => k - CONVERSION_CONSTANTS.CELSIUS_TO_KELVIN,
            fahrenheit: (k) =>
                (k - CONVERSION_CONSTANTS.CELSIUS_TO_KELVIN) *
                CONVERSION_CONSTANTS.KELVIN_FAHRENHEIT_MULTIPLIER +
                CONVERSION_CONSTANTS.FAHRENHEIT_OFFSET,
        },
        fahrenheit: {
            celsius: (f) =>
                (f - CONVERSION_CONSTANTS.FAHRENHEIT_OFFSET) *
                CONVERSION_CONSTANTS.FAHRENHEIT_KELVIN_MULTIPLIER,
            kelvin: (f) =>
                (f - CONVERSION_CONSTANTS.FAHRENHEIT_OFFSET) *
                CONVERSION_CONSTANTS.FAHRENHEIT_KELVIN_MULTIPLIER +
                CONVERSION_CONSTANTS.CELSIUS_TO_KELVIN,
        },
    };

    const init = async () => {
        console.log("Temperature Converter Initialized");
        eventListeners();
    };

    const eventListeners = () => {
        $form.addEventListener("submit", convertTemperature);
        $submitBtn.addEventListener("click", convertTemperature);
        // No necesitas manejar los cambios de los selects individualmente.
    };

    const convertTemperature = (e) => {
        e.preventDefault();
        const temperature = parseFloat($temperatureInput.value);
        const from = $fromSelect.value;
        const to = $toSelect.value;

        try {
            if (isNaN(temperature)) {
                throw new Error("Please enter a valid number.");
            }
        } catch (error) {
            $result.textContent = error.message;
            return;
        }

        // Validación: Manejar el caso en que las unidades son iguales o no están seleccionadas
        if (from === to || from === "From Unit" || to === "To Unit") {
            $result.textContent =
                from === to ? temperature.toFixed(2) : "Please select different units.";
            return;
        }

        // Usar la tabla de conversión para evitar los if/else
        const conversionFunction =
            CONVERSION_FUNCTIONS[from] && CONVERSION_FUNCTIONS[from][to]
                ? CONVERSION_FUNCTIONS[from][to]
                : undefined;
        const result = conversionFunction
            ? conversionFunction(temperature)
            : temperature;

        $result.textContent = `${temperature.toFixed(2)}° ${from} is equal to ${result.toFixed(2)}° ${to}`;
    };

    return { init };
})();