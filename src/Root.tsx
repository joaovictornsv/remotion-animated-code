import {Composition} from 'remotion';
import {Meteor3Ex1} from './Meteor3';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Meteor3Ex1"
				component={Meteor3Ex1}
				durationInFrames={20 * 50}
				fps={30}
				width={1280}
				height={720}
			/>
		</>
	);
};
