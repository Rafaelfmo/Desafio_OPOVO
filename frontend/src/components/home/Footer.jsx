import React from "react";
import "../../styles/Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-content container">
      <div className="footer-logo">
        <img
          src="https://fdr.org.br/uane/wp-content/themes/theme/assets/imgs/logos/logo-uane.png"
          alt="UANE Logo"
        />
      </div>
      <div className="footer-info">
        <h4>Informações</h4>
        <a href="#">Perguntas Frequentes</a>
        <a href="#">Política de Privacidade</a>
      </div>
      <div className="footer-address">
        <h4>Endereço</h4>
        <a href="https://www.google.com/maps/place/282+-+A+-+Av.+Aguanambi,+282+A+-+Joaquim+Távora+(Fortaleza),+Fortaleza+-+CE,+60055-402/@-3.7393656,-38.5276439,1140m/data=!3m2!1e3!4b1!4m6!3m5!1s0x7c748fdc8796159:0x84878a6660fa8451!8m2!3d-3.7393656!4d-38.5250636!16s%2Fg%2F11crr1j485?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D">
          Av. Aguanambi, 282 A - Joaquim Távora <br />
          Fortaleza - CE, 60055-402
        </a>
      </div>
      <div className="footer-contact">
        <h4>Fale Conosco</h4>
        <div className="footer-whatsapp">
          <FaWhatsapp />{" "}
          <a
            href="https://wa.me/558591231327"
            target="_blank"
            rel="noopener noreferrer"
          >
            (85) 9123-1327
          </a>
        </div>
      </div>
      <div className="footer-social">
        <h4>Redes sociais</h4>
        <div className="footer-icons">
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
    <div className="footer-copy">
      © {new Date().getFullYear()}. Projetado por{" "}
      <a href="https://github.com/Rafaelfmo">Rafaelfmo</a>. Todos os direitos
      reservados.
    </div>
  </footer>
);

export default Footer;
