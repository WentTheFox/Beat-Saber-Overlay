import { FunctionComponent } from 'react';
import { BeatSaber } from './beat-saber/BeatSaber';
import { SmartRemountWrapper } from './SmartRemountWrapper';
import { HeartRate } from './heartrate/HeartRate';
import { ChannelBug } from './channel-bug/ChannelBug';
import { SocketProvider } from './utils/socket-context';
import { RemovableElementId } from './model/removable-element-id';
import { RemovableElement } from './RemovableElement';
import { AppBackground } from './AppBackground';
import { ChatWrapper } from './chat/ChatWrapper';
import { MigrationWarningWrapper } from './migration-warning/MigrationWarningWrapper';

export const App: FunctionComponent = () => {
    return <RemovableElement id={RemovableElementId.APP}>
        <MigrationWarningWrapper />
        <SocketProvider>
            <SmartRemountWrapper rootId={RemovableElementId.BEAT_SABER} delayRemount={500}>
                <BeatSaber />
            </SmartRemountWrapper>
            <SmartRemountWrapper rootId={RemovableElementId.HEART_RATE}>
                <HeartRate />
            </SmartRemountWrapper>
            <SmartRemountWrapper rootId={RemovableElementId.CHANNEL_BUG}>
                <ChannelBug />
            </SmartRemountWrapper>
            <ChatWrapper />
            <AppBackground />
        </SocketProvider>
    </RemovableElement>;
};
