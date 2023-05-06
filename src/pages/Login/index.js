import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import NetflixLogo from "../../assets/netflixLogo.png";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    senha: "",
    toggleInput: "none",
  });
  const [showPassword, setShowpassword] = useState("MOSTRAR");
  const [typeInput, setTypeInput] = useState("password");

  const handleNextStep = () => {
    if (login.email !== "" && login.senha !== "") {
      navigate("/home");
    }
  };
  const handleInput = () => {
    setLogin({ ...login, toggleInput: "block" });
  };
  const toggleType = () => {
    if (showPassword === "MOSTRAR") {
      setShowpassword("OCULTAR");
      setTypeInput("text");
    } else {
      setShowpassword("MOSTRAR");
      setTypeInput("password");
    }
  };
  return (
    <div className="login--background">
      <div className="login--container"></div>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/a05047e3-74a3-4803-9a6a-70710da6ea00/BR-pt-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="Filmes e séries da Netflix"
      />
      <header className="header--login">
        <img src={NetflixLogo} alt="Netflix" />
      </header>
      <form className="login--form" method="get">
        <h1>Entrar</h1>

        <div className="group">
          <input
            type="text"
            required
            className="input--login"
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />
          <label className="label--login">Email ou número de telefone</label>
        </div>

        <div className="group" onClick={handleInput}>
          <input
            type={typeInput}
            required
            className="input--login"
            onChange={(e) => setLogin({ ...login, senha: e.target.value })}
          />
          <label className="label--login">Senha</label>
          <input
            type="button"
            className="btn--mostrar"
            value={showPassword}
            style={{ display: `${login.toggleInput}` }}
            onClick={toggleType}
          />
        </div>

        <button className="btn--entrar" onClick={handleNextStep}>
          Entrar
        </button>
        <div className="remember--help">
          <label className="checkbox">
            <input
              type="checkbox"
              className="option-input checkbox"
              defaultChecked
            />
            Lembre-se de mim
          </label>
          <p className="help">Precisa de ajuda ?</p>
        </div>
        <div className="login--footer">
          <p className="assine">
            Novo por aqui? <span>Assine agora.</span>
          </p>
          <p className="saibamais">
            Esta página é protegida pelo Google reCAPTCHA para garantir que você
            não é um robô. <span> Saiba mais</span>.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
