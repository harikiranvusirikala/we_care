import React, { useState } from 'react'
import { Card, CardGroup, Col, Row } from 'react-bootstrap'
import NavigationCoach from './NavigationCoach';

const CoachSchedules = (props) => {
  // console.log(props.appointmentDetails);
  const [appointmentDetails, setAppointmentDetails] = useState(props.appointmentDetails);

  return (
    <>
      <Row xs={1} md={4} className="g-4">
        {appointmentDetails.length > 0 && appointmentDetails.map((appointment) => {
          return (
            <Col key={appointment.id}>
              <Card className="bg-dark text-white">
                <Card.Body>
                  <Card.Title>Appointment Date: {appointment.appointmentDate}</Card.Title>
                  <Card.Subtitle>Slot {appointment.slot}</Card.Subtitle>
                  <Card.Text>
                    Booking id: {appointment.id}
                    <br />
                    User Id: {appointment.userId}</Card.Text>
                </Card.Body>
              </Card>
            </Col>)
        })}
        {appointmentDetails.length == 0 && <h3>No planned schedules yet</h3>}
      </Row>
    </>
  )
}

export default CoachSchedules