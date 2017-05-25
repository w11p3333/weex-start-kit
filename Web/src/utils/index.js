export function register (component) {
  return {
    weexComponent: component,
    install: function (Vue) {
      /* istanbul ignore if */
      if (install.installed) return
      Vue.component(component.name, component)
    }
  }
}
