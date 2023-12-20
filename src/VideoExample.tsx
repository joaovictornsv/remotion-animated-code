import {Window} from './components/Window';
import {CodeLine} from './components/CodeLine';
import {CodePiece} from './components/CodePiece';
import {FADE_ANIMATIONS, getFrame, SIZE_ANIMATIONS} from './utils/utils';

// Const getUsers = async () => {
// 	const users = await UsersCollection.find().fetchAsync();
// 	return users;
// };

export const VideoExample = () => {
	return (
		<Window>
			<code className="text-xl p-8">
				<CodeLine>
					<CodePiece text="const getUsers = " />
					<CodePiece
						text="async "
						codeAnimatedProps={{
							animations: [
								SIZE_ANIMATIONS.INITIAL_WIDTH_NONE(),
								SIZE_ANIMATIONS.FULL_WIDTH({start: getFrame(5)}),
							],
						}}
					/>
					<CodePiece text="() => {" />
				</CodeLine>

				<CodeLine tabIndentation={1}>
					<CodePiece text="const users = " />
					<CodePiece
						text="await "
						codeAnimatedProps={{
							animations: [
								SIZE_ANIMATIONS.INITIAL_WIDTH_NONE(),
								SIZE_ANIMATIONS.FULL_WIDTH({start: getFrame(4)}),
							],
						}}
						underlineType="ERROR"
						underlineAnimatedProps={{
							animations: [
								FADE_ANIMATIONS.INITIAL_INVISIBLE(),
								FADE_ANIMATIONS.VISIBLE({start: getFrame(4)}),
								FADE_ANIMATIONS.INVISIBLE({start: getFrame(6)}),
							],
						}}
					/>
					<CodePiece text="UsersCollection.find()." />
					<CodePiece
						text="fetch()"
						highlightType="ERROR"
						codeAnimatedProps={{
							animations: [SIZE_ANIMATIONS.WIDTH_NONE({start: getFrame(2)})],
						}}
						highlightAnimatedProps={{
							animations: [
								SIZE_ANIMATIONS.INITIAL_WIDTH_NONE(),
								SIZE_ANIMATIONS.FULL_WIDTH({start: getFrame(1)}),
								FADE_ANIMATIONS.INVISIBLE({start: getFrame(2)}),
							],
						}}
					/>
					<CodePiece
						text="fetchAsync()"
						codeAnimatedProps={{
							animations: [
								SIZE_ANIMATIONS.INITIAL_WIDTH_NONE(),
								SIZE_ANIMATIONS.FULL_WIDTH({start: getFrame(3)}),
							],
						}}
						underlineType="WARNING"
						underlineAnimatedProps={{
							animations: [
								FADE_ANIMATIONS.INITIAL_INVISIBLE(),
								FADE_ANIMATIONS.VISIBLE({start: getFrame(3)}),
								FADE_ANIMATIONS.INVISIBLE({start: getFrame(4)}),
							],
						}}
					/>
				</CodeLine>

				<CodeLine tabIndentation={1}>
					<CodePiece text="return users" />
				</CodeLine>

				<CodeLine>
					<CodePiece text="}" />
				</CodeLine>
			</code>
		</Window>
	);
};
