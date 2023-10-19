## Prérequis

- node: https://nodejs.org/fr
- yarn v1: https://classic.yarnpkg.com/lang/en/
- Avoir un emulateur android de setupé et connaitre le nom de celui-ci

## Setup

Installer les dépendances:

```bash
yarn
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
yarn e2e:tests
```

## Re-compiler l'application

```bash
yarn build
```
