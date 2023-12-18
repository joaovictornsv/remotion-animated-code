import {AbsoluteFill} from 'remotion';
import {
	Animated,
	Fade,
	FadeOptions,
	Move,
	MoveOptions,
	Size,
	SizeOptions,
} from 'remotion-animated';
import {CodePiece} from './components/CodePiece';
import {CodeLine} from './components/CodeLine';

const STATE_DURATION = 50;
const CODE_LINE_HEIGHT = 28;
const SAFE_SIZE_NONE_VALUE = 0.0001;

const SIZE_ANIMATIONS = {
	INITIAL_HEIGHT_NONE() {
		return this.HEIGHT_NONE({initialHeight: 0, start: 0});
	},
	INITIAL_WIDTH_NONE() {
		return this.WIDTH_NONE({initialWidth: 0, start: 0});
	},
	WIDTH_NONE(options: SizeOptions = {}) {
		return Size({width: SAFE_SIZE_NONE_VALUE, ...options});
	},
	HEIGHT_NONE(options: SizeOptions = {}) {
		return Size({height: SAFE_SIZE_NONE_VALUE, ...options});
	},
	FULL_WIDTH(options: SizeOptions = {}) {
		return Size({width: 100, initialWidth: 0, ...options});
	},
	FULL_HEIGHT(options: SizeOptions = {}) {
		return Size({height: 100, initialWidth: 0, ...options});
	},
};

const FADE_ANIMATIONS = {
	INITIAL_INVISIBLE() {
		return this.INVISIBLE({initial: 0, start: 0} as FadeOptions);
	},
	INVISIBLE(options: FadeOptions = {} as FadeOptions) {
		return Fade({...options, to: 0});
	},
	VISIBLE(options: FadeOptions = {} as FadeOptions) {
		return Fade({initial: 0, ...options, to: 1});
	},
};

const MOVE_ANIMATIONS = {
	FROM_LEFT(options: MoveOptions = {} as MoveOptions) {
		return Move({x: 0, initialX: -100, ...options});
	},
	FROM_TOP(options: MoveOptions = {} as MoveOptions) {
		return Move({y: 0, initialY: -100, ...options});
	},
};

const getFrame = (num: number) => STATE_DURATION * num;
const getHeightByTotalCodeLines = (num: number) => CODE_LINE_HEIGHT * num;

export const Meteor3Ex1 = () => {
	return (
		<AbsoluteFill className="justify-center items-center">
			<div className="rounded bg-zinc-800 p-8">
				<code className="text-xl text-amber-50">
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
						<CodePiece text="const contentsCursor = ContentsCollection.find({ topicId: {$in: topicsIds } });" />
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
									FADE_ANIMATIONS.VISIBLE({start: getFrame(9)} as FadeOptions),
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
									FADE_ANIMATIONS.VISIBLE({start: getFrame(1)} as FadeOptions),
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
									FADE_ANIMATIONS.VISIBLE({start: getFrame(7)} as FadeOptions),
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
									animations: [
										FADE_ANIMATIONS.INVISIBLE({start: getFrame(18)}),
									],
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
									animations: [
										FADE_ANIMATIONS.INVISIBLE({start: getFrame(16)}),
									],
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
			</div>
		</AbsoluteFill>
	);
};
