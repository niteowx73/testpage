// Оригінальний код JavaScript

const openInChrome = () => {
  const url = 'https://www.wikipedia.org'; // Заміна на потрібне посилання
  window.location.href = `googlechrome://${url.replace(/^https?:\/\//, '')}`;
};

// Додайте цей код в HTML файл:
document.getElementById('open-in-chrome').addEventListener('click', openInChrome);
