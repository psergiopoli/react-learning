import React from 'react';
import Cep from './Cep';
import ErrorUtil from '../ErrorUtil';

export default class CepComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cep: '',
            result: null,
            error: null,
        }

        this.searchCep = this.searchCep.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    searchCep(event) {
        Cep.searchCep(this.state.cep).then(result => {
            this.setState({ result });
            this.setState({ error: null, });
        }).catch(error => {
            this.setState({ error });
        });

        event.preventDefault();
    }

    onChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    render() {
        return (
            <div>
                <form className="box" onSubmit={this.searchCep}>
                    <div className="field">
                        <label className="label">Cep</label>
                        <input className="input" placeholder="12345-789" type="text" name="cep" value={this.state.cep} onChange={this.onChange} />
                        { ErrorUtil.fieldError(this.state.error) }
                    </div>
                    <button className="button is-link" type="submit">Buscar</button>
                </form>
                <div className="box">{Cep.formatCep(this.state.result)}</div>
            </div>
        );
    }
}