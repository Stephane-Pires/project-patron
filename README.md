# Projet-patron

## Description

Projet contenant une configuration de divers outils pour démarrer un projet

### Modules

-   [Husky](https://github.com/typicode/husky) - Permet de lancer de lancer des scripts en fonction de "git hook"
-   [Eslint](https://eslint.org/docs/user-guide/getting-started) - Permet de linter le code javascript
-   [Prettier](https://prettier.io) (avec trivago [import sorting](https://github.com/trivago/prettier-plugin-sort-imports)) - Permet formatter le code automatiquement pour donner de la consistance. Le plugin de trivago permet de trier automatiquement les imports
-   [Lint-staged](https://github.com/okonet/lint-staged) - Permet de faire tourner les commandes de linter uniquement sur le fichiers staged
-   [Typescript](https://www.typescriptlang.org) - Permet d'utiliser les types. ça combo très bien avec VsCode
-   [Commitlint](https://github.com/conventional-changelog/commitlint) - Permet de linter les messages de commit

### (I)ntegrated (D)evelopment (E)nvironment [VsCode](https://code.visualstudio.com)

-   [Snippet VsCode](https://code.visualstudio.com/docs/editor/userdefinedsnippets) - Permet d'avoir des shortcuts contenant du code / commentaires
-   [Pluggin VsCode : Conventional commit](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) - Permet d'avoir des "rails" pour rapidement écrire des commits
