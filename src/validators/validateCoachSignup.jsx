import React from 'react'

export const validateCoachSignup = {}

validateCoachSignup.validateName = (value) => {
  return value.length < 3 || value.length > 50 ? "Name should have 3 to 50 characters" : ""
}

validateCoachSignup.validatePassword = (value) => {
  return value.length < 5 || value.length > 10 ? "Password should have 5 to 10 characters" : ""
}