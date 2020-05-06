import Button from './src/button.vue'

Button.install = function(Vue) {
  Button.component(Button.name, Button)
}

export default Button