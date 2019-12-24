import React, {Fragment, useState} from 'react';
import {Button, FormGroup, Input, Label} from "reactstrap";
import {Requester} from "../../api/requester";
import toastr from 'toastr';
import {Auth} from "../../api/auth";

const Login = props => {
    const [values, setValues] = useState({
        username: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = e => {
        const fieldName = e.target.name;
        setValues({
            ...values,
            [fieldName]: e.target.type === 'checkbox' ? +e.target.checked : e.target.value
        })
    };

    const handleLogin = () => {
        setLoading(true);
        Requester.login(values.username, values.password)
            .then(res => {
                setLoading(false);
                const {token, username, userId} = res.data;
                Auth.saveData(token, username, userId);
                toastr.success('You are successfully logged in.');
                props.history.push('/');
            })
            .catch(() => {
                setLoading(false);
                toastr.error('Invalid credentials.');
            })
    };

    return (
        <Fragment>
            <h2 className="text-center">Login</h2>
            <div className="jumbotron">
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input
                        onChange={handleChange}
                        value={values.username}
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter username..."
                    />
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
                    />
                </FormGroup>
                <Button color="primary" onClick={handleLogin} disabled={loading}>
                    {loading ? 'Please wait...' : 'Register'}
                </Button>
            </div>
        </Fragment>
    );
};

export default Login;
