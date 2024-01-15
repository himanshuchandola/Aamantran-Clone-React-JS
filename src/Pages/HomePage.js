import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../utils/i18n";
import { Modal } from "react-bootstrap";

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "hi" : "en");
  };

  const handleBookTickets = () => {
    window.location.href = "https://aamantran.mod.gov.in/login";
  };

  return (
    <>
      <div className="container-fluid no-vertical-scroll">
        <div className="row">
          <div className="col-md-3 sidebar">
            <div className="d-flex align-items-center mb-3">
              <button
                type="button"
                className="btn btn-success custom-margin-right"
                onClick={toggleLanguage}
              >
                {i18n.language === "en" ? "हिन्दी" : "English"}
              </button>
              <img
                src="/Assets/header-logo.png"
                alt="Parade"
                className="img-fluid"
                width={400}
              />
            </div>
            <br />
            <p style={{ color: "orange" }}>{t("exclusive_access")}</p>
            <p style={{ color: "blue", textAlign: "center", fontSize: 26 }}>
              &
            </p>
            <p style={{ color: "green" }}>{t("experience_seamless")}</p>
            <br />
            <button className="btn btn-success" onClick={handleBookTickets}>
              {t("book_tickets")}
            </button>
            <br />
            <button className="btn btn-warning" onClick={handleShow}>
              {t("ticket_availability")}
            </button>
            <footer className="footer mt-auto py-3 bg-light position-sticky ">
              <div className="container">
                <span className="text-muted">{t("copyright")}</span>
              </div>
            </footer>
          </div>
          <div className="col-md-9 sidebar">
            <img
              src="/Assets/sidebar_photo.png"
              alt="Parade"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t("ticket_availablity_heading")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{t("ticket_availablity_body")}</Modal.Body>
      </Modal>
    </>
  );
};

export default HomePage;
