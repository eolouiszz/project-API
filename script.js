const temp = document.getElementById('temperature');

fetch('dados.json') // URL do arquivo JSON
  .then(response => response.json())  // Converte a resposta para JSON
  .then(data => {
    temp.textContent = `${data.temp}°C`; // Atualiza o conteúdo do elemento com a temperatura
  })
  .catch(error => {
    console.error('Erro:', error); // Tratamento de erro
    temp.textContent = 'Erro ao carregar temperatura'; // Mensagem de fallback
  });
