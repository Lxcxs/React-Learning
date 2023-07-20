import React from "react";
import styles from './Contato.module.css'
import foto from '../components/img/contato.jpg'
import Head from "./Head";

const Contato = () => {

    return (

        <section className={styles.contato + " animaLeft"}>
                    <Head title='Contato' description='Entre em contato' />
            <img src={foto} alt="máquina de escrever" />
            <div>
                <h1>Entre em Contato:</h1>

                <ul className={styles.dados}>
                    <li>lucas.csnas@gmail.com</li>
                    <li>00 00000-0000</li>
                    <li>Rua Fulano da Silva, 345</li>
                </ul>
            </div>
        </section>
    )
}

export default Contato