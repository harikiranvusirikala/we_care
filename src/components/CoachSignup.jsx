import React, { useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { validateCoachSignup } from '../validators/validateCoachSignup'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'

const CoachSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    dateOfBirth: "",
    gender: "",
    mobileNumber: "",
    speciality: ""
  })
  const [formErrors, setFormErrors] = useState({
    nameError: "",
    passwordError: "",
    dateOfBirthError: "",
    genderError: "",
    mobileNumberError: "",
    specialityError: ""
  })

  const [coachId, setCoachId] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
    validateField(name, value);
  }

  const validateField = (name, value) => {
    let errors = formErrors

    switch (name) {
      case "name":
        errors.nameError = validateCoachSignup.validateName(value);
        break;
      case "password":
        errors.passwordError = validateCoachSignup.validatePassword(value);
        break;
      default:
        break;
    }

    setFormErrors(errors)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/coaches", formData)
      .then((response) => {
        setCoachId(response.data.id);
      })

  }

  return (
    <>
      <Navigation />
      <Container>
        {!coachId && <Form>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => { handleChange(e) }} />
                {formErrors.nameError &&
                  <Form.Text className="text-muted">
                    {formErrors.nameError}
                  </Form.Text>
                }
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={(e) => handleChange(e)} />
                {formErrors.passwordError &&
                  <Form.Text className="text-muted">
                    {formErrors.passwordError}
                  </Form.Text>
                }
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleChange(e)} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Gender</Form.Label>
                <div key={`inline-radio`} className="mb-3">
                  <Form.Check
                    inline
                    label="Male"
                    name="gender"
                    type="radio"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={(e) => handleChange(e)}
                    id={`inline-radio-1`}
                  />
                  <Form.Check
                    inline
                    label="Female"
                    name="gender"
                    type="radio"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={(e) => handleChange(e)}
                    id={`inline-radio-2`}
                  />
                </div>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={(e) => handleChange(e)} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Speciality</Form.Label>
                <Form.Control
                  type="text"
                  name="speciality"
                  value={formData.speciality}
                  onChange={(e) => handleChange(e)} />
              </Form.Group>
            </Col>
          </Row>
          <br />
          <div className="d-grid gap-3">
            <Button variant="success" type="submit" onClick={(e) => handleSubmit(e)}>Register</Button>
          </div>
        </Form>
        }
        {coachId && <div>
          <h3>You are a Coach now!</h3>
          <h4>Your Coach Id is {coachId}</h4>
          <Link to="/coachLogin"><Button>Login Now</Button></Link>
        </div>}
      </Container>
    </>
  )
}

export default CoachSignup
