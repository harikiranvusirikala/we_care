import React from 'react'
import NavigationCoach from './NavigationCoach'
import { useSelector } from 'react-redux'

const CoachViewProfile = () => {
  const coachDetails = useSelector(state => state.loginReducer.coachDetails);

  return (
    <>
      <NavigationCoach />

      {coachDetails && <h1>{coachDetails.name}</h1>}
    </>
  )
}

export default CoachViewProfile