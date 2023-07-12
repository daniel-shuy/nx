import { GraphService } from '@nx/graph/ui-graph';
import { selectValueByThemeStatic } from '../theme-resolver';

let graphService: GraphService;

export function getGraphService(): GraphService {
  if (!graphService) {
    graphService = new GraphService(
      'cytoscape-graph',
      selectValueByThemeStatic('dark', 'light'),
      isRenderedWithinIde() ? 'nx-console' : undefined
    );
  }

  return graphService;
}

function isRenderedWithinIde(): boolean {
  const href = window.location.href;
  return href.includes('vscode-webview') || href.includes('jbcefbrowser');
}
