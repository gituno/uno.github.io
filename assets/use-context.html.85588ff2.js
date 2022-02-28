import{c as n}from"./app.49c6a941.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="\u1103\u1173\u11AF\u110B\u1165\u1100\u1161\u1106\u1167" tabindex="-1"><a class="header-anchor" href="#\u1103\u1173\u11AF\u110B\u1165\u1100\u1161\u1106\u1167" aria-hidden="true">#</a> \uB4E4\uC5B4\uAC00\uBA70</h2><p><code>useContext</code>\uB97C \uC124\uBA85\uD558\uAE30 \uC774\uC804\uC5D0 \uAE30\uC874\uC5D0 \uC0AC\uC6A9\uD558\uB358 \uCF58\uD14D\uC2A4\uD2B8 API\uC758 \uBB38\uC81C\uC810\uC744 \uC54C\uC544\uC57C \uD55C\uB2E4.</p><p>\uCF58\uD14D\uC2A4\uD2B8 API\uB294 \uBC18\uBCF5\uC801\uC778 \uB370\uC774\uD130 \uC804\uB2EC \uCF54\uB4DC\uB97C \uBC29\uC9C0\uD558\uACE0\uC790 \uC0AC\uC6A9\uD558\uB294\uB370, \uC774\uB7EC\uD55C \uCF58\uD14D\uC2A4\uD2B8 API\uC5D0\uB3C4 \uBB38\uC81C\uC810\uC774 \uC874\uC7AC\uD55C\uB2E4. \uBC14\uB85C <code>Provider</code>\uC640 <code>Consumer</code>\uB97C \uC911\uCCA9\uD574\uC11C \uC0AC\uC6A9\uD560 \uC218\uB85D \uCF54\uB4DC\uC758 \uAE4A\uC774\uAC00 \uAE4A\uC5B4\uC9C4\uB2E4\uB294 \uC810\uC774\uB2E4.</p><p><code>Provider</code>\uC640 <code>Consumer</code>\uB97C \uC911\uCCA9\uD55C \uCF54\uB4DC\uB97C \uD1B5\uD574 \uC5B4\uB5A0\uD55C \uBB38\uC81C\uC810\uC774 \uC788\uB294\uC9C0 \uC54C\uC544\uBCF4\uC790. \uC774\uB807\uAC8C \uCF54\uB4DC\uAC00 \uC5EC\uB7EC \uBC88 \uC911\uCCA9\uB420 \uC77C\uC740 \uB4DC\uBB3C\uACA0\uC9C0\uB9CC \uD504\uB85C\uC81D\uD2B8\uC758 \uD06C\uAE30\uAC00 \uCEE4\uC9C0\uBA74\uC11C \uC911\uCCA9\uD560 \uC77C\uC774 \uC0DD\uAE30\uAC8C \uB41C\uB2E4\uBA74 \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8 \uCF54\uB4DC\uC5D0\uC11C\uB294 \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uB118\uAE34 \uB370\uC774\uD130\uB97C \uBC1B\uAE30 \uC704\uD574 <code>Consumer</code> \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC5EC\uB7EC \uBC88 \uC0AC\uC6A9\uD574\uC57C \uD558\uACE0, \uCF54\uB4DC\uAC00 \uC810\uC810 \uBCF5\uC7A1\uD574\uC9C0\uACE0 \uC774\uD574\uD558\uAE30 \uC5B4\uB824\uC6CC\uC9C4\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* \uBD80\uBAA8 \uCEF4\uD3EC\uB10C\uD2B8 */</span>
<span class="token operator">&lt;</span><span class="token constant">A</span><span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token constant">B</span><span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token constant">C</span><span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token constant">D</span><span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token constant">D</span><span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token constant">C</span><span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token constant">B</span><span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span><span class="token constant">A</span><span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span>

