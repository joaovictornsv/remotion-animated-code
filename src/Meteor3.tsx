import {Animated, FadeOptions} from 'remotion-animated';
import {CodePiece} from './components/CodePiece';
import {CodeLine} from './components/CodeLine';
import {Window} from './components/Window';
import {
	FADE_ANIMATIONS,
	getFrame,
	getHeightByTotalCodeLines,
	MOVE_ANIMATIONS,
	SIZE_ANIMATIONS,
} from './utils/utils';

export const Meteor3Ex1 = () => {
	return (
		<Window>
			<code className="text-xl text-amber-50 p-8">
				<CodeLine>
					<CodePiece
						text="async "
						codeAnimatedProps={{
							animations: [
								SIZE_ANIMATIONS.INITIAL_WIDTH_NONE(),
								SIZE_ANIMATIONS.FULL_WIDTH({start: getFrame(11)}),
							],
						}}
					/>
					<CodePiece text="function getContentIds({ topicsIds }) {" />
				</CodeLine>

				<CodeLine tabIndentation={1} className="flex-col">
					<CodePiece text="const contentsCursor = ContentsCollection.find({ topicId: { $in: topicsIds } });" />
				</CodeLine>
				<CodeLine tabIndentation={1}>
					<CodePiece text="const contentsIds = " />

					<CodePiece
						text="await"
						underlineType="ERROR"
						codeAnimatedProps={{
							animations: [
								SIZE_ANIMATIONS.INITIAL_WIDTH_NONE(),
								SIZE_ANIMATIONS.FULL_WIDTH({start: getFrame(9)}),
							],
						}}
						underlineAnimatedProps={{
							animations: [
								FADE_ANIMATIONS.INITIAL_INVISIBLE(),
								FADE_ANIMATIONS.VISIBLE({
									start: getFrame(9),
								} as FadeOptions),
								FADE_ANIMATIONS.INVISIBLE({
									start: getFrame(12),
								} as FadeOptions),
							],
						}}
					/>

					<CodePiece
						text=" "
						codeAnimatedProps={{
							animations: [
								SIZE_ANIMATIONS.INITIAL_WIDTH_NONE(),
								SIZE_ANIMATIONS.FULL_WIDTH({start: getFrame(9)}),
							],
						}}
					/>
					<CodePiece text="contentsCursor." />
					<CodePiece
						text="map"
						highlightType="ERROR"
						codeAnimatedProps={{
							animations: [
								SIZE_ANIMATIONS.WIDTH_NONE({
									start: getFrame(4),
									initialWidth: 100,
								}),
							],
						}}
						highlightAnimatedProps={{
							animations: [
								FADE_ANIMATIONS.INITIAL_INVISIBLE(),
								MOVE_ANIMATIONS.FROM_LEFT({start: getFrame(1)}),
								FADE_ANIMATIONS.VISIBLE({
									start: getFrame(1),
								} as FadeOptions),
								FADE_ANIMATIONS.INVISIBLE({
									start: getFrame(4),
								} as FadeOptions),
							],
						}}
					/>
					<CodePiece
						text="mapAsync"
						codeAnimatedProps={{
							animations: [
								SIZE_ANIMATIONS.INITIAL_WIDTH_NONE(),
								SIZE_ANIMATIONS.FULL_WIDTH({start: getFrame(4.5)}),
							],
						}}
						highlightType="SUCCESS"
						highlightAnimatedProps={{
							animations: [
								FADE_ANIMATIONS.INITIAL_INVISIBLE(),
								MOVE_ANIMATIONS.FROM_LEFT({start: getFrame(4.5)}),
								FADE_ANIMATIONS.VISIBLE({
									start: getFrame(4.5),
								} as FadeOptions),
								FADE_ANIMATIONS.INVISIBLE({
									start: getFrame(6),
								} as FadeOptions),
							],
						}}
						underlineType="WARNING"
						underlineAnimatedProps={{
							animations: [
								FADE_ANIMATIONS.INITIAL_INVISIBLE(),
								FADE_ANIMATIONS.VISIBLE({
									start: getFrame(7),
								} as FadeOptions),
								FADE_ANIMATIONS.INVISIBLE({
									start: getFrame(10),
								} as FadeOptions),
							],
						}}
					/>
					<CodePiece text="((m) => m._id);" />
				</CodeLine>
				<CodeLine tabIndentation={1}>
					<CodePiece text="return contentsIds" />
				</CodeLine>
				<CodeLine>
					<CodePiece text="}" />
				</CodeLine>

				<Animated
					className="overflow-hidden"
					animations={[
						SIZE_ANIMATIONS.INITIAL_HEIGHT_NONE(),
						SIZE_ANIMATIONS.FULL_HEIGHT({
							height: getHeightByTotalCodeLines(5),
							start: getFrame(14),
						}),
					]}
				>
					<br />
					<CodeLine>
						<CodePiece
							text="async "
							codeAnimatedProps={{
								animations: [
									SIZE_ANIMATIONS.INITIAL_WIDTH_NONE(),
									SIZE_ANIMATIONS.FULL_WIDTH({start: getFrame(17)}),
								],
							}}
						/>
						<CodePiece text="function disableContents({ topicsIds }) {" />
					</CodeLine>
					<CodeLine tabIndentation={1}>
						<CodePiece text="const contentsIds = " />
						<CodePiece
							text="await"
							codeAnimatedProps={{
								animations: [
									SIZE_ANIMATIONS.INITIAL_WIDTH_NONE(),
									SIZE_ANIMATIONS.FULL_WIDTH({start: getFrame(15)}),
								],
							}}
							underlineType="ERROR"
							underlineAnimatedProps={{
								animations: [FADE_ANIMATIONS.INVISIBLE({start: getFrame(18)})],
							}}
						/>
						<CodePiece
							text=" "
							codeAnimatedProps={{
								animations: [
									SIZE_ANIMATIONS.INITIAL_WIDTH_NONE(),
									SIZE_ANIMATIONS.FULL_WIDTH({start: getFrame(15)}),
								],
							}}
						/>
						<CodePiece
							text="getContentIds({ topicsIds })"
							underlineType="WARNING"
							underlineAnimatedProps={{
								animations: [FADE_ANIMATIONS.INVISIBLE({start: getFrame(16)})],
							}}
						/>
						<CodePiece text=";" />
					</CodeLine>
					<CodeLine tabIndentation={1}>
						<CodePiece text="return ContentUsersCollection.disableContents(contentsIds);" />
					</CodeLine>
					<CodeLine>
						<CodePiece text="}" />
					</CodeLine>
				</Animated>
			</code>
		</Window>
	);
};
