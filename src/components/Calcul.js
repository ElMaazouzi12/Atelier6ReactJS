import React from "react";

class Calcul extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            capEmp : 0,
            tauxIntAnn : 0,
            dureeRem : 0,
            mens : 0
        }
    }
    handleOnchange= (e) => {
        this.setState({
            capEmp : e.target.value,
            tauxIntAnn : e.target.value,
            dureeRem : e.target.value
        })
    }    

    handleOnSubmit = (e)=>{
        e.preventDefault();
        const mensualite = (this.state.capEmp * this.state.tauxIntAnn/100/12)/(1- Math.pow((1 + this.state.tauxIntAnn/100/12), -this.state.dureeRem))
        this.setState({mens: mensualite})
      }
    
    render() {
        return (
            <section>
                <form onSubmit={this.handleOnSubmit}>
                    <div className="form-group">
                        <label>Capital emprunte:</label>
                        <input type='number' onChange={this.handleOnchange}/>DH
                    </div>
                    <div className="form-group">
                        <label>Taux d'interet annuel:</label>
                        <input type='number' onChange={this.handleOnchange}/>%
                    </div>
                    <div className="form-group">
                        <label>Duree de rembourssement</label>
                        <input type='number'  onChange={this.handleOnchange}/>Mois
                    </div>
                    <hr/>
                    <div className="form-group">
                        <button>Calculer</button>
                    </div>
                    <div className="from-group">
                        <label>La mensualite:</label>
                        <input type='number' value={this.state.mens} />
                    </div>
                </form>
            </section>
        );
    }
}

export default Calcul;