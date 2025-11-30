export type CodeBlock = {
  id: number;
  text: string;
};

export type DailyChallenge = {
  id: string;
  date: string;
  topic: string;
  problem: string;
  codeBlocks: CodeBlock[];
  correctOrder: number[];
  expectedOutput: string;
  hints: string[];
};

const dailyChallenge: DailyChallenge = {
  id: "DC-2025-001",
  date: "2025-02-15",
  topic: "limits",
  problem: "Evaluate the limit as x → 0 of sin(x) / x.",
  codeBlocks: [
    { id: 1, text: "return result" },
    { id: 2, text: "result = sp.limit(expr, x, 0)" },
    { id: 3, text: "x = sp.symbols('x')" },
    { id: 4, text: "expr = sp.sin(x) / x" },
    { id: 5, text: "import sympy as sp" },
  ],
  correctOrder: [5, 3, 4, 2, 1],
  expectedOutput: "Output: 1.0",
  hints: [
    "Import SymPy before calling any symbolic APIs.",
    "Declare the symbol before building the expression.",
    "Take the limit after you build the expression for sin(x)/x.",
  ],
};

export default dailyChallenge;
