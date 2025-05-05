import { FC, Fragment, useCallback } from 'react';
import { useSettings } from '../contexts/settings-context';
import { SettingsPage } from '../model/settings';
import { ExternalLink } from '../ExternalLink';

export const MigrationWarning: FC = () => {
    const { openSettings } = useSettings();

    const openExportSettings = useCallback(() => {
        openSettings(SettingsPage.IMPORT_EXPORT);
    }, [openSettings]);

    const openElementsSettings = useCallback(() => {
        openSettings(SettingsPage.ELEMENTS);
    }, [openSettings]);

    return <Fragment>
        <h1>MIGRATION WARNING</h1>

        <p>The overlay is moving to a new host, and if you do not back up your settings,
            they <strong>WILL</strong> be lost.</p>

        <p>Please export your settings and change your browser source URL
            to <ExternalLink href="https://overlay.went.tf">https://overlay.went.tf</ExternalLink>
        </p>

        <button type="button" onClick={openExportSettings}>Open Export Settings</button>

        <p>You can hide this warning by unchecking &quot;Migration Warning&quot; in the Elements
            settings.</p>

        <button type="button" onClick={openElementsSettings}>Open Elements Settings</button>
    </Fragment>;
};
