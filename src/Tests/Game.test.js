import CheckForWinnerLoser from "../Operations/CheckForWinnerLoser";
import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Game from "../components/Game";
import Results from "../components/ResultsPage";

describe("Function Testing", () => {
    const gameData = {
        Q: "Question",
        A: "Answer",
    };
    test("Test CheckForWinnerLoser for Loser result with different inputs", () => {
      expect(CheckForWinnerLoser({ yourAnswer: "Wrong Answer", gameAnswer: gameData })).toBe("Loser");
    });

    test("Test CheckForWinnerLoser for Winner result with same inputs", () => {
      expect(CheckForWinnerLoser({ yourAnswer: "Answer", gameAnswer: gameData })).toBe("Winner");
    });
});

describe("Test the Footer Component", () => {
    const gameData = {
        Q: "Question",
        A: "Answer",
    };
    test("Is The Google link displaying?", () => {
        render(<Footer props={gameData} />);
        expect(screen.getByText(/Google Answer/i)).toBeInTheDocument();
    });

    test("Is the Hint showing?", () => {
        render(<Footer props={gameData} />);
        expect(screen.getByText(/Hint: Question/i)).toBeInTheDocument();
    });
});

describe("Test the Header Component", () => {
    const gameData = {
        Q: "Start",
        A: "Auckland",
    };
    test("Is The Kiwi quiz displaying?", () => {
        render(<Header props={gameData} />);
        expect(screen.getByText(/The Kiwi quiz/i)).toBeInTheDocument();
    });

    test("Is the question displaying from the gameData?", () => {
        render(<Header props={gameData} />);
        expect(screen.getByText(/Start/i)).toBeInTheDocument();
    });
});

describe("Test answerCorrect and answerWrong columns", () => {
    const fakeAnswerCorrect = ["correct1", "correct2", "correct3"];
    const fakeAnswerWrong = ["incorrect1", "incorrect2", "incorrect3"];
    test("Is answerCorrect displaying?", () => {
        render(
            <Results
                answerCorrect={fakeAnswerCorrect}
                answerWrong={fakeAnswerWrong}
            />
        );
        // Test that the correct results appear
        expect(screen.getByText("correct1", { exact: true })).toBeInTheDocument();
        expect(screen.getByText("correct2", { exact: true })).toBeInTheDocument();
        expect(screen.getByText("correct3", { exact: true })).toBeInTheDocument();
    });

    test("Is answerWrong displaying?", () => {
        render(
            <Results
                answerCorrect={fakeAnswerCorrect}
                answerWrong={fakeAnswerWrong}
            />
        );
        // Test that the incorrect results appear
        expect(screen.getByText("incorrect1", { exact: true })).toBeInTheDocument();
        expect(screen.getByText("incorrect2", { exact: true })).toBeInTheDocument();
        expect(screen.getByText("incorrect3", { exact: true })).toBeInTheDocument();
    });
});