import { Face, Suit } from "@/enum/card";

export default class Card {
	suit: Suit = Suit.Spades;
	face: Face = Face.Ace;
	faceUp = false;
}
