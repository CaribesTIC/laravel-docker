import{_ as s,c as a,o as n,N as l}from"./chunks/framework.6a8e5212.js";const F=JSON.parse('{"title":"Entorno de prueba","description":"","frontmatter":{},"headers":[],"relativePath":"vitest/entorno-de-prueba.md"}'),o={name:"vitest/entorno-de-prueba.md"},p=l(`<h1 id="entorno-de-prueba" tabindex="-1">Entorno de prueba <a class="header-anchor" href="#entorno-de-prueba" aria-label="Permalink to &quot;Entorno de prueba&quot;">​</a></h1><h2 id="crear-aplicacion-con-vite" tabindex="-1">Crear aplicación con Vite <a class="header-anchor" href="#crear-aplicacion-con-vite" aria-label="Permalink to &quot;Crear aplicación con Vite&quot;">​</a></h2><p>Para arrancar nuestra aplicación, y ya tener preparado el entorno de pruebas, debemos tener instalado <a href="https://nodejs.org/es/" target="_blank" rel="noreferrer">Node</a>. Avanzaremos y <a href="https://vuejs.org/guide/quick-start.html#creating-a-vue-application" target="_blank" rel="noreferrer">crearemos una aplicación con Vue</a>.</p><p>Ejecute lo siguiente en la línea de comando:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vue@latest</span></span></code></pre></div><blockquote><p>Como habrá notado, para este curso estamos usando <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer"><code>npm</code></a> para el manejo de paquetes. Siéntase libre de usar <a href="https://yarnpkg.com/" target="_blank" rel="noreferrer"><code>yarn</code></a> si lo desea.</p></blockquote><p>Inmediatamente se establecerá un diálogo con el terminal, lo primero que nos preguntará será definir el nombre del proyecto, en mi caso le colocaré <code>vue-tdd</code>, usted puede colocar el nombre que desee:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#FFCB6B;">Vue.js</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">The</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Progressive</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">JavaScript</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Framework</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> Project name: › vue-tdd</span></span></code></pre></div><p>Luego el terminal nos hará una serie de preguntas a las cuales responderemos afirmativamente solo para seleccionar lo que está aquí resaltado (<a href="https://router.vuejs.org/guide/" target="_blank" rel="noreferrer">Vue Router</a> + <a href="https://pinia.vuejs.org/" target="_blank" rel="noreferrer">Pinia</a> + <a href="https://vitest.dev/" target="_blank" rel="noreferrer">Vitest</a> + <a href="https://www.cypress.io/" target="_blank" rel="noreferrer">Cypress</a>), lo demás no lo necesitaremos para el objetivo de este tutorial.</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#FFCB6B;">Vue.js</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">The</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Progressive</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">JavaScript</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Framework</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">✔</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Project</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">name:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">…</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vue-tdd</span></span>
<span class="line"><span style="color:#FFCB6B;">✔</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TypeScript?</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">…</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">No</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Yes</span></span>
<span class="line"><span style="color:#FFCB6B;">✔</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">JSX</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Support?</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">…</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">No</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Yes</span></span>
<span class="line highlighted"><span style="color:#FFCB6B;">✔</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Vue</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Router</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Single</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Page</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Application</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">development?</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">…</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">No</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Yes</span></span>
<span class="line highlighted"><span style="color:#FFCB6B;">✔</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Pinia</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">state</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">management?</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">…</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">No</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Yes</span></span>
<span class="line highlighted"><span style="color:#FFCB6B;">✔</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Vitest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Unit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Testing?</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">…</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">No</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Yes</span></span>
<span class="line highlighted"><span style="color:#FFCB6B;">✔</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Cypress</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">End-to-End</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">testing?</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">…</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">No</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Yes</span></span>
<span class="line"><span style="color:#FFCB6B;">✔</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ESLint</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">code</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">quality?</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">…</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">No</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Yes</span></span></code></pre></div><p>Finlamente, seguimos las siguientes intrucciones:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Scaffolding</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">project</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">../vue-tdd...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Done.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Now</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vue-ydd</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span></code></pre></div><p>Ya está creado nuestra aplicación Vue, solo hace falta ejecutar las 3 instrucciones anteriores.</p><blockquote><p>Tenga en cuenta que automaticamente tambien se instaló <a href="https://test-utils.vuejs.org/" target="_blank" rel="noreferrer">Vue Test Utils</a>, la biblioteca oficial de <strong>Utilidades de Prueba para Vue</strong>.</p></blockquote><h2 id="configurar-vite-con-vitest" tabindex="-1">Configurar Vite con Vitest <a class="header-anchor" href="#configurar-vite-con-vitest" aria-label="Permalink to &quot;Configurar Vite con Vitest&quot;">​</a></h2><p>Aún nos falta entonar el proyecto realizando los siguientes cambios en el archivo <code>vite.config.js</code>.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line highlighted"><span style="color:#676E95;font-style:italic;">/// </span><span style="color:#89DDFF;font-style:italic;">&lt;</span><span style="color:#F07178;font-style:italic;">reference</span><span style="color:#89DDFF;font-style:italic;"> </span><span style="color:#C792EA;font-style:italic;">types</span><span style="color:#89DDFF;font-style:italic;">=</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#C3E88D;font-style:italic;">vitest</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#89DDFF;font-style:italic;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fileURLToPath</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">URL</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">node:url</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> vue </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vitejs/plugin-vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// https://vitejs.dev/config/</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#82AAFF;">vue</span><span style="color:#A6ACCD;">()]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">resolve</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">alias</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fileURLToPath</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">URL</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./src</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">meta</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">url))</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">globals</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">environment</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">jsdom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><p>Esto lo hacemos con el propósito de auto-importar las correspondientes funcionalidades de Vitest en los archivos de pruebas.</p><h2 id="probar-el-entorno" tabindex="-1">Probar el Entorno <a class="header-anchor" href="#probar-el-entorno" aria-label="Permalink to &quot;Probar el Entorno&quot;">​</a></h2><p>Comencemos escribiendo una prueba para una función hipotética que suma dos números.</p><blockquote><p>Dentro de la carpeta raiz del proyecto, creemos la carpeta <code>tests</code>. Aquí colocaremos todos nuestros archivos de pruebas.</p></blockquote><p>Nuestra estructura de carpetas debería lucir de la siguiente manera:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vue-tdd/</span></span>
<span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node_modules/</span></span>
<span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">public/</span></span>
<span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">src/</span></span>
<span class="line"><span style="color:#FFCB6B;">└──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tests/</span></span></code></pre></div><p>Creemos un archivo <code>sum.js</code> dentro de la carpeta <code>src/</code> del proyecto:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> sum </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> sum</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>Luego, cree un archivo llamado <code>sum.spec.js</code> dentro de la carpeta <code>tests/</code> para las pruebas. Esto contendrá nuestra prueba real:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> sum </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/sum</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">adds 1 + 2 to equal 3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">expect</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">sum</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toBe</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">3</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>Entonces, ejecute en su terminal:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test:unit</span></span></code></pre></div><p>En pocos segundos aparecerá en su terminal lo siguiente:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> vue-tdd@0.0.0 test:unit</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> vitest --environment jsdom</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DEV</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">v0.</span><span style="color:#F78C6C;">23.2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/vue-tdd</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">✓</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tests/sum.spec.js</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">✓</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">src/components/__tests__/HelloWorld.spec.js</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Test</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Files</span><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">passed</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">Tests</span><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">passed</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">at</span><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">14</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">42</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">02</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Duration</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">1.76s</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">transform</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">655ms,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">0ms,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">collect</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">204ms,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tests</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">38ms</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PASS</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">Waiting</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">changes...</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">press</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">h</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">show</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">help,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">press</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">q</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">quit</span></span></code></pre></div><p>Excelente, ya realizamos nuestra primera prueba.</p><blockquote><p>Tenga en cuenta que al momento de la creación de nuestra aplicación, Vue también creó una prueba conjunta denominada <code>HelloWorld.spec.js</code>.</p></blockquote><h2 id="instalar-vue-testing-library" tabindex="-1">Instalar Vue Testing Library <a class="header-anchor" href="#instalar-vue-testing-library" aria-label="Permalink to &quot;Instalar Vue Testing Library&quot;">​</a></h2><blockquote><p><a href="https://testing-library.com/docs/vue-testing-library/intro" target="_blank" rel="noreferrer">Vue Testing Library</a> es una solución muy liviana para probar componentes de Vue. Proporciona funciones de utilidad livianas además de <code>@vue/test-utils</code>, de una manera que fomenta mejores prácticas de prueba.</p></blockquote><p>Para instalar Vue Testing Library ejecutemos las siguientes instrucciones:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@testing-library/vue@next</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@testing-library/jest-dom</span></span></code></pre></div><h2 id="instalar-pinia-testing" tabindex="-1">Instalar Pinia Testing <a class="header-anchor" href="#instalar-pinia-testing" aria-label="Permalink to &quot;Instalar Pinia Testing&quot;">​</a></h2><p>Para los componentes con Pinia instalaremos su corredor de pruebas:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@pinia/testing</span></span></code></pre></div><h2 id="instalar-axios" tabindex="-1">Instalar Axios <a class="header-anchor" href="#instalar-axios" aria-label="Permalink to &quot;Instalar Axios&quot;">​</a></h2><p>Para probar algunos ejemplos relacionados con <a href="https://developer.mozilla.org/es/docs/Web/HTTP/Messages" target="_blank" rel="noreferrer">Mensajes HTTP</a> necesitamos instalar <a href="https://axios-http.com/docs/intro" target="_blank" rel="noreferrer">Axios</a>:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">axios</span></span></code></pre></div><blockquote><p>Ahora sí, ha llegado el momento de profundizar sobre el tema.</p></blockquote>`,44),e=[p];function t(r,c,C,y,D,i){return n(),a("div",null,e)}const d=s(o,[["render",t]]);export{F as __pageData,d as default};