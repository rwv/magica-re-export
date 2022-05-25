import esbuild from "esbuild";

await esbuild.build({
    entryPoints: ["index.ts"],
    outfile: "lib/index.js",
    bundle: true,
    sourcemap: true,
    minify: false,
    format: 'esm',
    target: ['esnext']
})