import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()

ExternalPlugin.Explorer({
  mapFn: (node) => {
    if (node.isFolder) {
      node.displayName = " " + node.displayName
    } else {
      node.displayName = "✤ " + node.displayName
    }
  },
})