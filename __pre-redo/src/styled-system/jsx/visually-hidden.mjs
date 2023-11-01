import { h } from '@builder.io/qwik'
import { styled } from './factory.mjs';
import { getVisuallyHiddenStyle } from '../patterns/visually-hidden.mjs';

export const VisuallyHidden = function VisuallyHidden(props) {
  const styleProps = getVisuallyHiddenStyle()
return h(styled.div, { ...styleProps, ...props })
}