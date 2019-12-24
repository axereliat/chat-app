import React, {Fragment, useState} from 'react';
import {Button, FormFeedback, FormGroup, Input, Label} from "reactstrap";
import toastr from 'toastr';
import {Requester} from "../../api/requester";
import {registerValidator} from '../common/RegisterValidator';

const Register = props => {
    // const [email, setEmail] = useState('');
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    const [values, setValues] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = e => {
        const fieldName = e.target.name;
        const copiedErrors = {...errors};
        if (errors[fieldName]) {
            delete copiedErrors[fieldName];
            setErrors(copiedErrors);
        }
        setValues({
            ...values,
            [fieldName]: e.target.type === 'checkbox' ? +e.target.checked : e.target.value
        })
    };

    const handleRegister = () => {
        registerValidator(values)
            .then(() => {
                setLoading(true);
                Requester.register(values.email, values.username, values.password, values.confirmPassword)
                    .then(() => {
                        setLoading(false);
                        toastr.success('You are successfully registered.');
                        props.history.push('/login');
                    })
                    .catch(err => {
                        setLoading(false);
                        toastr.error(err.response.data.errors[0]);
                    });
            })
            .catch(errors => {
                setErrors(errors);
            });
    };

    return (
        <Fragment>
            <h2 className="text-center">Register</h2>
            <div className="jumbotron">
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        onChange={handleChange}
                        value={values.email}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter email..."
                        invalid={errors.hasOwnProperty('email')}
                    />
                    {errors.email && <FormFeedback>{errors.email}</FormFeedback>}
                </FormGroup>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input
                        onChange={handleChange}
                        value={values.username}
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter username..."
                        invalid={errors.hasOwnProperty('username')}
                    />
                    {errors.username && <FormFeedback>{errors.username}</FormFeedback>}
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                        onChange={handleChange}
                        value={values.password}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter password..."
                        invalid={errors.hasOwnProperty('password')}
                    />
                    {errors.password && <FormFeedback>{errors.password}</FormFeedback>}
                </FormGroup>
                <FormGroup>
                    <Label for="confirmPassword">Confirm password</Label>
                    <Input
                        onChange={handleChange}
                        value={values.confirmPassword}
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Repeat your password..."
                        invalid={errors.hasOwnProperty('confirmPassword')}
                    />
                    {errors.confirmPassword && <FormFeedback>{errors.confirmPassword}</FormFeedback>}
                </FormGroup>
                <Button color="primary" onClick={handleRegister} disabled={loading}>
                    {loading ? 'Please wait...' : 'Register'}
                </Button>
            </div>
        </Fragment>
    );
};

export default Register;
