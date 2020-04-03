import React from 'react';
import { useFormik } from 'formik';
import './style.css'

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Campo obrigatório!';
    }

    if (!values.email) {
        errors.email = 'Campo obrigatório!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'E-mail inválido!';
    }

    return errors;
};

export const Formulario = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div id="formName"><label htmlFor="name">Nome: </label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
                placeholder="Nome Sobrenome"
            />
            {formik.errors.name ? <div id="error">{formik.errors.name}</div> : null}</div>

            <div id="formEmail"><label htmlFor="email">E-mail: </label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="nome@email.com"
            />
            {formik.errors.email ? <div id="error">{formik.errors.email}</div> : null}</div>
            <div><button type="submit">Submit</button></div>
        </form>
    );
};