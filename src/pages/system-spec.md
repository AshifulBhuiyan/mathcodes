---
layout: ../layouts/MarkdownLayout.astro
title: MathCodes System Specification
---

# MathCodes.org — System Specification

## 0. Identity & Purpose

MathCodes.org is a **LeetCode-style platform for mathematical thinking**.

- Users learn math by **solving problems with code**.
- **Python** is the *only* accepted solution language.
- A solution is correct **only if the submitted Python code produces the correct result** under the platform’s tests.
- Users may write their own **LaTeX/Markdown notes**, but these are **not** part of correctness; they are purely personal.
- No AI tools participate in runtime behavior: problems, hints, solutions, and validation are human-authored.

## 1. Core Principles

1. **Code-first correctness**
   - Each math problem has a deterministic **Python validation harness**.
   - A user’s solution is a **Python function or script** that must pass that harness.
   - If the code passes all tests, the solution is accepted.

2. **Math > Code**
   - Problems emphasize mathematical reasoning and concepts (limits, derivatives, eigenvalues, convergence, etc.).
   - Code is the execution layer that checks the math.

3. **Separation of Concerns**
   - **Problem definition** lives in structured content files.
   - **Validation logic** is deterministic Python maintained by humans.
   - **Frontend** renders problems, runs code submissions, and displays personal notes.

4. **User-facing rules**
   - Users write **Python code** that obeys the required interface.
   - The platform executes code in a sandbox and reports `PASS/FAIL` solely from validation outcomes.
   - Personal Markdown/LaTeX notes are optional and never affect grading.

## 2. Content Model

Every problem is a content file (YAML/JSON) with fields including:

- `id`, `slug`, `topic`, `difficulty`, `tags`, `title`
- `problem_statement`, `input_spec`, `output_spec`, optional `examples`
- `hints`, optional `constraints`
- `validation_description` and `validation_reference`
- optional `solution_outline` and `metadata`

### Invariants

- Each problem must clearly state the required interface and validation reference.
- No problem ships without its validation implementation.

## 3. User Interaction Model

### 3.1 Solving a Problem

1. Users see the title, statement (LaTeX rendered), I/O spec, examples, code editor, and notes area.
2. Users write Python that matches the required interface and produces correct outputs.
3. On submission, the backend sandbox executes the code and calls the problem-specific validator.
4. The frontend reports `✅ All tests passed` or `❌ Some tests failed`, with minimal feedback.

### 3.2 Notes / LaTeX

- Notes are Markdown/LaTeX per user per problem, rendered in the UI but ignored by validation.

## 4. Validation System (Conceptual)

- Each problem links to a **Python validation unit** (e.g., `validate(user_module)`).
- Validation is deterministic, possibly using numerical checks, symbolic checks (`sympy`), or structural checks.
- Validation may compare outputs with tolerances or evaluate behavior across ranges.
- Outcomes are `PASS` or `FAIL` with minimal debug info and optional hints.

### Requirements

1. **Python-Only** validation and deterministic tests.
2. **Sandboxed Execution** blocking filesystem/network access for user code.
3. **Outcome** reports the mismatch type; randomness, if any, uses fixed seeds.

## 5. Problem Types

- **Value-Returning** (return numeric/expression values).
- **Function-Returning** (implement formulas, ODE solutions, iteration schemes).
- **Equation-Satisfying** (solutions satisfy equations like `A x = b`).
- **Approximation / Numerical Method** (check convergence or error rates).
- **Proof-Guided (Code-Verified)** (numerically verify identities or properties).

## 6. Difficulty & Topic Structure

- Difficulties: `intro`, `standard`, `challenge`, `advanced`.
- Topics (non-exhaustive): `precalculus`, `calculus_1`, `calculus_2`, `linear_algebra`, `ode`, `pde`, `fourier_analysis`, `probability`, `statistics`, `complex_analysis`, `numerical_methods`, `physics_math`.
- Each problem has exactly one primary topic and may list multiple tags.

## 7. Non-Goals and Prohibitions

- No AI in runtime logic or content generation.
- User LaTeX never affects correctness; no LaTeX proof parsing.
- Validation cannot depend on external services or hidden side effects.

## 8. Extensibility Rules

- New problems must follow the content schema and ship with a tested validation unit.
- New topics require updating navigation and topic lists.
- Schema changes should be versioned; older problems declare their schema version.

## 9. Developer Responsibilities

- Maintain mathematical and validation correctness; reject ambiguous problems.
- Keep documentation aligned with behavior so users know the interface, tests, and math focus.

## 10. Summary

MathCodes.org is a **human-authored**, **Python-validated** problem platform where users learn and demonstrate mathematical understanding by writing code whose outputs are rigorously tested. LaTeX is for personal notes only and never part of grading.
