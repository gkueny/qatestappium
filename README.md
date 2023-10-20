# QA test

Le but de ce test est de compléter le test [`./e2e/tests/specs/modal.spec.ts`](./e2e/tests/specs/modal.spec.ts).

Étapes du test:

- Installer le projet
- Lancer le test e2e existant
- Écrire le test e2e demandé et le faire passer 

https://github.com/gkueny/qatestappium/assets/10655690/b437261d-8822-4bd8-ac53-9d818795256f


## Prérequis

- node: https://nodejs.org/fr
- yarn v1: https://classic.yarnpkg.com/lang/en/
- Avoir un émulateur Android de setupé et connaitre le nom de celui-ci

## Setup

Installer les dépendances:

```bash
yarn
cd e2e && yarn && cd ..
```

## Lancer l'émulateur Android

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

## Recompiler l'application

```bash
yarn build
```
