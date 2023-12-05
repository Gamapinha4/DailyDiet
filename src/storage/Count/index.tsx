import AsyncStorage from "@react-native-async-storage/async-storage";

import {STATS_DIETA} from '../../storage/ConfigStorage'


export async function addCountDentroDieta() {
  const count = await AsyncStorage.getItem(`${STATS_DIETA}-countDentro`)

  if (count !== null) {
    await AsyncStorage.setItem(`${STATS_DIETA}-countDentro`, JSON.stringify(parseInt(JSON.parse(count)) + 1));
  }else {
    await AsyncStorage.setItem(`${STATS_DIETA}-countDentro`, JSON.stringify(1));
  }
}

export async function removerCountDentroDieta() {
  const count = await AsyncStorage.getItem(`${STATS_DIETA}-countDentro`)

  if (count !== null) {
    await AsyncStorage.setItem(`${STATS_DIETA}-countDentro`, JSON.stringify(parseInt(JSON.parse(count)) - 1));
  }else {
    await AsyncStorage.setItem(`${STATS_DIETA}-countDentro`, JSON.stringify(0));
  }
}

export async function getDentroDieta() {
  const count = await AsyncStorage.getItem(`${STATS_DIETA}-countDentro`)

  if (count !== null) {
    return JSON.parse(count)
  }else {
    return 0;
  }
}

export async function addCountForaDieta() {
  const count = await AsyncStorage.getItem(`${STATS_DIETA}-countFora`)

  if (count !== null) {
    await AsyncStorage.setItem(`${STATS_DIETA}-countFora`, JSON.stringify(parseInt(JSON.parse(count)) + 1));
  }else {
    await AsyncStorage.setItem(`${STATS_DIETA}-countFora`, JSON.stringify(1));
  }
}

export async function removerCountForaDieta() {
  const count = await AsyncStorage.getItem(`${STATS_DIETA}-countFora`)

  if (count !== null) {
    await AsyncStorage.setItem(`${STATS_DIETA}-countFora`, JSON.stringify(parseInt(JSON.parse(count)) - 1));
  }else {
    await AsyncStorage.setItem(`${STATS_DIETA}-countFora`, JSON.stringify(0));
  }
}

export async function getForaDieta() {
  const count = await AsyncStorage.getItem(`${STATS_DIETA}-countFora`)

  if (count !== null) {
    return JSON.parse(count)
  }else {
    return 0;
  }
}

export async function addRefeicoesRegistradas() {
  const count = await AsyncStorage.getItem(`${STATS_DIETA}-refRegistradas`)

  if (count !== null) {
    await AsyncStorage.setItem(`${STATS_DIETA}-refRegistradas`, JSON.stringify(parseInt(JSON.parse(count)) + 1));
  }else {
    await AsyncStorage.setItem(`${STATS_DIETA}-refRegistradas`, JSON.stringify(1));
  }
}

export async function removerRefeicoesRegistradas() {
  const count = await AsyncStorage.getItem(`${STATS_DIETA}-refRegistradas`)

  if (count !== null) {
    await AsyncStorage.setItem(`${STATS_DIETA}-refRegistradas`, JSON.stringify(parseInt(JSON.parse(count)) - 1));
  }else {
    await AsyncStorage.setItem(`${STATS_DIETA}-refRegistradas`, JSON.stringify(0));
  }
}

export async function getRefeicoesRegistradas() {
  const count = await AsyncStorage.getItem(`${STATS_DIETA}-refRegistradas`)

  if (count !== null) {
    return JSON.parse(count)
  }else {
    return 0;
  }
}

export async function addSequencia( dieta : boolean ) {
  const count = await AsyncStorage.getItem(`${STATS_DIETA}-sequencia`)

  if (!dieta) return await AsyncStorage.setItem(`${STATS_DIETA}-sequencia`, JSON.stringify(0));

  if (count !== null) {
    await AsyncStorage.setItem(`${STATS_DIETA}-sequencia`, JSON.stringify(parseInt(JSON.parse(count)) + 1));
  }else {
    await AsyncStorage.setItem(`${STATS_DIETA}-sequencia`, JSON.stringify(1));
  }
}

export async function getSequencia() {
  const count = await AsyncStorage.getItem(`${STATS_DIETA}-sequencia`)

  if (count !== null) {
    return JSON.parse(count)
  }else {
    return 0;
  }
}