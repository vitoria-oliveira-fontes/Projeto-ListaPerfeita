document.querySelectorAll('.edit-button').forEach(button => {
    button.addEventListener('click', event => {
      const section = event.target.dataset.section;
  
      if (section === 'meus-dados') {
        const newName = prompt('Digite seu nome:');
        const newEmail = prompt('Digite seu email:');
        if (newName) document.getElementById('username').textContent = newName;
        if (newEmail) document.getElementById('email').textContent = newEmail;
      } else if (section === 'localizacao') {
        alert('Funcionalidade de localização será implementada.');
      } else if (section === 'notificacoes') {
        alert('Configurações de notificações.');
      } else if (section === 'ajuda') {
        window.open('https://www.exemplo.com/ajuda', '_blank');
      }
    });
  });