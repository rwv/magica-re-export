import esbuild from "esbuild";

await esbuild.build({
    entryPoints: ["index.ts"],
    outfile: "dist/index.js",
    bundle: true,
    sourcemap: true,
    minify: false,
    format: 'esm',
    target: ['esnext']
})