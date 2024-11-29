// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

/*async function fetchAnswer(URL) {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
        document.getElementById('answer').innerText = JSON.stringify(data, null, 2);
      } catch (error) {
        document.getElementById('answer').innerText = error.message;
      }
    }

  document.getElementById("button").addEventListener("click", () => {
    fetchAnswer(API_ENDPOINT);
  });*/ 
//Este lo hce durante el livecoding


const button = document.getElementById('button');
const answerDiv = document.getElementById('answer');

async function fetchAnswer() {
  try {
    const response = await fetch(API_ENDPOINT);
    if (!response.ok) throw new Error('API Error');
    const data = await response.json();

    answerDiv.textContent = data.answer;

    setTimeout(() => {
      answerDiv.textContent = '';
      input.value = '';
    }, 5000);
  } catch (err) {
    answerDiv.textContent = 'Algo salió mal';
    console.error(err);
  }
}

button.addEventListener('click', fetchAnswer);

