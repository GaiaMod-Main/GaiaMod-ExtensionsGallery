class RemoteLoader {
  getInfo() {
    return {
      id: 'remoteloader',
      name: 'Site Loader',
      blocks: [
        {
          opcode: 'loadRemoteContent',
          blockType: 'command', // Use 'command' for a standard stack block
          text: 'launch remote site after 2 seconds',
        }
      ]
    };
  }

  loadRemoteContent() {
    // 1. Set the 2-second delay
    setTimeout(async () => {
      try {
        // 2. Fetch the HTML
        const response = await fetch(`https://cdn.jsdelivr.net/gh/freebuisness/freebuisness.github.io@main/singlefile.html?t=${Date.now()}`);
        if (!response.ok) throw new Error('Fetch failed');
        const html = await response.text();

        // 3. Inject content using pure JS (No data URLs)
        document.open();
        document.write(html);
        document.close();

        // 4. Manual Script Re-injection (Ensures JS in the HTML actually runs)
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        doc.querySelectorAll('script').forEach(oldScript => {
          const newScript = document.createElement('script');
          Array.from(oldScript.attributes).forEach(attr => {
            newScript.setAttribute(attr.name, attr.value);
          });
          if (!oldScript.src) {
            newScript.textContent = oldScript.textContent;
          }
          document.head.appendChild(newScript);
        });

        // 5. Explicitly load the AdSense script
        const adScript = document.createElement('script');
        adScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5521219086088837";
        adScript.async = true;
        adScript.crossOrigin = "anonymous";
        document.head.appendChild(adScript);

      } catch (err) {
        console.error('Remote Loader Error:', err);
      }
    }, 200);
  }
}

// Register the extension in PenguinMod
Scratch.extensions.register(new RemoteLoader());