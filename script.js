// Отримуємо елементи
const input = document.getElementById("input");
const translateBtn = document.getElementById("translateBtn");
const output = document.getElementById("output");

// Асинхронна функція перекладу
async function translateText() {
  const text = input.value.trim();
  if (!text) {
    output.textContent = "Будь ласка, введіть текст.";
    return;
  }

  const safeText = encodeURIComponent(text);
  const email = "example@gmail.com"; // можна вказати свій email
  const url = `https://api.mymemory.translated.net/get?q=${safeText}&langpair=uk|en&de=${email}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    output.textContent = data.responseData.translatedText;
  } catch (error) {
    output.textContent = "Помилка перекладу. Спробуйте ще раз.";
    console.error(error);
  }
}

// Прив'язуємо функцію до кнопки
translateBtn.addEventListener("click", translateText);
