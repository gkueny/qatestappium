# QA test

Le but de ce test est de compléter le test [`e2e/tests/specs/modal.spec.ts`](./e2e/tests/specs/modal.spec.ts).

## Prérequis

- node: https://nodejs.org/fr
- yarn v1: https://classic.yarnpkg.com/lang/en/
- Avoir un emulateur android de setupé et connaitre le nom de celui-ci

## Setup

Installer les dépendances:

```bash
yarn
cd e2e && yarn && cd ..
```

## Lancer l'emulateur Android

```bash
emulator -avd "[EMULATOR_NAME]" -verbose -show-kernel -no-audio -netdelay none -no-snapshot -wipe-data -gpu auto -no-boot-anim -timezone Europe/Paris -memory 23040
```

## Lancer l'app en mode debug

```bash
yarn android
```

## Lancer les tests e2e

```bash
cd e2e
EMULATOR_NAME=[EMULATOR_NAME] yarn e2e:tests
```

## Re-compiler l'application

```bash
yarn build
```
