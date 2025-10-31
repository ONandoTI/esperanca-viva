import React, { useState } from "react";
import "./css/Cadastro.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cpf: "",
    telefone: "",
    nascimento: "",
    endereco: "",
    cep: "",
    cidade: "",
    estado: "",
  });

  // === Máscaras básicas e validações ===
  const mascararCPF = (v) => {
    return v
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
      .slice(0, 14);
  };

  const mascararTelefone = (v) => {
    return v
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d{5})(\d{4})$/, "$1-$2")
      .slice(0, 15);
  };

  const mascararCEP = (v) => {
    return v
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d{1,3})$/, "$1-$2")
      .slice(0, 9);
  };

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
      case "cep":
        newValue = mascararCEP(value);
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
      case "cidade":
        newValue = value.slice(0, 50);
        break;
      default:
        break;
    }

    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const camposVazios = Object.entries(formData)
      .filter(([_, v]) => v.trim() === "")
      .map(([k]) => k);

    if (camposVazios.length > 0) {
      alert("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    console.log("Dados enviados:", formData);
    alert("Cadastro realizado com sucesso!");
  };

  const handleReset = () => {
    setFormData({
      nome: "",
      email: "",
      cpf: "",
      telefone: "",
      nascimento: "",
      endereco: "",
      cep: "",
      cidade: "",
      estado: "",
    });
  };

  return (
    <section className="cadastro-section">
      <h2>Preencha seus dados</h2>

      <form onSubmit={handleSubmit} className="cadastro-form">
        {/* ======================== */}
        {/* INFORMAÇÕES PESSOAIS */}
        {/* ======================== */}
        <fieldset className="cadastro-fieldset">
          <legend className="cadastro-legend">Informações Pessoais</legend>

          <div className="cadastro-grid">
            <div>
              <label htmlFor="nome" className="form-label">
                Nome Completo:
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                className="cadastro-input"
                value={formData.nome}
                onChange={handleChange}
                required
                placeholder="Ex: João da Silva"
              />
            </div>

            <div>
              <label htmlFor="email" className="form-label">
                E-mail:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="cadastro-input"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="exemplo@email.com"
              />
            </div>

            <div>
              <label htmlFor="cpf" className="form-label">
                CPF:
              </label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                className="cadastro-input"
                value={formData.cpf}
                onChange={handleChange}
                required
                placeholder="000.000.000-00"
                maxLength={14}
              />
            </div>

            <div>
              <label htmlFor="telefone" className="form-label">
                Telefone:
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                className="cadastro-input"
                value={formData.telefone}
                onChange={handleChange}
                required
                placeholder="(11) 91234-5678"
                maxLength={15}
              />
            </div>

            <div className="full-width">
              <label htmlFor="nascimento" className="form-label">
                Data de Nascimento:
              </label>
              <input
                type="date"
                id="nascimento"
                name="nascimento"
                className="cadastro-input"
                value={formData.nascimento}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </fieldset>

        {/* ======================== */}
        {/* ENDEREÇO */}
        {/* ======================== */}
        <fieldset className="cadastro-fieldset">
          <legend className="cadastro-legend">Endereço</legend>

          <div className="cadastro-grid">
            <div className="full-width">
              <label htmlFor="endereco" className="form-label">
                Endereço:
              </label>
              <input
                type="text"
                id="endereco"
                name="endereco"
                className="cadastro-input"
                value={formData.endereco}
                onChange={handleChange}
                required
                placeholder="Rua, número e complemento"
              />
            </div>

            <div>
              <label htmlFor="cep" className="form-label">
                CEP:
              </label>
              <input
                type="text"
                id="cep"
                name="cep"
                className="cadastro-input"
                value={formData.cep}
                onChange={handleChange}
                required
                placeholder="00000-000"
                maxLength={9}
              />
            </div>

            <div>
              <label htmlFor="cidade" className="form-label">
                Cidade:
              </label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                className="cadastro-input"
                value={formData.cidade}
                onChange={handleChange}
                required
                placeholder="Ex: São Paulo"
              />
            </div>

            <div className="full-width">
              <label htmlFor="estado" className="form-label">
                Estado:
              </label>
              <select
                id="estado"
                name="estado"
                className="cadastro-select"
                value={formData.estado}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option value="SP">SP</option>
                <option value="RJ">RJ</option>
                <option value="MG">MG</option>
                <option value="RS">RS</option>
                <option value="BA">BA</option>
                <option value="PE">PE</option>
                <option value="PR">PR</option>
              </select>
            </div>
          </div>
        </fieldset>

        <div className="cadastro-buttons">
          <button type="submit" className="btn btn-success">
            Cadastrar-se
          </button>
          <button
            type="button"
            className="cadastro-btn cadastro-btn-limpar"
            onClick={handleReset}
          >
            Limpar
          </button>
        </div>
      </form>
    </section>
  );
}
