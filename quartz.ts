import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig(){
    const Content: QuartzComponent = ({ fileData, tree }: QuartzComponentProps) => {
  return <article class={classString}>
    {content} 
    <p style={{ textAlign: 'center', opacity: 0.7 }}>─── ⁺˚⋆｡°✩₊✩°｡⋆˚⁺ ───</p>
  </article>
}
}

export default config
export const layout = await loadQuartzLayout()

