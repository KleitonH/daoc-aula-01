import React from "react";
import { useState } from "react";
import "./location.css";
import useFetch from "../../hooks/useFetch";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Location() {
    const [cepInput, setCepInput] = useState(null);
    const [dados, error, loading] = useFetch(cepInput);

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target)
        const input = formData.get("cepInput")
        setCepInput(input);
    }

    return (
        <>
            <h1 className="my-4">Escreva abaixo seu CEP para consulta</h1>
            <Form className="custom-form mb-5" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name="cepInput" type="text" placeholder="Insira seu cep" />
                    <Form.Text className="text-muted">
                        Não usaremos seus dados de localização para demais objetivos. Confia.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Pesquisar
                </Button>
            </Form>
            {loading ? (
                <h1>Carregando...</h1>
            ) : error ? (
                <h1>Error</h1>
            ) : dados ? (
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Cidade</th>
                            <th scope="col">Bairro</th>
                            <th scope="col">Endereço</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{dados.localidade}</td>
                            <td>{dados.bairro}</td>
                            <td>{dados.logradouro}</td>
                        </tr>
                    </tbody>
                </table>
            ) : null}
        </>
    )
}

export default Location