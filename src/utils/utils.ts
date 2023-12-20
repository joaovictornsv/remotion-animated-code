import {
	Fade,
	FadeOptions,
	Move,
	MoveOptions,
	Size,
	SizeOptions,
} from 'remotion-animated';

const STATE_DURATION = 50;
const CODE_LINE_HEIGHT = 32;
const SAFE_SIZE_NONE_VALUE = 0.0001;
export const SIZE_ANIMATIONS = {
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
export const FADE_ANIMATIONS = {
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
export const MOVE_ANIMATIONS = {
	FROM_LEFT(options: MoveOptions = {} as MoveOptions) {
		return Move({x: 0, initialX: -100, ...options});
	},
	FROM_TOP(options: MoveOptions = {} as MoveOptions) {
		return Move({y: 0, initialY: -100, ...options});
	},
};
export const getFrame = (num: number) => STATE_DURATION * num;
export const getHeightByTotalCodeLines = (num: number) =>
	CODE_LINE_HEIGHT * num;
