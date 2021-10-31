const initControl = (control) => {
  if (control.value) {
    control.closest('.feedback-form__floating').classList.add('feedback-form__floating_filled')
  }
}

const onControlInputHandler = (event) => {
  const floating = event.currentTarget.closest('.feedback-form__floating')
  if (event.currentTarget.value) {
    floating.classList.add('feedback-form__floating_filled')
    floating.classList.remove('feedback-form__floating_invalid')
  } else {
    floating.classList.remove('feedback-form__floating_filled')
    floating.classList.add('feedback-form__floating_invalid')
  }
}

const onSubmitHandler = (event) => {
  const requiredControls = event.currentTarget.querySelectorAll('.feedback-form__control[required]')
  let valid = true
  for (let i = 0; i < requiredControls.length; i++) {
    if (!requiredControls[i].value) {
      valid = false
      requiredControls[i].closest('.feedback-form__floating').classList.add('feedback-form__floating_invalid')
    }
  }
  if (!valid) {
    event.preventDefault()
    event.stopPropagation()
  }
}

const onPrivatePoliceCheckboxChangeHandler = (event) => {
  const form = event.currentTarget.closest('.feedback-form')
  const submit = form.querySelector('.feedback-form__submit')
  submit.disabled = !event.currentTarget.checked
}

export const feedbackForm = (form) => {
  if (form) {
    const controls = form.querySelectorAll('.feedback-form__control')
    for (let i = 0; i < controls.length; i++) {
      initControl(controls[i])
      controls[i].addEventListener('input', onControlInputHandler)
    }

    form.addEventListener('submit', onSubmitHandler, false)
    const checkbox = form.querySelector('.feedback-form-checkbox__input')
    if (checkbox) {
      checkbox.addEventListener('change', onPrivatePoliceCheckboxChangeHandler)
    }
  }
}
