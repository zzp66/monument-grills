 window.onload = function () {
  document.getElementById('copyBtn').addEventListener('click', function () {
    var link = this.getAttribute('data-link');
    

    var tempInput = document.createElement('textarea');
    tempInput.value = link;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    this.textContent = 'Copied';
    this.disabled = true;
  })
}