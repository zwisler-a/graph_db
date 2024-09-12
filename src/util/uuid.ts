import {randomUUID} from 'crypto'

export type UUID = `${string}-${string}-${string}-${string}-${string}`;

export function generateUUID(): UUID {
    return randomUUID();
}