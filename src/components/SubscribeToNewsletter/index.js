import React, { useRef } from 'react'
import useForm from './useForm'
import './index.css'

export default function SubscribeToNewsletter() {
  const emailRef = useRef(null)

  const [
    hasSubscribed,
    emailIsValid,
    emailIsTouched,
    onSubmit,
    onChange,
  ] = useForm(emailRef)

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
