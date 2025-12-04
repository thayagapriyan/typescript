const el = document.getElementById('app');

async function init() {
  try {
    const res = await fetch('/api/hello');
    const data = await res.json();
    el!.textContent = data.message;
  } catch (err) {
    el!.textContent = 'Error fetching API: ' + (err as Error).message;
  }
}

init();