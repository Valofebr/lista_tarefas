document.addEventListener('DOMContentLoaded', carregarTarefas);

document.getElementById('adicionar-btn').addEventListener('click', () => {
    const descricao = document.getElementById('tarefa-input').value.trim();
    if (!descricao) return alert('Digite uma tarefa!');

    fetch('adicionar_tarefa.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ descricao })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('tarefa-input').value = '';
            carregarTarefas();
        } else {
            alert('Erro ao adicionar tarefa!');
        }
    });
});

function carregarTarefas() {
    fetch('listar_tarefas.php')
        .then(response => response.json())
        .then(data => {
            const lista = document.getElementById('lista-tarefas');
            lista.innerHTML = '';
            data.forEach(tarefa => {
                const item = document.createElement('li');
                item.className = tarefa.status === 'concluida' ? 'concluida' : '';
                item.innerHTML = `
                    ${tarefa.descricao}
                    <div>
                        <button onclick="alterarStatus(${tarefa.id})">${tarefa.status === 'pendente' ? 'Concluir' : 'Reabrir'}</button>
                        <button class="excluir-btn" onclick="excluirTarefa(${tarefa.id})">Excluir</button>
                    </div>
                `;
                lista.appendChild(item);
            });
        });
}

function alterarStatus(id) {
    fetch('editar_tarefa.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
    }).then(() => carregarTarefas());
}

function excluirTarefa(id) {
    fetch('excluir_tarefa.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
    }).then(() => carregarTarefas());
}