import { useState } from 'react'
import { isValidEmail } from '../../util/email'

export default function useForm(emailRef) {
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

  return [
    hasSubscribed,
    emailIsValid,
    emailIsTouched,
    onSubmit,
    onChange,
  ]
}
