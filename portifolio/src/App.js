import React from "react";
import { useEffect, useState } from "react";

import { keepTheme } from "./utils/theme";

import Aos from "aos";

import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

import "bootstrap/dist/css/bootstrap.min.css";

import "aos/dist/aos.css";

import Hamburguer from "./components/Hamburguer";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import About from "./components/About";
import Abilities from "./components/Abilities";
import Curriculum from "./components/Curriculum";
import Portifolio from "./components/Portifolio";
import Contact from "./components/Contact";
import IconWhatsFloat from "./components/IconWhatsFloat";

import Footer from "./components/Footer";

import "./style.css";

function App() {
 
  useEffect(() => {
    keepTheme();
  });

  useEffect(() => {
    /* Responsividade do Header */
    const menuMobile = document.querySelector(".menu-mobile");
    const body = document.querySelector("body");

    menuMobile.addEventListener("click", () => {
      body.classList.toggle("menu-nav-active");
    });

    const navItem = document.querySelectorAll(".nav-item");
    navItem.forEach((item) => {
      item.addEventListener("click", () => {
        if (body.classList.contains("menu-nav-active")) {
          body.classList.remove("menu-nav-active");
          menuMobile.classList.replace("bi-x", "bi-list");
        }
      });
    });
  });

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <body>
      <Hamburguer />
      <Header />
      <main id="main">
        <Inicio />
        <About />
        <Abilities />
        <Curriculum />
        <Portifolio />
        <Contact />
        <IconWhatsFloat />
      </main>
      <Footer />
    </body>
  );
}

export default App;
