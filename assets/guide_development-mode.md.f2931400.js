import{_ as s,c as n,o as a,N as o}from"./chunks/framework.b84479ea.js";const l="/vue-docker/assets/mode-develop1.0b7fc11d.jpg",e="/vue-docker/assets/mode-develop2.b4b5de37.jpg",u=JSON.parse('{"title":"Modo Desarrollo","description":"","frontmatter":{},"headers":[],"relativePath":"guide/development-mode.md"}'),p={name:"guide/development-mode.md"},t=o(`<h1 id="modo-desarrollo" tabindex="-1">Modo Desarrollo <a class="header-anchor" href="#modo-desarrollo" aria-label="Permalink to &quot;Modo Desarrollo&quot;">​</a></h1><blockquote><p>Asumiendo que ya tenemos lista la instalación de un proyecto Vue, como mencionamos en le sección anterior, vamos a preparar nuestro entorno de desarrollo.</p></blockquote><p>Echemos un vistazo a la siguiente plantilla.</p><p>📃<code>docker-compose.dev.yml</code></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">version:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3.9</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">services:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">web:</span><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">image:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node:18.8.0</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">ports:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">5173:80</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">volumes:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.:/app</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">environment:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">NODE_ENV:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">development</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">working_dir:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/app</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">container_name:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vue_dev_env</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">command</span><span style="color:#FFCB6B;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cd /app; npm install; npm run dev</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><p>Tenga en cuenta lo siguiente:</p><ol><li>Declaramos el servicio <code>web</code>. <ul><li>Seleccione la imagen que se compilará, en este caso <code>node:18.8.0</code>. <strong>Es mejor detallar las versiones utilizadas</strong>, vale la pena mantenerlas exactamente igual que la compilación de producción.</li></ul></li><li>Seleccionamos los puertos que reflejarán los puertos del contenedor en ejecución en nuestro sistema <code>host</code>.</li><li>Montamos todo, desde el directorio actual hasta el contenedor. Esto es necesario para que los cambios locales llamen inmediatamente a reconstruir.</li><li><code>environment</code> le permite establecer variables de entorno que sean de interés en su caso particular.</li><li><code>working_dir</code> especifica el directorio de trabajo dentro del contenedor en el que se ejecutarán los comandos posteriores.</li><li><code>container_name</code> permite específicar el nombre del contenedor.</li><li><code>command</code> ejecuta comandos, en este caso, instalar dependencias y correr el desarrollo.</li></ol><p><strong>Levante el <code>modo development</code> con el comando:</strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker-compose</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker-compose.dev.yml</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">up</span></span></code></pre></div><p>Entonces el terminal arrojará los siguientes mensajes:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Starting</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vue_dev_env</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">...</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">done</span></span>
<span class="line"><span style="color:#FFCB6B;">Attaching</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vue_dev_env</span></span>
<span class="line"><span style="color:#FFCB6B;">vue_dev_env</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">vue_dev_env</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">up</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">date,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">audited</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">203</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">packages</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">863ms</span></span>
<span class="line"><span style="color:#FFCB6B;">vue_dev_env</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">vue_dev_env</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">43</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">packages</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">are</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">looking</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">funding</span></span>
<span class="line"><span style="color:#FFCB6B;">vue_dev_env</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#FFCB6B;">npm</span><span style="color:#C3E88D;"> fund</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> details</span></span>
<span class="line"><span style="color:#FFCB6B;">vue_dev_env</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">vue_dev_env</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">found</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vulnerabilities</span></span>
<span class="line"><span style="color:#FFCB6B;">vue_dev_env</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">vue_dev_env</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">frontend-code@0.0.0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span>
<span class="line"><span style="color:#FFCB6B;">vue_dev_env</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">vite</span></span>
<span class="line"><span style="color:#FFCB6B;">vue_dev_env</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">vue_dev_env</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">vue_dev_env</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">VITE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v3.</span><span style="color:#F78C6C;">0.9</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">ready</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">361</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ms</span></span>
<span class="line"><span style="color:#FFCB6B;">vue_dev_env</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">vue_dev_env</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">➜</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">Local:</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">http://localhost:</span><span style="color:#F78C6C;">5173</span><span style="color:#C3E88D;">/</span></span>
<span class="line"><span style="color:#FFCB6B;">vue_dev_env</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">➜</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">Network:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--host</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">expose</span></span></code></pre></div><p>El contenedor levantó, pero si intentáramos abrir el navegador con la ruta <code>http://localhost:5173/</code> nos aparecerá la siguiente imagen.</p><p><img src="`+l+`" alt="mode-develop"></p><p>Realmente la aplicación no se ejecuta en nuestra dirección anfitriona <code>localhost</code> o <code>172.0.0.1</code>, sino en alguna otra dirección <strong>IP</strong> otorgada por <em>Docker</em>. Pero Vite aún no lo sabe.</p><p>Tomando en cuenta la última línea del mensaje que arroja el terminal, <code>Network: use --host to expose</code>, esto significa que no hay una dirección <strong>IP</strong> para la red ya que en ningún momento hemos <a href="https://vitejs.dev/config/server-options.html" target="_blank" rel="noreferrer">declarado el <code>host</code> a Vite</a>.</p><p>Así que modifiquemos el archivo de configuración de Vite agregando las siguiente líneas.</p><p>📃<code>vite.config.ts</code></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fileURLToPath</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">URL</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">node:url</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> vue </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vitejs/plugin-vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// https://vitejs.dev/config/</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">server</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">host</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0.0.0.0</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#82AAFF;">vue</span><span style="color:#A6ACCD;">()]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">resolve</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">alias</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fileURLToPath</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">URL</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./src</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">meta</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">url))</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><p>Luego, volvamos a ejecutar <code>docker-compose -f docker-compose.dev.yml up</code> y ahora sí se mostrará alguna nueva <strong>IP</strong> del contenedor.</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vue_dev_env</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">➜</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">Local:</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">http://localhost:</span><span style="color:#F78C6C;">5173</span><span style="color:#C3E88D;">/</span></span>
<span class="line"><span style="color:#FFCB6B;">vue_dev_env</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">➜</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">Network:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://192.168.32.2:</span><span style="color:#F78C6C;">5173</span><span style="color:#C3E88D;">/</span></span></code></pre></div><p>Por lo que con esta <strong>IP</strong> ahora si debería levantar la aplicación en el navegador.</p><p><img src="`+e+'" alt="mode-develop"></p>',22),c=[t];function r(C,y,D,A,i,F){return a(),n("div",null,c)}const v=s(p,[["render",r]]);export{u as __pageData,v as default};