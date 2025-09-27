document.getElementById('uploadForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const statusBox = document.getElementById('status');
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  if (!file) {
    statusBox.textContent = 'Please select a file to upload.';
    return;
  }

  statusBox.textContent = 'Uploading and analyzing...';

  // Simulate a fake AI moderation delay and result
  setTimeout(() => {
    const results = [
      { label: 'Safe ✅', reason: '' },
      { label: 'Flagged ⚠️', reason: 'Potentially sensitive content detected.' },
      { label: 'Rejected ❌', reason: 'Explicit content or copyright violation detected.' }
    ];

    const selected = results[Math.floor(Math.random() * results.length)];
    let resultMessage = `Moderation Result: ${selected.label}`;

    if (selected.reason) {
      resultMessage += `\nReason: ${selected.reason}`;
    }

    statusBox.textContent = resultMessage;
  }, 2000);
});
