const validateAppId = app_id => {
  let parts = app_id.split('.')
  if (parts.length < 2) {
    return 'App ID must contain two or more strings, separated by a dot.'
  }
  if (
    parts.some(part => {
      return !/^[a-zA-Z]\w+$/i.test(part)
    })
  ) {
    return 'Each string must start with a letter and should contain only letters and numbers.'
  }
  if (!/^[a-z]/.test(app_id[0])) {
    return 'App ID must start with a lowercase letter.'
  }

  return true
}

module.exports = {
  prompts: {
    app_id: {
      type: 'string',
      required: true,
      label: 'Unique application identifier',
      default: 'org.nativescript.application',
      validate: validateAppId,
      when: '!inPlace',
    },
    app_name: {
      type: 'string',
      required: true,
      label: 'Application name',
      default: 'NativeScript-Vue Application',
      when: '!inPlace',
    }
  },
}
