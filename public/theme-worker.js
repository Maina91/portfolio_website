self.addEventListener('message', (event) => {
  const { type, theme } = event.data;
  if (type === 'SET_THEME') {
    // Store theme in localStorage
    localStorage.setItem('theme', theme);
    // Notify main thread
    self.postMessage({ type: 'THEME_SET', theme });
  }
});