import { FC } from 'react';
import { RemovableElementId } from '../model/removable-element-id';
import { RemovableElement } from '../RemovableElement';
import { MigrationWarning } from './MigrationWarning';

export const MigrationWarningWrapper: FC = () => {
    return <RemovableElement id={RemovableElementId.MIGRATION_WARNING}>
        <MigrationWarning />
    </RemovableElement>;
};
