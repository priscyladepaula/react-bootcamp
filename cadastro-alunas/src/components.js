import React, { Component } from 'react';
import './style.css';

export class RegisterForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fields: [],
            errors: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitUserRegistrationForm = this.submitUserRegistrationForm.bind(this);

    };

    handleChange(event) {
        let fields = this.state.fields;
        fields[event.target.name] = event.target.value;
        this.setState({
            fields
        });

    }

    submitUserRegistrationForm(event) {
        let fields = [];
        event.preventDefault();
        if (this.validateForm()) {
            fields["name"] = "";
            fields["city"] = "";
            fields["email"] = "";
            fields["phone"] = "";
            fields["cpf"] = "";
            this.setState({ fields: fields });
            alert("Aluna cadastrada!");
        }
    }

    handleButtonClick = () => {
        this.form.reset() 
    }

    //método para validar cada campo do formulário
    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "*Digite seu nome completo.";
        }

        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[A-Za-záàâãéèêíïóôõöúçñ ]+$/i)) {
                formIsValid = false;
                errors["name"] = "*Somente caracteres alfabeticos.";
            }
        }

        if (!fields["city"]) {
            formIsValid = false;
            errors["city"] = "*Digite sua cidade corretamente.";
        }

        if (typeof fields["city"] !== "undefined") {
            if (!fields["city"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["city"] = "*Somente caracteres alfabeticos.";
            }
        }

        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "*Digite seu e-mail.";
        }

        if (typeof fields["email"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["email"])) {
                formIsValid = false;
                errors["email"] = "*Digite seu e-mail corretamente.";
            }
        }

        if (!fields["phone"]) {
            formIsValid = false;
            errors["phone"] = "*Digite seu telefone.";
        }

        if (typeof fields["phone"] !== "undefined") {
            if (!fields["phone"].match(/^\(?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/)) {
                formIsValid = false;
                errors["phone"] = "*Digite seu telefone corretamente.";
            }
        }

        if (!fields["cpf"]) {
            formIsValid = false;
            errors["cpf"] = "*Digite seu CPF.";
        }

        if (typeof fields["cpf"] !== "undefined") {
            if (!fields["cpf"].match(/^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{2})$/)) {
                formIsValid = false;
                errors["cpf"] = "*Digite seu cpf corretamente.";
            }
        }

        this.setState({
            errors: errors
        });
        return formIsValid;

    }


    render() {
        return (
            <div id="registro">
                <FormPage />
                <form ref={form => this.form = form} name="userRegistrationForm" onSubmit={this.submitUserRegistrationForm} >

                    <FormInput label="Nome completo"
                        type="text"
                        placeholder="Ex.: Fulano da Silva"
                        name="name"
                        onChange={this.handleChange}
                        div={this.state.errors.name}
                    /><br />

                    <FormInput label="Cidade"
                        type="text"
                        placeholder="Ex.: SP"
                        name="city"
                        onChange={this.handleChange}
                        div={this.state.errors.city}
                    /><br />

                    <FormInput label="E-mail"
                        type="text"
                        placeholder="Ex.: email@email.com"
                        name="email"
                        onChange={this.handleChange}
                        div={this.state.errors.email}
                    /><br />

                    <FormInput label="CPF"
                        type="text"
                        placeholder="Ex.: 000.000.000-00"
                        name="cpf"
                        onChange={this.handleChange}
                        div={this.state.errors.cpf}
                        mask="000.000.000-00"
                    /><br />

                    <FormInput label="Telefone"
                        type="text"
                        placeholder="Ex.: (XX)XXXXX-XXXX"
                        name="phone"
                        onChange={this.handleChange}
                        div={this.state.errors.phone}
                    /><br />

                    <button type="submit" className="button" onClick={this.handleButtonClick}>Inscrever</button>
                </form>
            </div>
        )
    }

}

class FormInput extends Component {
    render() {
        return (
            <>
                <label>{this.props.label}</label>
                <input type={this.props.label}
                    placeholder={this.props.placeholder}
                    name={this.props.name}
                    onChange={this.props.onChange}
                    mask={this.props.mask}
                />
                <div className="msgErro">{this.props.div}</div>
            </>
        )
    }
}

class FormPage extends Component {
    render() {
        return (
            <>
                <h3>Cadastro de Alunas</h3><br />
            </>
        )
    }
}