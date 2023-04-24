import React, { useState } from 'react'
import { validateCoachLogin } from '../validators/validateCoachLogin'
import Navigation from './Navigation'
import { Button, Col, Container, Form, FormControl, FormGroup } from 'react-bootstrap'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { login, loginValidate } from '../actions/actions'

const CoachLogin = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    id: "",
    password: ""
  })
  const [formErrors, setFormErrors] = useState({
    idError: "",
    passwordError: ""
  })

  const [loginError, setLoginError] = useState("");
  const [coachDetails, setCoachDetails] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
    validateField(name, value);
  }

  const validateField = (name, value) => {
    let errors = formErrors;
    switch (name) {
      case "id":
        errors.idError = validateCoachLogin.validateId(value);
        break;
      case "password":
        errors.passwordError = validateCoachLogin.validatePassword(value);
        break;
      default:
        break;
    }
    setFormErrors(errors);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = "http://localhost:8080/coaches?id=" + formData.id + "&password=" + formData.password
    axios.get(url)
      .then((response) => {

        if (response.data[0]) {
          setCoachDetails(response.data[0])
          dispatch(login(response.data[0]))
        }
        else
          setLoginError("Invalid credentials");
      })
      .catch((error) => { })
  }

  return (
    <>
      <Navigation />

      <Container >
        <Form>
          <Col xs lg="2">
            <FormGroup>
              <FormControl
                type="text"
                name="id"
                placeholder='Coach Id'
                value={formData.name}
                onChange={(e) => { handleChange(e) }} />
              {formErrors.idError &&
                <Form.Text className="text-muted">
                  {formErrors.idError}
                </Form.Text>
              }
            </FormGroup>
          </Col>
          <Col xs lg="2">
            <FormGroup>
              <FormControl
                type="password"
                name="password"
                placeholder='Password'
                value={formData.password}
                onChange={(e) => { handleChange(e) }} />
              {formErrors.passwordError &&
                <Form.Text className="text-muted">
                  {formErrors.passwordError}
                </Form.Text>
              }
            </FormGroup>
          </Col>
          <br />
          <Button variant='primary' type="submit" onClick={(e) => handleSubmit(e)}>Login</Button>
        </Form>
        {loginError && <div className="text-danger">{loginError}</div>}
      </Container>
      {coachDetails && <Navigate to="/coachHome" state={coachDetails} replace={true} />}
    </>
  )
}

export default CoachLogin