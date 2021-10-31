import {feedbackForm} from './components/feedback-form/feedback-form'
import {Slider} from './components/slider/slider'
import "./styles.sass";

document.addEventListener('DOMContentLoaded', function(){
  const form = document.querySelector('#feedback-form')
  feedbackForm(form)
  Slider()
})
