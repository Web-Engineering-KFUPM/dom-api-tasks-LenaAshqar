/*
=======================================
📘 JavaScript & Web APIs Lab
All tasks in one file (script.js)
=======================================
*/
document.addEventListener("DOMContentLoaded", function () {
    /*
    =======================================
    TODO1: Welcome Board
    ---------------------------------------
    When the page loads, display a welcome message
    inside the <p> element with id="t1-msg".

    ✅ Task:
    - Select the element with id "t1-msg".
    - Change its text to "Hello, World!".

    💡 Hint:
    document.getElementById("t1-msg").innerHTML = "Hello, World!";
    */
    const p1 = document.getElementById("t1-msg");
    p1.textContent = "Hello, World!";
    /*
    =======================================
    TODO2: Interaction Corner
    ---------------------------------------
    There is a button with id="t2-btn".
    When the button is clicked, change the text inside
    the <p> with id="t2-status" to:
        "You clicked the button!"

    ✅ Task:
    - Get the button element.
    - Add a click event listener.
    - Inside the event, change the text of the status paragraph.

    💡 Hint:
    button.addEventListener("click", function () {
        // change text here
    });
    */
    const button = document.getElementById("t2-btn");
    button.addEventListener("click", () => {
        const p2 = document.getElementById("t2-status")
        p2.textContent = "You clicked the button!"
    });
    /*
    =======================================
    TODO3: Inspiring Quote Board
    ---------------------------------------
    Use the Quotable API to display a random quote.

    🌍 API Link:
    https://dummyjson.com/quotes/random

    ✅ Task:
    - When the button with id="t3-loadQuote" is clicked:
        - Fetch a random quote from the API.
        - Display the quote text inside the <p> with id="t3-quote".
        - Display the author inside the <p> with id="t3-author".

    💡 Hint:
    The API returns JSON like:
    {
      "content": "Do not watch the clock. Do what it does. Keep going.",
      "author": "Sam Levenson"
    }

    Use:
    data.content   // the quote text
    data.author    // the author
    */
    const button2 = document.getElementById("t3-loadQuote");

    button2.addEventListener("click", () => {
        fetch("https://dummyjson.com/quotes/random")
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("HTTP" + response.status);
                }
                return response.json();
            })
            .then(function (data) {
                const pQuote = document.getElementById("t3-quote");
                pQuote.textContent = data.quote;

                const pAuthor = document.getElementById("t3-author");
                pAuthor.textContent = data.author;
            })
            .catch(function (err) {
                console.log("API Error: ", err);
            })
    })
    /*
    =======================================
    TODO4: Dammam Weather Now
    ---------------------------------------
    Use the OpenWeatherMap API to display live weather data.

    🌍 API Link:
    https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=API_KEY&units=metric

    ⚠️ Replace YOUR_API_KEY with your actual API key from:
    https://openweathermap.org/api

    ✅ Task:
    - When the button with id="t4-loadWx" is clicked:
        - Fetch current weather data for Dammam.
        - Show temperature in the element with id="t4-temp".
        - Show humidity in the element with id="t4-hum".
        - Show wind speed in the element with id="t4-wind".

    💡 Hint:
    data.main.temp      → temperature (°C)
    data.main.humidity  → humidity (%)
    data.wind.speed     → wind speed (m/s)
    */
    const button3 = document.getElementById("t4-loadWx");
    button3.addEventListener("click", () => {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=d51f2f00c3b137ccfd135bd8f9dd50aa&units=metric")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("HTTP" + response.status);
            }
            return response.json();
        })
        .then(function (data) {
             const temperature = document.getElementById("t4-temp");
             temperature.textContent = data.main.temp + " °C";

            const humidity = document.getElementById("t4-hum");
            humidity.textContent = data.main.humidity + " %";

            const wind = document.getElementById("t4-wind");
            wind.textContent = data.wind.speed + " m/s";
        })
        .catch(function (err) {
            console.log("API Error: ", err);
        })
    })
});