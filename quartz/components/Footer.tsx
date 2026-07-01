import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/_scrollToTop.scss"

// @ts-ignore
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const ScrollToTop: QuartzComponent = ({ displayClass, fileData }: QuartzComponentProps) => {
return (
  <div class={classNames(displayClass, "scroll-to-top")}>
    <h3>Utilities</h3>
    <ul>
      <li>
        <a href="#">
        Scroll to Top
        </a> 
      </li>
    </ul>

  </div>
)}
ScrollToTop.css = style
ScrollToTop.afterDOMLoaded = script
export default (() => ScrollToTop) satisfies QuartzComponentConstructor