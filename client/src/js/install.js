const butInstall = document.getElementById('buttonInstall');

//event handler for the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

//event handler for the `butInstall` element
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  
    if (!promptEvent) {
        return;
    }
  
  promptEvent.prompt();
  
  window.deferredPrompt = null;
  
    butInstall.classList.toggle('hidden', true);
});

//handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
