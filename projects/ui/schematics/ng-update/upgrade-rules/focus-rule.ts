import { MigrationRule, ResolvedResource } from '@angular/cdk/schematics';

export class FocusRule extends MigrationRule<null> {

  visitTemplate(template: ResolvedResource) {
    console.log(template);
  }
}
