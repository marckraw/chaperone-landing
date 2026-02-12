export const GITHUB_URL = "https://github.com/marckraw/chaperone-cli";
export const RELEASES_URL =
  "https://github.com/marckraw/chaperone-cli/releases/latest";
export const INSTALL_SCRIPT_URL =
  "https://raw.githubusercontent.com/marckraw/chaperone-cli/master/scripts/install.sh";
export const ISSUES_URL =
  "https://github.com/marckraw/chaperone-cli/issues";

export const INSTALL_COMMAND = `curl -fsSL ${INSTALL_SCRIPT_URL} | sh`;

export const FEATURES = [
  {
    icon: "📐",
    title: "16+ Rule Types",
    description:
      "File naming, import boundaries, file contracts, component location, and more.",
  },
  {
    icon: "🤖",
    title: "AI-Aware",
    description:
      "Extracts rules from CLAUDE.md, outputs in AI-friendly format for easy paste-to-fix.",
  },
  {
    icon: "🔒",
    title: "Deterministic",
    description:
      "No flaky checks. Pure function-based rules that give the same result every time.",
  },
  {
    icon: "📦",
    title: "Single Executable",
    description:
      "Ships as one binary — no runtime, no dependencies. macOS, Linux, Windows.",
  },
  {
    icon: "🔧",
    title: "Works Alongside Your Tools",
    description:
      "Runs TypeScript, ESLint, and Prettier checks alongside custom rules.",
  },
  {
    icon: "🚀",
    title: "CI/CD Ready",
    description:
      "JSON output format, proper exit codes, zero-config in pipelines.",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Initialize",
    command: "chaperone init",
    description: "Detects your tools automatically — TypeScript, ESLint, Prettier.",
  },
  {
    step: 2,
    title: "Configure",
    description: "Define your rules in .chaperone.json — or let chaperone generate them.",
    config: `{
  "rules": [
    {
      "type": "file-naming",
      "pattern": "src/components/**/*.tsx",
      "convention": "PascalCase"
    },
    {
      "type": "forbidden-import",
      "pattern": "src/**/*.ts",
      "forbidden": ["lodash", "moment"]
    }
  ]
}`,
  },
  {
    step: 3,
    title: "Enforce",
    command: "chaperone check",
    description: "Run checks and get clear, actionable results.",
  },
];

export const EXAMPLE_CONFIG = `{
  "tools": {
    "typescript": true,
    "eslint": true,
    "prettier": true
  },
  "rules": [
    {
      "type": "file-naming",
      "pattern": "src/components/**/*.tsx",
      "convention": "PascalCase"
    },
    {
      "type": "forbidden-import",
      "pattern": "src/**/*.ts",
      "forbidden": ["lodash", "moment"]
    },
    {
      "type": "import-boundary",
      "from": "src/features/auth/**",
      "forbidden": ["src/features/billing/**"]
    }
  ]
}`;

export type TerminalLine = {
  text: string;
  type: "command" | "blank" | "info" | "pass" | "fail" | "summary";
};

export function getTerminalLines(version: string): TerminalLine[] {
  return [
    { text: "$ chaperone check", type: "command" },
    { text: "", type: "blank" },
    { text: `  Chaperone v${version}`, type: "info" },
    { text: "  Checking 3 tools + 3 custom rules...", type: "info" },
    { text: "", type: "blank" },
    { text: "  ✓ TypeScript", type: "pass" },
    { text: "  ✓ ESLint", type: "pass" },
    { text: "  ✓ Prettier", type: "pass" },
    { text: "", type: "blank" },
    { text: "  ✓ file-naming: PascalCase (src/components)", type: "pass" },
    { text: "  ✗ forbidden-import: lodash found in src/utils/helpers.ts", type: "fail" },
    { text: "  ✓ import-boundary: auth → billing", type: "pass" },
    { text: "", type: "blank" },
    { text: "  5 passed · 1 failed", type: "summary" },
  ];
}
