
const api = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: { token: localStorage.getItem('token_fac') }
});

function verificaAutenticacao() {
    const token = localStorage.getItem('token_fac');
    if (!token) {
        window.location.href = 'login.html';
    }
}

async function listarDadosUsuarios() {
    try {
        const response = await api.get('usuarios');
        const data = response.data;
        const tabela = document.querySelector('#tabela');
        tabela.innerHTML = data.map(item => `
            <tr>
                <td>${item.id}</td>
                <td>${item.nome}</td>
                <td>${item.email}</td>
                <td>
                    <button class="btn btn-primary">Editar</button>
                    <button onclick="excluir(${item.id})" class="btn btn-danger">Excluir</button>
                </td>
            </tr>`).join('');
    } catch (error) {
        console.error('Erro ao listar usuários:', error);
    }
}

async function excluir(id) {
    if (confirm('Deseja deletar este usuário?')) {
        try {
            await api.delete(`usuarios/${id}`);
            listarDadosUsuarios();
        } catch (error) {
            console.error('Erro ao excluir usuário:', error);
        }
    }
}

async function salvar() {
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const dataNascimento = document.querySelector('#dataNascimento').value;
    const genero = document.querySelector('#genero').value;
    const cpf = document.querySelector('#cpf').value;
    const tipo_usuario = document.querySelector('#tipo_usuario').value;
    const senha = document.querySelector("#senha").value

    try {
        await api.post('usuarios', {
            nome,
            email, 
            data_nascimento: dataNascimento,
            genero,
            cpf,
            tipo_usuario_id: tipo_usuario,
            senha
        });
        listarDadosUsuarios();
    } catch (error) {
        console.error('Erro ao salvar usuário:', error);
    }
}

document.getElementById('salvarUsuario').addEventListener('click', salvar);
document.addEventListener('DOMContentLoaded', listarDadosUsuarios);
