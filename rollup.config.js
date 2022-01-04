import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import json from "@rollup/plugin-json";
import css from "rollup-plugin-css-porter";
import sass from 'rollup-plugin-sass';

const packageJson = require("./package.json");

export default [
  {
    input: "build/js/tokens.js",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      postcss(), 
    ],
  },
  {
    input: "build/js/tokens.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];