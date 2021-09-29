
import "../styles/hamburguer.css";
import "../style.css";
import { useEffect } from "react";
import Button from "@restart/ui/esm/Button";



export default function Hamburguer() {

    useEffect(() => {
      const menuMobile = document.querySelector('.menu-mobile')
      const body = document.querySelector('body')

      menuMobile.addEventListener('click',() =>{
          menuMobile.classList.contains("bi-list")
          ? menuMobile.classList.replace("bi-list","bi-x")
          : menuMobile.classList.replace("bi-x","bi-list")
          body.classList.toggle('.menu-nav-active')
      })

      });

  return(

        <i class="bi bi-list menu-mobile"></i>
  )
}