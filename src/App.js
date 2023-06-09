import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import './App.css';
import { FaWhatsapp, FaRegFileAlt, FaGlobe, FaDownload, FaSyncAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function QRGenerator() {
  const [link, setLink] = useState('');
  const [qrcodeLink, setQrcodeLink] = useState('');
  const [hasGenerated, setHasGenerated] = useState(false);
  const [showContainer, setShowContainer] = useState(true);

  const handleGenerate = () => {
    if (!link) {
      toast.error('Por favor, insira a URL do site.');
      return;
    }

    setHasGenerated(true);
    QRCodeLink.toDataURL(link, {
      width: 600,
      margin: 3,
    }, function(err, url){
      setQrcodeLink(url);
    });
    setShowContainer(false);
  };

  const handleRegenerate = () => {
    setHasGenerated(false);
    setQrcodeLink('');
    setLink('');
    setShowContainer(true);
  };

  return (
    <>
      <ToastContainer /> {/* Adiciona o ToastContainer no componente */}
      {showContainer && (
        <div className="container">
          <label htmlFor="url-input" className="label-text">Insira a URL do site</label>
          <input
            id="url-input"
            className="input"
            placeholder="https://nomedosite.com.br"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
          <button className="create" onClick={handleGenerate}>Gerar QR Code</button>
        </div>
      )}
      {qrcodeLink && hasGenerated && (
        <div className="container2">
          <div className="qrcode-wrapper">
            <QRCode value={link} size={200} />
          </div>
          <div className="button-group">
            <p className="qrcode-final-txt">Não tenha limites!!!
             <br></br>Faça o download do seu QR code 
             <br></br>e compartilhe sua marca.
            </p>
            <a href={qrcodeLink} download={'QRCODE.png'} className="download-btn">
              <FaDownload className="download-icon" />
              Baixar QRCode
            </a>
            <button className="regenerate-btn" onClick={handleRegenerate}>
              <FaSyncAlt className="regenerate-icon" />
              Gerar novamente
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function WhatsappQRGenerator() {
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [qrcodeLink, setQrcodeLink] = useState('');
  const [hasGenerated, setHasGenerated] = useState(false);
  const [showContainer, setShowContainer] = useState(true);

  const handleGenerate = () => {
    if (!number || !message) {
      toast.error('Por favor, preencha todos os campos.');
      return;
    }

    setHasGenerated(true);
    const link = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    QRCodeLink.toDataURL(link, {
      width: 600,
      margin: 3,
    }, function(err, url){
      setQrcodeLink(url);
    });
    setShowContainer(false);
  };

  const handleRegenerate = () => {
    setHasGenerated(false);
    setQrcodeLink('');
    setNumber('');
    setMessage('');
    setShowContainer(true);
  };

  return (
    <>
      <ToastContainer /> {/* Adiciona o ToastContainer no componente */}
      {showContainer && (
        <div className="container">
          <label htmlFor="whatsapp-number-input" className="label-text">Insira um número de WhatsApp</label>
          <input
            id="whatsapp-number-input"
            className="input"
            placeholder="Número do WhatsApp"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
          <label htmlFor="whatsapp-message-input" className="label-text">Insira uma mensagem</label>
          <input
            id="whatsapp-message-input"
            className="input"
            placeholder="Mensagem que você quer enviar"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button className="create" onClick={handleGenerate}>Gerar QR Code</button>
        </div>
      )}
      {qrcodeLink && hasGenerated && (
        <div className="container2">
          <div className="qrcode-wrapper">
            <QRCode value={`https://wa.me/${number}?text=${encodeURIComponent(message)}`} size={200} />
          </div>
          <div className="button-group">
            <p className="qrcode-final-txt">Não tenha limites!!!
             <br></br>Faça o download do seu QR code 
             <br></br>e compartilhe sua marca.
            </p>
            <a href={qrcodeLink} download={'QRCODE.png'} className="download-btn">
              <FaDownload className="download-icon" />
              Baixar QRCode
            </a>
            <button className="regenerate-btn" onClick={handleRegenerate}>
              <FaSyncAlt className="regenerate-icon" />
              Gerar novamente
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function TextQRGenerator() {
  const [text, setText] = useState('');
  const [qrcodeLink, setQrcodeLink] = useState('');
  const [hasGenerated, setHasGenerated] = useState(false);
  const [showContainer, setShowContainer] = useState(true);

  const handleGenerate = () => {
    if (!text) {
      toast.error('Por favor, insira um texto.');
      return;
    }

    setHasGenerated(true);
    QRCodeLink.toDataURL(text, {
      width: 600,
      margin: 3,
    }, function(err, url){
      setQrcodeLink(url);
    });
    setShowContainer(false);
  };

  const handleRegenerate = () => {
    setHasGenerated(false);
    setQrcodeLink('');
    setText('');
    setShowContainer(true);
  };

  return (
    <>
      <ToastContainer /> {/* Adiciona o ToastContainer no componente */}
      {showContainer && (
        <div className="container">
          <label htmlFor="text-input" className="label-text">Insira um texto</label>
          <input
            id="text-input"
            className="input"
            placeholder="Texto que você quer enviar"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <button className="create" onClick={handleGenerate}>Gerar QR Code</button>
        </div>
      )}
      {qrcodeLink && hasGenerated && (
        <div className="container2">
          <div className="qrcode-wrapper">
            <QRCode value={text} size={200} />
          </div>
          <div className="button-group">
            <p className="qrcode-final-txt">Não tenha limites!!!
             <br></br>Faça o download do seu QR code 
             <br></br>e compartilhe sua marca.
            </p>
            <a href={qrcodeLink} download={'QRCODE.png'} className="download-btn">
              <FaDownload className="download-icon" />
              Baixar QRCode
            </a>
            <button className="regenerate-btn" onClick={handleRegenerate}>
              <FaSyncAlt className="regenerate-icon" />
              Gerar novamente
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function App() {
  const [selectedType, setSelectedType] = useState(null);

  return (
    <div className="app">
      <header className="header">
        <h1>EVE</h1>
        <ul>
          <li><a href="./App.js">Início</a></li>
          <li><a href="./App.js">QR Code</a></li>
        </ul>
      </header>
      <div className="main">
        <div className="left">
          <h1 className="left-title1"> Gerador de</h1>
          <h1 className="left-title2"> QR Code</h1>
          <p className="left-text">
            Criar códigos nunca foi tão fácil.<br></br>
           Compartilhe seu próprio QR Code gratuito e torne a experiência
            do seu cliente mais rápida e agradável.<br></br>
            É simples e gratuito!</p>

            <div class="attribution">
                Coded by <a href="https://github.com/evematos">Evelin Matos</a>.
            </div>
        </div>
        <div className="right">
          <div className="options">
            <button className={`button-options ${selectedType === 'WhatsApp' ? 'selected' : ''}`} onClick={() => setSelectedType('WhatsApp')}>
              <div className="icon-container">
                <FaWhatsapp className="icon" color="gray" />
                <span> Mensagem de WhatsApp</span>
              </div>
            </button>
            <button className={`button-options ${selectedType === 'URL' ? 'selected' : ''}`} onClick={() => setSelectedType('URL')}>
              <div className="icon-container">
                <FaGlobe className="icon" color="gray" />
                <span>Website</span>
              </div>
            </button>
            <button className={`button-options ${selectedType === 'Text' ? 'selected' : ''}`} onClick={() => setSelectedType('Text')}>
              <div className="icon-container">
                <FaRegFileAlt className="icon" color="gray" />
                <span>Texto</span>
              </div>
            </button>
          </div>
          {selectedType === 'URL' && <QRGenerator />}
          {selectedType === 'WhatsApp' && <WhatsappQRGenerator />}
          {selectedType === 'Text' && <TextQRGenerator />}
        </div>
      </div>
    </div>
  );
}

export default App;