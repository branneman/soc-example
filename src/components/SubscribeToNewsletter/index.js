import React, { useRef, useState } from 'react'
import { isValidEmail } from '../../util/email'
import './index.css'

export default function SubscribeToNewsletter() {
  const emailRef = useRef(null)

  const [hasSubscribed, setHasSubscribed] = useState(false)
  const [emailIsValid, setEmailIsValid] = useState(false)
  const [emailIsTouched, setEmailIsTouched] =
    useState(false)

  const isValid = () => {
    const email = emailRef.current.value
    return isValidEmail(email)
  }

  const onSubmit = (evt) => {
    evt.preventDefault()

    const email = emailRef.current.value
    if (!isValid(email)) {
      return false
    }

    setHasSubscribed(true)
  }

  const onChange = (evt) => {
    const email = emailRef.current.value
    setEmailIsTouched(true)
    setEmailIsValid(isValid(email))
  }

  if (hasSubscribed) {
    return <p className="hassubscribed">Thanks!</p>
  }

  const fieldClass =
    emailIsTouched && emailIsValid
      ? ' form__field--valid'
      : emailIsTouched
      ? ' form__field--invalid'
      : ''

  return (
    <form onSubmit={onSubmit} className="form">
      <div className="form__row">
        <label htmlFor="email" className="form__label">
          Email:
        </label>
        <input
          ref={emailRef}
          id="email"
          className={`form__field${fieldClass}`}
          onChange={onChange}
          type="text"
          name="email"
        />
      </div>
      <div className="form__row">
        <button type="submit" className="form__submit">
          Subscribe
        </button>
      </div>
    </form>
  )
}
