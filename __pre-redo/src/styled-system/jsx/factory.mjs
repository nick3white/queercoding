import { h } from '@builder.io/qwik'
import { css, cx, cva } from '../css/index.mjs';
import { splitProps, normalizeHTMLProps } from '../helpers.mjs';
import { isCssProperty } from './is-valid-prop.mjs';

const defaultShouldForwardProp = (prop, variantKeys) => !variantKeys.includes(prop) && !isCssProperty(prop)
      
function styledFn(Dynamic, configOrCva = {}, options = {}) {
  const cvaFn = configOrCva.__cva__ || configOrCva.__recipe__ ? configOrCva : cva(configOrCva)

  const forwardFn = options.shouldForwardProp || defaultShouldForwardProp
  const shouldForwardProp = (prop) => forwardFn(prop, cvaFn.variantKeys)
  
  const defaultProps = Object.assign(
    options.dataAttr && configOrCva.__name__ ? { 'data-recipe': configOrCva.__name__ } : {},
    options.defaultProps,
  )

  const StyledComponent = function StyledComponent(props) {
    const { as: Element = Dynamic, children, className, ...restProps } = props

    const combinedProps = Object.assign({}, defaultProps, restProps)
    
    const [forwardedProps, variantProps, styleProps, htmlProps, elementProps] =
      splitProps(combinedProps, shouldForwardProp, cvaFn.variantKeys, isCssProperty, normalizeHTMLProps.keys)

    const { css: cssStyles, ...propStyles } = styleProps

    function recipeClass() {
      const compoundVariantStyles = cvaFn.__getCompoundVariantCss__?.(variantProps);
      return cx(cvaFn(variantProps, false), css(compoundVariantStyles, propStyles, cssStyles), combinedProps.class, className)
    }

    function cvaClass() {
      const cvaStyles = cvaFn.raw(variantProps)
      return cx(css(cvaStyles, propStyles, cssStyles), combinedProps.class, className)
    }

    const classes = configOrCva.__recipe__ ? recipeClass : cvaClass

    return h(Element, {
      ...forwardedProps,
      ...elementProps,
      ...normalizeHTMLProps(htmlProps),
      children,
      class: classes(),
    })
  }

  const name = (typeof Dynamic === 'string' ? Dynamic : Dynamic.displayName || Dynamic.name) || 'Component'
  StyledComponent.displayName = `styled.${name}`
  return StyledComponent
}

function createJsxFactory() {
  const cache = new Map()

  return new Proxy(styledFn, {
    apply(_, __, args) {
      return styledFn(...args)
    },
    get(_, el) {
      if (!cache.has(el)) {
        cache.set(el, styledFn(el))
      }
      return cache.get(el)
    },
  })
}

export const styled = /* @__PURE__ */ createJsxFactory()
