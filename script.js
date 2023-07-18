// untuk button mulai belajar
const button = document.getElementById('btn-1');
button.addEventListener('click', function() {
  window.location.href = 'coba2.html'; 
});
// untuk button forum
const button1 = document.getElementById('btn-0');
button1.addEventListener('click', function() {
    window.open("https://example.com", "_blank");
});


const toggleButton = document.getElementById('toggleButton');
const mySection = document.getElementById('mySection');

function toggleSection() {
  const mySection = document.getElementById('mySection');
  if (mySection.style.display === 'none') {
    mySection.style.display = 'block';
    document.getElementById('toggleButton').textContent = 'Sembunyikan Section';
  } else {
    mySection.style.display = 'none';
    document.getElementById('toggleButton').textContent = 'Tampilkan Section';
  }
}

