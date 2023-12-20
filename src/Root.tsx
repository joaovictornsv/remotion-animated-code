import {Composition} from 'remotion';
import {Meteor3Ex1} from './Meteor3';
import './style.css';
import {VideoExample} from './VideoExample';
import {STATE_DURATION} from './utils/utils';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Meteor3Ex1"
				component={Meteor3Ex1}
				durationInFrames={20 * STATE_DURATION}
				fps={30}
				width={1280}
				height={720}
			/>
			<Composition
				id="VideoExample"
				component={VideoExample}
				durationInFrames={7 * STATE_DURATION}
				fps={30}
				width={1280}
				height={720}
			/>
		</>
	);
};
