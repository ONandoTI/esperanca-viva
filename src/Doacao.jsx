import React, { useState } from "react";
import "./Doacao.css";

export default function Doacao() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    valor: "",
    cpf: "",
    telefone: "",
    endereco: "",
    estado: "",
    motivo: "",
  });

  const [erros, setErros] = useState({});

  // ======= Máscaras =======
  const mascararCPF = (v) =>
    v
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
      .slice(0, 14);

  const mascararTelefone = (v) =>
    v
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d{5})(\d{4})$/, "$1-$2")
      .slice(0, 15);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    switch (name) {
      case "cpf":
        newValue = mascararCPF(value);
        break;
      case "telefone":
        newValue = mascararTelefone(value);
        break;
      case "nome":
        newValue = value.slice(0, 80);
        break;
      case "email":
        newValue = value.slice(0, 60);
        break;
      case "endereco":
        newValue = value.slice(0, 120);
        break;
      case "motivo":
        newValue = value.slice(0, 400);
        break;
      case "valor":
        newValue = newValue.replace(/[^\d.,]/g, "").slice(0, 10);
        break;
      default:
        break;
    }

    setFormData({ ...formData, [name]: newValue });
  };

  const validarCampos = () => {
    const novosErros = {};

    if (!formData.nome.trim()) novosErros.nome = "Informe o nome completo.";
    if (!formData.email.includes("@")) novosErros.email = "E-mail inválido.";
    if (!formData.valor || parseFloat(formData.valor.replace(",", ".")) <= 0)
      novosErros.valor = "Digite um valor válido para doação.";
    if (formData.cpf.length < 14)
      novosErros.cpf = "Informe um CPF válido.";
    if (formData.telefone.length < 14)
      novosErros.telefone = "Informe um telefone válido.";
    if (!formData.endereco.trim())
      novosErros.endereco = "Informe o endereço completo.";
    if (!formData.estado) novosErros.estado = "Selecione um estado.";
    if (!formData.motivo.trim())
      novosErros.motivo = "Descreva o motivo da doação.";

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validarCampos()) {
      alert("Verifique os campos destacados em vermelho.");
      return;
    }

    console.log("Doação enviada:", formData);
    alert("Doação registrada com sucesso! Obrigado por contribuir ❤️");

    setFormData({
      nome: "",
      email: "",
      valor: "",
      cpf: "",
      telefone: "",
      endereco: "",
      estado: "",
      motivo: "",
    });
    setErros({});
  };

  return (
    <section className="doacao-section">
      <h1 className="doacao-title">Área de Doação — ONG Esperança Viva</h1>

      <p className="doacao-desc">
        Sua doação ajuda a transformar vidas! Contribua com nossos projetos de
        educação, alimentação e sustentabilidade. Cada gesto faz a diferença 💚
      </p>

      <form className="doacao-form" onSubmit={handleSubmit}>
        <fieldset className="doacao-fieldset">
          <legend>Informações Pessoais</legend>

          <div className="doacao-grid">
            <div>
              <label>Nome Completo:</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className={erros.nome ? "input-error" : ""}
                placeholder="Ex: Maria de Souza"
              />
              {erros.nome && <span className="error">{erros.nome}</span>}
            </div>

            <div>
              <label>E-mail:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={erros.email ? "input-error" : ""}
                placeholder="exemplo@email.com"
              />
              {erros.email && <span className="error">{erros.email}</span>}
            </div>

            <div>
              <label>Valor da Doação (R$):</label>
              <input
                type="text"
                name="valor"
                value={formData.valor}
                onChange={handleChange}
                className={erros.valor ? "input-error" : ""}
                placeholder="Ex: 50,00"
              />
              {erros.valor && <span className="error">{erros.valor}</span>}
            </div>

            <div>
              <label>CPF:</label>
              <input
                type="text"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                className={erros.cpf ? "input-error" : ""}
                placeholder="000.000.000-00"
                maxLength={14}
              />
              {erros.cpf && <span className="error">{erros.cpf}</span>}
            </div>

            <div>
              <label>Telefone (WhatsApp):</label>
              <input
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                className={erros.telefone ? "input-error" : ""}
                placeholder="(11) 91234-5678"
                maxLength={15}
              />
              {erros.telefone && <span className="error">{erros.telefone}</span>}
            </div>

            <div className="full-width">
              <label>Endereço:</label>
              <input
                type="text"
                name="endereco"
                value={formData.endereco}
                onChange={handleChange}
                className={erros.endereco ? "input-error" : ""}
                placeholder="Rua, número, bairro"
              />
              {erros.endereco && <span className="error">{erros.endereco}</span>}
            </div>

            <div>
              <label>Estado:</label>
              <select
                name="estado"
                value={formData.estado}
                onChange={handleChange}
                className={erros.estado ? "input-error" : ""}
              >
                <option value="">Selecione...</option>
                {[
                  "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG",
                  "PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"
                ].map((uf) => (
                  <option key={uf} value={uf}>{uf}</option>
                ))}
              </select>
              {erros.estado && <span className="error">{erros.estado}</span>}
            </div>

            <div className="full-width">
              <label>Motivo da Doação:</label>
              <textarea
                name="motivo"
                rows="4"
                value={formData.motivo}
                onChange={handleChange}
                className={erros.motivo ? "input-error" : ""}
                placeholder="Conte-nos o motivo da sua doação..."
              ></textarea>
              {erros.motivo && <span className="error">{erros.motivo}</span>}
            </div>
          </div>
        </fieldset>

        <div className="doacao-buttons">
          <button type="submit" className="btn-enviar">
            Enviar Doação
          </button>
          <button
            type="button"
            className="btn-limpar"
            onClick={() =>
              setFormData({
                nome: "",
                email: "",
                valor: "",
                cpf: "",
                telefone: "",
                endereco: "",
                estado: "",
                motivo: "",
              })
            }
          >
            Limpar
          </button>
        </div>
      </form>
    </section>
  );
}
