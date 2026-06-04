import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()

import * as ExternalPlugin from "./.quartz/plugins";

// Transformer
ExternalPlugin.TableOfContentsTransformer({ maxDepth: 3 });

// Component
ExternalPlugin.TableOfContents({ layout: "modern" });

