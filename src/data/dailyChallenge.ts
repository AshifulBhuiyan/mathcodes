export type CodeArrangePuzzle = {
  id: string;
  date: string;
  topic: string;
  title: string;
  type: 'code-arrange';
  difficulty: 'intro' | 'standard' | 'challenge' | 'advanced';
  problem: string;
  codeBlocks: string[];
  initialOrder: number[];
  correctOrder: number[];
  expectedOutput: string;
  hints: string[];
  description: string;
};

const limitPuzzle: CodeArrangePuzzle = {
  id: 'DC-2025-001',
  date: '2025-02-15',
  topic: 'limits',
  title: 'Evaluate limit of sin(x)/x as x → 0',
  type: 'code-arrange',
  difficulty: 'intro',
  description:
    'Arrange the provided SymPy steps to compute the classic trigonometric limit without running any backend code.',
  problem: 'Evaluate the limit as x → 0 of sin(x) / x.',
  codeBlocks: [
    'return result',
    'result = sp.limit(expr, x, 0)',
    'x = sp.symbols("x")',
    'expr = sp.sin(x) / x',
    'import sympy as sp',
  ],
  initialOrder: [0, 1, 2, 3, 4],
  correctOrder: [4, 2, 3, 1, 0],
  expectedOutput: '1.0',
  hints: [
    'Start by importing SymPy and declaring your symbol.',
    'Build the expression before taking the limit.',
  ],
};

export default limitPuzzle;
