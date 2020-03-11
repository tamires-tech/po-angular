import { Rule, SchematicContext } from '@angular-devkit/schematics';

// import { createUpgradeRule } from '@angular/cdk/schematics';
import { TargetPOVersion } from './target-version.enum';
import { createUpgradeRule } from '@angular/cdk/schematics';
import { FocusRule } from './upgrade-rules/focus-rule';

// const portinariMigrationRules = [

// ];

export function updateToV2(): Rule {
  // tsconfigPath
  // return (tree: Tree, _context: SchematicContext) => tree;
  return createUpgradeRule(<any> TargetPOVersion.V2, [FocusRule], <any> {}, onMigrationComplete);
}

function onMigrationComplete(context: SchematicContext, targetVersion: any, hasFailures: boolean) {
  context.logger.info('');
  context.logger.info(`  ✓  Updated Portinari UI to ${targetVersion}`);
  context.logger.info('');

  if (hasFailures) {
    context.logger.warn(
    '  ⚠  Some issues were detected but could not be fixed automatically. Please check the ' +
    'output above and fix these issues manually.');
  }
}
