// import t from 'tagged-translations/macro'
import preval from 'babel-plugin-preval/macro'

// const test = isTrue => t`will have this error: t is not defined`
// const test = isTrue => t`en` + 'no error'
// const test = isTrue => isTrue ? t`en` : 'will have this error: tagged-translations/macro can only be used in tagged template expression.'

const test = preval`module.exports = 1 + 2 - 1 - 1`

export { test }
