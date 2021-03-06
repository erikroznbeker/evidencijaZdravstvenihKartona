import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'


class Novi extends Component {


    state = {
        brojKartona: "",
        ime: "",
        prezime: "",
        datumRodjenja: "",
        spol: "",

    }

    //Handle fields change
    // onChange = (e) => {
    //     this.setState({[e.target.ref]: e.target.ref});
    //
    // }
    // onNew = () => {
    //     const brojKartona = this.refs.brojKartona.value;
    //     const ime = this.refs.ime.value
    //     const prezime = this.refs.prezime.value
    //     const datumRodjenja = this.refs.datumRodjenja.value
    //     const spol = this.refs.spol.value
    //
    //     this.setState({
    //
    //         brojKartona: brojKartona,
    //         ime: ime,
    //         prezime: prezime,
    //         datumRodjenja: datumRodjenja,
    //         spol: spol
    //     })
    // }
    onChange = name => (e) => {
        this.setState({
            [name]: e.target.value , id: this.props.children
        })
    }

    onSubmit = (e) => {

        e.preventDefault();
        this.props.addPerson(this.state)

        //////očisti polja///////////
        // // const {brojKartona, ime, prezime, datumRodjenja, spol} = e.target.elements;
        // brojKartona.value = "";
        // ime.value = "";
        // prezime.value = "";
        // datumRodjenja.value = "";
        // spol.value = "";
        this.refs.myForm.reset();
        this.refs.brojKartona.focus();

    }

    render() {

        // let defBroj = "";
        // let defIme = "";
        // let defPrezime = "";
        // let defDatumRodenja = "";
        // let defSpol = "";
        // const {id, getPersons,} = this.props
        // if (id !== null) {
        //     console.log("from", id)
        //     const person = getPersons().filter(person => person.id === id)
        //     person.map(item => {
        //         defBroj = item.brojKartona;
        //         defIme = item.ime;
        //         defPrezime = item.prezime;
        //         defDatumRodenja = item.datumRodjenja;
        //         defSpol = item.spol;
        //     })
        //
        // }


        return (
            <div className="container" style={{maxWidth: "800px"}}>
                <h2 style={{color: "gray"}}>Unesi Podatke</h2>
                <Form ref={"myForm"} onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Control name="brojKartona"
                            // required
                                      type="text"
                                      placeholder="Broj Kartona"
                                      onChange={this.onChange ("brojKartona")}

                                      ref={"brojKartona"}

                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control name="ime"
                            // required
                                      type="text"
                                      placeholder={"Ime"}
                                      onChange={this.onChange ("ime")}
                                      ref={"ime"}

                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control name="prezime"
                            // required
                                      type="text"
                                      placeholder={"Prezime"}
                                      onChange={this.onChange ("prezime")}

                                      ref={"prezime"}

                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control name="datumRodjenja"
                                      type={"date"}
                                      onChange={this.onChange ("datumRodjenja")}

                                      ref={"datumRodjenja"}


                        />
                    </Form.Group>

                    <Form.Group>

                        <Form.Control as="select"
                                      name={"spol"}
                            // required
                                      onChange={this.onChange ("spol")}

                                      ref={"spol"}
                        >
                            <option name="spol" ref={"spol"} >Spol</option>
                            <option name="male" ref={"male"} value={"Muški"}>Muški</option>
                            <option name="female" ref={"female"} value={"Ženski"} >Ženski</option>

                        </Form.Control>
                    </Form.Group>

                    <button onClick={this.onNew} className="btn btn-primary btn-block"
                    >Spremi
                    </button>
                </Form>


            </div>
        );
    }
}

export default Novi;