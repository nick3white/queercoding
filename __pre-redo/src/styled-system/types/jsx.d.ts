/* eslint-disable */
import type { Component, QwikIntrinsicElements } from '@builder.io/qwik'
import type { Assign, JsxStyleProps, PatchedHTMLProps } from './system-types'
import type { RecipeDefinition, RecipeSelection, RecipeVariantRecord } from './recipe'

type ElementType = keyof QwikIntrinsicElements | Component<any>

export type ComponentProps<T extends ElementType> = T extends keyof QwikIntrinsicElements
  ? QwikIntrinsicElements[T]
  : T extends Component<infer P>
  ? P
  : never

type Dict = Record<string, unknown>

export interface StyledComponent<T extends ElementType, P extends Dict = {}> extends Component<Assign<ComponentProps<T>, Assign<PatchedHTMLProps, Assign<JsxStyleProps, P>>>> {}

interface RecipeFn { __type: any }

interface JsxFactoryOptions<TProps extends Dict> {
  dataAttr?: boolean
  defaultProps?: TProps
  shouldForwardProp?(prop: string, variantKeys: string[]): boolean
}

export type JsxRecipeProps<T extends ElementType, P extends Dict> = JsxHTMLProps<ComponentProps<T>, P>;

interface JsxFactory {
  <T extends ElementType>(component: T): StyledComponent<T, {}>
  <T extends ElementType, P extends RecipeVariantRecord>(component: T, recipe: RecipeDefinition<P>, options?: JsxFactoryOptions<JsxRecipeProps<T, RecipeSelection<P>>>): StyledComponent<
    T,
    RecipeSelection<P>
  >
  <T extends ElementType, P extends RecipeFn>(component: T, recipeFn: P, options?: JsxFactoryOptions<JsxRecipeProps<T, P['__type']>>): StyledComponent<T, P['__type']>
}

type JsxElements = { [K in keyof QwikIntrinsicElements]: StyledComponent<K, {}> }

export type Styled = JsxFactory & JsxElements

export type HTMLStyledProps<T extends ElementType> = Assign<ComponentProps<T>, JsxStyleProps>