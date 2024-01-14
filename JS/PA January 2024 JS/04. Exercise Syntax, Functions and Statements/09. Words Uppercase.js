function wordsUpperCase(text) {
	return words = text.match(new RegExp(/\w+/g)).join(", ").toUpperCase();
}
solve('Hi, how are you?')