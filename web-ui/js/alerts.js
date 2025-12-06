// Simple Bootstrap-Alert Helper
function showMessage(type, text, targetId = "verifierMessages") {
  const container = document.getElementById(targetId);
  if (!container) {
    // Fallback, falls div vergessen wurde
    alert(text);
    return;
  }

  const wrapper = document.createElement("div");
  wrapper.className = `alert alert-${type} alert-dismissible fade show`;
  wrapper.setAttribute("role", "alert");
  wrapper.innerHTML = `
    ${text}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;

  container.appendChild(wrapper);

  // Alert nach 5 Sekunden automatisch schließen
  setTimeout(() => {
    const alertInstance = bootstrap.Alert.getOrCreateInstance(wrapper);
    alertInstance.close();
  }, 5000);
}