<span class="token comment">/* \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8 */</span>
<span class="token operator">&lt;</span><span class="token constant">A</span><span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span>
  <span class="token punctuation">{</span><span class="token parameter">data1</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token constant">B</span><span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span><span class="token parameter">data2</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span><span class="token constant">C</span><span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span>
          <span class="token punctuation">{</span><span class="token parameter">data3</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span><span class="token constant">D</span><span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span>
              <span class="token punctuation">{</span><span class="token parameter">data4</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
                <span class="token comment">/* \uC790\uC2DD \uCEF4\uD3EC\uB10C\uD2B8 \uB0B4\uC6A9 */</span>
              <span class="token punctuation">)</span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token constant">D</span><span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span>
          <span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token constant">C</span><span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token constant">B</span><span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span><span class="token constant">A</span><span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>React Hooks\uC758 \uC885\uB958\uC778 <code>useContext</code>\uB97C \uC0AC\uC6A9\uD558\uBA74 <code>Consumer</code>\uB97C \uC0AC\uC6A9\uD568\uC5D0 \uB530\uB77C \uCF54\uB4DC\uAC00 \uAE4A\uC5B4\uC9C0\uB294 \uAC83\uC744 \uBC29\uC9C0\uD560 \uC218 \uC788\uB2E4.</p><h2 id="usecontext-\u1109\u1161\u110B\u116D\u11BC" tabindex="-1"><a class="header-anchor" href="#usecontext-\u1109\u1161\u110B\u116D\u11BC" aria-hidden="true">#</a> useContext \uC0AC\uC6A9</h2><p><code>useContext</code>\uB294 \uAE30\uC874\uC5D0 \uC0DD\uC131\uD55C \uCF58\uD14D\uC2A4\uD2B8 \uAC1D\uCCB4\uB97C \uC0AC\uC6A9\uD574\uC11C, \uB370\uC774\uD130\uB97C \uAC00\uC9C0\uACE0 \uC624\uB294 \uD568\uC218\uB85C <code>Consumer</code> \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC5ED\uD560\uC744 \uB300\uC2E0\uD55C\uB2E4\uACE0 \uBCF4\uBA74 \uB41C\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> \uBCC0\uC218\uBA85 <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>\uCF58\uD14D\uC2A4\uD2B8 \uAC1D\uCCB4<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\uC608\uB97C \uB4E4\uC5B4 <code>App</code> \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C <code>Provider</code>\uB8F0 3\uBC88 \uC911\uCCA9\uD574\uC11C \uB370\uC774\uD130\uB97C \uB118\uAE30\uB294 \uACBD\uC6B0\uAC00 \uC788\uB2E4\uACE0 \uAC00\uC815\uD574\uBCF4\uC790. \uADF8\uB9AC\uACE0 <code>user</code>, <code>product</code>, <code>sale</code> \uBAA8\uB4E0 \uB370\uC774\uD130\uC758 \uC0AC\uC6A9\uC774 \uD544\uC694\uD55C <code>ProductMeta</code>\uB77C\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC788\uC744 \uACBD\uC6B0, <code>Consumer</code>\uC640 <code>useContext</code>\uB294 \uC544\uB798\uC640 \uAC19\uC774 \uC11C\uB85C \uB2E4\uB978 \uBC29\uC2DD\uC73C\uB85C \uB370\uC774\uD130\uB97C \uBC1B\uC544\uC624\uAC8C \uB41C\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>user<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;\uD64D\uAE38\uB3D9&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>product<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;\uC0C1\uD488&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>sale<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> discount_rate<span class="token operator">:</span> <span class="token number">7</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>UserContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>ProductContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span>product<span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>SaleContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span>sale<span class="token punctuation">}</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Product<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Product<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>SaleContext<span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ProductContext<span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>UserContext<span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Product</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>ProductMeta<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ProductMeta<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="consumer-\u1109\u1161\u110B\u116D\u11BC-\u1107\u1161\u11BC\u1109\u1175\u11A8" tabindex="-1"><a class="header-anchor" href="#consumer-\u1109\u1161\u110B\u116D\u11BC-\u1107\u1161\u11BC\u1109\u1175\u11A8" aria-hidden="true">#</a> Consumer \uC0AC\uC6A9 \uBC29\uC2DD</h3><p><code>useContext</code>\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uACE0 \uC791\uC131\uD558\uB358 \uAE30\uC874 \uBC29\uBC95\uC774\uB2E4. \uBD80\uBAA8\uAC00 <code>Provider</code> \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uC804\uB2EC\uD55C \uB370\uC774\uD130\uB97C \uBC1B\uAE30 \uC704\uD574\uC11C\uB294 \uD574\uB2F9 \uAC1C\uC218 \uB9CC\uD07C\uC758 <code>Consumer</code> \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0AC\uC6A9\uD574\uC11C \uB370\uC774\uD130\uB97C \uBC1B\uC544\uC640\uC57C \uD558\uB294\uB370, \uC544\uB798 \uCF54\uB4DC\uB97C \uBCF4\uBA74 \uC54C\uACA0\uC9C0\uB9CC \uCF54\uB4DC\uAC00 \uAE4A\uC5B4\uC9C0\uACE0 \uD55C \uB208\uC5D0 \uC54C\uC544\uBCF4\uAE30 \uC5B4\uB835\uB2E4\uB294 \uAC83\uC744 \uC54C \uC218 \uC788\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ProductMeta</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>UserContext<span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>ProductContext<span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span>
            <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">product</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
              <span class="token operator">&lt;</span>SaleContext<span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span>
                <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">sale</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
                  <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\uC720\uC800 \uC774\uB984<span class="token operator">:</span> <span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\uC81C\uD488 \uC774\uB984<span class="token operator">:</span> <span class="token punctuation">{</span>product<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\uD560\uC778\uC728<span class="token operator">:</span> <span class="token punctuation">{</span>sale<span class="token punctuation">.</span>discount_rate<span class="token punctuation">}</span><span class="token operator">%</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
                <span class="token punctuation">)</span><span class="token punctuation">}</span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>SaleContext<span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span>
            <span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>ProductContext<span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>UserContext<span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="usecontext-\u1109\u1161\u110B\u116D\u11BC-\u1107\u1161\u11BC\u1109\u1175\u11A8" tabindex="-1"><a class="header-anchor" href="#usecontext-\u1109\u1161\u110B\u116D\u11BC-\u1107\u1161\u11BC\u1109\u1175\u11A8" aria-hidden="true">#</a> useContext \uC0AC\uC6A9 \uBC29\uC2DD</h3><p>\uB2E4\uC74C\uC740 <code>useContext</code>\uB97C \uC0AC\uC6A9\uD55C \uBC29\uC2DD\uC73C\uB85C <code>Consumer</code> \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0AC\uC6A9\uD588\uC744 \uB54C\uC640 \uBE44\uAD50\uD558\uBA74 \uCF54\uB4DC\uAC00 \uAC04\uACB0\uD558\uACE0 \uC774\uD574\uD558\uAE30 \uC27D\uB2E4.</p><p>\uB2E8\uC21C\uD788 <code>ProductMeta</code> \uD55C \uAC1C\uC758 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C\uB3C4 \uB208\uC5D0 \uB744\uB294 \uCC28\uC774\uAC00 \uC788\uB294 \uB9CC\uD07C, \uADDC\uBAA8\uAC00 \uD070 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C <code>ProductMeta</code>\uC640 \uAC19\uC774 \uC5EC\uB7EC \uAC1C\uC758 <code>Provider</code>\uB85C\uBD80\uD130 \uB370\uC774\uD130\uB97C \uBC1B\uC544\uC624\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC5EC\uB7EC \uAC1C \uD544\uC694\uD558\uB2E4\uACE0 \uC0DD\uAC01\uD574\uBCF4\uBA74 <code>Consumer</code> \uB300\uC2E0 <code>useContext</code>\uB97C \uC0AC\uC6A9\uD574\uC11C \uCF54\uB4DC\uB97C \uC791\uC131\uD558\uB294\uAC8C \uC88B\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ProductMeta</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>UserContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> product <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>ProductContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> sale <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>SaleContext<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\uC720\uC800 \uC774\uB984<span class="token operator">:</span> <span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\uC81C\uD488 \uC774\uB984<span class="token operator">:</span> <span class="token punctuation">{</span>product<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\uD560\uC778\uC728<span class="token operator">:</span> <span class="token punctuation">{</span>sale<span class="token punctuation">.</span>discount_rate<span class="token punctuation">}</span><span class="token operator">%</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,18);function t(o,e){return p}var l=s(a,[["render",t]]);export{l as default};