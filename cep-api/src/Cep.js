import React, { useState } from 'react'
import Axios from 'axios'
import './App.css';

export default function Cep() {

    const [cep, setCep] = useState();
    const [info, setInfo] = useState([]);

    const getSearchCep = () => {
        Axios.get(`http://viacep.com.br/ws/${cep}/json/`)
            .then((res) => {
                setInfo(res.data);
            }).catch(function (erro) {
                console.error(erro);
            })
    }

    return (
        <>
            <div id="container">
                <h1>Consulta de CEP</h1>
                <input id="digite-cep"
                    type="text"
                    onChange={e => { setCep(e.target.value) }}
                    onKeyPress={e => {
                        if (e.key === 'Enter') {
                            getSearchCep();
                        }
                    }}
                    placeholder="Digite seu CEP e dê Enter"
                />

                <div id="quadro">
                    <div id="formulario">
                        <label>Logradouro: </label>
                        <div>
                            <input type="text" value={info.logradouro} disabled />
                        </div>

                        <label>Bairro: </label>
                        <div>
                            <input type="text" value={info.bairro} disabled />
                        </div>

                        <label>Localidade: </label>
                        <div>
                            <input type="text" value={info.localidade} disabled />
                        </div>

                        <label>UF: </label>
                        <div>
                            <input type="text" value={info.uf} disabled />
                        </div>

                        <label>IBGE: </label>
                        <div>
                            <input type="text" value={info.ibge} disabled />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}