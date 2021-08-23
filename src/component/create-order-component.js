import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export default class CreateOrder extends Component {

    constructor(props){
        super(props)

        this.state={
            name:'',
            email:'',
            rollno:''
        }
    }

    onChnageOrderName = (e) =>{
        this.setState({name:e.target.value})
    }

    onChnageOrderEmail = (e) =>{
        this.setState({email:e.target.value})
    }

    onChnageOrderRollno = (e) =>{
        this.setState({rollno:e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();

        const orderObject = {
            name: this.state.name,
            email: this.state.email,
            rollno: this.state.rollno
        };

        axios.post('http://localhost:4000/orders/create-order', orderObject).then(res =>(
            console.log(res.data)
        ));

        // console.log('Order successfully created.');
        // console.log(`Name: ${this.state.name}`);
        // console.log(`Email: ${this.state.email}`);
        // console.log(`Rollno: ${this.state.rollno}`);

        this.setState({
            name:'',
            email:'',
            rollno:''
        })
    }

    render() {
        return (
            <div className="form-wrapper mt-3">
                <h1>Create Order</h1>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group className="mb-3" controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={this.onChnageOrderName}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={this.state.email} onChange={this.onChnageOrderEmail}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Roll">
                        <Form.Label>Roll No.</Form.Label>
                        <Form.Control type="text" value={this.state.rollno} onChange={this.onChnageOrderRollno}/>
                    </Form.Group>

                    <div className="d-grid gap-2 mt-2" >
                    <Button variant="success" size="lg" block="primary" type="submit">
                        Create Order
                    </Button>
                    </div>

                </Form>
            </div>
        )
    }
}
