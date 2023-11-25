import { h } from '@builder.io/qwik'
import { styled } from './factory.mjs';
import { getBleedStyle } from '../patterns/bleed.mjs';

export const Bleed = function Bleed(props) {
  const { inline, block, ...restProps } = props
const styleProps = getBleedStyle({inline, block})
return h(styled.div, { ...styleProps, ...restProps })
}