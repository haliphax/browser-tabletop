import { describe, expect, it, vi } from "vitest";
import service from "./service";

vi.mock("express", () => ({ default: () => "express" }));
vi.mock("./service", () => ({ default: vi.fn() }));

await import("./index");

describe("server", () => {
	it("uses express", () => {
		expect(service).toHaveBeenCalledWith("express");
	});
});
