import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: Interpolation<ThemedStyledProps<Pick<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "key" | keyof LabelHTMLAttributes<HTMLLabelElement>> & { ref?: Ref<HTMLLabelElement> }, DefaultTheme>>
      primary: string
      secondary: string
      terceary: string
    }
  }
}
