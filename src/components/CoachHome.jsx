import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import NavigationCoach from './NavigationCoach';
import { Card } from 'react-bootstrap';
import CoachSchedules from './CoachSchedules';
import axios from 'axios';

const CoachHome = (props) => {
  const location = useLocation();
  const [coachDetails, setCoachDetails] = useState(location.state);
  const [appointmentDetails, setAppointmentDetails] = useState();

  useEffect(() => {
    console.log(location.state);

    axios.get("http://localhost:8080/bookings")
      .then((res) => {
        setAppointmentDetails(res.data);
      })
  }, []);

  return (
    <>
      <NavigationCoach />

      {appointmentDetails && <CoachSchedules appointmentDetails={appointmentDetails} />}
    </>
  )
}

export default CoachHome