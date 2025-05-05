import {
    ChangeEventHandler,
    FC,
    FormEventHandler,
    useCallback,
    useEffect,
    useRef,
    useState
} from 'react';
import { useSettings } from '../../contexts/settings-context';
import { SettingName } from '../../model/settings';
import * as styles from '../../../scss/modules/SettingsPageChannelBug.module.scss';
import classNames from 'classnames';

export const SettingsPageChannelBug: FC = () => {
    const {
        settings: {
            [SettingName.CHANNEL_BUG_URL]: channelBugUrl,
        },
        setSetting,
    } = useSettings();
    const [urlInputValue, setUrlInputValue] = useState<string>('');
    const [imageLoadingError, setImageLoadingError] = useState<boolean>(false);
    const firstInputRef = useRef<HTMLInputElement>(null);

    const updateInputValue = useCallback(() => {
        setUrlInputValue(channelBugUrl ?? '');
    }, [channelBugUrl]);
    const changeUrl = useCallback(() => {
        setSetting(SettingName.CHANNEL_BUG_URL, urlInputValue.trim());
    }, [urlInputValue, setSetting]);
    const handleUrlInputChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
        setUrlInputValue(e.target.value);
        setImageLoadingError(false);
    }, []);

    const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback((e) => {
        e.preventDefault();
        changeUrl();
    }, [changeUrl]);

    // Used to reset the state of the page on mount/reset button click
    const init = useCallback(() => {
        updateInputValue();
        firstInputRef.current?.focus();
    }, [updateInputValue]);
    useEffect(() => {
        init();
        // eslint-disable-next-line react-hooks/exhaustive-deps -- This effect should only be called on mount
    }, []);

    return <form onSubmit={handleSubmit} onReset={init}>
        <details open>
            <summary>
                <h2>Channel Bug</h2>
            </summary>
            <h3>Image URL</h3>
            <p>Enter the full URL of the channel bug logo image.</p>
            <p>Any image that can be loaded by your browser is fair game.</p>
            <input
                type="url"
                name="channel-bug-url"
                autoComplete="off"
                value={urlInputValue}
                onChange={handleUrlInputChange}
                ref={firstInputRef}
                className="small"
                placeholder="https://example.com/image.svg"
            />

            <p>The preview below shows the image as it will appear in the top-left corner, with the
                border and checkered background added in post to indicate image bounds and
                transparency, respectively.</p>
            <img
                className={classNames(styles['preview-image'], { [styles['error']]: imageLoadingError })}
                src={urlInputValue}
                alt="Failed to load image"
                onLoad={() => setImageLoadingError(false)}
                onError={() => setImageLoadingError(true)}
            />
        </details>
        <button type="submit">Save</button>
        <button type="reset">Reset</button>
    </form>;
};
