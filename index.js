function submitForm() {
  let validName = validateField(
    'firstNameField',
    'firstNameError',
    'firstNameErrorIcon',
    'First Name'
  )
  let validLastName = validateField(
    'lastNameField',
    'lastNameError',
    'lastNameErrorIcon',
    'Last Name'
  )
  let validEmail = validateField('emailField', 'emailError', 'emailErrorIcon', 'Email')
  if (validEmail) {
    validEmail = validateEmailField(
      'emailField',
      'emailError',
      'emailErrorIcon'
    )
  }
  let validPassword = validateField(
    'passwordField',
    'passwordError',
    'passwordErrorIcon',
    'Password'
  )

  if (validName && validLastName && validEmail && validPassword) {
    location.href = 'thankYou.html'
  }
}

function validateField(fieldId, errorId, errorIconId, fieldDescription) {
  const FieldEle = document.getElementById(fieldId)
  const ErrorEle = document.getElementById(errorId)
  const ErrorIconEle = document.getElementById(errorIconId)

  const errorString = fieldDescription + ' cannot be empty'

  if (FieldEle.value) {
    clearError(FieldEle, ErrorEle, ErrorIconEle)
    return true
  } else {
    showError(FieldEle, ErrorEle, ErrorIconEle, errorString)
    return false
  }
}

function validateEmailField(fieldId, errorId, errorIconId) {
  const FieldEle = document.getElementById(fieldId)
  const ErrorEle = document.getElementById(errorId)
  const ErrorIconEle = document.getElementById(errorIconId)

  const errorString = 'Looks like this is not an email'

  if (validateEmail(FieldEle.value)) {
    clearError(FieldEle, ErrorEle, ErrorIconEle)
    return true
  } else {
    showError(FieldEle, ErrorEle, ErrorIconEle, errorString)
    return false
  }
}

function clearError(FieldEle, ErrorEle, ErrorIconEle) {
  ErrorEle.style.display = 'none'
  ErrorIconEle.style.display = 'none'
  FieldEle.style.borderColor = 'hsl(246, 25%, 77%)'
}

function showError(FieldEle, ErrorEle, ErrorIconEle, errorText) {
  ErrorEle.style.display = 'block'
  ErrorIconEle.style.display = 'block'
  ErrorEle.innerHTML = errorText
  FieldEle.style.borderColor = 'hsl(0, 100%, 74%)'
}

//  https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
}
