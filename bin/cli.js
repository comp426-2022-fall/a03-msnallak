#!/usr/bin/env node
import { roll } from "../lib/roll.js";
import minimist from 'minimist';
const args = minimist(process.argv.slice(2));

const s = args.sides;
const d = args.dice;
const r = args.rolls;

console.log(JSON.stringify(roll(s, d, r)));