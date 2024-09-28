# Turbo Start Kit 🛠️

Welcome to the Turbo Start Kit! This streamlined starter kit boosts team productivity and code quality using a TurboRepo monorepo structure. It showcases my coding style, automation practices, and approach to building scalable frontend applications.


## Key Features ✨

- **Linting and Code Style**: Configured ESLint and Prettier to maintain a consistent coding style across the project.
- **Commit Standards**: Leveraged Husky for commit hooks and implemented conventional commits with emojis for easy tracking of code changes. See the implementation in [.husky/prepare-commit-msg](./.husky/prepare-commit-msg).
- **Pull Request Workflow**: Added a [pull request template](./.github/pull_request_template.md) and [CODEOWNERS](./.github/CODEOWNERS) for efficient code review processes and to showcase a collaborative development workflow.
- **Scaffolding with Plop**: Automated component generation using Plop, minimizing repetitive tasks and ensuring consistency in component structure. For more details, check out [packages/ui/plopfile.mjs](./packages/ui/plopfile.mjs).
- **API Mocking Automation**: Integrated `msw-storybook-addon` and `Orval` for API mocking in Storybook, enhancing the development and testing experience. Read more in the [PR](https://github.com/hsskey/turbo-start-kit/pull/1).
- **Storybook Integration**: Built-in Storybook with API mocking support for rapid UI component development and testing.

## Pull Requests 📝

Here are some key pull requests that highlight my coding style, problem-solving approach, and usage of best practices:

1. [✨ feat: storybook에 msw-storybook-addon 추가 및 orval로 api 모킹 자동화 적용](https://github.com/hsskey/turbo-start-kit/pull/1)  
   - Added `msw-storybook-addon` to Storybook and automated API mocking using `Orval`.
   - Refactored existing API calls to use mocked data for a more efficient development process.

2. [🧠 refactor: provider 중첩 방식 개선](https://github.com/hsskey/turbo-start-kit/pull/3)  
   - Improved the provider management approach by adding `MultiProvider` for a more declarative and cleaner code structure.

3. [🍓 chore: CLI 도구를 활용한 컴포넌트 일괄 생성 기능 추가](https://github.com/hsskey/turbo-start-kit/pull/4)  
   - Implemented a scaffolding script using `Plop.js` to automate component creation, streamlining repetitive file creation tasks and promoting a consistent code structure.

## How to Use 🛠️

### Component Generation

To automate the creation of components using `Plop.js`, simply run:

```bash
pnpm plop "component" "--name" "Anchor"

```markdown
Or to generate multiple components at once:

```bash
pnpm plop "component" "--name" "Anchor" "--name" "Card"
```

This scaffolding approach is based on Mantine components for flexibility and reusability.

## Project Structure 📂

The repository follows a monorepo structure managed by TurboRepo. Key directories include:

- `apps/web`: Contains the main application and configuration for Storybook, API specs, and mocks.
- `packages/ui`: Houses the component library with Plop templates for component generation.
- `packages/eslint-config` and `packages/typescript-config`: Shared configurations for consistent linting and TypeScript settings across the project.

## Goals 🎯

The main goal of this starter kit is to establish a standardized development workflow that:

- Ensures a consistent coding style.
- Promotes collaboration through clear PR processes and code ownership.
- Enhances developer productivity with automation and tooling.
- Demonstrates my approach to building scalable, high-quality frontend applications.
