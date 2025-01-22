import Card from "./card";

type BottomOrTop = "bottom" | "top";

export default class Deck {
	cards: Card[] = [];

	get empty() {
		return this.cards.length === 0;
	}

	private _addTo(bottomOrTop: BottomOrTop, cards: Card | Card[]) {
		const push = (card: Card) =>
			bottomOrTop == "top" ? this.cards.push(card) : this.cards.unshift(card);

		if (cards instanceof Card) {
			push(cards);
			return;
		}

		for (const card of cards) push(card);
	}

	private _drawFrom(bottomOrTop: BottomOrTop, cards = 1) {
		const pop = () =>
			bottomOrTop == "top" ? this.cards.pop() : this.cards.shift();

		if (cards < 1) throw "Must draw at least one card";

		if (cards === 1) return pop();

		const drawn: Card[] = [];

		for (let i = 0; i < cards; i++) {
			const draw = pop();
			if (!draw) break;
			drawn.push(draw);
		}

		return drawn;
	}

	addToBottom(cards: Card | Card[]) {
		return this._addTo("bottom", cards);
	}

	addToTop(cards: Card | Card[]) {
		return this._addTo("top", cards);
	}

	drawFromBottom(cards = 1) {
		return this._drawFrom("bottom", cards);
	}

	drawFromTop(cards = 1) {
		return this._drawFrom("top", cards);
	}

	shuffle(times = 3) {
		const numcards = this.cards.length;

		for (let i = 0; i < times; i++) {
			let shuffled: Card[] = [];

			for (let j = 0; j < numcards; j++) {
				const card = this.cards.shift()!;
				const pos = Math.round(Math.random() * shuffled.length);
				const before = shuffled.slice(0, pos);
				const after = shuffled.slice(pos);
				before.push(card);
				shuffled = before.concat(after);
			}

			this.cards = shuffled;
		}
	}
}
