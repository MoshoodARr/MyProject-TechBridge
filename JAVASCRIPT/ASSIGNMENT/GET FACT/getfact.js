const button = document.getElementById('catFactBtn');
const display = document.getElementById('catFactDisplay');

button.addEventListener('click', () => {
  display.textContent = '';
  display.style.backgroundColor = '#b5b5b5';
  button.disabled = true;
  button.textContent = 'Loading...';

  const req = new XMLHttpRequest();

  req.open('GET', 'https://catfact.ninja/facts?limit=15&max_length=60');
  req.responseType = 'json';

  req.onload = () => {
    if (req.status === 200) {
      const facts = req.response.data; 

      if (facts.length === 0) {
        display.textContent = 'No cat facts available!'
        display.style.backgroundColor = '#ffb3b3';
      } else{
      const randomFact = facts[Math.floor(Math.random() * facts.length)]; 

      display.textContent = randomFact.fact;
      display.style.backgroundColor = '#d4edda';
      }
    } else {
      display.textContent = 'Failed to load cat facts. Try again!';
      display.style.backgroundColor = '#ffb3b3';
    }

    button.disabled = false;
    button.textContent = 'Get Cat Fact';
  };

  req.onerror = () => {
    display.textContent = 'Network error occurred. Please check your connection.';
    display.style.backgroundColor = '#ffb3b3';
    button.disabled = false;
    button.textContent = 'Get Cat Fact';
  };

  req.send();
});