const moveCursor = (input, key, player) => {
	const { x, y } = player.cursorPosition;

	if (key.upArrow || (input === "w" && y < 8)) {
		return { x, y: y + 1 };
	}
	if (key.rightArrow || (input === "d" && x < 8)) {
		return { x: x + 1, y };
	}
	if (key.downArrow || (input === "s" && y > 0)) {
		return { x, y: y - 1 };
	}
	if (key.leftArrow || (input === "a" && x > 0)) {
		return { x: x - 1, y };
	}

	return;
};

module.exports = moveCursor;
