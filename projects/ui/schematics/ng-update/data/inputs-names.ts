import { InputNameUpgradeData, VersionChanges } from '@angular/cdk/schematics';
import { TargetPOVersion } from '../target-version.enum';

export const inputNames: VersionChanges<InputNameUpgradeData> = {

  [ <any> TargetPOVersion.V2 ]: [
    {
      pr     : 'https://github.com/NG-ZORRO/ng-zorro-antd/pull/3909',
      changes: [
        {
          replace    : 'p-focus',
          replaceWith: 'p-auto-focus',
          whitelist  : {
            elements: [
              'po-input'
            ]
          }
        }
      ]
    },
  ]
};
